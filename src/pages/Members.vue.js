import { ref, onMounted, computed } from "vue";
import { supabase } from "@/supabase";
const members = ref([]);
const search = ref("");
const showAddModal = ref(false);
const newMember = ref({ first_name: "", last_name: "", share_count: 0 });
const fetchMembers = async () => {
    const { data: memberData, error: memberError } = await supabase
        .from("member")
        .select("*");
    if (memberError)
        return console.error(memberError);
    // Fetch related data
    const tables = ["savings", "loan", "penalty", "loan_payment", "penalty_payment"];
    const allData = {};
    for (const t of tables) {
        const { data, error } = await supabase.from(t).select("*");
        if (!error)
            allData[t] = data;
    }
    members.value = memberData.map((m) => {
        const totalSavings = sum(allData.savings, m.id);
        const totalLoans = sum(allData.loan, m.id);
        const totalPenalties = sum(allData.penalty, m.id);
        const totalPayments = sum(allData.loan_payment, m.id) + sum(allData.penalty_payment, m.id);
        const balance = totalSavings - totalLoans - totalPenalties + totalPayments;
        return { ...m, totalSavings, totalLoans, totalPenalties, totalPayments, balance };
    });
};
const sum = (tableData, memberId) => tableData
    ?.filter((r) => r.member_id === memberId)
    ?.reduce((acc, r) => acc + (r.amount || 0), 0) || 0;
const format = (val) => (val ? val.toLocaleString("en-PH", { minimumFractionDigits: 2 }) : "0.00");
const filteredMembers = computed(() => members.value.filter((m) => `${m.first_name} ${m.last_name}`.toLowerCase().includes(search.value.toLowerCase())));
const openAddModal = () => {
    newMember.value = { first_name: "", last_name: "", share_count: 0 };
    showAddModal.value = true;
};
const addMember = async () => {
    const { error } = await supabase.from("member").insert([
        {
            first_name: newMember.value.first_name.trim(),
            last_name: newMember.value.last_name.trim(),
            share_count: newMember.value.share_count || 0,
            created_at: new Date().toISOString(),
        },
    ]);
    if (error)
        return console.error(error);
    showAddModal.value = false;
    fetchMembers();
};
onMounted(fetchMembers);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "p-6" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-2xl font-bold mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex justify-between items-center mb-4" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    value: (__VLS_ctx.search),
    type: "text",
    placeholder: "Search member...",
    ...{ class: "border rounded px-3 py-2 w-1/3" },
});
// @ts-ignore
[search,];
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.openAddModal) },
    ...{ class: "bg-blue-600 text-white px-4 py-2 rounded" },
});
// @ts-ignore
[openAddModal,];
__VLS_asFunctionalElement(__VLS_elements.table, __VLS_elements.table)({
    ...{ class: "w-full border-collapse border" },
});
__VLS_asFunctionalElement(__VLS_elements.thead, __VLS_elements.thead)({
    ...{ class: "bg-gray-100" },
});
__VLS_asFunctionalElement(__VLS_elements.tr, __VLS_elements.tr)({});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.th, __VLS_elements.th)({
    ...{ class: "border px-2 py-1" },
});
__VLS_asFunctionalElement(__VLS_elements.tbody, __VLS_elements.tbody)({});
for (const [member] of __VLS_getVForSourceType((__VLS_ctx.filteredMembers))) {
    // @ts-ignore
    [filteredMembers,];
    __VLS_asFunctionalElement(__VLS_elements.tr, __VLS_elements.tr)({
        key: (member.id),
        ...{ class: "hover:bg-gray-50" },
    });
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1" },
    });
    (member.first_name);
    (member.last_name);
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1 text-center" },
    });
    (member.share_count);
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1 text-right" },
    });
    (__VLS_ctx.format(member.totalSavings));
    // @ts-ignore
    [format,];
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1 text-right" },
    });
    (__VLS_ctx.format(member.totalLoans));
    // @ts-ignore
    [format,];
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1 text-right" },
    });
    (__VLS_ctx.format(member.totalPenalties));
    // @ts-ignore
    [format,];
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1 text-right" },
    });
    (__VLS_ctx.format(member.totalPayments));
    // @ts-ignore
    [format,];
    __VLS_asFunctionalElement(__VLS_elements.td, __VLS_elements.td)({
        ...{ class: "border px-2 py-1 text-right font-semibold" },
        ...{ class: (member.balance >= 0 ? 'text-green-600' : 'text-red-600') },
    });
    (__VLS_ctx.format(member.balance));
    // @ts-ignore
    [format,];
}
if (__VLS_ctx.showAddModal) {
    // @ts-ignore
    [showAddModal,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center" },
    });
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "bg-white p-6 rounded w-96" },
    });
    __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
        ...{ class: "text-lg font-bold mb-3" },
    });
    __VLS_asFunctionalElement(__VLS_elements.input)({
        placeholder: "First name",
        ...{ class: "border w-full mb-2 px-3 py-2 rounded" },
    });
    (__VLS_ctx.newMember.first_name);
    // @ts-ignore
    [newMember,];
    __VLS_asFunctionalElement(__VLS_elements.input)({
        placeholder: "Last name",
        ...{ class: "border w-full mb-2 px-3 py-2 rounded" },
    });
    (__VLS_ctx.newMember.last_name);
    // @ts-ignore
    [newMember,];
    __VLS_asFunctionalElement(__VLS_elements.input)({
        type: "number",
        placeholder: "Share count",
        ...{ class: "border w-full mb-4 px-3 py-2 rounded" },
    });
    (__VLS_ctx.newMember.share_count);
    // @ts-ignore
    [newMember,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "flex justify-end gap-2" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                if (!(__VLS_ctx.showAddModal))
                    return;
                __VLS_ctx.showAddModal = false;
                // @ts-ignore
                [showAddModal,];
            } },
        ...{ class: "px-4 py-2 border rounded" },
    });
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.addMember) },
        ...{ class: "px-4 py-2 bg-blue-600 text-white rounded" },
    });
    // @ts-ignore
    [addMember,];
}
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border-collapse']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-50']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-40']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['w-96']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
