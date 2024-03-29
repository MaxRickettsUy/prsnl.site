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
      url: "https://calebporz.io",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/calebporziocom_cwe3fs_cws4hy.webp",
      dateUpdated:"04/05/2022"
    },
    {
      url: "https://lukesmith.xyz",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698545286/prsnl.site/lukesmithxyz_tydcld.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://leerob.io",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698545177/prsnl.site/leerobio_qkkqr4.webp",
      dateUpdated: "10/28/2023"
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
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698545386/prsnl.site/whitep4nth3rcom_y9iw8t.webp",
      dateUpdated: "10/28/2023"
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
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698546164/prsnl.site/tatianamaccom_luyu9t.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://connellmccarthy.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698545515/prsnl.site/connellmccarthycom_ek94uz.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://johnnyrodgers.is",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1649986403/prsnl.site/johnnyrodgersis_qw44ek_oouweg.webp",
      dateUpdated: "04/08/2022"
    },
    {
      url: "https://marcbouchenoire.com/",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698546043/prsnl.site/marcbouchenoirecom_qc8h1s.webp",
      dateUpdated: "10/28/2023"
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
    },
    {
      url: "https://paco.me/",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1652925868/prsnl.site/pacome_qlssfl.webp",
      dateUpdated: "05/18/2022"
    },
    {
      url: "https://sive.rs/",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1652927868/prsnl.site/sivers_kpg56l.webp",
      dateUpdated: "05/18/2022"
    },
    {
      url: "https://kwon.nyc",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1653355051/prsnl.site/kwonnyc_nnuv8p.webp",
      dateUpdated: "05/23/2022"
    },
    {
      url: "https://simonbs.dev/",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1653706621/prsnl.site/simonbsdev_jx6iv9.webp",
      dateUpdated: "05/27/2022"
    },
    {
      url: "https://robinmalfait.com/",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1653706888/prsnl.site/robinmalfaitcom_skqa0q.webp",
      dateUpdated: "05/27/2022"
    },
    {
      url: "https://maya.land",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1654045071/prsnl.site/mayaland_xgwnuy.webp",
      dateUpdated: "05/31/2022"
    },
    {
      url: "https://memalign.github.io",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1654132077/prsnl.site/memalign_pipptr.webp",
      dateUpdated: "06/01/2022",
      badge: "Submission"
    },
    {
      url: "https://dandevri.es",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1654653613/prsnl.site/dandevries_vspbug.webp",
      dateUpdated: "06/07/2022"
    },
    {
      url: "https://chriscoyier.net",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698545031/prsnl.site/chriscoyiernet_renbnt.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://mitchellhanberg.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1655346512/prsnl.site/mitchellhanbergcom_junrm8.webp",
      dateUpdated: "06/15/2022"
    },
    {
      url: "https://bradgarropy.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1655947312/prsnl.site/bradgarropycom_qfrqa9.webp",
      dateUpdated: "06/22/2022"
    },
    {
      url: "https://littlegreenviper.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1655947493/prsnl.site/littlegreenvipercom_clmby6.webp",
      dateUpdated: "06/22/2022"
    },
    {
      url: "https://robbowen.digital",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1658885292/prsnl.site/robbowendigital_etlxhu.webp",
      dateUpdated: "07/26/2022"
    },
    {
      url: "https://daniel.do",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1669263456/prsnl.site/danieldo_wgdnmo.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://mollywhite.net",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698544428/prsnl.site/mollywhitenet_h2nj1p.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://joebell.co.uk",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698546276/prsnl.site/joebellcouk_xybdvq.png",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://heather-buchel.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698546482/prsnl.site/heather-buchelcom_aq1ese.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://patrickweaver.net",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698547007/prsnl.site/patrickweavernet_fy5jir.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://www.haraldurthorleifsson.com/",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698547201/prsnl.site/haraldurthorleifssoncom_vj5ejj.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://derekkay.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698547344/prsnl.site/darekkaycom_cl41gp.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://garden.bradwoods.io",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698547918/prsnl.site/garden.bradwoodsio_hhawg9.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://clairefro.dev",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698548134/prsnl.site/clairefrodev_wegtve.webp",
      dateUpdated: "10/28/2023"
    },
    {
      url: "https://lynnandtonic.com",
      img: "https://res.cloudinary.com/shoveltoss-com/image/upload/v1698548349/prsnl.site/lynnandtoniccom_q2ehoc.webp",
      dateUpdated: "10/28/2023"
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

window.addEventListener('load', function () {
  if(document.querySelector("#sitesLength"))
    document.querySelector("#sitesLength").innerHTML = `Now showcasing ${sites.length} personal sites!`;
})

const container = document.querySelector("#contentContainer");

shuffle(sites).forEach((s) => {
    const clone = temp.content.cloneNode(true);
    const site = clone.querySelector(".siteContainer");
    site.querySelector(".previewImg").src = s.img;
    site.querySelector(".previewImgLinkWrapper").href= s.url;
    site.querySelector(".imgUrl").href = s.url;
    site.querySelector(".imgUrl").innerHTML = s.url;
    site.querySelector(".dateUpdatedSpan").innerHTML = s.dateUpdated;
    if(s.badge) {
      site.querySelector(".badge").classList.remove("hidden");
      site.querySelector(".badge").classList.add("inline-flex");
      site.querySelector(".badge").innerHTML = s.badge;
    }
    container.append(site);
});