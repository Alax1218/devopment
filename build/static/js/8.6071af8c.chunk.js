"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [8],
  {
    7959: (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      a(2791);
      var r = a(5729),
        i = a(184);
      const d = [
          {
            type: "text",
            placeholder: "Certificate",
            fieldName: "certificateName",
            helper: "Enter the Certificate Name",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
        ],
        c = [
          {
            type: "hidden-text",
            placeholder: "id",
            fieldName: "id",
            helper: "",
            required: !0,
          },
          ...d,
        ],
        l = [
          ...c,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        o = () =>
          (0, i.jsx)(r.Z, {
            productForm: d,
            updateForm: c,
            tableDetails: l,
            fetchURL: "workout/admin/certificate-name/page",
            postURL: "workout/admin/certificate-name",
            deleteURL: "workout/admin/certificate-name",
            updateURL: "workout/admin/certificate-name",
            formName: "Certificate",
          });
    },
  },
]);
//# sourceMappingURL=8.6071af8c.chunk.js.map
