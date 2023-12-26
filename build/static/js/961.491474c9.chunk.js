"use strict";
(self.webpackChunktrainer_dashboard =
  self.webpackChunktrainer_dashboard || []).push([
  [961],
  {
    6107: (e, l, a) => {
      a.r(l), a.d(l, { default: () => s });
      var r = a(2791),
        d = a(4542),
        t = a(8133),
        i = a(5729),
        o = a(184);
      const s = () => {
        const [e, l] = (0, r.useState)(!0),
          [a, s] = (0, r.useState)([
            {
              type: "text",
              placeholder: "Exercise Name",
              fieldName: "name",
              helper: "Enter the Exercise Name",
              required: !0,
              classNames: "col-md-6 mr-1",
            },
            {
              type: "list",
              placeholder: "Muscle Group",
              fieldName: "muscleGroup",
              required: !0,
              classNames: "col-md-12",
              subFields: [
                {
                  type: "dynamic-dropdown",
                  helper: "Please select a muscle",
                  fieldName: "muscle",
                  canCreate: !1,
                  required: !0,
                  classNames: "col-md-6",
                  placeholder: "Muscle",
                  multi: !1,
                  options: [],
                },
                {
                  type: "number",
                  placeholder: "Load Factor",
                  fieldName: "loadFactor",
                  helper: "Load Factor",
                  required: !0,
                  classNames: "col-lg-3 col-md-6",
                },
              ],
            },
            {
              type: "text",
              placeholder: "Progression Type",
              fieldName: "progressionType",
              helper: "Progression Type",
              required: !0,
              classNames: "col-md-6 mr-1",
            },
            {
              type: "number",
              placeholder: "Difficulty Rating",
              fieldName: "difficultyRating",
              helper: "Difficulty Rating",
              required: !0,
              classNames: "col-lg-3 col-md-6",
            },
            {
              type: "dynamic-dropdown",
              helper: "Load Type",
              fieldName: "loadType",
              canCreate: !1,
              required: !0,
              classNames: "col-md-6",
              placeholder: "Load Type",
              multi: !1,
              options: [],
            },
            {
              type: "dynamic-dropdown",
              helper: "Movement",
              fieldName: "movement",
              canCreate: !1,
              required: !0,
              classNames: "col-md-6",
              placeholder: "Movement",
              multi: !1,
              options: [],
            },
            {
              type: "number",
              placeholder: "Set Rest Time",
              fieldName: "setRestTime",
              helper: "Set Rest Time",
              required: !0,
              classNames: "col-md-6",
            },
            {
              type: "number",
              placeholder: "Switch Rest Time",
              fieldName: "switchRestTime",
              helper: "Switch Rest Time",
              required: !0,
              classNames: "col-md-6",
            },
            {
              type: "dynamic-dropdown",
              helper: "Equipments",
              idFieldName: "equipments",
              fieldName: "equipmentIds",
              canCreate: !1,
              required: !1,
              classNames: "col-md-6",
              placeholder: "Equipments",
              multi: !0,
              options: [],
            },
            {
              type: "dynamic-dropdown",
              helper: "Type",
              fieldName: "type",
              canCreate: !1,
              required: !0,
              classNames: "col-md-6",
              placeholder: "type",
              multi: !1,
              options: [],
            },
            {
              type: "dynamic-dropdown",
              helper: "Workout Splits",
              fieldName: "workoutSplits",
              canCreate: !1,
              required: !0,
              classNames: "col-md-6",
              placeholder: "Workout Splits",
              multi: !0,
              options: [],
            },
            {
              type: "text",
              placeholder: "Video URL",
              fieldName: "videoUrl",
              helper: "Video URL",
              required: !0,
              classNames: "col-md-6 mr-1",
            },
          ]);
        (0, r.useEffect)(() => {
          (async () => {
            l(!0);
            try {
              const e = await d.Z.get("workout/admin/exercise/dropdown"),
                r = null === e || void 0 === e ? void 0 : e.data,
                t = [...a];
              Object.keys(r).forEach((e) => {
                ((e, l, a) => {
                  e.forEach((r, d) => {
                    "list" === r.type
                      ? r.subFields.forEach((r, t) => {
                          (r.fieldName !== a && r.idFieldName !== a) ||
                            (e[d].subFields[t].options = l[a]);
                        })
                      : (r.fieldName !== a && r.idFieldName !== a) ||
                        (e[d].options = l[a]);
                  });
                })(t, r, e);
              }),
                s(t),
                l(!1);
            } catch (e) {
              l(!1);
            }
          })();
        }, []);
        const m = [
          {
            type: "hidden-text",
            placeholder: "id",
            fieldName: "id",
            helper: "",
            required: !0,
          },
          ...a,
        ];
        return e
          ? (0, o.jsx)(t.Z, {})
          : (0, o.jsx)(i.Z, {
              productForm: a,
              updateForm: m,
              tableDetails: [
                {
                  type: "text",
                  placeholder: "Exercise Name",
                  fieldName: "name",
                  helper: "Enter the Exercise Name",
                  required: !0,
                  classNames: "col-md-6 mr-1",
                },
                { placeholder: "Edit", fieldName: "editButton" },
                { placeholder: "Delete", fieldName: "deleteButton" },
              ],
              fetchURL: "workout/admin/exercise/page",
              postURL: "workout/admin/exercise",
              deleteURL: "workout/admin/exercise",
              updateURL: "workout/admin/exercise",
              formName: "Exercise",
            });
      };
    },
  },
]);
//# sourceMappingURL=961.491474c9.chunk.js.map
