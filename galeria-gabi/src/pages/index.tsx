import { useRef, useEffect } from 'react'
import styles from 'styles/main.module.css'

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const value = 1 + window.scrollY / -600
      if (videoRef.current) {
        videoRef.current.style.opacity = `${value}`
      }
    }
    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <main id="main-content">
        <section className={styles.section}>
          <video
            ref={videoRef}
            src="videos/video.mp4"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </section>
        <section className={styles.section}>
          <div>
            <h2>Um titulo pra ver depois</h2>
            <p>
              lorem ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
              vcsdhb vknbds kjvcn sk dnbcvksnbdkcsnbcvkjsbnkcnsk
              nckjsajdnkusdhcv sxjbkasjd fhkawjbhfkjsdbnfjkasd fkjsadfkj dkfk
              sdh fkhas kdhf kash dfka hdfka sdfk adfka shdkf askjdfhaks dfk
              shdk ahskdf askdf kash dfkash dkfasfd asd has df sdf asd
              fkasdhfashdfkasncashfahdvfsakd vs sah dfkshdfks lorem
              ipsumjkdsfhkjwahndfjklahnsdfjkhnjkasdhnfjkash
              ndknfajdfhnjkasdhmnfkjsahndfksahdkjfhnsakjdfhnjksahndfk
              jsahndfkujashkdjfs,jadcvuynbcvksbn vsdh ksda kh hsdk dsfsd ksdhf
              ksdhfskd vfsdkf sakdfusdhf ksand fkshdkf sadkf hksd fkasdh fksdfk
              hdskfhsakd fvksd vckvcnsjkvhsduh vjnbcxv ksh dkcvhs dkbnvcksdbn
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
