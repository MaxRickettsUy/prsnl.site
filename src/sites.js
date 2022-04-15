const sites = [
    {
        url: "https://brianlovin.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/brianlovincom_tmvg1d_lya1bm.webp",
        dateUpdated: "3/26/2022"
    },
    {
        url: "https://aschmelyun.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/aschemlyuncom_z0hjat_upp6cp.webp",
        dateUpdated: "3/26/2022"
    },
    {
        url: "https://vitalik.ca",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986405/prsnl.site/vitalikca_txemvy_gwnmcu.webp",
        dateUpdated: "3/26/2022"
    },
    {
        url: "https://swyx.io",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/swyxio_di56dq_usz2b8.webp",
        dateUpdated: "04/05/2022"
    },
    {
        url: "https://joshwcomeau.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/joshwcomeaucom_efuelp_qigtak.webp",
        dateUpdated: "04/05/2022"
    },
    {
        url: "https://jvns.ca",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/jvnsca_chaap4_wjlvs0.webp",
        dateUpdated: "04/05/2022"
    },
    {
        url: "https://calebporzio",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/calebporziocom_cwe3fs_cws4hy.webp",
        dateUpdated:"04/05/2022"
    },
    {
        url: "https://lukesmith.xyz",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/lukesmithxyz_y7e2az_xghqjx.webp",
        dateUpdated: "04/06/2022"
    },
    {
        url: "https://leerob.io",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/leerobio_iv3pn1_avzhpf.webp",
        dateUpdated: "04/06/2022"
    },
    {
        url: "https://pketh.org",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/pkethorg_f4mpni_inanul.webp",
        dateUpdated: "04/07/2022"
    },
    {
        url: "https://boz.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/bozcom_uljm2w_vzxap5.webp",
        dateUpdated: "04/07/2022"
    },
    {
        url: "https://dustinbrett.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/dustinbrettcom_kxvklj_hp6kao.webp",
        dateUpdated: "04/07/2022"
    },
    {
        url: "https://whitep4nth3r.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/whitep4nth3rcom_wtgdmn_ih7pfv.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://adamconrad.dev",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/adamconraddev_chnqzv_chsahq.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://drewdevault.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/drewdevaultcom_d1znab_gxqwdx.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://cvasquez.dev",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/cvasquezdev_rcyolg_qyr52s.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://tatianamac.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/tatianamaccom_ddeahb_akjzup.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://saurik.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/saurikcom_u4q3yc_jckkoh.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://connellmccarthy.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/connellmccarthycom_lwswa8_mlds3f.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://johnnyrodgers.is",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/johnnyrodgersis_qw44ek_oouweg.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "https://marcbouchenoire.com/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/marcbouchenoirecom_voyzhn_nppsb8.webp",
        dateUpdated: "04/08/2022"
    },
    {
        url: "http://paulgraham.com/articles.html",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/paulgrahamcom_lod96n_qfy4cd.webp",
        dateUpdated: "04/09/2022"
    },
    {
        url: "https://moxie.org",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986404/prsnl.site/moxieorg_wha6pu_q3ezza.webp",
        dateUpdated: "04/09/2022"
    },
    {
        url: "https://lipanski.com/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649989017/prsnl.site/lipanskicom_eztxra.webp",
        dateUpdated: "04/14/2022"
    },
    {
        url: "https://loganmarchione.com/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649989017/prsnl.site/loganmarchionecom_na1zar.webp",
        dateUpdated: "04/14/2022"
    }
];