import "./../styles/layout.css";

function AdminPanel() {
  return (
    <div className="page">
      <h2>Admin Panel</h2>

      <div className="admin-box">
        <p>Manage buyers, dealers, and auctions here.</p>

        <ul className="admin-list">
          <li>View all user accounts</li>
          <li>View dealer registrations</li>
          <li>Monitor live auctions</li>
          <li>Handle disputes</li>
          <li>System logs</li>
        </ul>
      </div>
    </div>
  );
}

export default AdminPanel;
