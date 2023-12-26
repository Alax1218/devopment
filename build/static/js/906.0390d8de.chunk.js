"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [906],
  {
    321: (e, r, l) => {
      l.r(r), l.d(r, { default: () => o });
      l(2791);
      var d = l(5729),
        a = l(184);
      const t = [
          {
            type: "text",
            placeholder: "Gender",
            fieldName: "gender",
            helper: "Gender",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
          {
            type: "text",
            placeholder: "Age",
            fieldName: "age",
            helper: "Age",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
          {
            type: "text",
            placeholder: "Experience",
            fieldName: "experience",
            helper: "Experience",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
          {
            type: "text",
            placeholder: "People Trained",
            fieldName: "peopleTrained",
            helper: "People Trained",
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
          {
            type: "text",
            placeholder: "Gender",
            fieldName: "gender",
            helper: "Gender",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
          {
            type: "text",
            placeholder: "Age",
            fieldName: "age",
            helper: "Age",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
          {
            type: "text",
            placeholder: "Experience",
            fieldName: "experience",
            helper: "Experience",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
          {
            type: "text",
            placeholder: "People Trained",
            fieldName: "peopleTrained",
            helper: "People Trained",
            required: !0,
            classNames: "col-md-6 mr-1",
          },
        ],
        p = [
          ...i,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        o = () =>
          (0, a.jsx)(d.Z, {
            productForm: t,
            updateForm: i,
            tableDetails: p,
            fetchURL: "workout/trainer/profile/page/unverified",
            postURL: "workout/admin/activity-level",
            deleteURL: "workout/admin/activity-level",
            updateURL: "workout/admin/activity-level",
            formName: "Trainer Verification",
          });
    },
  },
]);
//# sourceMappingURL=906.0390d8de.chunk.js.map
