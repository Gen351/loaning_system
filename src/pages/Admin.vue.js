import { ref, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";
import Members from "@/pages/admin/Members.vue";
import Savings from "@/pages/admin/Savings.vue";
import Loans from "@/pages/admin/Loans.vue";
import Penalties from "@/pages/admin/Penalties.vue";
import { supabase } from "@/services/supabaseClient";
const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
const activeModal = ref(null);
const openModal = (modalName) => {
    activeModal.value = modalName;
};
const closeModal = () => {
    activeModal.value = null;
};
onMounted(async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session || session.user.email !== adminEmail) {
        await supabase.auth.signOut();
        window.location.href = "/";
    }
    supabase.auth.onAuthStateChange((_event, session) => {
        if (!session)
            window.location.href = "/";
    });
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "flex flex-col min-h-screen bg-gray-100" },
});
/** @type {[typeof Navbar, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Navbar, new Navbar({
    ...{ 'onOpenModal': {} },
}));
const __VLS_1 = __VLS_0({
    ...{ 'onOpenModal': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
let __VLS_3;
let __VLS_4;
const __VLS_5 = ({ openModal: {} },
    { onOpenModal: (__VLS_ctx.openModal) });
// @ts-ignore
[openModal,];
var __VLS_2;
__VLS_asFunctionalElement(__VLS_elements.main, __VLS_elements.main)({
    ...{ class: "flex-grow p-10 text-center" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-3xl font-bold mb-6" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-gray-600" },
});
if (__VLS_ctx.activeModal === 'Members') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Members",
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onClose': {} },
        title: "Members",
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_10;
    let __VLS_11;
    const __VLS_12 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_13 } = __VLS_9.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Members, ]} */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(Members, new Members({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    var __VLS_9;
}
if (__VLS_ctx.activeModal === 'Savings') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_18 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Savings",
    }));
    const __VLS_19 = __VLS_18({
        ...{ 'onClose': {} },
        title: "Savings",
    }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    let __VLS_21;
    let __VLS_22;
    const __VLS_23 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_24 } = __VLS_20.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Savings, ]} */ ;
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(Savings, new Savings({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    var __VLS_20;
}
if (__VLS_ctx.activeModal === 'Loans') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_29 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Loans",
    }));
    const __VLS_30 = __VLS_29({
        ...{ 'onClose': {} },
        title: "Loans",
    }, ...__VLS_functionalComponentArgsRest(__VLS_29));
    let __VLS_32;
    let __VLS_33;
    const __VLS_34 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_35 } = __VLS_31.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Loans, ]} */ ;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent(Loans, new Loans({}));
    const __VLS_37 = __VLS_36({}, ...__VLS_functionalComponentArgsRest(__VLS_36));
    var __VLS_31;
}
if (__VLS_ctx.activeModal === 'Penalties') {
    // @ts-ignore
    [activeModal,];
    /** @type {[typeof Modal, typeof Modal, ]} */ ;
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(Modal, new Modal({
        ...{ 'onClose': {} },
        title: "Penalties",
    }));
    const __VLS_41 = __VLS_40({
        ...{ 'onClose': {} },
        title: "Penalties",
    }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    let __VLS_43;
    let __VLS_44;
    const __VLS_45 = ({ close: {} },
        { onClose: (__VLS_ctx.closeModal) });
    const { default: __VLS_46 } = __VLS_42.slots;
    // @ts-ignore
    [closeModal,];
    /** @type {[typeof Penalties, ]} */ ;
    // @ts-ignore
    const __VLS_47 = __VLS_asFunctionalComponent(Penalties, new Penalties({}));
    const __VLS_48 = __VLS_47({}, ...__VLS_functionalComponentArgsRest(__VLS_47));
    var __VLS_42;
}
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow']} */ ;
/** @type {__VLS_StyleScopedClasses['p-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
