function Documents() {
  return (
    <div className="documents-page">
      <div className="page-header">
        <div>
          <h1>Documents</h1>
          <p>
            Manage uploaded documents and review their processing status.
          </p>
        </div>

        <button type="button" className="page-primary-button">
          + Upload Document
        </button>
      </div>

      <div className="documents-toolbar">
        <div className="documents-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search documents..."
          />
        </div>

        <select defaultValue="all">
          <option value="all">All Documents</option>
          <option value="processed">Processed</option>
          <option value="processing">Processing</option>
          <option value="failed">Processing Error</option>
        </select>

        <select defaultValue="recent">
          <option value="recent">Recently updated</option>
          <option value="name">Name</option>
          <option value="type">Document type</option>
        </select>
      </div>

      <div className="documents-summary">
        <div>
          <span>Total Documents</span>
          <strong>128</strong>
        </div>

        <div>
          <span>Processed</span>
          <strong>116</strong>
        </div>

        <div>
          <span>Processing</span>
          <strong>09</strong>
        </div>

        <div>
          <span>Processing Errors</span>
          <strong>03</strong>
        </div>
      </div>

      <div className="documents-table-card">
        <div className="documents-table-header">
          <div>
            <h2>Recent Documents</h2>
            <p>Uploaded documents and their current processing state</p>
          </div>
        </div>

        <div className="documents-table-wrapper">
          <table className="documents-table">
            <thead>
              <tr>
                <th>Document</th>
                <th>Type</th>
                <th>Category</th>
                <th>Updated</th>
                <th>Status</th>
                <th />
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <div className="document-name">
                    <span className="document-file-icon">□</span>
                    <div>
                      <strong>P-204 Maintenance Manual</strong>
                      <span>84 pages · 8.4 MB</span>
                    </div>
                  </div>
                </td>
                <td>PDF</td>
                <td>Engineering</td>
                <td>2 days ago</td>
                <td>
                  <span className="document-status processed">
                    Processed
                  </span>
                </td>
                <td>
                  <button type="button" className="table-action">
                    →
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="document-name">
                    <span className="document-file-icon">□</span>
                    <div>
                      <strong>Crude Unit Inspection Report</strong>
                      <span>48 pages · 5.2 MB</span>
                    </div>
                  </div>
                </td>
                <td>PDF</td>
                <td>Maintenance</td>
                <td>5 hours ago</td>
                <td>
                  <span className="document-status processed">
                    Processed
                  </span>
                </td>
                <td>
                  <button type="button" className="table-action">
                    →
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="document-name">
                    <span className="document-file-icon">□</span>
                    <div>
                      <strong>CDU Operating Procedures</strong>
                      <span>126 pages · 12.7 MB</span>
                    </div>
                  </div>
                </td>
                <td>PDF</td>
                <td>Operations</td>
                <td>1 hour ago</td>
                <td>
                  <span className="document-status processing">
                    Processing
                  </span>
                </td>
                <td>
                  <button type="button" className="table-action">
                    →
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="document-name">
                    <span className="document-file-icon">□</span>
                    <div>
                      <strong>P-204 Inspection Photos</strong>
                      <span>16 files · 28.3 MB</span>
                    </div>
                  </div>
                </td>
                <td>Images</td>
                <td>Inspection</td>
                <td>3 hours ago</td>
                <td>
                  <span className="document-status processing">
                    Processing
                  </span>
                </td>
                <td>
                  <button type="button" className="table-action">
                    →
                  </button>
                </td>
              </tr>

              <tr>
                <td>
                  <div className="document-name">
                    <span className="document-file-icon">□</span>
                    <div>
                      <strong>Equipment Review Notes</strong>
                      <span>12 pages · 2.1 MB</span>
                    </div>
                  </div>
                </td>
                <td>PDF</td>
                <td>Engineering</td>
                <td>Yesterday</td>
                <td>
                  <span className="document-status error">
                    Processing Error
                  </span>
                </td>
                <td>
                  <button type="button" className="table-action">
                    →
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Documents;