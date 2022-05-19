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
    },
    {
        url: "https://paulstamatiou.com",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650076578/prsnl.site/paulstamatiou.com-1366x1289_tcgfdw.webp",
        dateUpdated: "04/15/2022"
    },
    {
        url: "https://matthewshields.co.uk/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650591009/prsnl.site/matthewshields.co.uk_xh9tua.webp",
        dateUpdated: "04/21/2022"
    },
    {
        url: "https://nunn.ink",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650591222/prsnl.site/nunnink_l0eauk.webp",
        dateUpdated: "04/21/2022"
    },
    {
        url: "https://wittenburg.co.uk/Default.aspx",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650591892/prsnl.site/wittenburgcouk_f4vtjx.webp",
        dateUpdated: "04/21/2022"
    },
    {
        url: "https://markmead.dev/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650935111/prsnl.site/markmeaddev_nkfc6q.webp",
        dateUpdated: "04/25/2022"
    },
    {
        url: "https://mtlynch.io/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650936040/prsnl.site/mtlynchio_bq2uer.webp",
        dateUpdated: "04/25/2022"
    },
    {
        url: "https://stallman.org/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1650937562/prsnl.site/stallmanorg_tffurr.webp",
        dateUpdated: "04/25/2022"
    },
    {
        url: "https://spaghet.me/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1651541062/prsnl.site/spaghetme_tcadyo.webp",
        dateUpdated: "05/02/2022"
    },
    {
        url: "https://sarahrudder.com/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1651715319/prsnl.site/sarahruddercom_k74yfy.webp",
        dateUpdated: "05/04/2022"
    },
    {
        url: "https://mxstbr.com/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1651715319/prsnl.site/mxstbrcom_bkks3r.webp",
        dateUpdated: "05/04/2022"
    },
    {
        url: "https://benstokes.dev/",
        img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1652923803/prsnl.site/benstokesdev_yrrhiq.webp",
        dateUpdated: "05/18/2022"
    }
];

const shuffle = (array) => {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

let temp = document.getElementsByTagName("template")[0];

const container = document.querySelector("#contentContainer");

shuffle(sites).forEach((s) => {
    const clone = temp.content.cloneNode(true);
    const site = clone.querySelector(".siteContainer");
    site.querySelector(".previewImg").src = s.img;
    site.querySelector(".previewImgLinkWrapper").href= s.url;
    site.querySelector(".imgUrl").href = s.url;
    site.querySelector(".imgUrl").innerHTML = s.url;
    site.querySelector(".dateUpdatedSpan").innerHTML = s.dateUpdated;
    container.append(site);
});