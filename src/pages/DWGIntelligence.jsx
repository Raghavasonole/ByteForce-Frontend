import { useState, useRef } from "react";
import "../styles/dwg-intelligence.css";



const DWG_SOURCE = "/dwg/preview.svg";



const issues = [
  {
    id: "ISS-001",
    type: "Critical",
    title: "Missing pressure relief valve",
    location: "P-204 discharge line",

    description:
      "The discharge line from P-204 does not show the required pressure relief valve.",

    source: "Safety Standard — Section 4.2",

    geometry: {
      type: "polyline",

     
      points: [
        [31, 47],
        [38, 47],
        [42, 47],
      ],
    },
  },

  {
    id: "ISS-002",
    type: "Warning",
    title: "Pipeline tag mismatch",
    location: "Line 4-P-221",

    description:
      "The pipeline tag differs from the equipment schedule in the knowledge base.",

    source: "Piping Specification — Rev 7",

    geometry: {
      type: "polyline",

      points: [
        [47, 62],
        [57, 62],
        [64, 62],
      ],
    },
  },

  {
    id: "ISS-003",
    type: "Warning",
    title: "Instrument connection missing",
    location: "V-102",

    description:
      "Expected pressure indicator connection was not detected near V-102.",

    source: "Instrumentation Standard — Section 3.1",

    geometry: {
      type: "polyline",

      points: [
        [57, 29],
        [63, 29],
        [66, 34],
      ],
    },
  },
];



function IssueHighlight({ issue, selected }) {
  if (!issue?.geometry) {
    return null;
  }

  const geometry = issue.geometry;

  const severityClass =
    issue.type.toLowerCase() === "critical"
      ? "cad-highlight-critical"
      : "cad-highlight-warning";

  if (
    (geometry.type === "polyline" ||
      geometry.type === "polygon") &&
    Array.isArray(geometry.points)
  ) {
    const points = geometry.points
      .map(([x, y]) => `${x},${y}`)
      .join(" ");

    return (
      <svg
        className={`cad-issue-overlay ${
          selected ? "is-selected" : ""
        }`}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polyline
          points={points}
          className={`${severityClass} cad-highlight-glow`}
        />

        <polyline
          points={points}
          className={`${severityClass} cad-highlight-line`}
        />
      </svg>
    );
  }

  if (geometry.type === "bbox") {
    return (
      <div
        className={`cad-issue-bbox ${severityClass} ${
          selected ? "is-selected" : ""
        }`}
        style={{
          left: `${geometry.x}%`,
          top: `${geometry.y}%`,
          width: `${geometry.width}%`,
          height: `${geometry.height}%`,
        }}
      />
    );
  }

  return null;
}



function DWGIntelligence() {
  const canvasWrapperRef = useRef(null);

 

  const [selectedIssue, setSelectedIssue] = useState(
    issues[0]
  );

  const [activeSection, setActiveSection] =
    useState("trace");

  const [question, setQuestion] = useState("");

 

  const [zoom, setZoom] = useState(100);

  const [pan, setPan] = useState({
    x: 0,
    y: 0,
  });

  const [isPanning, setIsPanning] =
    useState(false);

  const panStartRef = useRef({
    x: 0,
    y: 0,
  });

 

  const [dwgLoaded, setDwgLoaded] =
    useState(false);

  const [dwgError, setDwgError] =
    useState(false);

 

  const handleWheel = (event) => {
    const direction =
      event.deltaY < 0 ? 1 : -1;

    setZoom((currentZoom) => {
      const nextZoom =
        currentZoom + direction * 10;

      return Math.min(
        300,
        Math.max(25, nextZoom)
      );
    });
  };

 

  const handlePointerDown = (event) => {
    if (event.button !== 0) {
      return;
    }

   
    if (
      event.target.closest(
        ".cad-issue-interaction"
      )
    ) {
      return;
    }

    setIsPanning(true);

    panStartRef.current = {
      x: event.clientX - pan.x,
      y: event.clientY - pan.y,
    };

    event.currentTarget.setPointerCapture(
      event.pointerId
    );
  };

 

  const handlePointerMove = (event) => {
    if (!isPanning) {
      return;
    }

    setPan({
      x:
        event.clientX -
        panStartRef.current.x,

      y:
        event.clientY -
        panStartRef.current.y,
    });
  };

 

  const handlePointerUp = (event) => {
    if (!isPanning) {
      return;
    }

    setIsPanning(false);

    try {
      event.currentTarget.releasePointerCapture(
        event.pointerId
      );
    } catch {
     
    }
  };

 

  const handleZoom = (amount) => {
    setZoom((currentZoom) =>
      Math.min(
        300,
        Math.max(
          25,
          currentZoom + amount
        )
      )
    );
  };

 

  const handleFit = () => {
    setZoom(100);

    setPan({
      x: 0,
      y: 0,
    });
  };

 

  const handleIssueClick = (issue) => {
    setSelectedIssue(issue);

    setActiveSection("response");
  };

 

  const toggleSection = (section) => {
    setActiveSection((current) =>
      current === section
        ? ""
        : section
    );
  };

 

  const handleQuestion = () => {
    if (!question.trim()) {
      return;
    }

   

    setQuestion("");
  };

  return (
    <div className="dwg-workspace">

      <section className="dwg-canvas-section">

        <div className="dwg-toolbar">

          <div className="dwg-file-info">

            <div className="dwg-file-icon">
              DWG
            </div>

            <div>

              <div className="dwg-file-name">
                Appendix D-6, A2463-2
              </div>

              <div className="dwg-file-meta">
                AutoCAD Drawing · Ultrasonic Level Tank
              </div>

            </div>

          </div>

          <div className="dwg-toolbar-actions">

            <button
              className="dwg-tool-button"
              onClick={() =>
                handleZoom(-10)
              }
              type="button"
            >
              −
            </button>

            <span className="dwg-zoom-value">
              {zoom}%
            </span>

            <button
              className="dwg-tool-button"
              onClick={() =>
                handleZoom(10)
              }
              type="button"
            >
              +
            </button>

            <button
              className="dwg-tool-button"
              onClick={handleFit}
              type="button"
            >
              Fit
            </button>

            <button
              className="dwg-tool-button"
              type="button"
            >
              Layers
            </button>

            <button
              className="dwg-inspect-button"
              type="button"
            >
              Inspect Drawing
            </button>

          </div>

        </div>


        <div
          ref={canvasWrapperRef}
          className={`dwg-canvas-wrapper ${
            isPanning
              ? "is-panning"
              : ""
          }`}
          onPointerDown={
            handlePointerDown
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerUp
          }
          onWheel={handleWheel}
          onContextMenu={(event) =>
            event.preventDefault()
          }
        >

          <div
            className="dwg-canvas"
            style={{
              transform: `
                translate3d(
                  ${pan.x}px,
                  ${pan.y}px,
                  0
                )
                scale(${zoom / 100})
              `,
            }}
          >


            <div className="dwg-document">

              {!dwgError && (
                <img
                  src={DWG_SOURCE}
                  alt="Industrial DWG drawing"
                  className={`dwg-svg ${
                    dwgLoaded
                      ? "loaded"
                      : ""
                  }`}
                  draggable="false"
                  onLoad={() => {
                    setDwgLoaded(true);
                    setDwgError(false);
                  }}
                  onError={() => {
                    setDwgLoaded(false);
                    setDwgError(true);
                  }}
                />
              )}

              {!dwgLoaded &&
                !dwgError && (
                  <div className="dwg-loading">

                    <div className="dwg-loading-title">
                      Loading Drawing
                    </div>

                    <div className="dwg-loading-text">
                      Preparing CAD geometry...
                    </div>

                  </div>
                )}

              {dwgError && (
                <div className="dwg-error">

                  <div className="dwg-error-title">
                    Drawing unavailable
                  </div>

                  <div className="dwg-error-text">
                    Make sure the converted SVG exists at:
                  </div>

                  <code>
                    public/dwg/preview.svg
                  </code>

                </div>
              )}


              {dwgLoaded &&
                issues.map((issue) => (
                  <IssueHighlight
                    key={issue.id}
                    issue={issue}
                    selected={
                      selectedIssue.id ===
                      issue.id
                    }
                  />
                ))}

              {dwgLoaded &&
                issues.map((issue) => {
                  const geometry =
                    issue.geometry;

                  if (
                    !geometry ||
                    !Array.isArray(
                      geometry.points
                    )
                  ) {
                    return null;
                  }

                  const xs =
                    geometry.points.map(
                      (point) => point[0]
                    );

                  const ys =
                    geometry.points.map(
                      (point) => point[1]
                    );

                  const minX =
                    Math.min(...xs);

                  const maxX =
                    Math.max(...xs);

                  const minY =
                    Math.min(...ys);

                  const maxY =
                    Math.max(...ys);

                  const width = Math.max(
                    maxX - minX,
                    4
                  );

                  const height = Math.max(
                    maxY - minY,
                    4
                  );

                  return (
                    <button
                      key={`${issue.id}-interaction`}
                      type="button"
                      className="cad-issue-interaction"
                      aria-label={`Select ${issue.title}`}
                      style={{
                        left: `${minX - 2}%`,
                        top: `${minY - 2}%`,
                        width: `${width + 4}%`,
                        height: `${height + 4}%`,
                      }}
                      onPointerDown={(event) =>
                        event.stopPropagation()
                      }
                      onClick={() =>
                        handleIssueClick(
                          issue
                        )
                      }
                    />
                  );
                })}

            </div>

          </div>

        </div>

        <div className="dwg-statusbar">

          <div>

            <span className="status-dot" />

            {dwgLoaded
              ? "Drawing loaded"
              : dwgError
              ? "Drawing unavailable"
              : "Loading drawing"}

          </div>

          <div className="status-summary">

            <span className="critical-text">
              1 Critical
            </span>

            <span>
              2 Warnings
            </span>

            <span>
              18 Components
            </span>

          </div>

        </div>

      </section>

      <aside className="dwg-agent-panel">

        <div className="agent-section">

          <button
            className="agent-section-header"
            onClick={() =>
              toggleSection("trace")
            }
            type="button"
          >

            <span>
              Trace
            </span>

            <span>
              {activeSection === "trace"
                ? "−"
                : "+"}
            </span>

          </button>

          {activeSection === "trace" && (
            <div className="agent-section-body">

              <div className="trace-step completed">

                <span className="trace-number">
                  1
                </span>

                <div>

                  <strong>
                    Drawing parsed
                  </strong>

                  <small>
                    DWG entities extracted
                  </small>

                </div>

              </div>

              <div className="trace-step completed">

                <span className="trace-number">
                  2
                </span>

                <div>

                  <strong>
                    Components detected
                  </strong>

                  <small>
                    18 equipment / instruments
                  </small>

                </div>

              </div>

              <div className="trace-step completed">

                <span className="trace-number">
                  3
                </span>

                <div>

                  <strong>
                    Standards retrieved
                  </strong>

                  <small>
                    6 relevant documents
                  </small>

                </div>

              </div>

              <div className="trace-step active">

                <span className="trace-number">
                  4
                </span>

                <div>

                  <strong>
                    Inspection running
                  </strong>

                  <small>
                    Checking design compliance
                  </small>

                </div>

              </div>

            </div>
          )}

        </div>

        <div className="agent-section">

          <button
            className="agent-section-header"
            onClick={() =>
              toggleSection("overview")
            }
            type="button"
          >

            <span>
              Overview
            </span>

            <span>
              {activeSection ===
              "overview"
                ? "−"
                : "+"}
            </span>

          </button>

          {activeSection ===
            "overview" && (
            <div className="agent-section-body">

              <div className="overview-grid">

                <div className="overview-card">
                  <strong>18</strong>
                  <span>
                    Components
                  </span>
                </div>

                <div className="overview-card">
                  <strong>7</strong>
                  <span>
                    Pipelines
                  </span>
                </div>

                <div className="overview-card">
                  <strong>6</strong>
                  <span>
                    Instruments
                  </span>
                </div>

                <div className="overview-card critical-card">
                  <strong>1</strong>
                  <span>
                    Critical
                  </span>
                </div>

              </div>

            </div>
          )}

        </div>

        <div className="agent-section">

          <button
            className="agent-section-header"
            onClick={() =>
              toggleSection("context")
            }
            type="button"
          >

            <span>
              Context
            </span>

            <span>
              {activeSection ===
              "context"
                ? "−"
                : "+"}
            </span>

          </button>

          {activeSection ===
            "context" && (
            <div className="agent-section-body">

              <div className="context-item">

                <span className="context-type">
                  STD
                </span>

                <div>

                  <strong>
                    Safety Standard
                  </strong>

                  <small>
                    Section 4.2 · Pressure relief
                  </small>

                </div>

              </div>

              <div className="context-item">

                <span className="context-type">
                  PIP
                </span>

                <div>

                  <strong>
                    Piping Specification
                  </strong>

                  <small>
                    Revision 7
                  </small>

                </div>

              </div>

              <div className="context-item">

                <span className="context-type">
                  INS
                </span>

                <div>

                  <strong>
                    Instrumentation Standard
                  </strong>

                  <small>
                    Section 3.1
                  </small>

                </div>

              </div>

            </div>
          )}

        </div>

        <div className="agent-section">

          <button
            className="agent-section-header"
            onClick={() =>
              toggleSection("response")
            }
            type="button"
          >

            <span>
              Response
            </span>

            <span>
              {activeSection ===
              "response"
                ? "−"
                : "+"}
            </span>

          </button>

          {activeSection ===
            "response" && (
            <div className="agent-section-body">

              <div className="response-card">

                <div className="response-top">

                  <span
                    className={`issue-status ${
                      selectedIssue.type.toLowerCase()
                    }`}
                  >
                    {selectedIssue.type}
                  </span>

                  <span className="issue-id">
                    {selectedIssue.id}
                  </span>

                </div>

                <h3>
                  {selectedIssue.title}
                </h3>

                <p>
                  {selectedIssue.description}
                </p>

                <div className="response-location">

                  <span>
                    Location
                  </span>

                  <strong>
                    {selectedIssue.location}
                  </strong>

                </div>

                <div className="response-source">

                  <span>
                    Evidence
                  </span>

                  <strong>
                    {selectedIssue.source}
                  </strong>

                </div>

              </div>

            </div>
          )}

        </div>

        <div className="agent-section">

          <button
            className="agent-section-header"
            onClick={() =>
              toggleSection("qa")
            }
            type="button"
          >

            <span>
              Q&A
            </span>

            <span>
              {activeSection === "qa"
                ? "−"
                : "+"}
            </span>

          </button>

          {activeSection === "qa" && (
            <div className="agent-section-body">

              <div className="qa-history">

                <div className="qa-question">
                  Is the P-204 discharge line
                  compliant?
                </div>

                <div className="qa-answer">
                  No. A pressure relief valve
                  is required at this location
                  according to the referenced
                  safety standard.
                </div>

              </div>

              <div className="qa-input-wrapper">

                <input
                  value={question}
                  onChange={(event) =>
                    setQuestion(
                      event.target.value
                    )
                  }
                  onKeyDown={(event) => {
                    if (
                      event.key === "Enter"
                    ) {
                      handleQuestion();
                    }
                  }}
                  placeholder="Ask about this drawing..."
                />

                <button
                  type="button"
                  onClick={
                    handleQuestion
                  }
                >
                  →
                </button>

              </div>

            </div>
          )}

        </div>

        <div className="agent-section">

          <button
            className="agent-section-header"
            onClick={() =>
              toggleSection(
                "verification"
              )
            }
            type="button"
          >

            <span>
              Verification
            </span>

            <span>
              {activeSection ===
              "verification"
                ? "−"
                : "+"}
            </span>

          </button>

          {activeSection ===
            "verification" && (
            <div className="agent-section-body">

              <div className="verification-question">

                <span>
                  01
                </span>

                <div>

                  <strong>
                    Is a pressure relief valve
                    present on P-204 discharge?
                  </strong>

                  <div className="verification-buttons">

                    <button
                      className="verify-false"
                      type="button"
                    >
                      False
                    </button>

                    <button type="button">
                      True
                    </button>

                  </div>

                </div>

              </div>

              <div className="verification-question">

                <span>
                  02
                </span>

                <div>

                  <strong>
                    Does pipeline 4-P-221
                    match the equipment schedule?
                  </strong>

                  <div className="verification-buttons">

                    <button type="button">
                      False
                    </button>

                    <button type="button">
                      True
                    </button>

                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

        <div className="agent-issues">

          <div className="issues-title">
            Detected Issues
          </div>

          {issues.map((issue) => (
            <button
              key={issue.id}
              className={`issue-list-item ${
                selectedIssue.id ===
                issue.id
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                handleIssueClick(
                  issue
                )
              }
              type="button"
            >

              <span
                className={`issue-list-dot ${
                  issue.type.toLowerCase()
                }`}
              />

              <div>

                <strong>
                  {issue.title}
                </strong>

                <small>
                  {issue.location}
                </small>

              </div>

              <span className="issue-arrow">
                ›
              </span>

            </button>
          ))}

        </div>

      </aside>

    </div>
  );
}

export default DWGIntelligence;