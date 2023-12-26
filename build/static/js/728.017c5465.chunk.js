"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [728],
  {
    2058: (e, r, a) => {
      a.r(r), a.d(r, { default: () => m });
      a(2791);
      var d = a(5729),
        o = a(184);
      const t = [
          {
            type: "text",
            placeholder: "Cardio Form",
            fieldName: "name",
            helper: "Enter the Cardio Form Name",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
        ],
        i = [
          {
            type: "hidden-text",
            placeholder: "id",
            fieldName: "id",
            helper: "",
            required: !0,
          },
          ...t,
        ],
        l = [
          ...i,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        m = () =>
          (0, o.jsx)(d.Z, {
            productForm: t,
            updateForm: i,
            tableDetails: l,
            fetchURL: "workout/admin/cardio-form/page",
            postURL: "workout/admin/cardio-form",
            deleteURL: "workout/admin/cardio-form",
            updateURL: "workout/admin/cardio-form",
            formName: "Cardio Forms",
          });
    },
  },
]);
//# sourceMappingURL=728.017c5465.chunk.js.map
