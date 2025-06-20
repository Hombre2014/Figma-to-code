import {
  Content,
  fetchOneEntry,
  isPreviewing,
  isEditing,
  type RegisteredComponent,
} from "@builder.io/sdk-react";
import { useEffect, useState } from "react";

interface BuilderContentProps {
  model?: string;
  apiKey: string;
  customComponents?: RegisteredComponent[];
}

export function BuilderContent({
  model = "page",
  apiKey,
  customComponents = [],
}: BuilderContentProps) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOneEntry({
      apiKey,
      model,
      userAttributes: {
        urlPath:
          window.location.pathname === "/" ? "/" : window.location.pathname,
      },
    })
      .then(setContent)
      .finally(() => setLoading(false));
  }, [apiKey, model]);

  const canShowContent = content || isPreviewing() || isEditing();

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "200px",
        }}
      >
        Loading...
      </div>
    );
  }

  if (!canShowContent) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "#666",
        }}
      >
        <h2>Content not found</h2>
        <p>Make sure you have your content published at builder.io.</p>
      </div>
    );
  }

  return (
    <Content
      content={content}
      apiKey={apiKey}
      model={model}
      customComponents={customComponents}
    />
  );
}
