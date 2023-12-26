"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [82],
  {
    436: (e, d, t) => {
      t.r(d), t.d(d, { default: () => n });
      t(2791);
      var i = t(5729),
        a = t(184);
      const o = [
          {
            type: "text",
            placeholder: "Medical Condition",
            fieldName: "name",
            helper: "Enter the Medical Condition Name",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
        ],
        l = [
          {
            type: "hidden-text",
            placeholder: "id",
            fieldName: "id",
            helper: "",
            required: !0,
          },
          ...o,
        ],
        r = [
          ...l,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        n = () =>
          (0, a.jsx)(i.Z, {
            productForm: o,
            updateForm: l,
            tableDetails: r,
            fetchURL: "workout/admin/medical-condition/page",
            postURL: "workout/admin/medical-condition",
            deleteURL: "workout/admin/medical-condition",
            updateURL: "workout/admin/medical-condition",
            formName: "Medical Conditions",
          });
    },
  },
]);
//# sourceMappingURL=82.979e09f0.chunk.js.map
