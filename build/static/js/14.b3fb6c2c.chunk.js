"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [14],
  {
    2690: (e, r, t) => {
      t.r(r), t.d(r, { default: () => p });
      t(2791);
      var a = t(5729),
        i = t(184);
      const d = [
          {
            type: "text",
            placeholder: "Trainer Expertise",
            fieldName: "name",
            helper: "Enter the Trainer Expertise Name",
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
          ...d,
        ],
        o = [
          ...l,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        p = () =>
          (0, i.jsx)(a.Z, {
            productForm: d,
            updateForm: l,
            tableDetails: o,
            fetchURL: "workout/admin/trainer-expertise/page",
            postURL: "workout/admin/trainer-expertise",
            deleteURL: "workout/admin/trainer-expertise",
            updateURL: "workout/admin/trainer-expertise",
            formName: "Trainer Expertises",
          });
    },
  },
]);
//# sourceMappingURL=14.b3fb6c2c.chunk.js.map
