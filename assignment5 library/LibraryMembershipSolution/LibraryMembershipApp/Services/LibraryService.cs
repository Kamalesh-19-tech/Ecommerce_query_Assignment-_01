using LibraryMembershipApp.Interfaces;

namespace LibraryMembershipApp.Services
{
    public class LibraryService
    {
        private readonly IMemberRepository _memberRepository;
        private readonly IBookRepository _bookRepository;
        private readonly INotificationService _notificationService;

        public LibraryService(
            IMemberRepository memberRepository,
            IBookRepository bookRepository,
            INotificationService notificationService)
        {
            _memberRepository = memberRepository;
            _bookRepository = bookRepository;
            _notificationService = notificationService;
        }

        public string BorrowBook(int memberId, int bookId)
        {
            // Validate IDs first (Assignments 17 & 18)
            if (memberId <= 0)
                return "Invalid member id";

            if (bookId <= 0)
                return "Invalid book id";

            // Check member exists
            var member = _memberRepository.GetMemberById(memberId);
            if (member == null)
                return "Member not found";

            // Check member is active
            if (!member.IsActive)
                return "Member is not active";

            // Check book exists
            var book = _bookRepository.GetBookById(bookId);
            if (book == null)
                return "Book not found";

            // Check book is available
            if (!book.IsAvailable)
                return "Book is not available";

            // Check borrowing limit (Assignment 19: premium = 5, normal = 3)
            int borrowingLimit = member.IsPremiumMember ? 5 : 3;
            if (member.BorrowedBookCount >= borrowingLimit)
                return "Borrowing limit reached";

            // All validations passed — process the borrow
            _bookRepository.MarkBookAsBorrowed(bookId);
            _memberRepository.UpdateBorrowedBookCount(memberId);
            _notificationService.SendBorrowNotification(member.Email, book.BookTitle);

            return "Book borrowed successfully";
        }
    }
}
