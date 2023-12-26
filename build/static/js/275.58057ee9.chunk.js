"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [275],
  {
    2389: (e, t, a) => {
      a.r(t), a.d(t, { default: () => c });
      a(2791);
      var l = a(5729),
        i = a(184);
      const d = [
          {
            type: "text",
            placeholder: "Activity Level",
            fieldName: "name",
            helper: "Enter the Activity Level Name",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
        ],
        r = [
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
          ...r,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        c = () =>
          (0, i.jsx)(l.Z, {
            productForm: d,
            updateForm: r,
            tableDetails: o,
            fetchURL: "workout/admin/activity-level/page",
            postURL: "workout/admin/activity-level",
            deleteURL: "workout/admin/activity-level",
            updateURL: "workout/admin/activity-level",
            formName: "Activity Levels",
          });
    },
  },
]);
//# sourceMappingURL=275.58057ee9.chunk.js.map
