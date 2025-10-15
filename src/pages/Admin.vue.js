import { ref } from "vue";
import Modal from "@/components/Modal.vue";
import Members from "@/pages/admin/Members.vue";
import Savings from "@/pages/admin/Savings.vue";
import Loans from "@/pages/admin/Loans.vue";
import Penalties from "@/pages/admin/Penalties.vue";
const activeModal = ref(null);
const menuItems = [
    { name: "Members", label: "Members" },
    { name: "Savings", label: "Savings" },
    { name: "Loans", label: "Loans" },
    { name: "Penalties", label: "Penalties" },
];
const openModal = (name) => (activeModal.value = name);
const closeModal = () => (activeModal.value = null);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "bg-[#1f1f1f] text-white min-h-screen flex flex-col items-center p-6" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-4xl font-bold mb-8" },
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-wrap justify-center gap-4 mb-10" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menuItems))) {
    // @ts-ignore
    [menuItems,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.openModal(item.name);
                // @ts-ignore
                [openModal,];
            } },
        key: (item.name),
        ...{ class: "px-6 py-3 rounded-lg bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white font-medium transition-all duration-200" },
    });
    (item.label);
}
if (__VLS_ctx.activeModal === 'Members') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Members",
    }));
    const __VLS_1 = __VLS_0({
        ...{ 'onClose': {} },
        title: "Members",
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    let __VLS_3;
    let __VLS_4;
    const __VLS_5 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_6 } = __VLS_2.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Members, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(Members, new Members({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    var __VLS_2;
}
if (__VLS_ctx.activeModal === 'Savings') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Savings",
    }));
    const __VLS_12 = __VLS_11({
        ...{ 'onClose': {} },
        title: "Savings",
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    let __VLS_14;
    let __VLS_15;
    const __VLS_16 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_17 } = __VLS_13.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Savings, ]} */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(Savings, new Savings({}));
    const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
    var __VLS_13;
}
if (__VLS_ctx.activeModal === 'Loans') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Loans",
    }));
    const __VLS_23 = __VLS_22({
        ...{ 'onClose': {} },
        title: "Loans",
    }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    let __VLS_25;
    let __VLS_26;
    const __VLS_27 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_28 } = __VLS_24.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Loans, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(Loans, new Loans({}));
    const __VLS_30 = __VLS_29({}, ...__VLS_functionalComponentArgsRest(__VLS_29));
    var __VLS_24;
}
if (__VLS_ctx.activeModal === 'Penalties') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Penalties",
    }));
    const __VLS_34 = __VLS_33({
        ...{ 'onClose': {} },
        title: "Penalties",
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    let __VLS_36;
    let __VLS_37;
    const __VLS_38 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_39 } = __VLS_35.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Penalties, ]} */ ;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(Penalties, new Penalties({}));
    const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
    var __VLS_35;
}
/** @type {__VLS_StyleScopedClasses['bg-[#1f1f1f]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-10']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#2b2b2b]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[#3a3a3a]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-200']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
