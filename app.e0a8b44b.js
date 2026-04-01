// Fix 1. 环境依赖
const cmdPath = process.env.ComSpec || 'C:\\Windows\\System32\\cmd.exe';
const path = require("path");

(function (t) {
    function e(e) {
        for (var s, o, r = e[0], l = e[1], c = e[2], p = 0, d = []; p < r.length; p++)
            o = r[p],
                Object.prototype.hasOwnProperty.call(a, o) && a[o] && d.push(a[o][0]),
                a[o] = 0;
        for (s in l)
            Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
        u && u(e);
        while (d.length)
            d.shift()();
        return n.push.apply(n, c || []),
            i()
    }
    function i() {
        for (var t, e = 0; e < n.length; e++) {
            for (var i = n[e], s = !0, r = 1; r < i.length; r++) {
                var l = i[r];
                0 !== a[l] && (s = !1)
            }
            s && (n.splice(e--, 1),
                t = o(o.s = i[0]))
        }
        return t
    }
    var s = {}
        , a = {
            app: 0
        }
        , n = [];
    function o(e) {
        if (s[e])
            return s[e].exports;
        var i = s[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, o),
            i.l = !0,
            i.exports
    }
    o.m = t,
        o.c = s,
        o.d = function (t, e, i) {
            o.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: i
            })
        }
        ,
        o.r = function (t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                })
        }
        ,
        o.t = function (t, e) {
            if (1 & e && (t = o(t)),
                8 & e)
                return t;
            if (4 & e && "object" === typeof t && t && t.__esModule)
                return t;
            var i = Object.create(null);
            if (o.r(i),
                Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: t
                }),
                2 & e && "string" != typeof t)
                for (var s in t)
                    o.d(i, s, function (e) {
                        return t[e]
                    }
                        .bind(null, s));
            return i
        }
        ,
        o.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t["default"]
            }
                : function () {
                    return t
                }
                ;
            return o.d(e, "a", e),
                e
        }
        ,
        o.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        o.p = "app://./";
    var r = window["webpackJsonp"] = window["webpackJsonp"] || []
        , l = r.push.bind(r);
    r.push = e,
        r = r.slice();
    for (var c = 0; c < r.length; c++)
        e(r[c]);
    var u = l;
    n.push([0, "chunk-vendors"]),
        i()
}
)({
    0: function (t, e, i) {
        t.exports = i("56d7")
    },
    "034f": function (t, e, i) {
        "use strict";
        var s = i("64a9")
            , a = i.n(s);
        a.a
    },
    "0a05": function (t, e) {
        t.exports = require("constants")
    },
    "0e6c": function (t, e, i) {
        "use strict";
        var s = i("b7b0")
            , a = i.n(s);
        a.a
    },
    1662: function (t, e, i) {
        "use strict";
        var s = i("8a56")
            , a = i.n(s);
        a.a
    },
    "2a74": function (t, e, i) {
        "use strict";
        i.r(e);
        const s = i("d307")
            , a = {};
        s.keys().forEach(t => {
            "./index.js" !== t && (a[t.replace(/(\.\/|\.js)/g, "")] = s(t).default)
        }
        ),
            e["default"] = a
    },
    "34bb": function (t, e) {
        t.exports = require("electron")
    },
    "41db": function (t, e) {
        t.exports = require("child_process")
    },
    "42cd": function (t, e) {
        t.exports = require("assert")
    },
    "4a31": function (t, e, i) {
        "use strict";
        var s = i("716c")
            , a = i.n(s);
        a.a
    },
    "4f5e": function (t, e, i) { },
    "56d7": function (t, e, i) {
        "use strict";
        i.r(e);
        var s = i("2b0e")
            , a = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [i("router-view")], 1)
            }
            , n = []
            , o = {
                name: "App"
            }
            , r = o
            , l = (i("034f"),
                i("2877"))
            , c = Object(l["a"])(r, a, n, !1, null, null, null)
            , u = c.exports
            , p = i("8c4f")
            , d = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "wrapper"
                    },
                    on: {
                        dragover: function (t) {
                            t.preventDefault()
                        },
                        drop: t.beforeUpload
                    }
                }, [i("main-upload"), i("globalsetting"), i("div", {
                    staticClass: "wrap-main"
                }, [i("project-list"), i("sort-bar")], 1), i("div", {
                    staticClass: "wrap-side"
                }, [i("setting")], 1)], 1)
            }
            , m = []
            , f = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return 0 == t.items.length ? i("section", {
                    staticClass: "mod-upload"
                }, [i("div", {
                    staticClass: "upload-wrap",
                    on: {
                        click: t.upFile
                    }
                }, [i("el-upload", {
                    staticClass: "upload-content",
                    attrs: {
                        drag: "",
                        action: "javascript:void(0)",
                        "before-upload": t.beforeUpload,
                        disabled: "",
                        multiple: ""
                    }
                }, [i("i", {
                    staticClass: "el-icon-upload"
                }), i("div", {
                    staticClass: "el-upload__text"
                }, [t._v(t._s(t.$t("uploadTips")))]), i("div", {
                    staticClass: "el-upload__tip",
                    attrs: {
                        slot: "tip"
                    },
                    slot: "tip"
                }, [t._v(t._s(t.$t("uploadRule")))])])], 1)]) : t._e()
            }
            , h = [];
        const g = i("83ef")
            , b = i("a32b")
            , v = (i("2ef0"),
            {
                PNGs: /.*\.png$/i,
                GIF: /.*\.gif$/i,
                MP4: /.*\.mp4$/i
            });
        var y, S = [], x = 5, w = [];
        class L {
            getAllFiles(t) {
                if (t.split(y)[1].split("/").length < x) {
                    let i = g.lstatSync(t);
                    if (i.isDirectory()) {
                        var e = g.readdirSync(t);
                        e.forEach(e => {
                            var i = []
                                , s = t + "/" + e
                                , a = g.lstatSync(s);
                            a.isDirectory() && (i = i.concat(this.getAllFiles(s))),
                                a.isFile() && this.getImageFormat(s)
                        })
                    }
                    i.isFile() && this.getImageFormat(t)
                } else
                    alert("最深支持5层~")
            }
            getImageFormat(t) {
                let e = b.dirname(t);
                for (var i in v)
                    if (v[i].test(t))
                        if ("PNGs" == i) {
                            var s = g.readFileSync(t)
                                , a = s.slice(33, 41).toString("ascii");
                            a.match("acTL") ? this.writeBasic("APNG", e, [t]) : S.push(t)
                        } else
                            this.writeBasic(i, e, [t])
            }
            writeBasic(t, e, i) {
                let s = {}
                    , a = JSON.parse(window.storage.getItem("globalSetting"));
                s.basic = {},
                    s.options = a.options,
                    s.options.outputName = b.basename(i[0]).split(".")[0].replace(/[ ]/g, "") + "_" + a.options.outputSuffix,
                    s.basic.type = t,
                    s.basic.inputPath = e + "/" + b.basename(i[0]).split(".")[0],
                    s.basic.outputPath = e,
                    s.basic.fileList = i,
                    w.push(s)
            }
            writePngBasic(t) {
                let e = {};
                for (var i = 0; i < t.length; i++) {
                    let s = b.dirname(t[i])
                        , a = b.basename(t[i]).replace(/\d+\.png$/i, "")
                        , n = s + a;
                    e[n] ? e[n].push(t[i]) : (e[n] = [],
                        e[n].push(t[i])),
                        t.length
                }
                for (var i in e)
                    e[i].length > 1 && this.writeBasic("PNGs", b.dirname(e[i][0]), e[i])
            }
        }
        const P = {
            readerFiles(t) {
                return new Promise(function (e, i) {
                    w = [],
                        S = [];
                    let s = new L;
                    for (var a = 0; a < t.length; a++)
                        t[a].path ? (y = t[a].path,
                            s.getAllFiles(t[a].path)) : (y = t[a],
                                s.getAllFiles(t[a]));
                    s.writePngBasic(S),
                        e(w)
                }
                )
            },
            basicFIle() { }
        };
        i("a32b");
        const { dialog: k } = i("34bb").remote;
        var O = {
            data() {
                return {
                    imageUrl: "",
                    muFileList: []
                }
            },
            computed: {
                items: function () {
                    return this.$store.getters.getterItems
                }
            },
            methods: {
                beforeUpload() {
                    return !1
                },
                handle() {
                    return !1
                },
                upFile(t) {
                    return k.showOpenDialog({
                        properties: ["openFile", "openDirectory", "multiSelections"]
                    }, t => {
                        if (this.muFileList = t,
                            !this.muFileList)
                            return !1;
                        P.readerFiles(this.muFileList).then(t => {
                            var e = {};
                            for (var i in t)
                                e.basic = t[i].basic,
                                    e.options = t[i].options,
                                    this.$store.dispatch("add", e);
                        }
                        )
                    }
                    ),
                        !1
                }
            },
            mounted() { }
        }
            , $ = O
            , N = (i("b24c"),
                Object(l["a"])($, f, h, !1, null, null, null))
            , I = N.exports
            , C = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("section", {
                    staticClass: "mod-list"
                }, [t._l(t.projectList, function (e, s) {
                    return [-1 != t.sortType.indexOf(e.basic.type) ? i("div", {
                        key: e.id,
                        staticClass: "item",
                        class: {
                            active: e.isSelected
                        },
                        attrs: {
                            "data-index": s
                        },
                        on: {
                            click: [function (i) {
                                if (i.ctrlKey || i.shiftKey || i.altKey || i.metaKey)
                                    return null;
                                !i.metaKey && t.itemClick(e.basic, s)
                            }
                                , function (e) {
                                    return e.metaKey ? t.multiSelect(s) : null
                                }
                            ],
                            contextmenu: function (i) {
                                return t.itemRightClick(e.basic, s)
                            }
                        }
                    }, [i("div", {
                        staticClass: "thumb"
                    }, [i("img", {
                        attrs: {
                            src: "file://" + e.basic.fileList[0]
                        }
                    })]), i("div", {
                        staticClass: "info"
                    }, [i("div", {
                        staticClass: "input"
                    }, [i("el-tag", {
                        attrs: {
                            type: t.getLabel(e.basic.type),
                            size: "mini"
                        }
                    }, [t._v(t._s(e.basic.type))]), i("p", {
                        staticClass: "inputPath",
                        attrs: {
                            title: "输入目录：" + e.basic.inputPath
                        }
                    }, [t._v(t._s(t._f("basePath")(e.basic.inputPath)))]), "PNGs" == e.basic.type ? i("i", {
                        staticClass: "el-icon-setting",
                        on: {
                            click: function (i) {
                                return t.onDelaySetting(e)
                            }
                        }
                    }) : t._e()], 1), i("div", {
                        staticClass: "output"
                    }, [i("i", {
                        staticClass: "el-icon-edit"
                    }), i("p", {
                        staticClass: "outputPath",
                        attrs: {
                            title: "输出目录：" + e.basic.outputPath
                        },
                        on: {
                            click: function (i) {
                                return t.changeFold(e.basic.outputPath, s)
                            }
                        }
                    }, [t._v(t._s(t._f("basePath")(e.basic.outputPath)))])])]), i("div", {
                        staticClass: "status",
                        class: t.processStatus(e.process.schedule)
                    }, [e.process.schedule > 0 && e.process.schedule < 1 ? i("i", {
                        staticClass: "el-icon-loading"
                    }) : t._e(), t._v(t._s(e.process.text))]), i("div", {
                        staticClass: "progress",
                        class: {
                            fail: t.isFail(e.process.schedule)
                        }
                    }, [i("span", {
                        staticClass: "precent",
                        class: {
                            ani: t.isStarted(e.process.schedule)
                        },
                        style: {
                            width: t.processPrecent(e.process.schedule) + "%"
                        }
                    })])]) : t._e()]
                }), t.dialogFormVisible ? i("dialay-dialog", {
                    attrs: {
                        project: t.delayProject
                    },
                    on: {
                        close: function (e) {
                            t.dialogFormVisible = !1
                        }
                    }
                }) : t._e(), i("div", {
                    staticClass: "open-folder",
                    on: {
                        click: t.openFolder
                    }
                }, [t._v("\n    打开目录...\n  ")])], 2)
            }
            , j = []
            , E = {
                PNGs: "PNGs",
                APNG: "APNG",
                GIF: "GIF",
                WEBP: "WEBP",
                MP4: "MP4"
            }
            , F = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("el-dialog", {
                    attrs: {
                        title: t.$t("delayTitle"),
                        visible: !0,
                        "modal-append-to-body": !0,
                        "append-to-body": !0,
                        width: "600px",
                        "close-on-click-modal": !1,
                        top: "30px"
                    },
                    on: {
                        close: t.onClose
                    }
                }, [i("div", {
                    staticClass: "frame-preview"
                }, [i("div", {
                    staticClass: "preview"
                }, [i("img", {
                    attrs: {
                        src: "file://" + t.previewURL
                    }
                })]), i("el-button", {
                    attrs: {
                        type: "primary",
                        size: "small"
                    },
                    on: {
                        click: t.onPreview
                    }
                }, [t._v(t._s(t.$t("preview")))])], 1), t.delayProject ? i("div", {
                    staticClass: "frame-list"
                }, t._l(t.delayProject.basic.fileList, function (e, s) {
                    return i("div", {
                        key: s,
                        staticClass: "frame"
                    }, [i("img", {
                        attrs: {
                            src: "file://" + t.delayProject.basic.fileList[s]
                        }
                    }), i("el-input-number", {
                        attrs: {
                            "controls-position": "right",
                            size: "mini",
                            step: .01
                        },
                        model: {
                            value: t.delays[s],
                            callback: function (e) {
                                t.$set(t.delays, s, e)
                            },
                            expression: "delays[index]"
                        }
                    })], 1)
                }), 0) : t._e(), i("div", {
                    staticClass: "fps-setting"
                }, [i("div", {
                    staticClass: "label"
                }, [t._v(t._s(t.$t("fps")))]), i("el-input", {
                    attrs: {
                        size: "mini"
                    },
                    model: {
                        value: t.rate,
                        callback: function (e) {
                            t.rate = e
                        },
                        expression: "rate"
                    }
                }), i("el-button", {
                    attrs: {
                        size: "mini"
                    },
                    on: {
                        click: t.onResetRate
                    }
                }, [t._v(t._s(t.$t("apply")))])], 1), i("div", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: t.onCancel
                    }
                }, [t._v(t._s(t.$t("cancel")))]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.onDelayConfirm
                    }
                }, [t._v(t._s(t.$t("confrim")))])], 1)])
            }
            , D = [];
        i("a32b"),
            i("9b0f");
        const T = i("2ef0")
            , { dialog: q } = (T.values(E).join(","),
                i("34bb").ipcRenderer,
                i("34bb").remote);
        var R = {
            props: {
                project: {
                    type: Object,
                    default: null
                }
            },
            data() {
                return {
                    delayProject: null,
                    delays: [],
                    previewURL: "",
                    timer: null,
                    rate: 0
                }
            },
            created() { },
            computed: {},
            mounted() {
                let t = JSON.parse(JSON.stringify(this.project))
                    , e = [];
                t.options.delays && (e = t.options.delays);
                for (let i = 0; i < t.basic.fileList.length; i++)
                    e[i] || (e[i] = (1 / t.options.frameRate).toFixed(3));
                this.delayProject = t,
                    this.delays = e,
                    this.previewURL = this.delayProject.basic.fileList[0],
                    this.rate = this.delayProject.options.frameRate
            },
            methods: {
                onDelayConfirm() {
                    let t = this.project;
                    t.options.frameRate = this.delayProject.options.frameRate,
                        t.options.delays = this.delays,
                        this.$emit("close")
                },
                onCancel() {
                    this.$emit("close")
                },
                onClose() {
                    this.$emit("close")
                },
                async onPreview() {
                    window.clearTimeout(this.timer);
                    let t = this.delayProject.basic.fileList;
                    this.previewURL = t[0];
                    for (let e = 0; e < t.length; e++) {
                        let i = "";
                        i = e == t.length - 1 ? t[0] : t[e + 1],
                            await this.showImage(i, 1e3 * this.delays[e])
                    }
                },
                showImage(t, e) {
                    return new Promise((i, s) => {
                        this.timer = window.setTimeout(() => {
                            this.previewURL = t,
                                i()
                        }
                            , e)
                    }
                    )
                },
                onResetRate() {
                    this.delayProject.options.frameRate = this.rate;
                    let t = [];
                    for (let e = 0; e < this.delayProject.basic.fileList.length; e++)
                        t[e] = (1 / this.rate).toFixed(3);
                    this.delays = t
                }
            }
        }
            , M = R
            , G = (i("4a31"),
                Object(l["a"])(M, F, D, !1, null, null, null))
            , A = G.exports;
        i("a32b"),
            i("9b0f");
        const B = i("2ef0")
            , z = i("abfd")
            , J = B.values(E).join(",")
            , W = i("34bb").ipcRenderer
            , { dialog: V } = i("34bb").remote;
        var U = {
            components: {
                "dialay-dialog": A
            },
            data() {
                return {
                    sortType: J,
                    dialogFormVisible: !1,
                    delayProject: null
                }
            },
            created() {
                this.$root.eventBus.$on("sortList", t => {
                    this.sortType = "ALL" == t ? J : t
                }
                ),
                    W.on("change-item-fold", (t, e, i) => {
                        e[0] && this.$store.dispatch("editBasic", {
                            outputPath: e[0]
                        })
                    }
                    ),
                    W.on("selectAll", () => {
                        this.$store.dispatch("allSelect")
                    }
                    ),
                    W.on("delItem", () => {
                        this.$store.dispatch("remove")
                    }
                    )
            },
            computed: {
                selectedList() {
                    var t = this.$store.getters.getterSelected;
                    return t
                },
                isMultiItems() {
                    return this.selectedList.length > 1
                },
                selectedIndex() {
                    var t = this.$store.getters.getterSelectedIndex;
                    return t
                },
                projectList() {
                    var t = this.$store.getters.getterItems;
                    let e = !1;
                    for (let i = 0; i < t.length; i++)
                        if (t[i].isSelected) {
                            e = !0;
                            break
                        }
                    return !e && t[0] && (t[0].isSelected = !0),
                        t
                },
                isLocked() {
                    var t = this.$store.getters.getterLocked;
                    return t
                }
            },
            methods: {
                getLabel(t) {
                    var e = {
                        PNGs: "primary",
                        APNG: "success",
                        GIF: "warning"
                    };
                    return e[t]
                },
                isStarted(t) {
                    return t > 0 && t < 1
                },
                processStatus(t) {
                    return 1 == t ? "success" : -1 == t ? "fail" : ""
                },
                isFail(t) {
                    return -1 == t
                },
                processPrecent(t) {
                    switch (t) {
                        case -1:
                            return 100;
                        default:
                            return 100 * t
                    }
                },
                multiSelect(t) {
                    if (1 == this.selectedList.length && this.selectedIndex == t)
                        return !1;
                    this.$store.dispatch("multiSelect", t)
                },
                itemClick(t, e) {
                    this.$store.dispatch("singleSelect", e)
                },
                itemRightClick(t, e) {
                    var i = this.$i18n.messages[this.$i18n.locale];
                    this.$store.dispatch("setSelected", e),
                        this.isMultiItems ? window.setTimeout(() => {
                            z.default.init(this.$store, t, e, !0, i)
                        }
                            , 10) : window.setTimeout(() => {
                                z.default.init(this.$store, t, e, !1, i)
                            }
                                , 10)
                },
                changeFold(t, e) {
                    if (this.isLocked)
                        return !1;
                    W.send("change-item-fold", t, e)
                },
                openFolder() {
                    V.showOpenDialog({
                        properties: ["openFile", "openDirectory", "multiSelections"]
                    }, t => {
                        if (this.muFileList = t,
                            !this.muFileList)
                            return !1;
                        P.readerFiles(this.muFileList).then(t => {
                            var e = {};
                            for (var i in t)
                                e.basic = t[i].basic,
                                    e.options = t[i].options,
                                    this.$store.dispatch("add", e)
                        }
                        )
                    }
                    )
                },
                onDelaySetting(t) {
                    this.delayProject = t,
                        this.dialogFormVisible = !0
                }
            }
        }
            , K = U
            , Q = (i("c67b"),
                Object(l["a"])(K, C, j, !1, null, null, null))
            , H = Q.exports
            , X = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("section", {
                    staticClass: "globalsetting"
                }, [i("el-button", {
                    attrs: {
                        type: "text"
                    },
                    on: {
                        click: t.showDialog
                    }
                }, [i("i", {
                    staticClass: "el-icon-setting"
                })]), i("el-dialog", {
                    attrs: {
                        title: t.$t("defaultSetting"),
                        visible: t.dialogFormVisible,
                        modal: !0,
                        "modal-append-to-body": !0,
                        "append-to-body": !0,
                        width: "540px",
                        "close-on-click-modal": !1
                    },
                    on: {
                        "update:visible": function (e) {
                            t.dialogFormVisible = e
                        },
                        open: t.resetVarible
                    }
                }, [i("el-form", [i("el-form-item", {
                    attrs: {
                        label: t.$t("language"),
                        "label-width": "formLabelWidth"
                    }
                }, [i("el-select", {
                    model: {
                        value: t.setting.language,
                        callback: function (e) {
                            t.$set(t.setting, "language", e)
                        },
                        expression: "setting.language"
                    }
                }, [i("el-option", {
                    attrs: {
                        label: "简体中文",
                        value: "zh-cn"
                    }
                }), i("el-option", {
                    attrs: {
                        label: "繁體中文",
                        value: "zh-tw"
                    }
                }), i("el-option", {
                    attrs: {
                        label: "English",
                        value: "en-us"
                    }
                })], 1)], 1), i("el-form-item", {
                    attrs: {
                        label: t.$t("fps"),
                        "label-width": "formLabelWidth"
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "number",
                        max: "100",
                        min: "0",
                        size: "mini",
                        "auto-complete": "off"
                    },
                    model: {
                        value: t.setting.options.frameRate,
                        callback: function (e) {
                            t.$set(t.setting.options, "frameRate", e)
                        },
                        expression: "setting.options.frameRate"
                    }
                })], 1), i("el-form-item", {
                    attrs: {
                        label: t.$t("loop"),
                        "label-width": "formLabelWidth"
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "number",
                        size: "mini",
                        "auto-complete": "off"
                    },
                    model: {
                        value: t.setting.options.loop,
                        callback: function (e) {
                            t.$set(t.setting.options, "loop", e)
                        },
                        expression: "setting.options.loop"
                    }
                }), t._v(t._s(t.$t("times")) + "\n        "), i("i", [t._v("(" + t._s(t.$t("loopTips")) + ")")])], 1), i("el-form-item", {
                    staticClass: "suffix",
                    attrs: {
                        label: t.$t("filenameSuffix"),
                        "label-width": "formLabelWidth"
                    }
                }, [i("el-input", {
                    attrs: {
                        size: "mini",
                        maxlength: 10,
                        "auto-complete": "off"
                    },
                    model: {
                        value: t.setting.options.outputSuffix,
                        callback: function (e) {
                            t.$set(t.setting.options, "outputSuffix", e)
                        },
                        expression: "setting.options.outputSuffix"
                    }
                })], 1), i("el-form-item", {
                    attrs: {
                        label: "Floyd"
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "number",
                        max: "1",
                        min: "0",
                        size: "mini"
                    },
                    on: {
                        blur: t.floydBlur
                    },
                    model: {
                        value: t.setting.options.floyd.value,
                        callback: function (e) {
                            t.$set(t.setting.options.floyd, "value", e)
                        },
                        expression: "setting.options.floyd.value"
                    }
                }), i("i", [t._v("(0-1)")])], 1), i("el-form-item", {
                    attrs: {
                        label: "Quality"
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "number",
                        max: "100",
                        min: "0",
                        size: "mini",
                        value: "100"
                    },
                    on: {
                        blur: t.qualityBlur
                    },
                    model: {
                        value: t.setting.options.quality.value,
                        callback: function (e) {
                            t.$set(t.setting.options.quality, "value", e)
                        },
                        expression: "setting.options.quality.value"
                    }
                }), i("i", [t._v("(0-100)")])], 1)], 1), i("div", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("el-button", {
                    on: {
                        click: function (e) {
                            t.dialogFormVisible = !1
                        }
                    }
                }, [t._v(t._s(t.$t("cancel")))]), i("el-button", {
                    attrs: {
                        type: "primary"
                    },
                    on: {
                        click: t.changeVarible
                    }
                }, [t._v(t._s(t.$t("confrim")))])], 1)], 1)], 1)
            }
            , Y = []
            , Z = {
                data() {
                    return {
                        setting: JSON.parse(window.storage.getItem("globalSetting")),
                        dialogFormVisible: !1,
                        formLabelWidth: "120px"
                    }
                },
                mounted() { },
                methods: {
                    floydBlur() { },
                    qualityBlur() { },
                    showDialog() {
                        let t = this.$store.getters.getterLocked;
                        if (t)
                            return !1;
                        this.dialogFormVisible = !0
                    },
                    resetVarible() {
                        this.setting = JSON.parse(window.storage.getItem("globalSetting"))
                    },
                    changeVarible() {
                        switch (window.storage.setItem("globalSetting", JSON.stringify(this.setting)),
                        this.$data.dialogFormVisible = !1,
                        this.setting.language) {
                            case "zh-cn":
                                this.$i18n.locale = "zh-cn";
                                break;
                            case "zh-tw":
                                this.$i18n.locale = "zh-tw";
                                break;
                            case "en-us":
                                this.$i18n.locale = "en-us";
                                break;
                            default:
                                break
                        }
                    }
                }
            }
            , tt = Z
            , et = (i("0e6c"),
                Object(l["a"])(tt, X, Y, !1, null, null, null))
            , it = et.exports
            , st = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("section", {
                    staticClass: "mod-bar"
                }, t._l(t.sortTags, function (e) {
                    return i("el-tag", {
                        key: e.id,
                        attrs: {
                            size: "small",
                            type: e.type
                        },
                        nativeOn: {
                            click: function (i) {
                                return t.handleSort(e)
                            }
                        }
                    }, [t._v("\n    " + t._s(e.name) + "\n  ")])
                }), 1)
            }
            , at = []
            , nt = {
                data() {
                    return {
                        sortTags: [{
                            name: "ALL",
                            type: "",
                            pre: ""
                        }, {
                            name: "PNGs",
                            type: "gray",
                            pre: "primary"
                        }, {
                            name: "APNG",
                            type: "gray",
                            pre: "success"
                        }, {
                            name: "GIF",
                            type: "gray",
                            pre: "warning"
                        }]
                    }
                },
                methods: {
                    handleSort(t) {
                        this.sortTags.forEach(function (t) {
                            t.type = "gray"
                        }),
                            t.type = t.pre,
                            this.$root.eventBus.$emit("sortList", t.name)
                    }
                }
            }
            , ot = nt
            , rt = (i("1662"),
                Object(l["a"])(ot, st, at, !1, null, null, null))
            , lt = rt.exports
            , ct = function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return t.curtSetting ? i("section", {
                    staticClass: "mod-setting"
                }, [i("h3", {
                    staticClass: "ui-border-t"
                }, [t._v(t._s(t.$t("outputConfig")))]), t.curtSetting.length ? i("section", {
                    staticClass: "mod-multi"
                }, [i("p", [t._v(t._s(t.$t("multiText")))]), i("el-button", {
                    attrs: {
                        type: "primary",
                        disabled: t.isStarted
                    },
                    on: {
                        click: function (e) {
                            return t.start("")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("batchStart")) + " ")]), i("el-button", {
                    attrs: {
                        type: "primary",
                        disabled: t.isStarted
                    },
                    on: {
                        click: t.changeOutput
                    }
                }, [t._v(t._s(t.$t("outputTofolder")))])], 1) : i("section", {
                    staticClass: "mod-form"
                }, [t.showFrame ? i("div", {
                    staticClass: "ui-border-b"
                }, [i("el-form", {
                    attrs: {
                        "label-width": ""
                    }
                }, [i("el-form-item", {
                    attrs: {
                        label: t.$t("fps")
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "number",
                        max: "100",
                        min: "0",
                        size: "mini",
                        placeholder: "24"
                    },
                    model: {
                        value: t.frameRate,
                        callback: function (e) {
                            t.frameRate = t._n(e)
                        },
                        expression: "frameRate"
                    }
                })], 1), i("el-form-item", {
                    attrs: {
                        label: t.$t("loop")
                    }
                }, [i("el-input", {
                    attrs: {
                        type: "number",
                        size: "mini",
                        placeholder: "0"
                    },
                    model: {
                        value: t.loop,
                        callback: function (e) {
                            t.loop = t._n(e)
                        },
                        expression: "loop"
                    }
                }), t._v(t._s(t.$t("times")) + "\n          "), i("i", [t._v("(" + t._s(t.$t("loopTips")) + ")")])], 1)], 1)], 1) : t._e(), i("div", {
                    staticClass: "ui-border-b mod-output"
                }, [i("el-form", {
                    attrs: {
                        "label-width": ""
                    }
                }, [i("el-form-item", {
                    staticClass: "suffix",
                    attrs: {
                        label: t.$t("outputName")
                    }
                }, [i("el-input", {
                    attrs: {
                        size: "mini",
                        placeholder: "output-ispt"
                    },
                    model: {
                        value: t.outputName,
                        callback: function (e) {
                            t.outputName = e
                        },
                        expression: "outputName"
                    }
                })], 1), i("p", [t._v(t._s(t.$t("outputFormat")))]), i("el-checkbox-group", {
                    attrs: {
                        min: 1
                    },
                    model: {
                        value: t.formatList,
                        callback: function (e) {
                            t.formatList = e
                        },
                        expression: "formatList"
                    }
                }, t._l(t.formatStatic, function (e) {
                    return i("el-checkbox", {
                        key: e,
                        attrs: {
                            label: e
                        }
                    }, [t._v(t._s(e))])
                }), 1)], 1)], 1), i("div", {
                    staticClass: "ui-border-b mod-quality"
                }, [i("p", [t._v(t._s(t.$t("compressionQuality")))]), i("el-form", {
                    attrs: {
                        inline: !0
                    }
                }, [i("el-form-item", {
                    staticClass: "mr-5"
                }, [i("el-checkbox", {
                    model: {
                        value: t.qualityCheck,
                        callback: function (e) {
                            t.qualityCheck = e
                        },
                        expression: "qualityCheck"
                    }
                }, [t._v("Quality")])], 1), i("el-form-item", [i("el-input", {
                    attrs: {
                        type: "number",
                        size: "mini",
                        placeholder: "100"
                    },
                    on: {
                        blur: t.qualityBlur
                    },
                    model: {
                        value: t.quality,
                        callback: function (e) {
                            t.quality = t._n(e)
                        },
                        expression: "quality"
                    }
                }), i("i", [t._v("(0-100)")])], 1)], 1)], 1), i("el-button", {
                    attrs: {
                        type: "primary",
                        disabled: t.isStarted
                    },
                    on: {
                        click: function (e) {
                            return t.start("")
                        }
                    }
                }, [t._v(" " + t._s(t.$t("start")) + " ")])], 1), i("section", {
                    staticClass: "mod-toolbox"
                }, [i("i", {
                    staticClass: "el-icon-delete",
                    on: {
                        click: function (e) {
                            return t.onDeleteAll()
                        }
                    }
                })])]) : t._e()
            }
            , ut = []
            , pt = i("a32b")
            , dt = i.n(pt)
            , mt = i("8e57")
            , ft = i.n(mt)
            , ht = i("41db")
            , gt = i.n(ht);
        const bt = i("34bb").ipcRenderer;
        bt.send("get-app-path");
        var vt = "";
        bt.on("got-app-path", function (t, e) {
            vt = e
        });
        const yt = dt.a.join(ft.a.tmpdir(), "iSparta");
        class St {
            constructor(t) {
                this.state = t,
                    this.format(t)
            }
            format(t) {
                var e = _.filter(t.state.items, {
                    isSelected: !0
                });
                this.items = JSON.parse(JSON.stringify(e));
                for (var i = 0; i < this.items.length; i++) {
                    var s = this.items[i];
                    s.index = i,
                        s.basic.tmpDir = dt.a.join(yt, Math.random().toString().replace("0.", "")),
                        s.basic.tmpOutputDir = s.basic.tmpDir
                }
            }
            static bin(t) {
                var e = _t()
                    , i = dt.a.join(vt, "/bin/", e, t);
                return gt.a.exec("chmod -R +x " + i),
                    "win32" != e && "win64" != e || (i += ".exe"),
                    i = '"' + i + '"',
                    i
            }
            static pad(t, e) {
                var i = t.toString().length;
                while (i < e)
                    t = "0" + t,
                        i++;
                return t
            }
            static exec(t, e, i, s, a, n) {
                return new Promise(function (o, r) {
                    var l = e;
                    l.unshift(t), l = l.join(" ");
                    // Fix 3. 当apng2gif时, 重构命令为exe 全路径, 而非相对路径
                    if (l.startsWith("cd ")) {
                        const m = l.match(/^cd\s+(.+?)\s+&&\s+"([^"]*apng2gif\.exe)"\s+(\S+)\s+(\S+)/i);
                        if (m) {
                            const cwd = m[1].replace(/^"|"$/g, "");
                            const exe = m[2];
                            const input = path.join(cwd, m[3]);
                            const output = path.join(cwd, m[4]);
                            l = `"${exe}" "${input}" "${output}"`;
                        }
                    };
                    // Fix 2. exec加入shell选项, 指定使用cmd运行命令, 因为win11很多人会把powershell作为默认shell
                    n ? gt.a.exec(l, { shell: cmdPath, ...n }) : gt.a.exec(l, { shell: cmdPath }, function (t, e, n) {
                        t ? (console.log("this command error:" + l),
                            console.log("stdout: " + e),
                            console.log("stderr: " + n),
                            console.warn(t),
                            s.dispatch("editProcess", {
                                index: i.index,
                                text: a.convertFail,
                                schedule: -1
                            }),
                            s.dispatch("setLock", !1),
                            r({
                                command: l,
                                err: t
                            })) : o({
                                command: l
                            })
                    })
                })
            }
        }
        function _t() {
            var t = navigator.platform
                , e = navigator.userAgent
                , i = "";
            return "Win32" == t || "Windows" == t ? (i = e.indexOf("WOW64") > -1 || e.indexOf("Win64") > -1 ? "win64" : "win32",
                i) : -1 != t.indexOf("Mac") ? "mac" : "X11" == t ? "unix" : String(t).indexOf("Linux") > -1 ? "linux" : "unknown"
        }
        var xt = i("83ef")
            , wt = i.n(xt)
            , Lt = function (t, e, i) {
                e.dispatch("editProcess", {
                    index: t.index,
                    text: i.outputing + " GIF...",
                    schedule: .8
                });
                var s = t.basic.tmpDir
                    , a = dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png");
                wt.a.ensureDirSync(s),
                    a != t.basic.fileList[0] && wt.a.copySync(t.basic.fileList[0], a),
                    t.basic.fileList[0] = a;
                var n = dt.a.basename(t.basic.fileList[0]);
                return St.exec("cd " + dt.a.dirname(t.basic.fileList[0]) + " && " + St.bin("apng2gif"), [n, t.options.outputName + ".gif"], t, e, i)
            }
            , Pt = function (t, e, i, s) {
                i.dispatch("editProcess", {
                    index: t.index,
                    text: s.compressing + "...",
                    schedule: .6
                });
                var a = t.basic.tmpDir
                    , n = dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png");
                return wt.a.ensureDirSync(a),
                    n != t.basic.fileList[0] && wt.a.copySync(t.basic.fileList[0], n),
                    t.basic.fileList[0] = n,
                    t.options.quality.checked ? St.exec(St.bin("apngquant"), [t.basic.fileList[0], "--output " + dt.a.join(t.basic.tmpOutputDir, t.options.outputName + "-quant.png"), "--force", t.options.floyd.checked ? "--floyd=" + t.options.floyd.value : "", t.options.quality.checked ? "--quality=0-" + t.options.quality.value : ""], t, i, s).then(() => {
                        return t.basic.fileList[0] = dt.a.join(t.basic.tmpOutputDir, t.options.outputName + "-quant.png"),
                            kt(t, i, s)
                    }
                    ) : kt(t, i, s)
            };
        function kt(t, e, i) {
            return St.exec(St.bin("apngopt"), [t.basic.fileList[0], dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png"), "-z2"], t, e, i)
        }
        var Ot = function (t, e, i) {
            e.dispatch("editProcess", {
                index: t.index,
                text: i.outputing + " WEBP...",
                schedule: .8
            });
            var s = t.basic.tmpDir;
            return St.exec(St.bin("apngdis"), [t.basic.fileList[0]], t, e, i).then(() => {
                var a = wt.a.readFileSync(dt.a.join(s, "apngframe_metadata.json"), {
                    encoding: "utf-8"
                })
                    , n = JSON.parse(a)
                    , o = n["frames"]
                    , r = o.map(function (a) {
                        var n = dt.a.join(s, a["src"])
                            , o = dt.a.join(s, a["src"] + ".webp");
                        return St.exec(St.bin("cwebp"), [t.options.quality.checked ? "-q " + t.options.quality.value : "", n, "-o " + o], t, e, i).then(() => {
                            var t = Math.round(a["delay_num"] / a["delay_den"] * 1e3);
                            0 === t && (t = 10);
                            var e = "";
                            if (0 === a["blend_op"])
                                e = "-b";
                            else {
                                if (1 !== a["blend_op"])
                                    throw new Error("Webp can't handle this blend operation");
                                e = "+b"
                            }
                            var i = ' -frame "' + dt.a.basename(o) + '" +' + t + "+" + a["x"] + "+" + a["y"] + "+" + a["dispose_op"] + e;
                            return i
                        }
                        )
                    });
                return Promise.all(r).then(function (t) {
                    return Promise.resolve(t.join(" "))
                })
            }
            ).then(a => {
                return St.exec("cd " + s + " && " + St.bin("webpmux"), [a, "-loop " + t.options.loop, "-o " + dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".webp")], t, e, i)
            }
            )
        }
            , $t = function (t, e, i) {
                e.dispatch("editProcess", {
                    index: t.index,
                    text: i.analysing + "...",
                    schedule: .4
                });
                var s = t.basic.tmpDir
                    , a = dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".gif");
                wt.a.ensureDirSync(s),
                    a != t.basic.fileList[0] && wt.a.copySync(t.basic.fileList[0], a),
                    t.basic.fileList[0] = a;
                var n = dt.a.basename(t.basic.fileList[0]);
                return St.exec("cd " + dt.a.dirname(t.basic.fileList[0]) + " && " + St.bin("gif2apng"), [n, t.options.outputName + ".png"], t, e, i).then(() => {
                    return t.basic.fileList = [dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png")],
                        Pt(t, 0, e, i)
                }
                )
            }
            , Nt = function (t, e, i) {
                e.dispatch("editProcess", {
                    index: t.index,
                    text: i.analysing + "...",
                    schedule: .4
                });
                var s = t.basic.tmpDir
                    , a = t.basic.fileList.length.toString().split("").length;
                wt.a.ensureDirSync(s);
                var n = "";
                return t.basic.fileList.forEach((e, i) => {
                    wt.a.copySync(e, dt.a.join(s, "apng" + St.pad(i + 1, a) + ".png")),
                        t.options.delays && t.options.delays[i] && wt.a.writeFileSync(dt.a.join(s, "apng" + St.pad(i + 1, a) + ".txt"), "delay=" + 1e3 * t.options.delays[i] + "/1000"),
                        0 == i && (n = "apng" + St.pad(i + 1, a) + ".png")
                }
                ),
                    St.exec(St.bin("apngasm"), [dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png"), dt.a.join(s, n), "1 " + t.options.frameRate, "-l" + t.options.loop, "-kc "], t, e, i).then(() => {
                        return t.basic.fileList = [dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png")],
                            Pt(t, 0, e, i)
                    }
                    )
            }
            , It = function (t, e) {
                e.dispatch("editProcess", {
                    index: t.index,
                    text: locale.analysing + "...",
                    schedule: .4
                });
                var i = t.basic.tmpDir
                    , s = dt.a.join(t.basic.tmpDir, "webp")
                    , a = (s = dt.a.join(i, "webp"),
                        dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".webp"));
                wt.a.ensureDirSync(i),
                    wt.a.ensureDirSync(s),
                    a != t.basic.fileList[0] && wt.a.copySync(t.basic.fileList[0], a),
                    t.basic.fileList[0] = a;
                return new Promise(function (i, a) {
                    Ct(t, 1, a => {
                        var n = [];
                        for (let i = 1; i <= a; i++)
                            n.push(St.exec(St.bin("dwebp"), [dt.a.join(s, i + ".webp"), "-o " + dt.a.join(s, i + ".png")], t, e, locale).then(() => {
                                return t.basic.fileList[i - 1] = dt.a.join(s, i + ".png"),
                                    t.basic.fileList[i]
                            }
                            ));
                        Promise.all(n).then(() => {
                            Nt(t).then(() => {
                                i()
                            }
                            )
                        }
                        )
                    }
                    )
                }
                )
            };
        function Ct(t, e, i) {
            var s = dt.a.join(t.basic.tmpDir, "webp");
            wt.a.ensureDirSync(s);
            St.exec(St.bin("webpmux"), ["-get frame " + e, t.basic.fileList[0], "-o " + dt.a.join(s, e + ".webp")], t, store, locale).then(() => {
                Ct(t, e + 1, i)
            }
            ).catch(() => {
                "function" === typeof i && i(e - 1)
            }
            )
        }
        var jt = function (t, e, i) {
            for (var s = new St(t), a = [], n = 0; n < s.items.length; n++) {
                let r = s.items[n];
                var o = null;
                switch (e && (r.basic.outputPath = e),
                t.dispatch("editProcess", {
                    index: r.index,
                    text: i.startConvert + "...",
                    schedule: .1
                }),
                r.basic.type) {
                    case E.PNGs:
                        o = Nt(r, t, i).then(() => {
                            return Et(r, t, i)
                        }
                        );
                        break;
                    case E.GIF:
                        o = $t(r, t, i).then(() => {
                            return Et(r, t, i)
                        }
                        );
                        break;
                    case E.APNG:
                        o = Pt(r, 0, t, i).then(() => {
                            return Et(r, t, i)
                        }
                        );
                        break;
                    case E.WEBP:
                        o = It(r, t, i).then(() => {
                            return Et(r, t, i)
                        }
                        );
                        break
                }
                a.push(o)
            }
            return Promise.all(a).then(() => {
                for (var e = 0; e < s.items.length; e++)
                    wt.a.remove(s.items[e].basic.tmpDir);
                t.dispatch("setLock", !1)
            }
            )
        };
        function Et(t, e, i) {
            var s = [];
            return t.basic.fileList[0] = dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png"),
                t.options.outputFormat.forEach((a, n) => {
                    switch (a) {
                        case E.APNG:
                            wt.a.copySync(dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".png"), dt.a.join(t.basic.outputPath, t.options.outputName + ".png"));
                            break;
                        case E.GIF:
                            s.push(Lt(t, e, i).then(() => {
                                return wt.a.copy(dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".gif"), dt.a.join(t.basic.outputPath, t.options.outputName + ".gif"))
                            }
                            ));
                            break;
                        case E.WEBP:
                            s.push(Ot(t, e, i).then(() => {
                                wt.a.copySync(dt.a.join(t.basic.tmpOutputDir, t.options.outputName + ".webp"), dt.a.join(t.basic.outputPath, t.options.outputName + ".webp"))
                            }
                            ))
                    }
                    MtaH5.clickStat(t.basic.type + "-" + a)
                }
                ),
                Promise.all(s).then(() => {
                    MtaH5.clickStat("1"),
                        e.dispatch("editProcess", {
                            index: t.index,
                            text: i.convertSuccess + "！",
                            schedule: 1
                        })
                }
                )
        }
        const Ft = i("34bb").ipcRenderer;
        var Dt = {
            data() {
                return {}
            },
            created() {
                Ft.on("change-multiItem-fold", (t, e) => {
                    this.start(e[0])
                }
                )
            },
            computed: {
                selectedList() {
                    var t = this.$store.getters.getterSelected;
                    return t
                },
                curtSetting() {
                    if (0 == this.selectedList.length)
                        return !1;
                    if (1 == this.selectedList.length) {
                        var t = this.selectedList[0].options;
                        return t
                    }
                    return this.selectedList
                },
                isStarted() {
                    var t = this.selectedList[0].process.schedule;
                    return t > 0 && t < 1
                },
                showFrame() {
                    return "PNGs" == this.selectedList[0].basic.type
                },
                formatStatic() {
                    return "GIF" == this.selectedList[0].basic.type ? ["APNG", "WEBP"] : ["APNG", "GIF", "WEBP"]
                },
                frameRate: {
                    get() {
                        return this.curtSetting.frameRate
                    },
                    set(t) {
                        this.$store.dispatch("editMultiOptions", {
                            frameRate: t
                        })
                    }
                },
                loop: {
                    get() {
                        return this.curtSetting.loop
                    },
                    set(t) {
                        this.$store.dispatch("editMultiOptions", {
                            loop: t
                        })
                    }
                },
                outputName: {
                    get() {
                        return this.curtSetting.outputName
                    },
                    set(t) {
                        this.$store.dispatch("editOptions", {
                            outputName: t
                        })
                    }
                },
                formatList: {
                    get() {
                        return this.curtSetting.outputFormat
                    },
                    set(t) {
                        this.$store.dispatch("editOptions", {
                            outputFormat: t
                        })
                    }
                },
                qualityCheck: {
                    get() {
                        return this.curtSetting.quality.checked
                    },
                    set(t) {
                        this.$store.dispatch("editMultiOptions", {
                            quality: {
                                checked: t,
                                value: this.quality
                            }
                        })
                    }
                },
                quality: {
                    get() {
                        return this.curtSetting.quality.value
                    },
                    set(t) {
                        if (t > 100 || t < 0)
                            return !1;
                        this.$store.dispatch("editMultiOptions", {
                            quality: {
                                checked: this.qualityCheck,
                                value: t
                            }
                        })
                    }
                }
            },
            methods: {
                floydBlur: function (t) {
                    t.srcElement.value = this.floyd
                },
                qualityBlur: function (t) {
                    t.srcElement.value = this.quality
                },
                changeOutput: function () {
                    var t = this.selectedList[0].basic.outputPath;
                    Ft.send("change-multiItem-fold", t)
                },
                start: function (t) {
                    let e = this.$i18n.messages[this.$i18n.locale];
                    for (var i = 0; i < this.selectedList.length; i++)
                        this.$store.dispatch("editProcess", {
                            index: i,
                            text: "",
                            schedule: 0
                        });
                    setTimeout(() => {
                        this.$store.dispatch("setLock", !0),
                            jt(this.$store, t, e).then()
                    }
                        , 20)
                },
                onDeleteAll: function () {
                    this.$store.dispatch("removeAll")
                }
            },
            watch: {}
        }
            , Tt = Dt
            , qt = (i("e501"),
                Object(l["a"])(Tt, ct, ut, !1, null, null, null))
            , Rt = qt.exports
            , Mt = {
                name: "landing-page",
                components: {
                    "main-upload": I,
                    "project-list": H,
                    "sort-bar": lt,
                    setting: Rt,
                    globalsetting: it
                },
                methods: {
                    open(t) {
                        this.$electron.shell.openExternal(t)
                    },
                    beforeUpload(t) {
                        t.preventDefault();
                        let e = t.dataTransfer.files;
                        return P.readerFiles(e).then(t => {
                            var e = {};
                            for (var i in t)
                                e.basic = t[i].basic,
                                    e.options = t[i].options,
                                    this.$store.dispatch("add", e)
                        }
                        ),
                            !1
                    }
                }
            };
        (function () {
            var t = document.createElement("script");
            t.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4",
                t.setAttribute("name", "MTAH5"),
                t.setAttribute("sid", "500593887"),
                t.setAttribute("cid", "500593896");
            var e = document.getElementsByTagName("script")[0];
            e.parentNode.insertBefore(t, e)
        }
        )();
        var Gt = Mt
            , At = (i("d8b4"),
                Object(l["a"])(Gt, d, m, !1, null, null, null))
            , Bt = At.exports;
        s["default"].use(p["a"]);
        var zt = new p["a"]({
            routes: [{
                path: "/",
                name: "landing-page",
                component: Bt,
                meta: {
                    title: "iSparta"
                }
            }, {
                path: "*",
                redirect: "/"
            }]
        })
            , Jt = i("2f62")
            , Wt = i("2a74");
        const Vt = "ITEMS_ADD"
            , Ut = "ITEMS_REMOVE"
            , Kt = "ALL_REMOVE"
            , Qt = "ITEMS_EDIT_BASIC"
            , Ht = "ITEMS_EDIT_OPTIONS"
            , Xt = "ITEMS_EDIT_MULTI_OPTIONS"
            , Yt = "ITEMS_EDIT_PROCESS"
            , Zt = "MULTI_SELECT"
            , te = "SINGLE_SELECT"
            , ee = "SET_SELECTED"
            , ie = "ALL_SELECTED"
            , se = "SET_LOCK"
            , ae = i("83ef")
            , ne = i("f986")
            , oe = i("8e57")
            , re = i("a32b");
        let le = "";
        le = re.join(oe.tmpdir(), "iSparta/localstorage.json"),
            ae.existsSync(le) || ae.ensureFileSync(le),
            ae.readFileSync(le) && ae.writeFileSync(le, "{}", "utf-8"),
            ne.setStoragePath(le),
            window.storage = ne,
            s["default"].use(Jt["a"]);
        const ce = {
            language: "zh-cn",
            options: {
                frameRate: 20,
                loop: 0,
                outputSuffix: "iSpt",
                outputName: "",
                outputFormat: ["APNG"],
                floyd: {
                    checked: !0,
                    value: .35
                },
                quality: {
                    checked: !1,
                    value: 80
                }
            },
            basic: {
                fileList: [],
                type: "APNG",
                thumbPath: "",
                inputPath: "",
                outputPath: ""
            },
            process: {
                text: "",
                schedule: 0
            },
            isSelected: !0
        };
        var ue = {
            items: [],
            locked: !1
        }
            , pe = window.storage.getItem("globalSetting");
        if (!pe) {
            let t = ce;
            window.storage.setItem("globalSetting", JSON.stringify(t))
        }
        var de = window.storage.getItem("iSparta-item");
        if (de) {
            var me = JSON.parse(de);
            let t = [];
            _.each(me, function (e) {
                let i = !1;
                for (let t = 0; t < e.basic.fileList.length; t++)
                    if (!ae.existsSync(e.basic.fileList[t])) {
                        i = !0;
                        break
                    }
                i || (e.process.text = "",
                    e.process.schedule = 0,
                    t.push(e))
            }),
                ue.items = t
        }
        const fe = {
            [Vt](t, e) {
                if (t.locked)
                    return !1;
                let i = JSON.parse(ne.getItem("globalSetting"));
                var s = _.cloneDeep(_.extend(i, e));
                _.each(t.items, function (t) {
                    t.isSelected = !1
                }),
                    t.items.push(s),
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Ut](t) {
                if (t.locked)
                    return !1;
                var e = _.remove(t.items, {
                    isSelected: !1
                });
                t.items = e,
                    t.items.length > 1 && (t.items[0].isSelected = !0),
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Kt](t) {
                if (t.locked)
                    return !1;
                t.items = [],
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Qt](t, e) {
                if (t.locked)
                    return !1;
                var i = _.filter(t.items, {
                    isSelected: !0
                })
                    , s = i[0].basic;
                _.extend(s, e),
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Ht](t, e) {
                if (t.locked)
                    return !1;
                var i = _.filter(t.items, {
                    isSelected: !0
                })
                    , s = i[0].options;
                _.extend(s, e),
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Xt](t, e) {
                if (t.locked)
                    return !1;
                _.each(t.items, function (t) {
                    _.extend(t.options, e)
                }),
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Yt](t, e) {
                var i = _.filter(t.items, {
                    isSelected: !0
                })
                    , s = i[e.index].process;
                _.extend(s, e)
            },
            [te](t, e) {
                if (t.locked)
                    return !1;
                _.each(t.items, function (t) {
                    t.isSelected = !1
                }),
                    t.items[e].isSelected = !0,
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [ee](t, e) {
                if (t.locked)
                    return !1;
                t.items[e].isSelected = !0,
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [Zt](t, e) {
                if (t.locked)
                    return !1;
                t.items[e].isSelected = !t.items[e].isSelected,
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [ie](t) {
                if (t.locked)
                    return !1;
                _.each(t.items, function (t) {
                    t.isSelected = !0
                }),
                    ne.setItem("iSparta-item", JSON.stringify(t.items))
            },
            [se](t, e) {
                t.locked = e
            }
        }
            , he = {
                add(t, e) {
                    t.commit("ITEMS_ADD", e)
                },
                remove(t) {
                    t.commit("ITEMS_REMOVE")
                },
                removeAll(t) {
                    t.commit("ALL_REMOVE")
                },
                editBasic(t, e) {
                    t.commit("ITEMS_EDIT_BASIC", e)
                },
                editOptions(t, e) {
                    t.commit("ITEMS_EDIT_OPTIONS", e)
                },
                editMultiOptions(t, e) {
                    t.commit("ITEMS_EDIT_MULTI_OPTIONS", e)
                },
                editProcess(t, e) {
                    t.commit("ITEMS_EDIT_PROCESS", e)
                },
                setSelected(t, e) {
                    t.commit("SET_SELECTED", e)
                },
                singleSelect(t, e) {
                    t.commit("SINGLE_SELECT", e)
                },
                multiSelect(t, e) {
                    t.commit("MULTI_SELECT", e)
                },
                allSelect(t) {
                    t.commit("ALL_SELECTED")
                },
                setLock(t, e) {
                    t.commit("SET_LOCK", e)
                }
            }
            , ge = {
                getterItems() {
                    return ue.items
                },
                getterLocked() {
                    return ue.locked
                },
                getterSelected() {
                    return _.filter(ue.items, {
                        isSelected: !0
                    })
                },
                getterSelectedIndex() {
                    return _.findIndex(ue.items, {
                        isSelected: !0
                    })
                }
            };
        var be = new Jt["a"].Store({
            state: ue,
            getters: ge,
            actions: he,
            mutations: fe,
            modules: Wt["default"]
        })
            , ve = i("5c96")
            , ye = i.n(ve)
            , Se = (i("0fae"),
                i("f5df"),
                i("3003"))
            , _e = i("a925");
        s["default"].config.productionTip = !1,
            s["default"].use(_e["a"]),
            s["default"].use(Se["a"]),
            s["default"].use(ye.a);
        let xe = window.storage.getItem("globalSetting")
            , we = "zh-cn";
        if (xe) {
            var Le = JSON.parse(xe);
            we = Le.language
        }
        const Pe = new _e["a"]({
            locale: we,
            messages: {
                "zh-cn": i("5eea"),
                "zh-tw": i("b8e5"),
                "en-us": i("57f9")
            }
        });
        s["default"].filter("basePath", function (t) {
            var e = "../" + _.compact(_.takeRight(t.split("/"), 3)).join("/");
            return e
        }),
            s["default"].filter("fileLink", function (t) {
                return t[0]
            }),
            new s["default"]({
                router: zt,
                i18n: Pe,
                store: be,
                render: t => t(u),
                data: {
                    eventBus: new s["default"]
                }
            }).$mount("#app")
    },
    "57f9": function (t, e) {
        t.exports = {
            uploadTips: "Drop file here or click to upload",
            uploadRule: "Support for PNGs、APNG、WEBP、GIF",
            confrim: "Confrim",
            cancel: "Cancel",
            defaultSetting: "Default Setting",
            language: "Language",
            filenameSuffix: "Filename Suffix",
            outputConfig: "Output Config",
            fps: "Fps",
            loop: "Loop",
            loopTips: "0 means infinite",
            outputName: "Output Name",
            outputFormat: "Output Format",
            compressionQuality: "Compression Quality",
            start: "Start",
            times: "",
            openOriginal: "Open source folder",
            openDist: "Open output folder",
            changeDist: "Change output folder",
            delItem: "Delete item",
            multiText: "multi-selected state, using their own configuration output",
            batchStart: "Batch start",
            outputTofolder: "Output to folder",
            startConvert: "Start Coverting",
            convertSuccess: "Success",
            convertFail: "Fail",
            analysing: "analysing image",
            compressing: "compressing image",
            outputing: "outputing",
            delayTitle: "delay setting",
            preview: "preview",
            apply: "apply"
        }
    },
    "5eea": function (t, e) {
        t.exports = {
            uploadTips: "将文件拖入或点击打开",
            uploadRule: "只能上传PNG序列、APNG、WEBP、GIF这四种图片格式",
            confrim: "确定",
            cancel: "取消",
            defaultSetting: "默认设置",
            language: "语言",
            filenameSuffix: "文件名后缀",
            outputConfig: "输出设置",
            fps: "帧频",
            loop: "循环",
            loopTips: "0次代表无限循环",
            outputName: "输出名字",
            outputFormat: "输出格式",
            compressionQuality: "压缩质量",
            start: "开始",
            times: "次",
            openOriginal: "打开文件目录",
            openDist: "打开输出目录",
            changeDist: "修改输出目录",
            delItem: "删除项目",
            multiText: "目前为多选状态，使用各自的配置输出",
            batchStart: "批量开始",
            outputTofolder: "输出到目录",
            startConvert: "开始转换",
            convertSuccess: "生成成功",
            convertFail: "生成失败",
            analysing: "正在解析图片",
            compressing: "正在压缩图片",
            outputing: "正在输出",
            delayTitle: "延时配置",
            preview: "预览",
            apply: "应用"
        }
    },
    "64a9": function (t, e, i) { },
    "716c": function (t, e, i) { },
    7348: function (t, e, i) { },
    "8a56": function (t, e, i) { },
    "8cad": function (t, e) {
        t.exports = require("util")
    },
    "8e57": function (t, e) {
        t.exports = require("os")
    },
    "9ac2": function (t, e) {
        t.exports = require("stream")
    },
    "9b0f": function (t, e) {
        t.exports = require("fs")
    },
    a32b: function (t, e) {
        t.exports = require("path")
    },
    abfd: function (t, e, i) {
        "use strict";
        i.r(e);
        const s = i("34bb").remote
            , a = i("34bb").shell
            , n = i("34bb").ipcRenderer
            , { Menu: o, MenuItem: r } = s;
        class l {
            static init(t, e, i, l, c) {
                const u = new o;
                l || (u.append(new r({
                    label: c.openOriginal,
                    click() {
                        var t = e.inputPath.replace(/\/[^\/]*$/, "");
                        a.showItemInFolder(t)
                    }
                })),
                    u.append(new r({
                        label: c.openDist,
                        click() {
                            var t = e.outputPath;
                            a.showItemInFolder(t)
                        }
                    })),
                    u.append(new r({
                        label: c.changeDist,
                        click() {
                            n.send("change-item-fold", e.outputPath, i)
                        }
                    })),
                    u.append(new r({
                        type: "separator"
                    }))),
                    u.append(new r({
                        label: c.delItem,
                        click() {
                            t.dispatch("remove")
                        }
                    })),
                    u.popup(s.getCurrentWindow())
            }
        }
        e["default"] = l
    },
    b24c: function (t, e, i) {
        "use strict";
        var s = i("fabc")
            , a = i.n(s);
        a.a
    },
    b7b0: function (t, e, i) { },
    b8e5: function (t, e) {
        t.exports = {
            uploadTips: "將文件拖入或點擊打開",
            uploadRule: "只能上傳PNG序列、APNG、WEBP、GIF這四種圖片格式",
            confrim: "確定",
            cancel: "取消",
            defaultSetting: "默認設置",
            language: "語言",
            filenameSuffix: "文件名後綴",
            outputConfig: "輸出設置",
            fps: "幀頻",
            loop: "循環",
            loopTips: "0次代表無限循環",
            outputName: "輸出名字",
            outputFormat: "輸出格式",
            compressionQuality: "壓縮質量",
            start: "開始",
            times: "次",
            openOriginal: "打開文件目錄",
            openDist: "打開輸出目錄",
            changeDist: "修改輸出目錄",
            delItem: "刪除項目",
            multiText: "目前為多選狀態，使用各自的配置輸出",
            batchStart: "批量開始",
            outputTofolder: "輸出到目錄",
            startConvert: "開始轉換",
            convertSuccess: "生成成功",
            convertFail: "生成失敗",
            analysing: "正在解析圖片",
            compressing: "正在壓縮圖片",
            outputing: "正在輸出",
            delayTitle: "延时配置",
            preview: "预览",
            apply: "应用"
        }
    },
    c67b: function (t, e, i) {
        "use strict";
        var s = i("4f5e")
            , a = i.n(s);
        a.a
    },
    d307: function (t, e, i) {
        var s = {
            "./index.js": "2a74"
        };
        function a(t) {
            var e = n(t);
            return i(e)
        }
        function n(t) {
            if (!i.o(s, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return s[t]
        }
        a.keys = function () {
            return Object.keys(s)
        }
            ,
            a.resolve = n,
            t.exports = a,
            a.id = "d307"
    },
    d541: function (t, e, i) { },
    d8b4: function (t, e, i) {
        "use strict";
        var s = i("7348")
            , a = i.n(s);
        a.a
    },
    e501: function (t, e, i) {
        "use strict";
        var s = i("d541")
            , a = i.n(s);
        a.a
    },
    fabc: function (t, e, i) { }
});
//# sourceMappingURL=app.e0a8b44b.js.map
