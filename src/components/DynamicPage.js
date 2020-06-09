import React from "react"

function DynamicPage() {
  return (
    <div
      style={{
        background: "#D3D3D3",
        height: "50vh",
        textAlign: "center",
      }}
    >
      <p>This is a Dynamic Page's content</p>
      <p>
        Loaded with{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/@loadable/component"
        >
          @loadable/component
        </a>
      </p>
    </div>
  )
}

export default DynamicPage
