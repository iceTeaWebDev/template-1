import React from 'react'
interface IDetail {
    name: String,
    image: String,
    description: String[]
}
interface IProducts {
    _id: String,
    name: String,
    code: String[],
    customer: String,
    image: String,
    specifications: String[],
    detail: IDetail[]
}
interface IProps {
    product: IProducts
}
const Document = ({product}: IProps) => {
    return (
        <div className='container mx-auto px-4'>
            <meta content="text/html; charset=UTF-8" httpEquiv="content-type" />
            <style
                type="text/css"
                dangerouslySetInnerHTML={{
                    __html:
                        '@import url(\'https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLTi9jKYd1gJzj5O2gWsEpXol-nTHck7FFkZplK5meosG\');.lst-kix_list_2-1>li{counter-increment:lst-ctn-kix_list_2-1}.lst-kix_list_1-1>li{counter-increment:lst-ctn-kix_list_1-1}ol.lst-kix_list_2-6.start{counter-reset:lst-ctn-kix_list_2-6 0}.lst-kix_list_3-0>li:before{content:"-  "}ul.lst-kix_list_5-7{list-style-type:none}ul.lst-kix_list_5-8{list-style-type:none}.lst-kix_list_3-1>li:before{content:"o  "}.lst-kix_list_3-2>li:before{content:"\\0025aa  "}ul.lst-kix_list_5-5{list-style-type:none}ul.lst-kix_list_5-6{list-style-type:none}ol.lst-kix_list_1-8.start{counter-reset:lst-ctn-kix_list_1-8 0}ol.lst-kix_list_2-3.start{counter-reset:lst-ctn-kix_list_2-3 0}.lst-kix_list_3-5>li:before{content:"\\0025aa  "}ul.lst-kix_list_5-0{list-style-type:none}.lst-kix_list_3-4>li:before{content:"o  "}ul.lst-kix_list_5-3{list-style-type:none}ol.lst-kix_list_1-5.start{counter-reset:lst-ctn-kix_list_1-5 0}.lst-kix_list_3-3>li:before{content:"\\0025cf  "}ul.lst-kix_list_5-4{list-style-type:none}ul.lst-kix_list_5-1{list-style-type:none}ul.lst-kix_list_5-2{list-style-type:none}.lst-kix_list_3-8>li:before{content:"\\0025aa  "}.lst-kix_list_2-0>li{counter-increment:lst-ctn-kix_list_2-0}.lst-kix_list_2-3>li{counter-increment:lst-ctn-kix_list_2-3}.lst-kix_list_3-6>li:before{content:"\\0025cf  "}.lst-kix_list_3-7>li:before{content:"o  "}.lst-kix_list_1-2>li{counter-increment:lst-ctn-kix_list_1-2}ol.lst-kix_list_2-2{list-style-type:none}ol.lst-kix_list_2-3{list-style-type:none}.lst-kix_list_5-0>li:before{content:"-  "}ol.lst-kix_list_2-4{list-style-type:none}ol.lst-kix_list_2-5{list-style-type:none}.lst-kix_list_1-4>li{counter-increment:lst-ctn-kix_list_1-4}ol.lst-kix_list_2-0{list-style-type:none}ol.lst-kix_list_1-6.start{counter-reset:lst-ctn-kix_list_1-6 0}ol.lst-kix_list_2-1{list-style-type:none}.lst-kix_list_4-8>li:before{content:"\\0025aa  "}.lst-kix_list_5-3>li:before{content:"\\0025cf  "}.lst-kix_list_4-7>li:before{content:"o  "}.lst-kix_list_5-2>li:before{content:"\\0025aa  "}.lst-kix_list_5-1>li:before{content:"o  "}ul.lst-kix_list_4-8{list-style-type:none}.lst-kix_list_5-7>li:before{content:"o  "}ul.lst-kix_list_4-6{list-style-type:none}.lst-kix_list_5-6>li:before{content:"\\0025cf  "}.lst-kix_list_5-8>li:before{content:"\\0025aa  "}ul.lst-kix_list_4-7{list-style-type:none}ul.lst-kix_list_4-0{list-style-type:none}ul.lst-kix_list_4-1{list-style-type:none}.lst-kix_list_5-4>li:before{content:"o  "}ul.lst-kix_list_4-4{list-style-type:none}.lst-kix_list_5-5>li:before{content:"\\0025aa  "}ol.lst-kix_list_2-6{list-style-type:none}ul.lst-kix_list_4-5{list-style-type:none}ol.lst-kix_list_2-7{list-style-type:none}ul.lst-kix_list_4-2{list-style-type:none}ol.lst-kix_list_2-8{list-style-type:none}ul.lst-kix_list_4-3{list-style-type:none}ol.lst-kix_list_1-0.start{counter-reset:lst-ctn-kix_list_1-0 0}.lst-kix_list_2-5>li{counter-increment:lst-ctn-kix_list_2-5}.lst-kix_list_2-8>li{counter-increment:lst-ctn-kix_list_2-8}.lst-kix_list_2-2>li{counter-increment:lst-ctn-kix_list_2-2}ol.lst-kix_list_2-4.start{counter-reset:lst-ctn-kix_list_2-4 0}ol.lst-kix_list_1-3{list-style-type:none}ol.lst-kix_list_1-4{list-style-type:none}.lst-kix_list_2-6>li:before{content:"" counter(lst-ctn-kix_list_2-6,decimal) ". "}.lst-kix_list_2-7>li:before{content:"" counter(lst-ctn-kix_list_2-7,lower-latin) ". "}.lst-kix_list_2-7>li{counter-increment:lst-ctn-kix_list_2-7}ol.lst-kix_list_1-5{list-style-type:none}ol.lst-kix_list_1-6{list-style-type:none}ol.lst-kix_list_1-0{list-style-type:none}.lst-kix_list_2-4>li:before{content:"" counter(lst-ctn-kix_list_2-4,lower-latin) ". "}.lst-kix_list_2-5>li:before{content:"" counter(lst-ctn-kix_list_2-5,lower-roman) ". "}.lst-kix_list_2-8>li:before{content:"" counter(lst-ctn-kix_list_2-8,lower-roman) ". "}ol.lst-kix_list_1-1{list-style-type:none}ol.lst-kix_list_1-2{list-style-type:none}ul.lst-kix_list_3-7{list-style-type:none}ul.lst-kix_list_3-8{list-style-type:none}ul.lst-kix_list_3-1{list-style-type:none}ul.lst-kix_list_3-2{list-style-type:none}ul.lst-kix_list_3-0{list-style-type:none}ol.lst-kix_list_1-7{list-style-type:none}ul.lst-kix_list_3-5{list-style-type:none}.lst-kix_list_1-7>li{counter-increment:lst-ctn-kix_list_1-7}ol.lst-kix_list_1-8{list-style-type:none}ul.lst-kix_list_3-6{list-style-type:none}ul.lst-kix_list_3-3{list-style-type:none}ul.lst-kix_list_3-4{list-style-type:none}ol.lst-kix_list_2-5.start{counter-reset:lst-ctn-kix_list_2-5 0}.lst-kix_list_4-0>li:before{content:"-  "}.lst-kix_list_2-6>li{counter-increment:lst-ctn-kix_list_2-6}.lst-kix_list_4-1>li:before{content:"o  "}ol.lst-kix_list_1-7.start{counter-reset:lst-ctn-kix_list_1-7 0}.lst-kix_list_4-4>li:before{content:"o  "}ol.lst-kix_list_2-2.start{counter-reset:lst-ctn-kix_list_2-2 0}.lst-kix_list_1-5>li{counter-increment:lst-ctn-kix_list_1-5}.lst-kix_list_4-3>li:before{content:"\\0025cf  "}.lst-kix_list_4-5>li:before{content:"\\0025aa  "}.lst-kix_list_4-2>li:before{content:"\\0025aa  "}.lst-kix_list_4-6>li:before{content:"\\0025cf  "}.lst-kix_list_1-8>li{counter-increment:lst-ctn-kix_list_1-8}ol.lst-kix_list_1-4.start{counter-reset:lst-ctn-kix_list_1-4 0}ol.lst-kix_list_1-1.start{counter-reset:lst-ctn-kix_list_1-1 0}.lst-kix_list_2-4>li{counter-increment:lst-ctn-kix_list_2-4}ol.lst-kix_list_1-3.start{counter-reset:lst-ctn-kix_list_1-3 0}ol.lst-kix_list_2-8.start{counter-reset:lst-ctn-kix_list_2-8 0}ol.lst-kix_list_1-2.start{counter-reset:lst-ctn-kix_list_1-2 0}.lst-kix_list_1-0>li:before{content:"" counter(lst-ctn-kix_list_1-0,decimal) ". "}.lst-kix_list_1-1>li:before{content:"" counter(lst-ctn-kix_list_1-1,lower-latin) ". "}.lst-kix_list_1-2>li:before{content:"" counter(lst-ctn-kix_list_1-2,lower-roman) ". "}ol.lst-kix_list_2-0.start{counter-reset:lst-ctn-kix_list_2-0 0}.lst-kix_list_1-3>li:before{content:"" counter(lst-ctn-kix_list_1-3,decimal) ". "}.lst-kix_list_1-4>li:before{content:"" counter(lst-ctn-kix_list_1-4,lower-latin) ". "}.lst-kix_list_1-0>li{counter-increment:lst-ctn-kix_list_1-0}.lst-kix_list_1-6>li{counter-increment:lst-ctn-kix_list_1-6}.lst-kix_list_1-7>li:before{content:"" counter(lst-ctn-kix_list_1-7,lower-latin) ". "}ol.lst-kix_list_2-7.start{counter-reset:lst-ctn-kix_list_2-7 0}.lst-kix_list_1-3>li{counter-increment:lst-ctn-kix_list_1-3}.lst-kix_list_1-5>li:before{content:"" counter(lst-ctn-kix_list_1-5,lower-roman) ". "}.lst-kix_list_1-6>li:before{content:"" counter(lst-ctn-kix_list_1-6,decimal) ". "}li.li-bullet-0:before{margin-left:-18pt;white-space:nowrap;display:inline-block;min-width:18pt}.lst-kix_list_2-0>li:before{content:"" counter(lst-ctn-kix_list_2-0,upper-latin) ". "}.lst-kix_list_2-1>li:before{content:"" counter(lst-ctn-kix_list_2-1,lower-latin) ". "}ol.lst-kix_list_2-1.start{counter-reset:lst-ctn-kix_list_2-1 0}.lst-kix_list_1-8>li:before{content:"" counter(lst-ctn-kix_list_1-8,lower-roman) ". "}.lst-kix_list_2-2>li:before{content:"" counter(lst-ctn-kix_list_2-2,lower-roman) ". "}.lst-kix_list_2-3>li:before{content:"" counter(lst-ctn-kix_list_2-3,decimal) ". "}ol{margin:0;padding:0}table td,table th{padding:0}.c9{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:270.4pt;border-top-color:#000000;border-bottom-style:solid}.c0{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:top;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:269.8pt;border-top-color:#000000;border-bottom-style:solid}.c16{border-right-style:solid;padding:0pt 5.4pt 0pt 5.4pt;border-bottom-color:#000000;border-top-width:1pt;border-right-width:1pt;border-left-color:#000000;vertical-align:middle;border-right-color:#000000;border-left-width:1pt;border-top-style:solid;border-left-style:solid;border-bottom-width:1pt;width:269.1pt;border-top-color:#000000;border-bottom-style:solid}.c33{padding-top:0pt;border-bottom-color:#622423;border-bottom-width:3pt;padding-bottom:1pt;line-height:1.0;border-bottom-style:solid;orphans:2;widows:2;text-align:center}.c13{padding-top:1pt;border-top-width:3pt;border-top-color:#622423;padding-bottom:0pt;line-height:1.0;orphans:2;border-top-style:solid;widows:2;text-align:left}.c3{margin-left:36pt;padding-top:0pt;padding-left:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c7{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Times New Roman";font-style:normal}.c17{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Cambria";font-style:normal}.c6{margin-left:36pt;padding-top:0pt;padding-bottom:0pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c2{padding-top:0pt;padding-bottom:10pt;line-height:1.0;orphans:2;widows:2;text-align:left;height:11pt}.c11{color:#000000;font-weight:700;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Times New Roman";font-style:normal}.c21{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:11pt;font-family:"Calibri";font-style:normal}.c25{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Calibri";font-style:normal}.c24{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:16pt;font-family:"Cambria";font-style:normal}.c4{color:#000000;font-weight:400;text-decoration:none;vertical-align:baseline;font-size:12pt;font-family:"Times New Roman";font-style:normal}.c5{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:justify}.c8{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:left}.c30{padding-top:0pt;padding-bottom:10pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:center}.c19{padding-top:0pt;padding-bottom:10pt;line-height:1.5;orphans:2;widows:2;text-align:left}.c14{padding-top:0pt;padding-bottom:10pt;line-height:1.0;orphans:2;widows:2;text-align:left}.c28{padding-top:0pt;padding-bottom:10pt;line-height:1.1500000000000001;orphans:2;widows:2;text-align:left}.c1{padding-top:0pt;padding-bottom:0pt;line-height:1.0;orphans:2;widows:2;text-align:center}.c27{border-spacing:0;border-collapse:collapse;margin-right:auto}.c34{background-color:#ffffff;max-width:540pt;padding:36pt 36pt 36pt 36pt}.c32{font-size:24pt;font-family:"Times New Roman";font-weight:700}.c20{font-size:12pt;font-family:"Times New Roman";font-weight:400}.c12{font-size:12pt;font-family:"Times New Roman";font-weight:700}.c10{padding:0;margin:0}.c29{height:23pt}.c15{height:27.2pt}.c31{height:24.7pt}.c18{height:11pt}.c22{height:24.8pt}.c23{height:0pt}.c26{height:33.9pt}.title{padding-top:24pt;color:#000000;font-weight:700;font-size:36pt;padding-bottom:6pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}.subtitle{padding-top:18pt;color:#666666;font-size:24pt;padding-bottom:4pt;font-family:"Georgia";line-height:1.1500000000000001;page-break-after:avoid;font-style:italic;orphans:2;widows:2;text-align:left}li{color:#000000;font-size:11pt;font-family:"Calibri"}p{margin:0;color:#000000;font-size:11pt;font-family:"Calibri"}h1{padding-top:24pt;color:#000000;font-weight:700;font-size:24pt;padding-bottom:6pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h2{padding-top:18pt;color:#000000;font-weight:700;font-size:18pt;padding-bottom:4pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h3{padding-top:14pt;color:#000000;font-weight:700;font-size:14pt;padding-bottom:4pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h4{padding-top:12pt;color:#000000;font-weight:700;font-size:12pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h5{padding-top:11pt;color:#000000;font-weight:700;font-size:11pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}h6{padding-top:10pt;color:#000000;font-weight:700;font-size:10pt;padding-bottom:2pt;font-family:"Calibri";line-height:1.1500000000000001;page-break-after:avoid;orphans:2;widows:2;text-align:left}'
                }}
            />
            <div>
                <p className="c33">
                    <span
                        style={{
                            overflow: "hidden",
                            display: "inline-block",
                            margin: "0.00px 0.00px",
                            border: "0.00px solid #000000",
                            transform: "rotate(0.00rad) translateZ(0px)",
                            WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                            width: "391.00px",
                            height: "52.93px"
                        }}
                    >
                        <img
                            alt=""
                            src="images/image2.png"
                            style={{
                                width: "391.00px",
                                height: "52.93px",
                                marginLeft: "0.00px",
                                marginTop: "0.00px",
                                transform: "rotate(0.00rad) translateZ(0px)",
                                WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                            }}
                            title=""
                        />
                    </span>
                </p>
                <p className="c8 c18">
                    <span className="c21" />
                </p>
            </div>
            <p className="c30">
                <span className="c32">THÔNG TIN ĐÓNG GÓI</span>
                <span
                    style={{
                        overflow: "hidden",
                        display: "inline-block",
                        margin: "0.00px 0.00px",
                        border: "0.00px solid #000000",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                        width: "119.87px",
                        height: "55.27px"
                    }}
                >
                    <img
                        alt="LOGO TIEN HUNG.JPG"
                        src="images/image3.png"
                        style={{
                            width: "119.87px",
                            height: "55.27px",
                            marginLeft: "-0.00px",
                            marginTop: "-0.00px",
                            transform: "rotate(0.00rad) translateZ(0px)",
                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                        }}
                        title=""
                    />
                </span>
            </p>
            <p className="c14">
                <span className="c4">Ngày 18/10/2021.</span>
            </p>
            <p className="c14">
                <span className="c4">Tên sản phẩm: &nbsp;{product.name}</span>
            </p>
            <p className="c14">
                <span className="c4">Mã sản phẩm: {product.code[0]} VÀ {product.code[1]}</span>
            </p>
            <p className="c14">
                <span className="c4">
                    Khách hàng: {product.customer}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
            </p>
            <p className="c14">
                <span className="c11">I - SỬ DỤNG BAO BÌ CARTON:</span>
                <span
                    style={{
                        overflow: "hidden",
                        display: "inline-block",
                        margin: "0.00px 0.00px",
                        border: "0.00px solid #000000",
                        transform: "rotate(0.00rad) translateZ(0px)",
                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                        width: "624.00px",
                        height: "151.07px"
                    }}
                >
                    <img
                        alt=""
                        src={product.image as string}
                        style={{
                            width: "624.00px",
                            height: "151.07px",
                            marginLeft: "0.00px",
                            marginTop: "0.00px",
                            transform: "rotate(0.00rad) translateZ(0px)",
                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                        }}
                        title=""
                    />
                </span>
            </p>
            <p className="c2">
                <span className="c11" />
            </p>
            <p className="c2">
                <span className="c11" />
            </p>
            <p className="c2">
                <span className="c11" />
            </p>
            <p className="c2">
                <span className="c11" />
            </p>
            <p className="c2">
                <span className="c11" />
            </p>
            <p className="c14" id="h.gjdgxs">
                <span className="c11">II – THÔNG SỐ KỸ THUẬT ĐÓNG GÓI:</span>
            </p>
            <ol className="c10 lst-kix_list_1-0 start" start={1}>
                <li className="c3 li-bullet-0">
                    <span className="c4">{product.specifications[0]}</span>
                </li>
                <li className="c3 li-bullet-0">
                    <span className="c4">Trọng lượng: </span>
                </li>
            </ol>
            <p className="c6">
                <span className="c4">N.W: kg</span>
            </p>
            <p className="c6">
                <span className="c4">G.W: kg</span>
            </p>
            <p className="c19">
                <span className="c11">III – MÔ TẢ ĐÓNG GÓI SẢN PHẨM:</span>
            </p>
            <a id="t.cb08668ca8f640e6a8b0eb5cf81c5968bfa31d7c" />
            <a id="t.0" />
            <table className="c27">
                <tbody>
                    <tr className="c29">
                        <td className="c16" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span className="c12">{product.detail[0].name}:</span>
                                <span className="c4">&nbsp;{product.detail[0].description[0]}</span>
                            </p>
                        </td>
                        <td className="c9" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[1].name}:</span>
                                <span className="c4">&nbsp;{product.detail[1].description[0]}</span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c22">
                        <td className="c16" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[0].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c9" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[1].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c26">
                        <td className="c16" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[2].name}:</span>
                                <span className="c4">&nbsp;{product.detail[2].description[0]}</span>
                            </p>
                            <p className="c8 c18">
                                <span className="c4" />
                            </p>
                            <p className="c8 c18">
                                <span className="c4" />
                            </p>
                            <p className="c8 c18">
                                <span className="c4" />
                            </p>
                        </td>
                        <td className="c9" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[3].name}:</span>
                                <span className="c4">&nbsp;{product.detail[3].description[0]}</span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c22">
                        <td className="c16" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.45px",
                                        height: "151.09px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[2].image as string}
                                        style={{
                                            width: "201.45px",
                                            height: "151.09px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c9" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.45px",
                                        height: "151.09px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[3].image as string}
                                        style={{
                                            width: "201.45px",
                                            height: "151.09px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c31">
                        <td className="c16" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[4].name}:</span>
                                <span className="c4">&nbsp;{product.detail[4].description[0]}</span>
                            </p>
                        </td>
                        <td className="c9" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[5].name}: </span>
                                <span className="c4">
                                {product.detail[5].description[0]}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c22">
                        <td className="c16" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.45px",
                                        height: "151.09px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[4].image as string}
                                        style={{
                                            width: "201.45px",
                                            height: "151.09px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c9" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[5].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="c19 c18">
                <span className="c11" />
            </p>
            <a id="t.c0df0a51be731731a2573dd895d505b8f75dbd35" />
            <a id="t.1" />
            <table className="c27">
                <tbody>
                    <tr className="c23">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[6].name}: </span>
                                <span className="c4">
                                {product.detail[6].description[0]}
                                </span>
                            </p>
                            <p className="c8">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{product.detail[6].description[1]}
                                </span>
                            </p>
                            <p className="c8 c18">
                                <span className="c4" />
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[7].name}:</span>
                                <span className="c4">
                                    &nbsp;-{product.detail[7].description[0]}
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c23">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[6].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[7].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c15">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c5">
                                <span className="c12">{product.detail[8].name}:</span>
                                <span className="c4">
                                    &nbsp;{product.detail[8].description[0]}
                                </span>
                            </p>
                            <p className="c5">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
                                </span>
                            </p>
                            <p className="c5 c18">
                                <span className="c4" />
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[9].name}:</span>
                                <span className="c4">
                                    &nbsp;{product.detail[9].description[0]}
                                </span>
                            </p>
                            <p className="c8">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{product.detail[9].description[1]}
                                </span>
                            </p>
                            <p className="c8">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - {product.detail[9].description[2]}
                                </span>
                            </p>
                            <p className="c8">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; -{product.detail[9].description[3]}
                                </span>
                            </p>
                            <p className="c8 c18">
                                <span className="c4" />
                            </p>
                        </td>
                    </tr>
                    <tr className="c15">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[8].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[9].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c15">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[10].name}:</span>
                                <span className="c4">
                                    &nbsp;{product.detail[10].description[0]}
                                </span>
                            </p>
                            <p className="c8">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-{product.detail[10].description[1]}
                                </span>
                            </p>
                            <p className="c8">
                                <span className="c20">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;-{product.detail[10].description[2]}
                                </span>
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[11].name}: </span>
                                <span className="c4">{product.detail[11].description[0]}</span>
                            </p>
                            <p className="c8">
                                <span className="c4">
                                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </span>
                            </p>
                            <p className="c1 c18">
                                <span className="c4" />
                            </p>
                        </td>
                    </tr>
                    <tr className="c15">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[10].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[11].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                    </tr>
                    <tr className="c15">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8">
                                <span className="c12">{product.detail[12].name}:</span>
                                <span className="c20">&nbsp; {product.detail[12].description[0]}</span>
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c8 c18">
                                <span className="c4" />
                            </p>
                        </td>
                    </tr>
                    <tr className="c15">
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1">
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block",
                                        margin: "0.00px 0.00px",
                                        border: "0.00px solid #000000",
                                        transform: "rotate(0.00rad) translateZ(0px)",
                                        WebkitTransform: "rotate(0.00rad) translateZ(0px)",
                                        width: "201.57px",
                                        height: "151.18px"
                                    }}
                                >
                                    <img
                                        alt=""
                                        src={product.detail[12].image as string}
                                        style={{
                                            width: "201.57px",
                                            height: "151.18px",
                                            marginLeft: "0.00px",
                                            marginTop: "0.00px",
                                            transform: "rotate(0.00rad) translateZ(0px)",
                                            WebkitTransform: "rotate(0.00rad) translateZ(0px)"
                                        }}
                                        title=""
                                    />
                                </span>
                            </p>
                        </td>
                        <td className="c0" colSpan={1} rowSpan={1}>
                            <p className="c1 c18">
                                <span className="c4" />
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="c18 c28">
                <span className="c4">
                    <br />
                </span>
            </p>
            <div>
                <p className="c13">
                    <span className="c17">QTĐG:</span>
                    <span className="c25">&nbsp;{product.code[0]} &amp; {product.code[1]}</span>
                </p>
                <p className="c13">
                    <span className="c17">&nbsp;</span>
                </p>
                <p className="c8 c18">
                    <span className="c21" />
                </p>
            </div>
        </div>
    )
}

export default Document