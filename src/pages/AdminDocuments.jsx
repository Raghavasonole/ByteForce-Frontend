import { useState } from "react";

function AdminDocuments() {
  const [search, setSearch] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const documents = [
    {
      name: "Inspection_Report_P204.pdf",
      type: "PDF",
      status: "Processed",
      updated: "Today, 10:42 AM",
    },
    {
      name: "Maintenance_SOP_2026.pdf",
      type: "PDF",
      status: "Processed",
      updated: "Today, 09:50 AM",
    },
    {
      name: "Safety_Guidelines.pdf",
      type: "PDF",
      status: "Processed",
      updated: "Yesterday",
    },
    {
      name: "P&ID_UnitA.png",
      type: "Image",
      status: "Processing",
      updated: "Today, 10:31 AM",
    },
    {
      name: "Instrumentation_Standards.docx",
      type: "DOCX",
      status: "Error",
      updated: "Yesterday",
    },
  ];

  const visibleDocuments = documents.filter((document) =>
    document.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="documents-page admin-documents-page">
      <div className="page-header">
        <div>
          <h1>Documents</h1>
          <p>Manage uploaded workspace documents and processing status.</p>
        </div>

        <button
          type="button"
          className="page-primary-button"
          onClick={() => setUploaded(true)}
        >
          Upload Document
        </button>
      </div>

      <div className="documents-summary">
        <div>
          <span>Total Documents</span>
          <strong>342</strong>
        </div>

        <div>
          <span>Processed</span>
          <strong>331</strong>
        </div>

        <div>
          <span>Processing</span>
          <strong>8</strong>
        </div>

        <div>
          <span>Errors</span>
          <strong>3</strong>
        </div>
      </div>

      <div className="documents-toolbar">
        <div className="documents-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <select defaultValue="all">
          <option value="all">All Types</option>
          <option value="pdf">PDF</option>
          <option value="docx">DOCX</option>
          <option value="image">Images</option>
        </select>
      </div>

      {uploaded && (
        <div className="admin-upload-notice">
          New_Document.pdf uploaded successfully. Processing started.
        </div>
      )}

      <div className="documents-table-card">
        <div className="documents-table-header">
          <h2>Workspace Documents</h2>
          <p>Recently uploaded and processed documents.</p>
        </div>

        <div className="documents-table-wrapper">
          <table className="documents-table">
            <thead>
              <tr>
                <th>Document</th>
                <th>Type</th>
                <th>Status</th>
                <th>Updated</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {visibleDocuments.map((document) => (
                <tr key={document.name}>
                  <td>
                    <div className="document-name">
                      <span className="document-file-icon">□</span>

                      <div>
                        <strong>{document.name}</strong>
                        <span>Workspace document</span>
                      </div>
                    </div>
                  </td>

                  <td>{document.type}</td>

                  <td>
                    <span
                      className={`document-status ${document.status.toLowerCase()}`}
                    >
                      {document.status}
                    </span>
                  </td>

                  <td>{document.updated}</td>

                  <td>
                    <button type="button" className="table-action">
                      ⋯
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {visibleDocuments.length === 0 && (
          <div className="admin-empty-state">
            <strong>No documents found</strong>
            <p>Try a different search.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDocuments;