export default function Settings() {
  return (
    <div>
      <p className="tag">Preferences</p>
      <h3>Settings</h3>
      <div className="settings-list">
        <div className="settings-row">
          <span>Change Password</span>
          <button className="btn btn-outline btn-small" type="button">
            Update
          </button>
        </div>
        <div className="settings-row">
          <span>Notification Preferences</span>
          <button className="btn btn-outline btn-small" type="button">
            Manage
          </button>
        </div>
        <div className="settings-row">
          <span>Theme Preferences</span>
          <button className="btn btn-outline btn-small" type="button">
            Manage
          </button>
        </div>
      </div>
    </div>
  );
}
