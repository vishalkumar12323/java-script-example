import React from "react";

const FileContentPage = async ({
  params,
}: {
  params: Promise<{ foldername: string; filename: string }>;
}) => {
  const param = await params;

  const res = await fetch("http://localhost:3000/api/file-content", {
    headers: {
      "folder-name": param.foldername,
      "file-name": param.filename,
    },
    method: "GET",
  });
  const { data } = await res.json();

  return (
    <div>
      <pre>
        <code className="language-css text-blue-600">{data}</code>
      </pre>
    </div>
  );
};

export default FileContentPage;
