import { useRef, useState } from "react";

function AdminDocuments() {
  const fileInputRef = useRef(null);

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [documents, setDocuments] = useState([
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
    {
      name: "Plant_Maintenance_Presentation.pptx",
      type: "PPT",
      status: "Processed",
      updated: "Today, 08:18 AM",
    },
  ]);

  const getFileType = (fileName) => {
    const extension = fileName.split(".").pop().toLowerCase();

    if (extension === "pdf") return "PDF";

    if (extension === "doc" || extension === "docx") {
      return "DOCX";
    }

    if (
      extension === "ppt" ||
      extension === "pptx"
    ) {
      return "PPT";
    }

    if (
      extension === "png" ||
      extension === "jpg" ||
      extension === "jpeg" ||
      extension === "webp" ||
      extension === "gif"
    ) {
      return "Image";
    }

    return "Other";
  };

  const visibleDocuments = documents.filter((document) => {
    const matchesSearch = document.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType =
      typeFilter === "all" ||
      document.type.toLowerCase() === typeFilter;

    return matchesSearch && matchesType;
  });

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const type = getFileType(file.name);

    if (type === "Other") {
      window.alert(
        "Only PDF, DOCX, PPT/PPTX and image files are supported."
      );

      event.target.value = "";
      return;
    }

    const newDocument = {
      name: file.name,
      type,
      status: "Processing",
      updated: "Just now",
    };

    setDocuments((currentDocuments) => [
      newDocument,
      ...currentDocuments,
    ]);

    event.target.value = "";
  };

  return (
    <div className="documents-page admin-documents-page">
      <div className="page-header">
        <div>
          <h1>Documents</h1>
          <p>
            Manage uploaded workspace documents and processing status.
          </p>
        </div>

        <button
          type="button"
          className="page-primary-button"
          onClick={() => fileInputRef.current?.click()}
        >
          Upload Document
        </button>

        <input
          ref={fileInputRef}
          type="file"
          hidden
          accept=".pdf,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.webp,.gif"
          onChange={handleUpload}
        />
      </div>

      <div className="documents-summary">
        <div>
          <span>Total Documents</span>
          <strong>{documents.length}</strong>
        </div>

        <div>
          <span>Processed</span>
          <strong>
            {documents.filter(
              (document) => document.status === "Processed"
            ).length}
          </strong>
        </div>

        <div>
          <span>Processing</span>
          <strong>
            {documents.filter(
              (document) => document.status === "Processing"
            ).length}
          </strong>
        </div>

        <div>
          <span>Errors</span>
          <strong>
            {documents.filter(
              (document) => document.status === "Error"
            ).length}
          </strong>
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

        <select
          value={typeFilter}
          onChange={(event) => setTypeFilter(event.target.value)}
        >
          <option value="all">All Types</option>
          <option value="pdf">PDF</option>
          <option value="docx">DOCX</option>
          <option value="ppt">PPT</option>
          <option value="image">Images</option>
        </select>
      </div>

      <div className="documents-table-card">
        <div className="documents-table-header">
          <h2>Workspace Documents</h2>
          <p>
            Recently uploaded and processed documents.
          </p>
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
                <tr key={`${document.name}-${document.updated}`}>
                  <td>
                    <div className="document-name">
                      <span className="document-file-icon">
                        □
                      </span>

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
                    <button
                      type="button"
                      className="table-action"
                    >
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
            <p>
              Try a different search or document type.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDocuments;