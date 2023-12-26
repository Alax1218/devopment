"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [502],
  {
    5430: (e, t, a) => {
      a.r(t), a.d(t, { default: () => o });
      a(2791);
      var d = a(5729),
        r = a(184);
      const i = [
          {
            type: "text",
            placeholder: "Equipment",
            fieldName: "name",
            helper: "Enter the Equipment Name",
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
          ...i,
        ],
        m = [
          ...l,
          { placeholder: "Edit", fieldName: "editButton" },
          { placeholder: "Delete", fieldName: "deleteButton" },
        ],
        o = () =>
          (0, r.jsx)(d.Z, {
            productForm: i,
            updateForm: l,
            tableDetails: m,
            fetchURL: "workout/admin/equipment/page",
            postURL: "workout/admin/equipment",
            deleteURL: "workout/admin/equipment",
            updateURL: "workout/admin/equipment",
            formName: "Equipments",
          });
    },
  },
]);
//# sourceMappingURL=502.4f3f09b6.chunk.js.map
