import { ref, onMounted } from "vue";
import { renderMembers } from "@/models/members";
const membersHtml = ref("");
onMounted(async () => {
    membersHtml.value = await renderMembers();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
__VLS_asFunctionalElement(__VLS_elements.table, __VLS_elements.table)({
    ...{ class: "w-full text-center border-collapse" },
});
__VLS_asFunctionalElement(__VLS_elements.thead, __VLS_elements.thead)({});
__VLS_asFunctionalElement(__VLS_elements.tr, __VLS_elements.tr)({});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({});
__VLS_asFunctionalElement(__VLS_elements.tbody, __VLS_elements.tbody)({});
__VLS_asFunctionalDirective(__VLS_directives.vHtml)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.membersHtml) }, null, null);
// @ts-ignore
[membersHtml,];
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['border-collapse']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
