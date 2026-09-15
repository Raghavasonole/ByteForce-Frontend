function Notifications() {
  return (
    <div className="notifications-page">
      <div className="page-header">
        <div>
          <h1>Notifications</h1>
          <p>
            Stay updated on tasks, documents, reports, and important workspace
            events.
          </p>
        </div>

        <button type="button" className="page-secondary-button">
          Mark all as read
        </button>
      </div>

      <div className="notification-tabs">
        <button type="button" className="active">
          All
        </button>
        <button type="button">
          Tasks
        </button>
        <button type="button">
          Documents
        </button>
        <button type="button">
          Reports
        </button>
        <button type="button">
          System
        </button>
      </div>

      <div className="notifications-list">
        <div className="notification-item unread">
          <div className="notification-icon task">✦</div>

          <div className="notification-content">
            <div className="notification-title-row">
              <strong>AI task completed</strong>
              <span>2 min ago</span>
            </div>

            <p>
              The knowledge search for compressor operating procedures has
              completed successfully.
            </p>

            <button type="button" className="notification-link">
              View task →
            </button>
          </div>

          <span className="unread-dot" />
        </div>

        <div className="notification-item unread">
          <div className="notification-icon document">□</div>

          <div className="notification-content">
            <div className="notification-title-row">
              <strong>Document processed</strong>
              <span>18 min ago</span>
            </div>

            <p>
              P-204 Maintenance History.pdf has been processed and added to
              the knowledge base.
            </p>

            <button type="button" className="notification-link">
              Open document →
            </button>
          </div>

          <span className="unread-dot" />
        </div>

        <div className="notification-item">
          <div className="notification-icon report">▥</div>

          <div className="notification-content">
            <div className="notification-title-row">
              <strong>Report generated</strong>
              <span>42 min ago</span>
            </div>

            <p>
              Crude Unit Inspection Summary is ready for review and export.
            </p>

            <button type="button" className="notification-link">
              Open report →
            </button>
          </div>
        </div>

        <div className="notification-item">
          <div className="notification-icon system">!</div>

          <div className="notification-content">
            <div className="notification-title-row">
              <strong>Processing update</strong>
              <span>1 hr ago</span>
            </div>

            <p>
              P-204 Inspection Photos are currently being processed.
            </p>

            <button type="button" className="notification-link">
              View document →
            </button>
          </div>
        </div>

        <div className="notification-item">
          <div className="notification-icon task">✦</div>

          <div className="notification-content">
            <div className="notification-title-row">
              <strong>AI analysis requires review</strong>
              <span>2 hrs ago</span>
            </div>

            <p>
              Pump P-204 Failure Analysis has completed its evidence
              verification stage and is ready for review.
            </p>

            <button type="button" className="notification-link">
              Review task →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;