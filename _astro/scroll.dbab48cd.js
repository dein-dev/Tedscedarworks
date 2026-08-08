function Mr(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function fl(o, t) {
    o.prototype = Object.create(t.prototype),
    o.prototype.constructor = o,
    o.__proto__ = t
}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Ke = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, $i = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Do, ve, It, ir = 1e8, St = 1 / ir, eo = Math.PI * 2, Qu = eo / 4, Zu = 0, cl = Math.sqrt, Gu = Math.cos, Ju = Math.sin, te = function(t) {
    return typeof t == "string"
}, Ht = function(t) {
    return typeof t == "function"
}, zr = function(t) {
    return typeof t == "number"
}, Fo = function(t) {
    return typeof t > "u"
}, Or = function(t) {
    return typeof t == "object"
}, De = function(t) {
    return t !== !1
}, zo = function() {
    return typeof window < "u"
}, Fn = function(t) {
    return Ht(t) || te(t)
}, hl = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, ye = Array.isArray, ro = /(?:-?\.?\d|\.)+/gi, dl = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ai = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, zs = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, pl = /[+-]=-?[.\d]+/, _l = /[^,'"\[\]\s]+/gi, tf = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, Ft, tr, io, No, Qe = {}, _s = {}, gl, ml = function(t) {
    return (_s = bi(t, Qe)) && Ne
}, Bo = function(t, r) {
    return console.warn("Invalid property", t, "set to", r, "Missing plugin? gsap.registerPlugin()")
}, gs = function(t, r) {
    return !r && console.warn(t)
}, vl = function(t, r) {
    return t && (Qe[t] = r) && _s && (_s[t] = r) || Qe
}, Tn = function() {
    return 0
}, ef = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, is = {
    suppressEvents: !0,
    kill: !1
}, rf = {
    suppressEvents: !0
}, Io = {}, jr = [], no = {}, yl, We = {}, Ns = {}, la = 30, ns = [], Ho = "", Vo = function(t) {
    var r = t[0], e, i;
    if (Or(r) || Ht(r) || (t = [t]),
    !(e = (r._gsap || {}).harness)) {
        for (i = ns.length; i-- && !ns[i].targetTest(r); )
            ;
        e = ns[i]
    }
    for (i = t.length; i--; )
        t[i] && (t[i]._gsap || (t[i]._gsap = new Yl(t[i],e))) || t.splice(i, 1);
    return t
}, hi = function(t) {
    return t._gsap || Vo(nr(t))[0]._gsap
}, bl = function(t, r, e) {
    return (e = t[r]) && Ht(e) ? t[r]() : Fo(e) && t.getAttribute && t.getAttribute(r) || e
}, Fe = function(t, r) {
    return (t = t.split(",")).forEach(r) || t
}, $t = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, le = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, zi = function(t, r) {
    var e = r.charAt(0)
      , i = parseFloat(r.substr(2));
    return t = parseFloat(t),
    e === "+" ? t + i : e === "-" ? t - i : e === "*" ? t * i : t / i
}, nf = function(t, r) {
    for (var e = r.length, i = 0; t.indexOf(r[i]) < 0 && ++i < e; )
        ;
    return i < e
}, ms = function() {
    var t = jr.length, r = jr.slice(0), e, i;
    for (no = {},
    jr.length = 0,
    e = 0; e < t; e++)
        i = r[e],
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
}, wl = function(t, r, e, i) {
    jr.length && !ve && ms(),
    t.render(r, e, i || ve && r < 0 && (t._initted || t._startAt)),
    jr.length && !ve && ms()
}, xl = function(t) {
    var r = parseFloat(t);
    return (r || r === 0) && (t + "").match(_l).length < 2 ? r : te(t) ? t.trim() : t
}, Tl = function(t) {
    return t
}, ar = function(t, r) {
    for (var e in r)
        e in t || (t[e] = r[e]);
    return t
}, sf = function(t) {
    return function(r, e) {
        for (var i in e)
            i in r || i === "duration" && t || i === "ease" || (r[i] = e[i])
    }
}, bi = function(t, r) {
    for (var e in r)
        t[e] = r[e];
    return t
}, ua = function o(t, r) {
    for (var e in r)
        e !== "__proto__" && e !== "constructor" && e !== "prototype" && (t[e] = Or(r[e]) ? o(t[e] || (t[e] = {}), r[e]) : r[e]);
    return t
}, vs = function(t, r) {
    var e = {}, i;
    for (i in t)
        i in r || (e[i] = t[i]);
    return e
}, cn = function(t) {
    var r = t.parent || Ft
      , e = t.keyframes ? sf(ye(t.keyframes)) : ar;
    if (De(t.inherit))
        for (; r; )
            e(t, r.vars.defaults),
            r = r.parent || r._dp;
    return t
}, of = function(t, r) {
    for (var e = t.length, i = e === r.length; i && e-- && t[e] === r[e]; )
        ;
    return e < 0
}, Sl = function(t, r, e, i, n) {
    e === void 0 && (e = "_first"),
    i === void 0 && (i = "_last");
    var a = t[i], s;
    if (n)
        for (s = r[n]; a && a[n] > s; )
            a = a._prev;
    return a ? (r._next = a._next,
    a._next = r) : (r._next = t[e],
    t[e] = r),
    r._next ? r._next._prev = r : t[i] = r,
    r._prev = a,
    r.parent = r._dp = t,
    r
}, Os = function(t, r, e, i) {
    e === void 0 && (e = "_first"),
    i === void 0 && (i = "_last");
    var n = r._prev
      , a = r._next;
    n ? n._next = a : t[e] === r && (t[e] = a),
    a ? a._prev = n : t[i] === r && (t[i] = n),
    r._next = r._prev = r.parent = null
}, Zr = function(t, r) {
    t.parent && (!r || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t),
    t._act = 0
}, di = function(t, r) {
    if (t && (!r || r._end > t._dur || r._start < 0))
        for (var e = t; e; )
            e._dirty = 1,
            e = e.parent;
    return t
}, af = function(t) {
    for (var r = t.parent; r && r.parent; )
        r._dirty = 1,
        r.totalDuration(),
        r = r.parent;
    return t
}, so = function(t, r, e, i) {
    return t._startAt && (ve ? t._startAt.revert(is) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(r, !0, i))
}, lf = function o(t) {
    return !t || t._ts && o(t.parent)
}, fa = function(t) {
    return t._repeat ? Yi(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, Yi = function(t, r) {
    var e = Math.floor(t /= r);
    return t && e === t ? e - 1 : e
}, ys = function(t, r) {
    return (t - r._start) * r._ts + (r._ts >= 0 ? 0 : r._dirty ? r.totalDuration() : r._tDur)
}, Ms = function(t) {
    return t._end = le(t._start + (t._tDur / Math.abs(t._ts || t._rts || St) || 0))
}, As = function(t, r) {
    var e = t._dp;
    return e && e.smoothChildTiming && t._ts && (t._start = le(e._time - (t._ts > 0 ? r / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - r) / -t._ts)),
    Ms(t),
    e._dirty || di(e, t)),
    t
}, kl = function(t, r) {
    var e;
    if ((r._time || !r._dur && r._initted || r._start < t._time && (r._dur || !r.add)) && (e = ys(t.rawTime(), r),
    (!r._dur || En(0, r.totalDuration(), e) - r._tTime > St) && r.render(e, !0)),
    di(t, r)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (e = t; e._dp; )
                e.rawTime() >= 0 && e.totalTime(e._tTime),
                e = e._dp;
        t._zTime = -St
    }
}, xr = function(t, r, e, i) {
    return r.parent && Zr(r),
    r._start = le((zr(e) ? e : e || t !== Ft ? Je(t, e, r) : t._time) + r._delay),
    r._end = le(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)),
    Sl(t, r, "_first", "_last", t._sort ? "_start" : 0),
    oo(r) || (t._recent = r),
    i || kl(t, r),
    t._ts < 0 && As(t, t._tTime),
    t
}, Pl = function(t, r) {
    return (Qe.ScrollTrigger || Bo("scrollTrigger", r)) && Qe.ScrollTrigger.create(r, t)
}, Cl = function(t, r, e, i, n) {
    if (Yo(t, r, n),
    !t._initted)
        return 1;
    if (!e && t._pt && !ve && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && yl !== Ue.frame)
        return jr.push(t),
        t._lazy = [n, i],
        1
}, uf = function o(t) {
    var r = t.parent;
    return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || o(r))
}, oo = function(t) {
    var r = t.data;
    return r === "isFromStart" || r === "isStart"
}, ff = function(t, r, e, i) {
    var n = t.ratio, a = r < 0 || !r && (!t._start && uf(t) && !(!t._initted && oo(t)) || (t._ts < 0 || t._dp._ts < 0) && !oo(t)) ? 0 : 1, s = t._rDelay, l = 0, u, f, h;
    if (s && t._repeat && (l = En(0, t._tDur, r),
    f = Yi(l, s),
    t._yoyo && f & 1 && (a = 1 - a),
    f !== Yi(t._tTime, s) && (n = 1 - a,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    a !== n || ve || i || t._zTime === St || !r && t._zTime) {
        if (!t._initted && Cl(t, r, i, e, l))
            return;
        for (h = t._zTime,
        t._zTime = r || (e ? St : 0),
        e || (e = r && !h),
        t.ratio = a,
        t._from && (a = 1 - a),
        t._time = 0,
        t._tTime = l,
        u = t._pt; u; )
            u.r(a, u.d),
            u = u._next;
        r < 0 && so(t, r, e, !0),
        t._onUpdate && !e && sr(t, "onUpdate"),
        l && t._repeat && !e && t.parent && sr(t, "onRepeat"),
        (r >= t._tDur || r < 0) && t.ratio === a && (a && Zr(t, 1),
        !e && !ve && (sr(t, a ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = r)
}, cf = function(t, r, e) {
    var i;
    if (e > r)
        for (i = t._first; i && i._start <= e; ) {
            if (i.data === "isPause" && i._start > r)
                return i;
            i = i._next
        }
    else
        for (i = t._last; i && i._start >= e; ) {
            if (i.data === "isPause" && i._start < r)
                return i;
            i = i._prev
        }
}, qi = function(t, r, e, i) {
    var n = t._repeat
      , a = le(r) || 0
      , s = t._tTime / t._tDur;
    return s && !i && (t._time *= a / t._dur),
    t._dur = a,
    t._tDur = n ? n < 0 ? 1e10 : le(a * (n + 1) + t._rDelay * n) : a,
    s > 0 && !i && As(t, t._tTime = t._tDur * s),
    t.parent && Ms(t),
    e || di(t.parent, t),
    t
}, ca = function(t) {
    return t instanceof Le ? di(t) : qi(t, t._dur)
}, hf = {
    _start: 0,
    endTime: Tn,
    totalDuration: Tn
}, Je = function o(t, r, e) {
    var i = t.labels, n = t._recent || hf, a = t.duration() >= ir ? n.endTime(!1) : t._dur, s, l, u;
    return te(r) && (isNaN(r) || r in i) ? (l = r.charAt(0),
    u = r.substr(-1) === "%",
    s = r.indexOf("="),
    l === "<" || l === ">" ? (s >= 0 && (r = r.replace(/=/, "")),
    (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(r.substr(1)) || 0) * (u ? (s < 0 ? n : e).totalDuration() / 100 : 1)) : s < 0 ? (r in i || (i[r] = a),
    i[r]) : (l = parseFloat(r.charAt(s - 1) + r.substr(s + 1)),
    u && e && (l = l / 100 * (ye(e) ? e[0] : e).totalDuration()),
    s > 1 ? o(t, r.substr(0, s - 1), e) + l : a + l)) : r == null ? a : +r
}, hn = function(t, r, e) {
    var i = zr(r[1]), n = (i ? 2 : 1) + (t < 2 ? 0 : 1), a = r[n], s, l;
    if (i && (a.duration = r[1]),
    a.parent = e,
    t) {
        for (s = a,
        l = e; l && !("immediateRender"in s); )
            s = l.vars.defaults || {},
            l = De(l.vars.inherit) && l.parent;
        a.immediateRender = De(s.immediateRender),
        t < 2 ? a.runBackwards = 1 : a.startAt = r[n - 1]
    }
    return new Wt(r[0],a,r[n + 1])
}, ti = function(t, r) {
    return t || t === 0 ? r(t) : r
}, En = function(t, r, e) {
    return e < t ? t : e > r ? r : e
}, me = function(t, r) {
    return !te(t) || !(r = tf.exec(t)) ? "" : r[1]
}, df = function(t, r, e) {
    return ti(e, function(i) {
        return En(t, r, i)
    })
}, ao = [].slice, Ol = function(t, r) {
    return t && Or(t) && "length"in t && (!r && !t.length || t.length - 1 in t && Or(t[0])) && !t.nodeType && t !== tr
}, pf = function(t, r, e) {
    return e === void 0 && (e = []),
    t.forEach(function(i) {
        var n;
        return te(i) && !r || Ol(i, 1) ? (n = e).push.apply(n, nr(i)) : e.push(i)
    }) || e
}, nr = function(t, r, e) {
    return It && !r && It.selector ? It.selector(t) : te(t) && !e && (io || !Xi()) ? ao.call((r || No).querySelectorAll(t), 0) : ye(t) ? pf(t, e) : Ol(t) ? ao.call(t, 0) : t ? [t] : []
}, lo = function(t) {
    return t = nr(t)[0] || gs("Invalid scope") || {},
    function(r) {
        var e = t.current || t.nativeElement || t;
        return nr(r, e.querySelectorAll ? e : e === t ? gs("Invalid scope") || No.createElement("div") : t)
    }
}, Ml = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, Al = function(t) {
    if (Ht(t))
        return t;
    var r = Or(t) ? t : {
        each: t
    }
      , e = pi(r.ease)
      , i = r.from || 0
      , n = parseFloat(r.base) || 0
      , a = {}
      , s = i > 0 && i < 1
      , l = isNaN(i) || s
      , u = r.axis
      , f = i
      , h = i;
    return te(i) ? f = h = {
        center: .5,
        edges: .5,
        end: 1
    }[i] || 0 : !s && l && (f = i[0],
    h = i[1]),
    function(c, d, _) {
        var p = (_ || r).length, g = a[p], w, v, x, T, k, C, S, O, P;
        if (!g) {
            if (P = r.grid === "auto" ? 0 : (r.grid || [1, ir])[1],
            !P) {
                for (S = -ir; S < (S = _[P++].getBoundingClientRect().left) && P < p; )
                    ;
                P--
            }
            for (g = a[p] = [],
            w = l ? Math.min(P, p) * f - .5 : i % P,
            v = P === ir ? 0 : l ? p * h / P - .5 : i / P | 0,
            S = 0,
            O = ir,
            C = 0; C < p; C++)
                x = C % P - w,
                T = v - (C / P | 0),
                g[C] = k = u ? Math.abs(u === "y" ? T : x) : cl(x * x + T * T),
                k > S && (S = k),
                k < O && (O = k);
            i === "random" && Ml(g),
            g.max = S - O,
            g.min = O,
            g.v = p = (parseFloat(r.amount) || parseFloat(r.each) * (P > p ? p - 1 : u ? u === "y" ? p / P : P : Math.max(P, p / P)) || 0) * (i === "edges" ? -1 : 1),
            g.b = p < 0 ? n - p : n,
            g.u = me(r.amount || r.each) || 0,
            e = e && p < 0 ? Hl(e) : e
        }
        return p = (g[c] - g.min) / g.max || 0,
        le(g.b + (e ? e(p) : p) * g.v) + g.u
    }
}, uo = function(t) {
    var r = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(e) {
        var i = le(Math.round(parseFloat(e) / t) * t * r);
        return (i - i % 1) / r + (zr(e) ? 0 : me(e))
    }
}, El = function(t, r) {
    var e = ye(t), i, n;
    return !e && Or(t) && (i = e = t.radius || ir,
    t.values ? (t = nr(t.values),
    (n = !zr(t[0])) && (i *= i)) : t = uo(t.increment)),
    ti(r, e ? Ht(t) ? function(a) {
        return n = t(a),
        Math.abs(n - a) <= i ? n : a
    }
    : function(a) {
        for (var s = parseFloat(n ? a.x : a), l = parseFloat(n ? a.y : 0), u = ir, f = 0, h = t.length, c, d; h--; )
            n ? (c = t[h].x - s,
            d = t[h].y - l,
            c = c * c + d * d) : c = Math.abs(t[h] - s),
            c < u && (u = c,
            f = h);
        return f = !i || u <= i ? t[f] : a,
        n || f === a || zr(a) ? f : f + me(a)
    }
    : uo(t))
}, Rl = function(t, r, e, i) {
    return ti(ye(t) ? !r : e === !0 ? !!(e = 0) : !i, function() {
        return ye(t) ? t[~~(Math.random() * t.length)] : (e = e || 1e-5) && (i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1) && Math.floor(Math.round((t - e / 2 + Math.random() * (r - t + e * .99)) / e) * e * i) / i
    })
}, _f = function() {
    for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
        r[e] = arguments[e];
    return function(i) {
        return r.reduce(function(n, a) {
            return a(n)
        }, i)
    }
}, gf = function(t, r) {
    return function(e) {
        return t(parseFloat(e)) + (r || me(e))
    }
}, mf = function(t, r, e) {
    return Dl(t, r, 0, 1, e)
}, Ll = function(t, r, e) {
    return ti(e, function(i) {
        return t[~~r(i)]
    })
}, vf = function o(t, r, e) {
    var i = r - t;
    return ye(t) ? Ll(t, o(0, t.length), r) : ti(e, function(n) {
        return (i + (n - t) % i) % i + t
    })
}, yf = function o(t, r, e) {
    var i = r - t
      , n = i * 2;
    return ye(t) ? Ll(t, o(0, t.length - 1), r) : ti(e, function(a) {
        return a = (n + (a - t) % n) % n || 0,
        t + (a > i ? n - a : a)
    })
}, Sn = function(t) {
    for (var r = 0, e = "", i, n, a, s; ~(i = t.indexOf("random(", r)); )
        a = t.indexOf(")", i),
        s = t.charAt(i + 7) === "[",
        n = t.substr(i + 7, a - i - 7).match(s ? _l : ro),
        e += t.substr(r, i - r) + Rl(s ? n : +n[0], s ? 0 : +n[1], +n[2] || 1e-5),
        r = a + 1;
    return e + t.substr(r, t.length - r)
}, Dl = function(t, r, e, i, n) {
    var a = r - t
      , s = i - e;
    return ti(n, function(l) {
        return e + ((l - t) / a * s || 0)
    })
}, bf = function o(t, r, e, i) {
    var n = isNaN(t + r) ? 0 : function(d) {
        return (1 - d) * t + d * r
    }
    ;
    if (!n) {
        var a = te(t), s = {}, l, u, f, h, c;
        if (e === !0 && (i = 1) && (e = null),
        a)
            t = {
                p: t
            },
            r = {
                p: r
            };
        else if (ye(t) && !ye(r)) {
            for (f = [],
            h = t.length,
            c = h - 2,
            u = 1; u < h; u++)
                f.push(o(t[u - 1], t[u]));
            h--,
            n = function(_) {
                _ *= h;
                var p = Math.min(c, ~~_);
                return f[p](_ - p)
            }
            ,
            e = r
        } else
            i || (t = bi(ye(t) ? [] : {}, t));
        if (!f) {
            for (l in r)
                $o.call(s, t, l, "get", r[l]);
            n = function(_) {
                return Wo(_, s) || (a ? t.p : t)
            }
        }
    }
    return ti(e, n)
}, ha = function(t, r, e) {
    var i = t.labels, n = ir, a, s, l;
    for (a in i)
        s = i[a] - r,
        s < 0 == !!e && s && n > (s = Math.abs(s)) && (l = a,
        n = s);
    return l
}, sr = function(t, r, e) {
    var i = t.vars, n = i[r], a = It, s = t._ctx, l, u, f;
    if (n)
        return l = i[r + "Params"],
        u = i.callbackScope || t,
        e && jr.length && ms(),
        s && (It = s),
        f = l ? n.apply(u, l) : n.call(u),
        It = a,
        f
}, on = function(t) {
    return Zr(t),
    t.scrollTrigger && t.scrollTrigger.kill(!!ve),
    t.progress() < 1 && sr(t, "onInterrupt"),
    t
}, Ei, Fl = [], zl = function(t) {
    if (zo() && t) {
        t = !t.name && t.default || t;
        var r = t.name
          , e = Ht(t)
          , i = r && !e && t.init ? function() {
            this._props = []
        }
        : t
          , n = {
            init: Tn,
            render: Wo,
            add: $o,
            kill: zf,
            modifier: Ff,
            rawVars: 0
        }
          , a = {
            targetTest: 0,
            get: 0,
            getSetter: Xo,
            aliases: {},
            register: 0
        };
        if (Xi(),
        t !== i) {
            if (We[r])
                return;
            ar(i, ar(vs(t, n), a)),
            bi(i.prototype, bi(n, vs(t, a))),
            We[i.prop = r] = i,
            t.targetTest && (ns.push(i),
            Io[r] = 1),
            r = (r === "css" ? "CSS" : r.charAt(0).toUpperCase() + r.substr(1)) + "Plugin"
        }
        vl(r, i),
        t.register && t.register(Ne, i, ze)
    } else
        t && Fl.push(t)
}, Tt = 255, an = {
    aqua: [0, Tt, Tt],
    lime: [0, Tt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, Tt],
    navy: [0, 0, 128],
    white: [Tt, Tt, Tt],
    olive: [128, 128, 0],
    yellow: [Tt, Tt, 0],
    orange: [Tt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [Tt, 0, 0],
    pink: [Tt, 192, 203],
    cyan: [0, Tt, Tt],
    transparent: [Tt, Tt, Tt, 0]
}, Bs = function(t, r, e) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? r + (e - r) * t * 6 : t < .5 ? e : t * 3 < 2 ? r + (e - r) * (2 / 3 - t) * 6 : r) * Tt + .5 | 0
}, Nl = function(t, r, e) {
    var i = t ? zr(t) ? [t >> 16, t >> 8 & Tt, t & Tt] : 0 : an.black, n, a, s, l, u, f, h, c, d, _;
    if (!i) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        an[t])
            i = an[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (n = t.charAt(1),
            a = t.charAt(2),
            s = t.charAt(3),
            t = "#" + n + n + a + a + s + s + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return i = parseInt(t.substr(1, 6), 16),
                [i >> 16, i >> 8 & Tt, i & Tt, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            i = [t >> 16, t >> 8 & Tt, t & Tt]
        } else if (t.substr(0, 3) === "hsl") {
            if (i = _ = t.match(ro),
            !r)
                l = +i[0] % 360 / 360,
                u = +i[1] / 100,
                f = +i[2] / 100,
                a = f <= .5 ? f * (u + 1) : f + u - f * u,
                n = f * 2 - a,
                i.length > 3 && (i[3] *= 1),
                i[0] = Bs(l + 1 / 3, n, a),
                i[1] = Bs(l, n, a),
                i[2] = Bs(l - 1 / 3, n, a);
            else if (~t.indexOf("="))
                return i = t.match(dl),
                e && i.length < 4 && (i[3] = 1),
                i
        } else
            i = t.match(ro) || an.transparent;
        i = i.map(Number)
    }
    return r && !_ && (n = i[0] / Tt,
    a = i[1] / Tt,
    s = i[2] / Tt,
    h = Math.max(n, a, s),
    c = Math.min(n, a, s),
    f = (h + c) / 2,
    h === c ? l = u = 0 : (d = h - c,
    u = f > .5 ? d / (2 - h - c) : d / (h + c),
    l = h === n ? (a - s) / d + (a < s ? 6 : 0) : h === a ? (s - n) / d + 2 : (n - a) / d + 4,
    l *= 60),
    i[0] = ~~(l + .5),
    i[1] = ~~(u * 100 + .5),
    i[2] = ~~(f * 100 + .5)),
    e && i.length < 4 && (i[3] = 1),
    i
}, Bl = function(t) {
    var r = []
      , e = []
      , i = -1;
    return t.split(Kr).forEach(function(n) {
        var a = n.match(Ai) || [];
        r.push.apply(r, a),
        e.push(i += a.length + 1)
    }),
    r.c = e,
    r
}, da = function(t, r, e) {
    var i = "", n = (t + i).match(Kr), a = r ? "hsla(" : "rgba(", s = 0, l, u, f, h;
    if (!n)
        return t;
    if (n = n.map(function(c) {
        return (c = Nl(c, r, 1)) && a + (r ? c[0] + "," + c[1] + "%," + c[2] + "%," + c[3] : c.join(",")) + ")"
    }),
    e && (f = Bl(t),
    l = e.c,
    l.join(i) !== f.c.join(i)))
        for (u = t.replace(Kr, "1").split(Ai),
        h = u.length - 1; s < h; s++)
            i += u[s] + (~l.indexOf(s) ? n.shift() || a + "0,0,0,0)" : (f.length ? f : n.length ? n : e).shift());
    if (!u)
        for (u = t.split(Kr),
        h = u.length - 1; s < h; s++)
            i += u[s] + n[s];
    return i + u[h]
}, Kr = function() {
    var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in an)
        o += "|" + t + "\\b";
    return new RegExp(o + ")","gi")
}(), wf = /hsl[a]?\(/, Il = function(t) {
    var r = t.join(" "), e;
    if (Kr.lastIndex = 0,
    Kr.test(r))
        return e = wf.test(r),
        t[1] = da(t[1], e),
        t[0] = da(t[0], e, Bl(t[1])),
        !0
}, kn, Ue = function() {
    var o = Date.now, t = 500, r = 33, e = o(), i = e, n = 1e3 / 240, a = n, s = [], l, u, f, h, c, d, _ = function p(g) {
        var w = o() - i, v = g === !0, x, T, k, C;
        if (w > t && (e += w - r),
        i += w,
        k = i - e,
        x = k - a,
        (x > 0 || v) && (C = ++h.frame,
        c = k - h.time * 1e3,
        h.time = k = k / 1e3,
        a += x + (x >= n ? 4 : n - x),
        T = 1),
        v || (l = u(p)),
        T)
            for (d = 0; d < s.length; d++)
                s[d](k, c, C, g)
    };
    return h = {
        time: 0,
        frame: 0,
        tick: function() {
            _(!0)
        },
        deltaRatio: function(g) {
            return c / (1e3 / (g || 60))
        },
        wake: function() {
            gl && (!io && zo() && (tr = io = window,
            No = tr.document || {},
            Qe.gsap = Ne,
            (tr.gsapVersions || (tr.gsapVersions = [])).push(Ne.version),
            ml(_s || tr.GreenSockGlobals || !tr.gsap && tr || {}),
            f = tr.requestAnimationFrame,
            Fl.forEach(zl)),
            l && h.sleep(),
            u = f || function(g) {
                return setTimeout(g, a - h.time * 1e3 + 1 | 0)
            }
            ,
            kn = 1,
            _(2))
        },
        sleep: function() {
            (f ? tr.cancelAnimationFrame : clearTimeout)(l),
            kn = 0,
            u = Tn
        },
        lagSmoothing: function(g, w) {
            t = g || 1 / 0,
            r = Math.min(w || 33, t)
        },
        fps: function(g) {
            n = 1e3 / (g || 240),
            a = h.time * 1e3 + n
        },
        add: function(g, w, v) {
            var x = w ? function(T, k, C, S) {
                g(T, k, C, S),
                h.remove(x)
            }
            : g;
            return h.remove(g),
            s[v ? "unshift" : "push"](x),
            Xi(),
            x
        },
        remove: function(g, w) {
            ~(w = s.indexOf(g)) && s.splice(w, 1) && d >= w && d--
        },
        _listeners: s
    },
    h
}(), Xi = function() {
    return !kn && Ue.wake()
}, ot = {}, xf = /^[\d.\-M][\d.\-,\s]/, Tf = /["']/g, Sf = function(t) {
    for (var r = {}, e = t.substr(1, t.length - 3).split(":"), i = e[0], n = 1, a = e.length, s, l, u; n < a; n++)
        l = e[n],
        s = n !== a - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, s),
        r[i] = isNaN(u) ? u.replace(Tf, "").trim() : +u,
        i = l.substr(s + 1).trim();
    return r
}, kf = function(t) {
    var r = t.indexOf("(") + 1
      , e = t.indexOf(")")
      , i = t.indexOf("(", r);
    return t.substring(r, ~i && i < e ? t.indexOf(")", e + 1) : e)
}, Pf = function(t) {
    var r = (t + "").split("(")
      , e = ot[r[0]];
    return e && r.length > 1 && e.config ? e.config.apply(null, ~t.indexOf("{") ? [Sf(r[1])] : kf(t).split(",").map(xl)) : ot._CE && xf.test(t) ? ot._CE("", t) : e
}, Hl = function(t) {
    return function(r) {
        return 1 - t(1 - r)
    }
}, Vl = function o(t, r) {
    for (var e = t._first, i; e; )
        e instanceof Le ? o(e, r) : e.vars.yoyoEase && (!e._yoyo || !e._repeat) && e._yoyo !== r && (e.timeline ? o(e.timeline, r) : (i = e._ease,
        e._ease = e._yEase,
        e._yEase = i,
        e._yoyo = r)),
        e = e._next
}, pi = function(t, r) {
    return t && (Ht(t) ? t : ot[t] || Pf(t)) || r
}, Si = function(t, r, e, i) {
    e === void 0 && (e = function(l) {
        return 1 - r(1 - l)
    }
    ),
    i === void 0 && (i = function(l) {
        return l < .5 ? r(l * 2) / 2 : 1 - r((1 - l) * 2) / 2
    }
    );
    var n = {
        easeIn: r,
        easeOut: e,
        easeInOut: i
    }, a;
    return Fe(t, function(s) {
        ot[s] = Qe[s] = n,
        ot[a = s.toLowerCase()] = e;
        for (var l in n)
            ot[a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = ot[s + "." + l] = n[l]
    }),
    n
}, $l = function(t) {
    return function(r) {
        return r < .5 ? (1 - t(1 - r * 2)) / 2 : .5 + t((r - .5) * 2) / 2
    }
}, Is = function o(t, r, e) {
    var i = r >= 1 ? r : 1
      , n = (e || (t ? .3 : .45)) / (r < 1 ? r : 1)
      , a = n / eo * (Math.asin(1 / i) || 0)
      , s = function(f) {
        return f === 1 ? 1 : i * Math.pow(2, -10 * f) * Ju((f - a) * n) + 1
    }
      , l = t === "out" ? s : t === "in" ? function(u) {
        return 1 - s(1 - u)
    }
    : $l(s);
    return n = eo / n,
    l.config = function(u, f) {
        return o(t, u, f)
    }
    ,
    l
}, Hs = function o(t, r) {
    r === void 0 && (r = 1.70158);
    var e = function(a) {
        return a ? --a * a * ((r + 1) * a + r) + 1 : 0
    }
      , i = t === "out" ? e : t === "in" ? function(n) {
        return 1 - e(1 - n)
    }
    : $l(e);
    return i.config = function(n) {
        return o(t, n)
    }
    ,
    i
};
Fe("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
    var r = t < 5 ? t + 1 : t;
    Si(o + ",Power" + (r - 1), t ? function(e) {
        return Math.pow(e, r)
    }
    : function(e) {
        return e
    }
    , function(e) {
        return 1 - Math.pow(1 - e, r)
    }, function(e) {
        return e < .5 ? Math.pow(e * 2, r) / 2 : 1 - Math.pow((1 - e) * 2, r) / 2
    })
});
ot.Linear.easeNone = ot.none = ot.Linear.easeIn;
Si("Elastic", Is("in"), Is("out"), Is());
(function(o, t) {
    var r = 1 / t
      , e = 2 * r
      , i = 2.5 * r
      , n = function(s) {
        return s < r ? o * s * s : s < e ? o * Math.pow(s - 1.5 / t, 2) + .75 : s < i ? o * (s -= 2.25 / t) * s + .9375 : o * Math.pow(s - 2.625 / t, 2) + .984375
    };
    Si("Bounce", function(a) {
        return 1 - n(1 - a)
    }, n)
}
)(7.5625, 2.75);
Si("Expo", function(o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
});
Si("Circ", function(o) {
    return -(cl(1 - o * o) - 1)
});
Si("Sine", function(o) {
    return o === 1 ? 1 : -Gu(o * Qu) + 1
});
Si("Back", Hs("in"), Hs("out"), Hs());
ot.SteppedEase = ot.steps = Qe.SteppedEase = {
    config: function(t, r) {
        t === void 0 && (t = 1);
        var e = 1 / t
          , i = t + (r ? 0 : 1)
          , n = r ? 1 : 0
          , a = 1 - St;
        return function(s) {
            return ((i * En(0, a, s) | 0) + n) * e
        }
    }
};
$i.ease = ot["quad.out"];
Fe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return Ho += o + "," + o + "Params,"
});
var Yl = function(t, r) {
    this.id = Zu++,
    t._gsap = this,
    this.target = t,
    this.harness = r,
    this.get = r ? r.get : bl,
    this.set = r ? r.getSetter : Xo
}
  , Pn = function() {
    function o(r) {
        this.vars = r,
        this._delay = +r.delay || 0,
        (this._repeat = r.repeat === 1 / 0 ? -2 : r.repeat || 0) && (this._rDelay = r.repeatDelay || 0,
        this._yoyo = !!r.yoyo || !!r.yoyoEase),
        this._ts = 1,
        qi(this, +r.duration, 1, 1),
        this.data = r.data,
        It && (this._ctx = It,
        It.data.push(this)),
        kn || Ue.wake()
    }
    var t = o.prototype;
    return t.delay = function(e) {
        return e || e === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + e - this._delay),
        this._delay = e,
        this) : this._delay
    }
    ,
    t.duration = function(e) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? e + (e + this._rDelay) * this._repeat : e) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(e) {
        return arguments.length ? (this._dirty = 0,
        qi(this, this._repeat < 0 ? e : (e - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(e, i) {
        if (Xi(),
        !arguments.length)
            return this._tTime;
        var n = this._dp;
        if (n && n.smoothChildTiming && this._ts) {
            for (As(this, e),
            !n._dp || n.parent || kl(n, this); n && n.parent; )
                n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                n = n.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && e < this._tDur || this._ts < 0 && e > 0 || !this._tDur && !e) && xr(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== e || !this._dur && !i || this._initted && Math.abs(this._zTime) === St || !e && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = e),
        wl(this, e, i)),
        this
    }
    ,
    t.time = function(e, i) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), e + fa(this)) % (this._dur + this._rDelay) || (e ? this._dur : 0), i) : this._time
    }
    ,
    t.totalProgress = function(e, i) {
        return arguments.length ? this.totalTime(this.totalDuration() * e, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    t.progress = function(e, i) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - e : e) + fa(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    t.iteration = function(e, i) {
        var n = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (e - 1) * n, i) : this._repeat ? Yi(this._tTime, n) + 1 : 1
    }
    ,
    t.timeScale = function(e) {
        if (!arguments.length)
            return this._rts === -St ? 0 : this._rts;
        if (this._rts === e)
            return this;
        var i = this.parent && this._ts ? ys(this.parent._time, this) : this._tTime;
        return this._rts = +e || 0,
        this._ts = this._ps || e === -St ? 0 : this._rts,
        this.totalTime(En(-Math.abs(this._delay), this._tDur, i), !0),
        Ms(this),
        af(this)
    }
    ,
    t.paused = function(e) {
        return arguments.length ? (this._ps !== e && (this._ps = e,
        e ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (Xi(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== St && (this._tTime -= St)))),
        this) : this._ps
    }
    ,
    t.startTime = function(e) {
        if (arguments.length) {
            this._start = e;
            var i = this.parent || this._dp;
            return i && (i._sort || !this.parent) && xr(i, this, e - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(e) {
        return this._start + (De(e) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(e) {
        var i = this.parent || this._dp;
        return i ? e && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? ys(i.rawTime(e), this) : this._tTime : this._tTime
    }
    ,
    t.revert = function(e) {
        e === void 0 && (e = rf);
        var i = ve;
        return ve = e,
        (this._initted || this._startAt) && (this.timeline && this.timeline.revert(e),
        this.totalTime(-.01, e.suppressEvents)),
        this.data !== "nested" && e.kill !== !1 && this.kill(),
        ve = i,
        this
    }
    ,
    t.globalTime = function(e) {
        for (var i = this, n = arguments.length ? e : i.rawTime(); i; )
            n = i._start + n / (i._ts || 1),
            i = i._dp;
        return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 / 0 : this._sat.globalTime(e) : n
    }
    ,
    t.repeat = function(e) {
        return arguments.length ? (this._repeat = e === 1 / 0 ? -2 : e,
        ca(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(e) {
        if (arguments.length) {
            var i = this._time;
            return this._rDelay = e,
            ca(this),
            i ? this.time(i) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(e) {
        return arguments.length ? (this._yoyo = e,
        this) : this._yoyo
    }
    ,
    t.seek = function(e, i) {
        return this.totalTime(Je(this, e), De(i))
    }
    ,
    t.restart = function(e, i) {
        return this.play().totalTime(e ? -this._delay : 0, De(i))
    }
    ,
    t.play = function(e, i) {
        return e != null && this.seek(e, i),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(e, i) {
        return e != null && this.seek(e || this.totalDuration(), i),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(e, i) {
        return e != null && this.seek(e, i),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(e) {
        return arguments.length ? (!!e !== this.reversed() && this.timeScale(-this._rts || (e ? -St : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -St,
        this
    }
    ,
    t.isActive = function() {
        var e = this.parent || this._dp, i = this._start, n;
        return !!(!e || this._ts && this._initted && e.isActive() && (n = e.rawTime(!0)) >= i && n < this.endTime(!0) - St)
    }
    ,
    t.eventCallback = function(e, i, n) {
        var a = this.vars;
        return arguments.length > 1 ? (i ? (a[e] = i,
        n && (a[e + "Params"] = n),
        e === "onUpdate" && (this._onUpdate = i)) : delete a[e],
        this) : a[e]
    }
    ,
    t.then = function(e) {
        var i = this;
        return new Promise(function(n) {
            var a = Ht(e) ? e : Tl
              , s = function() {
                var u = i.then;
                i.then = null,
                Ht(a) && (a = a(i)) && (a.then || a === i) && (i.then = u),
                n(a),
                i.then = u
            };
            i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? s() : i._prom = s
        }
        )
    }
    ,
    t.kill = function() {
        on(this)
    }
    ,
    o
}();
ar(Pn.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -St,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Le = function(o) {
    fl(t, o);
    function t(e, i) {
        var n;
        return e === void 0 && (e = {}),
        n = o.call(this, e) || this,
        n.labels = {},
        n.smoothChildTiming = !!e.smoothChildTiming,
        n.autoRemoveChildren = !!e.autoRemoveChildren,
        n._sort = De(e.sortChildren),
        Ft && xr(e.parent || Ft, Mr(n), i),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && Pl(Mr(n), e.scrollTrigger),
        n
    }
    var r = t.prototype;
    return r.to = function(i, n, a) {
        return hn(0, arguments, this),
        this
    }
    ,
    r.from = function(i, n, a) {
        return hn(1, arguments, this),
        this
    }
    ,
    r.fromTo = function(i, n, a, s) {
        return hn(2, arguments, this),
        this
    }
    ,
    r.set = function(i, n, a) {
        return n.duration = 0,
        n.parent = this,
        cn(n).repeatDelay || (n.repeat = 0),
        n.immediateRender = !!n.immediateRender,
        new Wt(i,n,Je(this, a),1),
        this
    }
    ,
    r.call = function(i, n, a) {
        return xr(this, Wt.delayedCall(0, i, n), a)
    }
    ,
    r.staggerTo = function(i, n, a, s, l, u, f) {
        return a.duration = n,
        a.stagger = a.stagger || s,
        a.onComplete = u,
        a.onCompleteParams = f,
        a.parent = this,
        new Wt(i,a,Je(this, l)),
        this
    }
    ,
    r.staggerFrom = function(i, n, a, s, l, u, f) {
        return a.runBackwards = 1,
        cn(a).immediateRender = De(a.immediateRender),
        this.staggerTo(i, n, a, s, l, u, f)
    }
    ,
    r.staggerFromTo = function(i, n, a, s, l, u, f, h) {
        return s.startAt = a,
        cn(s).immediateRender = De(s.immediateRender),
        this.staggerTo(i, n, s, l, u, f, h)
    }
    ,
    r.render = function(i, n, a) {
        var s = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, f = i <= 0 ? 0 : le(i), h = this._zTime < 0 != i < 0 && (this._initted || !u), c, d, _, p, g, w, v, x, T, k, C, S;
        if (this !== Ft && f > l && i >= 0 && (f = l),
        f !== this._tTime || a || h) {
            if (s !== this._time && u && (f += this._time - s,
            i += this._time - s),
            c = f,
            T = this._start,
            x = this._ts,
            w = !x,
            h && (u || (s = this._zTime),
            (i || !n) && (this._zTime = i)),
            this._repeat) {
                if (C = this._yoyo,
                g = u + this._rDelay,
                this._repeat < -1 && i < 0)
                    return this.totalTime(g * 100 + i, n, a);
                if (c = le(f % g),
                f === l ? (p = this._repeat,
                c = u) : (p = ~~(f / g),
                p && p === f / g && (c = u,
                p--),
                c > u && (c = u)),
                k = Yi(this._tTime, g),
                !s && this._tTime && k !== p && this._tTime - k * g - this._dur <= 0 && (k = p),
                C && p & 1 && (c = u - c,
                S = 1),
                p !== k && !this._lock) {
                    var O = C && k & 1
                      , P = O === (C && p & 1);
                    if (p < k && (O = !O),
                    s = O ? 0 : f % u ? u : f,
                    this._lock = 1,
                    this.render(s || (S ? 0 : le(p * g)), n, !u)._lock = 0,
                    this._tTime = f,
                    !n && this.parent && sr(this, "onRepeat"),
                    this.vars.repeatRefresh && !S && (this.invalidate()._lock = 1),
                    s && s !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    P && (this._lock = 2,
                    s = O ? u : -1e-4,
                    this.render(s, !0),
                    this.vars.repeatRefresh && !S && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !w)
                        return this;
                    Vl(this, S)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (v = cf(this, le(s), le(c)),
            v && (f -= c - (c = v._start))),
            this._tTime = f,
            this._time = c,
            this._act = !x,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = i,
            s = 0),
            !s && c && !n && !p && (sr(this, "onStart"),
            this._tTime !== f))
                return this;
            if (c >= s && i >= 0)
                for (d = this._first; d; ) {
                    if (_ = d._next,
                    (d._act || c >= d._start) && d._ts && v !== d) {
                        if (d.parent !== this)
                            return this.render(i, n, a);
                        if (d.render(d._ts > 0 ? (c - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (c - d._start) * d._ts, n, a),
                        c !== this._time || !this._ts && !w) {
                            v = 0,
                            _ && (f += this._zTime = -St);
                            break
                        }
                    }
                    d = _
                }
            else {
                d = this._last;
                for (var M = i < 0 ? i : c; d; ) {
                    if (_ = d._prev,
                    (d._act || M <= d._end) && d._ts && v !== d) {
                        if (d.parent !== this)
                            return this.render(i, n, a);
                        if (d.render(d._ts > 0 ? (M - d._start) * d._ts : (d._dirty ? d.totalDuration() : d._tDur) + (M - d._start) * d._ts, n, a || ve && (d._initted || d._startAt)),
                        c !== this._time || !this._ts && !w) {
                            v = 0,
                            _ && (f += this._zTime = M ? -St : St);
                            break
                        }
                    }
                    d = _
                }
            }
            if (v && !n && (this.pause(),
            v.render(c >= s ? 0 : -St)._zTime = c >= s ? 1 : -1,
            this._ts))
                return this._start = T,
                Ms(this),
                this.render(i, n, a);
            this._onUpdate && !n && sr(this, "onUpdate", !0),
            (f === l && this._tTime >= this.totalDuration() || !f && s) && (T === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (f === l && this._ts > 0 || !f && this._ts < 0) && Zr(this, 1),
            !n && !(i < 0 && !s) && (f || s || !l) && (sr(this, f === l && i >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(f < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    r.add = function(i, n) {
        var a = this;
        if (zr(n) || (n = Je(this, n, i)),
        !(i instanceof Pn)) {
            if (ye(i))
                return i.forEach(function(s) {
                    return a.add(s, n)
                }),
                this;
            if (te(i))
                return this.addLabel(i, n);
            if (Ht(i))
                i = Wt.delayedCall(0, i);
            else
                return this
        }
        return this !== i ? xr(this, i, n) : this
    }
    ,
    r.getChildren = function(i, n, a, s) {
        i === void 0 && (i = !0),
        n === void 0 && (n = !0),
        a === void 0 && (a = !0),
        s === void 0 && (s = -ir);
        for (var l = [], u = this._first; u; )
            u._start >= s && (u instanceof Wt ? n && l.push(u) : (a && l.push(u),
            i && l.push.apply(l, u.getChildren(!0, n, a)))),
            u = u._next;
        return l
    }
    ,
    r.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), a = n.length; a--; )
            if (n[a].vars.id === i)
                return n[a]
    }
    ,
    r.remove = function(i) {
        return te(i) ? this.removeLabel(i) : Ht(i) ? this.killTweensOf(i) : (Os(this, i),
        i === this._recent && (this._recent = this._last),
        di(this))
    }
    ,
    r.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = le(Ue.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))),
        o.prototype.totalTime.call(this, i, n),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    r.addLabel = function(i, n) {
        return this.labels[i] = Je(this, n),
        this
    }
    ,
    r.removeLabel = function(i) {
        return delete this.labels[i],
        this
    }
    ,
    r.addPause = function(i, n, a) {
        var s = Wt.delayedCall(0, n || Tn, a);
        return s.data = "isPause",
        this._hasPause = 1,
        xr(this, s, Je(this, i))
    }
    ,
    r.removePause = function(i) {
        var n = this._first;
        for (i = Je(this, i); n; )
            n._start === i && n.data === "isPause" && Zr(n),
            n = n._next
    }
    ,
    r.killTweensOf = function(i, n, a) {
        for (var s = this.getTweensOf(i, a), l = s.length; l--; )
            Yr !== s[l] && s[l].kill(i, n);
        return this
    }
    ,
    r.getTweensOf = function(i, n) {
        for (var a = [], s = nr(i), l = this._first, u = zr(n), f; l; )
            l instanceof Wt ? nf(l._targets, s) && (u ? (!Yr || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && a.push(l) : (f = l.getTweensOf(s, n)).length && a.push.apply(a, f),
            l = l._next;
        return a
    }
    ,
    r.tweenTo = function(i, n) {
        n = n || {};
        var a = this, s = Je(a, i), l = n, u = l.startAt, f = l.onStart, h = l.onStartParams, c = l.immediateRender, d, _ = Wt.to(a, ar({
            ease: n.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: s,
            overwrite: "auto",
            duration: n.duration || Math.abs((s - (u && "time"in u ? u.time : a._time)) / a.timeScale()) || St,
            onStart: function() {
                if (a.pause(),
                !d) {
                    var g = n.duration || Math.abs((s - (u && "time"in u ? u.time : a._time)) / a.timeScale());
                    _._dur !== g && qi(_, g, 0, 1).render(_._time, !0, !0),
                    d = 1
                }
                f && f.apply(_, h || [])
            }
        }, n));
        return c ? _.render(0) : _
    }
    ,
    r.tweenFromTo = function(i, n, a) {
        return this.tweenTo(n, ar({
            startAt: {
                time: Je(this, i)
            }
        }, a))
    }
    ,
    r.recent = function() {
        return this._recent
    }
    ,
    r.nextLabel = function(i) {
        return i === void 0 && (i = this._time),
        ha(this, Je(this, i))
    }
    ,
    r.previousLabel = function(i) {
        return i === void 0 && (i = this._time),
        ha(this, Je(this, i), 1)
    }
    ,
    r.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + St)
    }
    ,
    r.shiftChildren = function(i, n, a) {
        a === void 0 && (a = 0);
        for (var s = this._first, l = this.labels, u; s; )
            s._start >= a && (s._start += i,
            s._end += i),
            s = s._next;
        if (n)
            for (u in l)
                l[u] >= a && (l[u] += i);
        return di(this)
    }
    ,
    r.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(i),
            n = n._next;
        return o.prototype.invalidate.call(this, i)
    }
    ,
    r.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, a; n; )
            a = n._next,
            this.remove(n),
            n = a;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        di(this)
    }
    ,
    r.totalDuration = function(i) {
        var n = 0, a = this, s = a._last, l = ir, u, f, h;
        if (arguments.length)
            return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -i : i));
        if (a._dirty) {
            for (h = a.parent; s; )
                u = s._prev,
                s._dirty && s.totalDuration(),
                f = s._start,
                f > l && a._sort && s._ts && !a._lock ? (a._lock = 1,
                xr(a, s, f - s._delay, 1)._lock = 0) : l = f,
                f < 0 && s._ts && (n -= f,
                (!h && !a._dp || h && h.smoothChildTiming) && (a._start += f / a._ts,
                a._time -= f,
                a._tTime -= f),
                a.shiftChildren(-f, !1, -1 / 0),
                l = 0),
                s._end > n && s._ts && (n = s._end),
                s = u;
            qi(a, a === Ft && a._time > n ? a._time : n, 1, 1),
            a._dirty = 0
        }
        return a._tDur
    }
    ,
    t.updateRoot = function(i) {
        if (Ft._ts && (wl(Ft, ys(i, Ft)),
        yl = Ue.frame),
        Ue.frame >= la) {
            la += Ke.autoSleep || 120;
            var n = Ft._first;
            if ((!n || !n._ts) && Ke.autoSleep && Ue._listeners.length < 2) {
                for (; n && !n._ts; )
                    n = n._next;
                n || Ue.sleep()
            }
        }
    }
    ,
    t
}(Pn);
ar(Le.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Cf = function(t, r, e, i, n, a, s) {
    var l = new ze(this._pt,t,r,0,1,Kl,null,n), u = 0, f = 0, h, c, d, _, p, g, w, v;
    for (l.b = e,
    l.e = i,
    e += "",
    i += "",
    (w = ~i.indexOf("random(")) && (i = Sn(i)),
    a && (v = [e, i],
    a(v, t, r),
    e = v[0],
    i = v[1]),
    c = e.match(zs) || []; h = zs.exec(i); )
        _ = h[0],
        p = i.substring(u, h.index),
        d ? d = (d + 1) % 5 : p.substr(-5) === "rgba(" && (d = 1),
        _ !== c[f++] && (g = parseFloat(c[f - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: p || f === 1 ? p : ",",
            s: g,
            c: _.charAt(1) === "=" ? zi(g, _) - g : parseFloat(_) - g,
            m: d && d < 4 ? Math.round : 0
        },
        u = zs.lastIndex);
    return l.c = u < i.length ? i.substring(u, i.length) : "",
    l.fp = s,
    (pl.test(i) || w) && (l.e = 0),
    this._pt = l,
    l
}, $o = function(t, r, e, i, n, a, s, l, u, f) {
    Ht(i) && (i = i(n || 0, t, a));
    var h = t[r], c = e !== "get" ? e : Ht(h) ? u ? t[r.indexOf("set") || !Ht(t["get" + r.substr(3)]) ? r : "get" + r.substr(3)](u) : t[r]() : h, d = Ht(h) ? u ? Rf : Ul : qo, _;
    if (te(i) && (~i.indexOf("random(") && (i = Sn(i)),
    i.charAt(1) === "=" && (_ = zi(c, i) + (me(c) || 0),
    (_ || _ === 0) && (i = _))),
    !f || c !== i || fo)
        return !isNaN(c * i) && i !== "" ? (_ = new ze(this._pt,t,r,+c || 0,i - (c || 0),typeof h == "boolean" ? Df : jl,0,d),
        u && (_.fp = u),
        s && _.modifier(s, this, t),
        this._pt = _) : (!h && !(r in t) && Bo(r, i),
        Cf.call(this, t, r, c, i, d, l || Ke.stringFilter, u))
}, Of = function(t, r, e, i, n) {
    if (Ht(t) && (t = dn(t, n, r, e, i)),
    !Or(t) || t.style && t.nodeType || ye(t) || hl(t))
        return te(t) ? dn(t, n, r, e, i) : t;
    var a = {}, s;
    for (s in t)
        a[s] = dn(t[s], n, r, e, i);
    return a
}, ql = function(t, r, e, i, n, a) {
    var s, l, u, f;
    if (We[t] && (s = new We[t]).init(n, s.rawVars ? r[t] : Of(r[t], i, n, a, e), e, i, a) !== !1 && (e._pt = l = new ze(e._pt,n,t,0,1,s.render,s,0,s.priority),
    e !== Ei))
        for (u = e._ptLookup[e._targets.indexOf(n)],
        f = s._props.length; f--; )
            u[s._props[f]] = l;
    return s
}, Yr, fo, Yo = function o(t, r, e) {
    var i = t.vars, n = i.ease, a = i.startAt, s = i.immediateRender, l = i.lazy, u = i.onUpdate, f = i.onUpdateParams, h = i.callbackScope, c = i.runBackwards, d = i.yoyoEase, _ = i.keyframes, p = i.autoRevert, g = t._dur, w = t._startAt, v = t._targets, x = t.parent, T = x && x.data === "nested" ? x.vars.targets : v, k = t._overwrite === "auto" && !Do, C = t.timeline, S, O, P, M, E, A, $, W, N, I, z, B, Q;
    if (C && (!_ || !n) && (n = "none"),
    t._ease = pi(n, $i.ease),
    t._yEase = d ? Hl(pi(d === !0 ? n : d, $i.ease)) : 0,
    d && t._yoyo && !t._repeat && (d = t._yEase,
    t._yEase = t._ease,
    t._ease = d),
    t._from = !C && !!i.runBackwards,
    !C || _ && !i.stagger) {
        if (W = v[0] ? hi(v[0]).harness : 0,
        B = W && i[W.prop],
        S = vs(i, Io),
        w && (w._zTime < 0 && w.progress(1),
        r < 0 && c && s && !p ? w.render(-1, !0) : w.revert(c && g ? is : ef),
        w._lazy = 0),
        a) {
            if (Zr(t._startAt = Wt.set(v, ar({
                data: "isStart",
                overwrite: !1,
                parent: x,
                immediateRender: !0,
                lazy: !w && De(l),
                startAt: null,
                delay: 0,
                onUpdate: u,
                onUpdateParams: f,
                callbackScope: h,
                stagger: 0
            }, a))),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            r < 0 && (ve || !s && !p) && t._startAt.revert(is),
            s && g && r <= 0 && e <= 0) {
                r && (t._zTime = r);
                return
            }
        } else if (c && g && !w) {
            if (r && (s = !1),
            P = ar({
                overwrite: !1,
                data: "isFromStart",
                lazy: s && !w && De(l),
                immediateRender: s,
                stagger: 0,
                parent: x
            }, S),
            B && (P[W.prop] = B),
            Zr(t._startAt = Wt.set(v, P)),
            t._startAt._dp = 0,
            t._startAt._sat = t,
            r < 0 && (ve ? t._startAt.revert(is) : t._startAt.render(-1, !0)),
            t._zTime = r,
            !s)
                o(t._startAt, St, St);
            else if (!r)
                return
        }
        for (t._pt = t._ptCache = 0,
        l = g && De(l) || l && !g,
        O = 0; O < v.length; O++) {
            if (E = v[O],
            $ = E._gsap || Vo(v)[O]._gsap,
            t._ptLookup[O] = I = {},
            no[$.id] && jr.length && ms(),
            z = T === v ? O : T.indexOf(E),
            W && (N = new W).init(E, B || S, t, z, T) !== !1 && (t._pt = M = new ze(t._pt,E,N.name,0,1,N.render,N,0,N.priority),
            N._props.forEach(function(b) {
                I[b] = M
            }),
            N.priority && (A = 1)),
            !W || B)
                for (P in S)
                    We[P] && (N = ql(P, S, t, z, E, T)) ? N.priority && (A = 1) : I[P] = M = $o.call(t, E, P, "get", S[P], z, T, 0, i.stringFilter);
            t._op && t._op[O] && t.kill(E, t._op[O]),
            k && t._pt && (Yr = t,
            Ft.killTweensOf(E, I, t.globalTime(r)),
            Q = !t.parent,
            Yr = 0),
            t._pt && l && (no[$.id] = 1)
        }
        A && Ql(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = u,
    t._initted = (!t._op || t._pt) && !Q,
    _ && r <= 0 && C.render(ir, !0, !0)
}, Mf = function(t, r, e, i, n, a, s) {
    var l = (t._pt && t._ptCache || (t._ptCache = {}))[r], u, f, h, c;
    if (!l)
        for (l = t._ptCache[r] = [],
        h = t._ptLookup,
        c = t._targets.length; c--; ) {
            if (u = h[c][r],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== r && u.fp !== r; )
                    u = u._next;
            if (!u)
                return fo = 1,
                t.vars[r] = "+=0",
                Yo(t, s),
                fo = 0,
                1;
            l.push(u)
        }
    for (c = l.length; c--; )
        f = l[c],
        u = f._pt || f,
        u.s = (i || i === 0) && !n ? i : u.s + (i || 0) + a * u.c,
        u.c = e - u.s,
        f.e && (f.e = $t(e) + me(f.e)),
        f.b && (f.b = u.s + me(f.b))
}, Af = function(t, r) {
    var e = t[0] ? hi(t[0]).harness : 0, i = e && e.aliases, n, a, s, l;
    if (!i)
        return r;
    n = bi({}, r);
    for (a in i)
        if (a in n)
            for (l = i[a].split(","),
            s = l.length; s--; )
                n[l[s]] = n[a];
    return n
}, Ef = function(t, r, e, i) {
    var n = r.ease || i || "power1.inOut", a, s;
    if (ye(r))
        s = e[t] || (e[t] = []),
        r.forEach(function(l, u) {
            return s.push({
                t: u / (r.length - 1) * 100,
                v: l,
                e: n
            })
        });
    else
        for (a in r)
            s = e[a] || (e[a] = []),
            a === "ease" || s.push({
                t: parseFloat(t),
                v: r[a],
                e: n
            })
}, dn = function(t, r, e, i, n) {
    return Ht(t) ? t.call(r, e, i, n) : te(t) && ~t.indexOf("random(") ? Sn(t) : t
}, Xl = Ho + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Wl = {};
Fe(Xl + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return Wl[o] = 1
});
var Wt = function(o) {
    fl(t, o);
    function t(e, i, n, a) {
        var s;
        typeof i == "number" && (n.duration = i,
        i = n,
        n = null),
        s = o.call(this, a ? i : cn(i)) || this;
        var l = s.vars, u = l.duration, f = l.delay, h = l.immediateRender, c = l.stagger, d = l.overwrite, _ = l.keyframes, p = l.defaults, g = l.scrollTrigger, w = l.yoyoEase, v = i.parent || Ft, x = (ye(e) || hl(e) ? zr(e[0]) : "length"in i) ? [e] : nr(e), T, k, C, S, O, P, M, E;
        if (s._targets = x.length ? Vo(x) : gs("GSAP target " + e + " not found. https://greensock.com", !Ke.nullTargetWarn) || [],
        s._ptLookup = [],
        s._overwrite = d,
        _ || c || Fn(u) || Fn(f)) {
            if (i = s.vars,
            T = s.timeline = new Le({
                data: "nested",
                defaults: p || {},
                targets: v && v.data === "nested" ? v.vars.targets : x
            }),
            T.kill(),
            T.parent = T._dp = Mr(s),
            T._start = 0,
            c || Fn(u) || Fn(f)) {
                if (S = x.length,
                M = c && Al(c),
                Or(c))
                    for (O in c)
                        ~Xl.indexOf(O) && (E || (E = {}),
                        E[O] = c[O]);
                for (k = 0; k < S; k++)
                    C = vs(i, Wl),
                    C.stagger = 0,
                    w && (C.yoyoEase = w),
                    E && bi(C, E),
                    P = x[k],
                    C.duration = +dn(u, Mr(s), k, P, x),
                    C.delay = (+dn(f, Mr(s), k, P, x) || 0) - s._delay,
                    !c && S === 1 && C.delay && (s._delay = f = C.delay,
                    s._start += f,
                    C.delay = 0),
                    T.to(P, C, M ? M(k, P, x) : 0),
                    T._ease = ot.none;
                T.duration() ? u = f = 0 : s.timeline = 0
            } else if (_) {
                cn(ar(T.vars.defaults, {
                    ease: "none"
                })),
                T._ease = pi(_.ease || i.ease || "none");
                var A = 0, $, W, N;
                if (ye(_))
                    _.forEach(function(I) {
                        return T.to(x, I, ">")
                    }),
                    T.duration();
                else {
                    C = {};
                    for (O in _)
                        O === "ease" || O === "easeEach" || Ef(O, _[O], C, _.easeEach);
                    for (O in C)
                        for ($ = C[O].sort(function(I, z) {
                            return I.t - z.t
                        }),
                        A = 0,
                        k = 0; k < $.length; k++)
                            W = $[k],
                            N = {
                                ease: W.e,
                                duration: (W.t - (k ? $[k - 1].t : 0)) / 100 * u
                            },
                            N[O] = W.v,
                            T.to(x, N, A),
                            A += N.duration;
                    T.duration() < u && T.to({}, {
                        duration: u - T.duration()
                    })
                }
            }
            u || s.duration(u = T.duration())
        } else
            s.timeline = 0;
        return d === !0 && !Do && (Yr = Mr(s),
        Ft.killTweensOf(x),
        Yr = 0),
        xr(v, Mr(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        (h || !u && !_ && s._start === le(v._time) && De(h) && lf(Mr(s)) && v.data !== "nested") && (s._tTime = -St,
        s.render(Math.max(0, -f) || 0)),
        g && Pl(Mr(s), g),
        s
    }
    var r = t.prototype;
    return r.render = function(i, n, a) {
        var s = this._time, l = this._tDur, u = this._dur, f = i < 0, h = i > l - St && !f ? l : i < St ? 0 : i, c, d, _, p, g, w, v, x, T;
        if (!u)
            ff(this, i, n, a);
        else if (h !== this._tTime || !i || a || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== f) {
            if (c = h,
            x = this.timeline,
            this._repeat) {
                if (p = u + this._rDelay,
                this._repeat < -1 && f)
                    return this.totalTime(p * 100 + i, n, a);
                if (c = le(h % p),
                h === l ? (_ = this._repeat,
                c = u) : (_ = ~~(h / p),
                _ && _ === h / p && (c = u,
                _--),
                c > u && (c = u)),
                w = this._yoyo && _ & 1,
                w && (T = this._yEase,
                c = u - c),
                g = Yi(this._tTime, p),
                c === s && !a && this._initted)
                    return this._tTime = h,
                    this;
                _ !== g && (x && this._yEase && Vl(x, w),
                this.vars.repeatRefresh && !w && !this._lock && (this._lock = a = 1,
                this.render(le(p * _), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Cl(this, f ? i : c, a, n, h))
                    return this._tTime = 0,
                    this;
                if (s !== this._time)
                    return this;
                if (u !== this._dur)
                    return this.render(i, n, a)
            }
            if (this._tTime = h,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = v = (T || this._ease)(c / u),
            this._from && (this.ratio = v = 1 - v),
            c && !s && !n && !_ && (sr(this, "onStart"),
            this._tTime !== h))
                return this;
            for (d = this._pt; d; )
                d.r(v, d.d),
                d = d._next;
            x && x.render(i < 0 ? i : !c && w ? -St : x._dur * x._ease(c / this._dur), n, a) || this._startAt && (this._zTime = i),
            this._onUpdate && !n && (f && so(this, i, n, a),
            sr(this, "onUpdate")),
            this._repeat && _ !== g && this.vars.onRepeat && !n && this.parent && sr(this, "onRepeat"),
            (h === this._tDur || !h) && this._tTime === h && (f && !this._onUpdate && so(this, i, !0, !0),
            (i || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && Zr(this, 1),
            !n && !(f && !s) && (h || s || w) && (sr(this, h === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(h < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    r.targets = function() {
        return this._targets
    }
    ,
    r.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(i),
        o.prototype.invalidate.call(this, i)
    }
    ,
    r.resetTo = function(i, n, a, s) {
        kn || Ue.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || Yo(this, l),
        u = this._ease(l / this._dur),
        Mf(this, i, n, a, s, u, l) ? this.resetTo(i, n, a, s) : (As(this, 0),
        this.parent || Sl(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    r.kill = function(i, n) {
        if (n === void 0 && (n = "all"),
        !i && (!n || n === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? on(this) : this;
        if (this.timeline) {
            var a = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, Yr && Yr.vars.overwrite !== !0)._first || on(this),
            this.parent && a !== this.timeline.totalDuration() && qi(this, this._dur * this.timeline._tDur / a, 0, 1),
            this
        }
        var s = this._targets, l = i ? nr(i) : s, u = this._ptLookup, f = this._pt, h, c, d, _, p, g, w;
        if ((!n || n === "all") && of(s, l))
            return n === "all" && (this._pt = 0),
            on(this);
        for (h = this._op = this._op || [],
        n !== "all" && (te(n) && (p = {},
        Fe(n, function(v) {
            return p[v] = 1
        }),
        n = p),
        n = Af(s, n)),
        w = s.length; w--; )
            if (~l.indexOf(s[w])) {
                c = u[w],
                n === "all" ? (h[w] = n,
                _ = c,
                d = {}) : (d = h[w] = h[w] || {},
                _ = n);
                for (p in _)
                    g = c && c[p],
                    g && ((!("kill"in g.d) || g.d.kill(p) === !0) && Os(this, g, "_pt"),
                    delete c[p]),
                    d !== "all" && (d[p] = 1)
            }
        return this._initted && !this._pt && f && on(this),
        this
    }
    ,
    t.to = function(i, n) {
        return new t(i,n,arguments[2])
    }
    ,
    t.from = function(i, n) {
        return hn(1, arguments)
    }
    ,
    t.delayedCall = function(i, n, a, s) {
        return new t(n,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: a,
            onReverseCompleteParams: a,
            callbackScope: s
        })
    }
    ,
    t.fromTo = function(i, n, a) {
        return hn(2, arguments)
    }
    ,
    t.set = function(i, n) {
        return n.duration = 0,
        n.repeatDelay || (n.repeat = 0),
        new t(i,n)
    }
    ,
    t.killTweensOf = function(i, n, a) {
        return Ft.killTweensOf(i, n, a)
    }
    ,
    t
}(Pn);
ar(Wt.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Fe("staggerTo,staggerFrom,staggerFromTo", function(o) {
    Wt[o] = function() {
        var t = new Le
          , r = ao.call(arguments, 0);
        return r.splice(o === "staggerFromTo" ? 5 : 4, 0, 0),
        t[o].apply(t, r)
    }
});
var qo = function(t, r, e) {
    return t[r] = e
}
  , Ul = function(t, r, e) {
    return t[r](e)
}
  , Rf = function(t, r, e, i) {
    return t[r](i.fp, e)
}
  , Lf = function(t, r, e) {
    return t.setAttribute(r, e)
}
  , Xo = function(t, r) {
    return Ht(t[r]) ? Ul : Fo(t[r]) && t.setAttribute ? Lf : qo
}
  , jl = function(t, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e6) / 1e6, r)
}
  , Df = function(t, r) {
    return r.set(r.t, r.p, !!(r.s + r.c * t), r)
}
  , Kl = function(t, r) {
    var e = r._pt
      , i = "";
    if (!t && r.b)
        i = r.b;
    else if (t === 1 && r.e)
        i = r.e;
    else {
        for (; e; )
            i = e.p + (e.m ? e.m(e.s + e.c * t) : Math.round((e.s + e.c * t) * 1e4) / 1e4) + i,
            e = e._next;
        i += r.c
    }
    r.set(r.t, r.p, i, r)
}
  , Wo = function(t, r) {
    for (var e = r._pt; e; )
        e.r(t, e.d),
        e = e._next
}
  , Ff = function(t, r, e, i) {
    for (var n = this._pt, a; n; )
        a = n._next,
        n.p === i && n.modifier(t, r, e),
        n = a
}
  , zf = function(t) {
    for (var r = this._pt, e, i; r; )
        i = r._next,
        r.p === t && !r.op || r.op === t ? Os(this, r, "_pt") : r.dep || (e = 1),
        r = i;
    return !e
}
  , Nf = function(t, r, e, i) {
    i.mSet(t, r, i.m.call(i.tween, e, i.mt), i)
}
  , Ql = function(t) {
    for (var r = t._pt, e, i, n, a; r; ) {
        for (e = r._next,
        i = n; i && i.pr > r.pr; )
            i = i._next;
        (r._prev = i ? i._prev : a) ? r._prev._next = r : n = r,
        (r._next = i) ? i._prev = r : a = r,
        r = e
    }
    t._pt = n
}
  , ze = function() {
    function o(r, e, i, n, a, s, l, u, f) {
        this.t = e,
        this.s = n,
        this.c = a,
        this.p = i,
        this.r = s || jl,
        this.d = l || this,
        this.set = u || qo,
        this.pr = f || 0,
        this._next = r,
        r && (r._prev = this)
    }
    var t = o.prototype;
    return t.modifier = function(e, i, n) {
        this.mSet = this.mSet || this.set,
        this.set = Nf,
        this.m = e,
        this.mt = n,
        this.tween = i
    }
    ,
    o
}();
Fe(Ho + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
    return Io[o] = 1
});
Qe.TweenMax = Qe.TweenLite = Wt;
Qe.TimelineLite = Qe.TimelineMax = Le;
Ft = new Le({
    sortChildren: !1,
    defaults: $i,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
Ke.stringFilter = Il;
var _i = []
  , ss = {}
  , Bf = []
  , pa = 0
  , If = 0
  , Vs = function(t) {
    return (ss[t] || Bf).map(function(r) {
        return r()
    })
}
  , co = function() {
    var t = Date.now()
      , r = [];
    t - pa > 2 && (Vs("matchMediaInit"),
    _i.forEach(function(e) {
        var i = e.queries, n = e.conditions, a, s, l, u;
        for (s in i)
            a = tr.matchMedia(i[s]).matches,
            a && (l = 1),
            a !== n[s] && (n[s] = a,
            u = 1);
        u && (e.revert(),
        l && r.push(e))
    }),
    Vs("matchMediaRevert"),
    r.forEach(function(e) {
        return e.onMatch(e)
    }),
    pa = t,
    Vs("matchMedia"))
}
  , Zl = function() {
    function o(r, e) {
        this.selector = e && lo(e),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = If++,
        r && this.add(r)
    }
    var t = o.prototype;
    return t.add = function(e, i, n) {
        Ht(e) && (n = i,
        i = e,
        e = Ht);
        var a = this
          , s = function() {
            var u = It, f = a.selector, h;
            return u && u !== a && u.data.push(a),
            n && (a.selector = lo(n)),
            It = a,
            h = i.apply(a, arguments),
            Ht(h) && a._r.push(h),
            It = u,
            a.selector = f,
            a.isReverted = !1,
            h
        };
        return a.last = s,
        e === Ht ? s(a) : e ? a[e] = s : s
    }
    ,
    t.ignore = function(e) {
        var i = It;
        It = null,
        e(this),
        It = i
    }
    ,
    t.getTweens = function() {
        var e = [];
        return this.data.forEach(function(i) {
            return i instanceof o ? e.push.apply(e, i.getTweens()) : i instanceof Wt && !(i.parent && i.parent.data === "nested") && e.push(i)
        }),
        e
    }
    ,
    t.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    t.kill = function(e, i) {
        var n = this;
        if (e) {
            var a = this.getTweens();
            this.data.forEach(function(l) {
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(u) {
                    return a.splice(a.indexOf(u), 1)
                }))
            }),
            a.map(function(l) {
                return {
                    g: l.globalTime(0),
                    t: l
                }
            }).sort(function(l, u) {
                return u.g - l.g || -1 / 0
            }).forEach(function(l) {
                return l.t.revert(e)
            }),
            this.data.forEach(function(l) {
                return !(l instanceof Wt) && l.revert && l.revert(e)
            }),
            this._r.forEach(function(l) {
                return l(e, n)
            }),
            this.isReverted = !0
        } else
            this.data.forEach(function(l) {
                return l.kill && l.kill()
            });
        if (this.clear(),
        i)
            for (var s = _i.length; s--; )
                _i[s].id === this.id && _i.splice(s, 1)
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    o
}()
  , Hf = function() {
    function o(r) {
        this.contexts = [],
        this.scope = r
    }
    var t = o.prototype;
    return t.add = function(e, i, n) {
        Or(e) || (e = {
            matches: e
        });
        var a = new Zl(0,n || this.scope), s = a.conditions = {}, l, u, f;
        It && !a.selector && (a.selector = It.selector),
        this.contexts.push(a),
        i = a.add("onMatch", i),
        a.queries = e;
        for (u in e)
            u === "all" ? f = 1 : (l = tr.matchMedia(e[u]),
            l && (_i.indexOf(a) < 0 && _i.push(a),
            (s[u] = l.matches) && (f = 1),
            l.addListener ? l.addListener(co) : l.addEventListener("change", co)));
        return f && i(a),
        this
    }
    ,
    t.revert = function(e) {
        this.kill(e || {})
    }
    ,
    t.kill = function(e) {
        this.contexts.forEach(function(i) {
            return i.kill(e, !0)
        })
    }
    ,
    o
}()
  , bs = {
    registerPlugin: function() {
        for (var t = arguments.length, r = new Array(t), e = 0; e < t; e++)
            r[e] = arguments[e];
        r.forEach(function(i) {
            return zl(i)
        })
    },
    timeline: function(t) {
        return new Le(t)
    },
    getTweensOf: function(t, r) {
        return Ft.getTweensOf(t, r)
    },
    getProperty: function(t, r, e, i) {
        te(t) && (t = nr(t)[0]);
        var n = hi(t || {}).get
          , a = e ? Tl : xl;
        return e === "native" && (e = ""),
        t && (r ? a((We[r] && We[r].get || n)(t, r, e, i)) : function(s, l, u) {
            return a((We[s] && We[s].get || n)(t, s, l, u))
        }
        )
    },
    quickSetter: function(t, r, e) {
        if (t = nr(t),
        t.length > 1) {
            var i = t.map(function(f) {
                return Ne.quickSetter(f, r, e)
            })
              , n = i.length;
            return function(f) {
                for (var h = n; h--; )
                    i[h](f)
            }
        }
        t = t[0] || {};
        var a = We[r]
          , s = hi(t)
          , l = s.harness && (s.harness.aliases || {})[r] || r
          , u = a ? function(f) {
            var h = new a;
            Ei._pt = 0,
            h.init(t, e ? f + e : f, Ei, 0, [t]),
            h.render(1, h),
            Ei._pt && Wo(1, Ei)
        }
        : s.set(t, l);
        return a ? u : function(f) {
            return u(t, l, e ? f + e : f, s, 1)
        }
    },
    quickTo: function(t, r, e) {
        var i, n = Ne.to(t, bi((i = {},
        i[r] = "+=0.1",
        i.paused = !0,
        i), e || {})), a = function(l, u, f) {
            return n.resetTo(r, l, u, f)
        };
        return a.tween = n,
        a
    },
    isTweening: function(t) {
        return Ft.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = pi(t.ease, $i.ease)),
        ua($i, t || {})
    },
    config: function(t) {
        return ua(Ke, t || {})
    },
    registerEffect: function(t) {
        var r = t.name
          , e = t.effect
          , i = t.plugins
          , n = t.defaults
          , a = t.extendTimeline;
        (i || "").split(",").forEach(function(s) {
            return s && !We[s] && !Qe[s] && gs(r + " effect requires " + s + " plugin.")
        }),
        Ns[r] = function(s, l, u) {
            return e(nr(s), ar(l || {}, n), u)
        }
        ,
        a && (Le.prototype[r] = function(s, l, u) {
            return this.add(Ns[r](s, Or(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(t, r) {
        ot[t] = pi(r)
    },
    parseEase: function(t, r) {
        return arguments.length ? pi(t, r) : ot
    },
    getById: function(t) {
        return Ft.getById(t)
    },
    exportRoot: function(t, r) {
        t === void 0 && (t = {});
        var e = new Le(t), i, n;
        for (e.smoothChildTiming = De(t.smoothChildTiming),
        Ft.remove(e),
        e._dp = 0,
        e._time = e._tTime = Ft._time,
        i = Ft._first; i; )
            n = i._next,
            (r || !(!i._dur && i instanceof Wt && i.vars.onComplete === i._targets[0])) && xr(e, i, i._start - i._delay),
            i = n;
        return xr(Ft, e, 0),
        e
    },
    context: function(t, r) {
        return t ? new Zl(t,r) : It
    },
    matchMedia: function(t) {
        return new Hf(t)
    },
    matchMediaRefresh: function() {
        return _i.forEach(function(t) {
            var r = t.conditions, e, i;
            for (i in r)
                r[i] && (r[i] = !1,
                e = 1);
            e && t.revert()
        }) || co()
    },
    addEventListener: function(t, r) {
        var e = ss[t] || (ss[t] = []);
        ~e.indexOf(r) || e.push(r)
    },
    removeEventListener: function(t, r) {
        var e = ss[t]
          , i = e && e.indexOf(r);
        i >= 0 && e.splice(i, 1)
    },
    utils: {
        wrap: vf,
        wrapYoyo: yf,
        distribute: Al,
        random: Rl,
        snap: El,
        normalize: mf,
        getUnit: me,
        clamp: df,
        splitColor: Nl,
        toArray: nr,
        selector: lo,
        mapRange: Dl,
        pipe: _f,
        unitize: gf,
        interpolate: bf,
        shuffle: Ml
    },
    install: ml,
    effects: Ns,
    ticker: Ue,
    updateRoot: Le.updateRoot,
    plugins: We,
    globalTimeline: Ft,
    core: {
        PropTween: ze,
        globals: vl,
        Tween: Wt,
        Timeline: Le,
        Animation: Pn,
        getCache: hi,
        _removeLinkedListItem: Os,
        reverting: function() {
            return ve
        },
        context: function(t) {
            return t && It && (It.data.push(t),
            t._ctx = It),
            It
        },
        suppressOverwrites: function(t) {
            return Do = t
        }
    }
};
Fe("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return bs[o] = Wt[o]
});
Ue.add(Le.updateRoot);
Ei = bs.to({}, {
    duration: 0
});
var Vf = function(t, r) {
    for (var e = t._pt; e && e.p !== r && e.op !== r && e.fp !== r; )
        e = e._next;
    return e
}
  , $f = function(t, r) {
    var e = t._targets, i, n, a;
    for (i in r)
        for (n = e.length; n--; )
            a = t._ptLookup[n][i],
            a && (a = a.d) && (a._pt && (a = Vf(a, i)),
            a && a.modifier && a.modifier(r[i], t, e[n], i))
}
  , $s = function(t, r) {
    return {
        name: t,
        rawVars: 1,
        init: function(i, n, a) {
            a._onInit = function(s) {
                var l, u;
                if (te(n) && (l = {},
                Fe(n, function(f) {
                    return l[f] = 1
                }),
                n = l),
                r) {
                    l = {};
                    for (u in n)
                        l[u] = r(n[u]);
                    n = l
                }
                $f(s, n)
            }
        }
    }
}
  , Ne = bs.registerPlugin({
    name: "attr",
    init: function(t, r, e, i, n) {
        var a, s, l;
        this.tween = e;
        for (a in r)
            l = t.getAttribute(a) || "",
            s = this.add(t, "setAttribute", (l || 0) + "", r[a], i, n, 0, 0, a),
            s.op = a,
            s.b = l,
            this._props.push(a)
    },
    render: function(t, r) {
        for (var e = r._pt; e; )
            ve ? e.set(e.t, e.p, e.b, e) : e.r(t, e.d),
            e = e._next
    }
}, {
    name: "endArray",
    init: function(t, r) {
        for (var e = r.length; e--; )
            this.add(t, e, t[e] || 0, r[e], 0, 0, 0, 0, 0, 1)
    }
}, $s("roundProps", uo), $s("modifiers"), $s("snap", El)) || bs;
Wt.version = Le.version = Ne.version = "3.12.2";
gl = 1;
zo() && Xi();
ot.Power0;
var Br = ot.Power1;
ot.Power2;
ot.Power3;
ot.Power4;
ot.Linear;
ot.Quad;
ot.Cubic;
ot.Quart;
ot.Quint;
ot.Strong;
ot.Elastic;
ot.Back;
ot.SteppedEase;
ot.Bounce;
ot.Sine;
ot.Expo;
ot.Circ;
/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _a, qr, Ni, Uo, fi, ga, jo, Yf = function() {
    return typeof window < "u"
}, Nr = {}, si = 180 / Math.PI, Bi = Math.PI / 180, ki = Math.atan2, ma = 1e8, Ko = /([A-Z])/g, qf = /(left|right|width|margin|padding|x)/i, Xf = /[\s,\(]\S/, Tr = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ho = function(t, r) {
    return r.set(r.t, r.p, Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r)
}, Wf = function(t, r) {
    return r.set(r.t, r.p, t === 1 ? r.e : Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u, r)
}, Uf = function(t, r) {
    return r.set(r.t, r.p, t ? Math.round((r.s + r.c * t) * 1e4) / 1e4 + r.u : r.b, r)
}, jf = function(t, r) {
    var e = r.s + r.c * t;
    r.set(r.t, r.p, ~~(e + (e < 0 ? -.5 : .5)) + r.u, r)
}, Gl = function(t, r) {
    return r.set(r.t, r.p, t ? r.e : r.b, r)
}, Jl = function(t, r) {
    return r.set(r.t, r.p, t !== 1 ? r.b : r.e, r)
}, Kf = function(t, r, e) {
    return t.style[r] = e
}, Qf = function(t, r, e) {
    return t.style.setProperty(r, e)
}, Zf = function(t, r, e) {
    return t._gsap[r] = e
}, Gf = function(t, r, e) {
    return t._gsap.scaleX = t._gsap.scaleY = e
}, Jf = function(t, r, e, i, n) {
    var a = t._gsap;
    a.scaleX = a.scaleY = e,
    a.renderTransform(n, a)
}, tc = function(t, r, e, i, n) {
    var a = t._gsap;
    a[r] = e,
    a.renderTransform(n, a)
}, zt = "transform", hr = zt + "Origin", ec = function o(t, r) {
    var e = this
      , i = this.target
      , n = i.style;
    if (t in Nr && n) {
        if (this.tfm = this.tfm || {},
        t !== "transform")
            t = Tr[t] || t,
            ~t.indexOf(",") ? t.split(",").forEach(function(a) {
                return e.tfm[a] = Ar(i, a)
            }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : Ar(i, t);
        else
            return Tr.transform.split(",").forEach(function(a) {
                return o.call(e, a, r)
            });
        if (this.props.indexOf(zt) >= 0)
            return;
        i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"),
        this.props.push(hr, r, "")),
        t = zt
    }
    (n || r) && this.props.push(t, r, n[t])
}, tu = function(t) {
    t.translate && (t.removeProperty("translate"),
    t.removeProperty("scale"),
    t.removeProperty("rotate"))
}, rc = function() {
    var t = this.props, r = this.target, e = r.style, i = r._gsap, n, a;
    for (n = 0; n < t.length; n += 3)
        t[n + 1] ? r[t[n]] = t[n + 2] : t[n + 2] ? e[t[n]] = t[n + 2] : e.removeProperty(t[n].substr(0, 2) === "--" ? t[n] : t[n].replace(Ko, "-$1").toLowerCase());
    if (this.tfm) {
        for (a in this.tfm)
            i[a] = this.tfm[a];
        i.svg && (i.renderTransform(),
        r.setAttribute("data-svg-origin", this.svgo || "")),
        n = jo(),
        (!n || !n.isStart) && !e[zt] && (tu(e),
        i.uncache = 1)
    }
}, eu = function(t, r) {
    var e = {
        target: t,
        props: [],
        revert: rc,
        save: ec
    };
    return t._gsap || Ne.core.getCache(t),
    r && r.split(",").forEach(function(i) {
        return e.save(i)
    }),
    e
}, ru, po = function(t, r) {
    var e = qr.createElementNS ? qr.createElementNS((r || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : qr.createElement(t);
    return e.style ? e : qr.createElement(t)
}, kr = function o(t, r, e) {
    var i = getComputedStyle(t);
    return i[r] || i.getPropertyValue(r.replace(Ko, "-$1").toLowerCase()) || i.getPropertyValue(r) || !e && o(t, Wi(r) || r, 1) || ""
}, va = "O,Moz,ms,Ms,Webkit".split(","), Wi = function(t, r, e) {
    var i = r || fi
      , n = i.style
      , a = 5;
    if (t in n && !e)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); a-- && !(va[a] + t in n); )
        ;
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? va[a] : "") + t
}, _o = function() {
    Yf() && window.document && (_a = window,
    qr = _a.document,
    Ni = qr.documentElement,
    fi = po("div") || {
        style: {}
    },
    po("div"),
    zt = Wi(zt),
    hr = zt + "Origin",
    fi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    ru = !!Wi("perspective"),
    jo = Ne.core.reverting,
    Uo = 1)
}, Ys = function o(t) {
    var r = po("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), e = this.parentNode, i = this.nextSibling, n = this.style.cssText, a;
    if (Ni.appendChild(r),
    r.appendChild(this),
    this.style.display = "block",
    t)
        try {
            a = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = o
        } catch {}
    else
        this._gsapBBox && (a = this._gsapBBox());
    return e && (i ? e.insertBefore(this, i) : e.appendChild(this)),
    Ni.removeChild(r),
    this.style.cssText = n,
    a
}, ya = function(t, r) {
    for (var e = r.length; e--; )
        if (t.hasAttribute(r[e]))
            return t.getAttribute(r[e])
}, iu = function(t) {
    var r;
    try {
        r = t.getBBox()
    } catch {
        r = Ys.call(t, !0)
    }
    return r && (r.width || r.height) || t.getBBox === Ys || (r = Ys.call(t, !0)),
    r && !r.width && !r.x && !r.y ? {
        x: +ya(t, ["x", "cx", "x1"]) || 0,
        y: +ya(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : r
}, nu = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && iu(t))
}, Cn = function(t, r) {
    if (r) {
        var e = t.style;
        r in Nr && r !== hr && (r = zt),
        e.removeProperty ? ((r.substr(0, 2) === "ms" || r.substr(0, 6) === "webkit") && (r = "-" + r),
        e.removeProperty(r.replace(Ko, "-$1").toLowerCase())) : e.removeAttribute(r)
    }
}, Xr = function(t, r, e, i, n, a) {
    var s = new ze(t._pt,r,e,0,1,a ? Jl : Gl);
    return t._pt = s,
    s.b = i,
    s.e = n,
    t._props.push(e),
    s
}, ba = {
    deg: 1,
    rad: 1,
    turn: 1
}, ic = {
    grid: 1,
    flex: 1
}, Gr = function o(t, r, e, i) {
    var n = parseFloat(e) || 0, a = (e + "").trim().substr((n + "").length) || "px", s = fi.style, l = qf.test(r), u = t.tagName.toLowerCase() === "svg", f = (u ? "client" : "offset") + (l ? "Width" : "Height"), h = 100, c = i === "px", d = i === "%", _, p, g, w;
    return i === a || !n || ba[i] || ba[a] ? n : (a !== "px" && !c && (n = o(t, r, e, "px")),
    w = t.getCTM && nu(t),
    (d || a === "%") && (Nr[r] || ~r.indexOf("adius")) ? (_ = w ? t.getBBox()[l ? "width" : "height"] : t[f],
    $t(d ? n / _ * h : n / 100 * _)) : (s[l ? "width" : "height"] = h + (c ? a : i),
    p = ~r.indexOf("adius") || i === "em" && t.appendChild && !u ? t : t.parentNode,
    w && (p = (t.ownerSVGElement || {}).parentNode),
    (!p || p === qr || !p.appendChild) && (p = qr.body),
    g = p._gsap,
    g && d && g.width && l && g.time === Ue.time && !g.uncache ? $t(n / g.width * h) : ((d || a === "%") && !ic[kr(p, "display")] && (s.position = kr(t, "position")),
    p === t && (s.position = "static"),
    p.appendChild(fi),
    _ = fi[f],
    p.removeChild(fi),
    s.position = "absolute",
    l && d && (g = hi(p),
    g.time = Ue.time,
    g.width = p[f]),
    $t(c ? _ * n / h : _ && n ? h / _ * n : 0))))
}, Ar = function(t, r, e, i) {
    var n;
    return Uo || _o(),
    r in Tr && r !== "transform" && (r = Tr[r],
    ~r.indexOf(",") && (r = r.split(",")[0])),
    Nr[r] && r !== "transform" ? (n = Mn(t, i),
    n = r !== "transformOrigin" ? n[r] : n.svg ? n.origin : xs(kr(t, hr)) + " " + n.zOrigin + "px") : (n = t.style[r],
    (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = ws[r] && ws[r](t, r, e) || kr(t, r) || bl(t, r) || (r === "opacity" ? 1 : 0))),
    e && !~(n + "").trim().indexOf(" ") ? Gr(t, r, n, e) + e : n
}, nc = function(t, r, e, i) {
    if (!e || e === "none") {
        var n = Wi(r, t, 1)
          , a = n && kr(t, n, 1);
        a && a !== e ? (r = n,
        e = a) : r === "borderColor" && (e = kr(t, "borderTopColor"))
    }
    var s = new ze(this._pt,t.style,r,0,1,Kl), l = 0, u = 0, f, h, c, d, _, p, g, w, v, x, T, k;
    if (s.b = e,
    s.e = i,
    e += "",
    i += "",
    i === "auto" && (t.style[r] = i,
    i = kr(t, r) || i,
    t.style[r] = e),
    f = [e, i],
    Il(f),
    e = f[0],
    i = f[1],
    c = e.match(Ai) || [],
    k = i.match(Ai) || [],
    k.length) {
        for (; h = Ai.exec(i); )
            g = h[0],
            v = i.substring(l, h.index),
            _ ? _ = (_ + 1) % 5 : (v.substr(-5) === "rgba(" || v.substr(-5) === "hsla(") && (_ = 1),
            g !== (p = c[u++] || "") && (d = parseFloat(p) || 0,
            T = p.substr((d + "").length),
            g.charAt(1) === "=" && (g = zi(d, g) + T),
            w = parseFloat(g),
            x = g.substr((w + "").length),
            l = Ai.lastIndex - x.length,
            x || (x = x || Ke.units[r] || T,
            l === i.length && (i += x,
            s.e += x)),
            T !== x && (d = Gr(t, r, p, x) || 0),
            s._pt = {
                _next: s._pt,
                p: v || u === 1 ? v : ",",
                s: d,
                c: w - d,
                m: _ && _ < 4 || r === "zIndex" ? Math.round : 0
            });
        s.c = l < i.length ? i.substring(l, i.length) : ""
    } else
        s.r = r === "display" && i === "none" ? Jl : Gl;
    return pl.test(i) && (s.e = 0),
    this._pt = s,
    s
}, wa = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, sc = function(t) {
    var r = t.split(" ")
      , e = r[0]
      , i = r[1] || "50%";
    return (e === "top" || e === "bottom" || i === "left" || i === "right") && (t = e,
    e = i,
    i = t),
    r[0] = wa[e] || e,
    r[1] = wa[i] || i,
    r.join(" ")
}, oc = function(t, r) {
    if (r.tween && r.tween._time === r.tween._dur) {
        var e = r.t, i = e.style, n = r.u, a = e._gsap, s, l, u;
        if (n === "all" || n === !0)
            i.cssText = "",
            l = 1;
        else
            for (n = n.split(","),
            u = n.length; --u > -1; )
                s = n[u],
                Nr[s] && (l = 1,
                s = s === "transformOrigin" ? hr : zt),
                Cn(e, s);
        l && (Cn(e, zt),
        a && (a.svg && e.removeAttribute("transform"),
        Mn(e, 1),
        a.uncache = 1,
        tu(i)))
    }
}, ws = {
    clearProps: function(t, r, e, i, n) {
        if (n.data !== "isFromStart") {
            var a = t._pt = new ze(t._pt,r,e,0,0,oc);
            return a.u = i,
            a.pr = -10,
            a.tween = n,
            t._props.push(e),
            1
        }
    }
}, On = [1, 0, 0, 1, 0, 0], su = {}, ou = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, xa = function(t) {
    var r = kr(t, zt);
    return ou(r) ? On : r.substr(7).match(dl).map($t)
}, Qo = function(t, r) {
    var e = t._gsap || hi(t), i = t.style, n = xa(t), a, s, l, u;
    return e.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
    n = [l.a, l.b, l.c, l.d, l.e, l.f],
    n.join(",") === "1,0,0,1,0,0" ? On : n) : (n === On && !t.offsetParent && t !== Ni && !e.svg && (l = i.display,
    i.display = "block",
    a = t.parentNode,
    (!a || !t.offsetParent) && (u = 1,
    s = t.nextElementSibling,
    Ni.appendChild(t)),
    n = xa(t),
    l ? i.display = l : Cn(t, "display"),
    u && (s ? a.insertBefore(t, s) : a ? a.appendChild(t) : Ni.removeChild(t))),
    r && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
}, go = function(t, r, e, i, n, a) {
    var s = t._gsap, l = n || Qo(t, !0), u = s.xOrigin || 0, f = s.yOrigin || 0, h = s.xOffset || 0, c = s.yOffset || 0, d = l[0], _ = l[1], p = l[2], g = l[3], w = l[4], v = l[5], x = r.split(" "), T = parseFloat(x[0]) || 0, k = parseFloat(x[1]) || 0, C, S, O, P;
    e ? l !== On && (S = d * g - _ * p) && (O = T * (g / S) + k * (-p / S) + (p * v - g * w) / S,
    P = T * (-_ / S) + k * (d / S) - (d * v - _ * w) / S,
    T = O,
    k = P) : (C = iu(t),
    T = C.x + (~x[0].indexOf("%") ? T / 100 * C.width : T),
    k = C.y + (~(x[1] || x[0]).indexOf("%") ? k / 100 * C.height : k)),
    i || i !== !1 && s.smooth ? (w = T - u,
    v = k - f,
    s.xOffset = h + (w * d + v * p) - w,
    s.yOffset = c + (w * _ + v * g) - v) : s.xOffset = s.yOffset = 0,
    s.xOrigin = T,
    s.yOrigin = k,
    s.smooth = !!i,
    s.origin = r,
    s.originIsAbsolute = !!e,
    t.style[hr] = "0px 0px",
    a && (Xr(a, s, "xOrigin", u, T),
    Xr(a, s, "yOrigin", f, k),
    Xr(a, s, "xOffset", h, s.xOffset),
    Xr(a, s, "yOffset", c, s.yOffset)),
    t.setAttribute("data-svg-origin", T + " " + k)
}, Mn = function(t, r) {
    var e = t._gsap || new Yl(t);
    if ("x"in e && !r && !e.uncache)
        return e;
    var i = t.style, n = e.scaleX < 0, a = "px", s = "deg", l = getComputedStyle(t), u = kr(t, hr) || "0", f, h, c, d, _, p, g, w, v, x, T, k, C, S, O, P, M, E, A, $, W, N, I, z, B, Q, b, q, _t, gt, nt, vt;
    return f = h = c = p = g = w = v = x = T = 0,
    d = _ = 1,
    e.svg = !!(t.getCTM && nu(t)),
    l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[zt] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[zt] !== "none" ? l[zt] : "")),
    i.scale = i.rotate = i.translate = "none"),
    S = Qo(t, e.svg),
    e.svg && (e.uncache ? (B = t.getBBox(),
    u = e.xOrigin - B.x + "px " + (e.yOrigin - B.y) + "px",
    z = "") : z = !r && t.getAttribute("data-svg-origin"),
    go(t, z || u, !!z || e.originIsAbsolute, e.smooth !== !1, S)),
    k = e.xOrigin || 0,
    C = e.yOrigin || 0,
    S !== On && (E = S[0],
    A = S[1],
    $ = S[2],
    W = S[3],
    f = N = S[4],
    h = I = S[5],
    S.length === 6 ? (d = Math.sqrt(E * E + A * A),
    _ = Math.sqrt(W * W + $ * $),
    p = E || A ? ki(A, E) * si : 0,
    v = $ || W ? ki($, W) * si + p : 0,
    v && (_ *= Math.abs(Math.cos(v * Bi))),
    e.svg && (f -= k - (k * E + C * $),
    h -= C - (k * A + C * W))) : (vt = S[6],
    gt = S[7],
    b = S[8],
    q = S[9],
    _t = S[10],
    nt = S[11],
    f = S[12],
    h = S[13],
    c = S[14],
    O = ki(vt, _t),
    g = O * si,
    O && (P = Math.cos(-O),
    M = Math.sin(-O),
    z = N * P + b * M,
    B = I * P + q * M,
    Q = vt * P + _t * M,
    b = N * -M + b * P,
    q = I * -M + q * P,
    _t = vt * -M + _t * P,
    nt = gt * -M + nt * P,
    N = z,
    I = B,
    vt = Q),
    O = ki(-$, _t),
    w = O * si,
    O && (P = Math.cos(-O),
    M = Math.sin(-O),
    z = E * P - b * M,
    B = A * P - q * M,
    Q = $ * P - _t * M,
    nt = W * M + nt * P,
    E = z,
    A = B,
    $ = Q),
    O = ki(A, E),
    p = O * si,
    O && (P = Math.cos(O),
    M = Math.sin(O),
    z = E * P + A * M,
    B = N * P + I * M,
    A = A * P - E * M,
    I = I * P - N * M,
    E = z,
    N = B),
    g && Math.abs(g) + Math.abs(p) > 359.9 && (g = p = 0,
    w = 180 - w),
    d = $t(Math.sqrt(E * E + A * A + $ * $)),
    _ = $t(Math.sqrt(I * I + vt * vt)),
    O = ki(N, I),
    v = Math.abs(O) > 2e-4 ? O * si : 0,
    T = nt ? 1 / (nt < 0 ? -nt : nt) : 0),
    e.svg && (z = t.getAttribute("transform"),
    e.forceCSS = t.setAttribute("transform", "") || !ou(kr(t, zt)),
    z && t.setAttribute("transform", z))),
    Math.abs(v) > 90 && Math.abs(v) < 270 && (n ? (d *= -1,
    v += p <= 0 ? 180 : -180,
    p += p <= 0 ? 180 : -180) : (_ *= -1,
    v += v <= 0 ? 180 : -180)),
    r = r || e.uncache,
    e.x = f - ((e.xPercent = f && (!r && e.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-f) ? -50 : 0))) ? t.offsetWidth * e.xPercent / 100 : 0) + a,
    e.y = h - ((e.yPercent = h && (!r && e.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * e.yPercent / 100 : 0) + a,
    e.z = c + a,
    e.scaleX = $t(d),
    e.scaleY = $t(_),
    e.rotation = $t(p) + s,
    e.rotationX = $t(g) + s,
    e.rotationY = $t(w) + s,
    e.skewX = v + s,
    e.skewY = x + s,
    e.transformPerspective = T + a,
    (e.zOrigin = parseFloat(u.split(" ")[2]) || 0) && (i[hr] = xs(u)),
    e.xOffset = e.yOffset = 0,
    e.force3D = Ke.force3D,
    e.renderTransform = e.svg ? lc : ru ? au : ac,
    e.uncache = 0,
    e
}, xs = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, qs = function(t, r, e) {
    var i = me(r);
    return $t(parseFloat(r) + parseFloat(Gr(t, "x", e + "px", i))) + i
}, ac = function(t, r) {
    r.z = "0px",
    r.rotationY = r.rotationX = "0deg",
    r.force3D = 0,
    au(t, r)
}, ii = "0deg", Ji = "0px", ni = ") ", au = function(t, r) {
    var e = r || this
      , i = e.xPercent
      , n = e.yPercent
      , a = e.x
      , s = e.y
      , l = e.z
      , u = e.rotation
      , f = e.rotationY
      , h = e.rotationX
      , c = e.skewX
      , d = e.skewY
      , _ = e.scaleX
      , p = e.scaleY
      , g = e.transformPerspective
      , w = e.force3D
      , v = e.target
      , x = e.zOrigin
      , T = ""
      , k = w === "auto" && t && t !== 1 || w === !0;
    if (x && (h !== ii || f !== ii)) {
        var C = parseFloat(f) * Bi, S = Math.sin(C), O = Math.cos(C), P;
        C = parseFloat(h) * Bi,
        P = Math.cos(C),
        a = qs(v, a, S * P * -x),
        s = qs(v, s, -Math.sin(C) * -x),
        l = qs(v, l, O * P * -x + x)
    }
    g !== Ji && (T += "perspective(" + g + ni),
    (i || n) && (T += "translate(" + i + "%, " + n + "%) "),
    (k || a !== Ji || s !== Ji || l !== Ji) && (T += l !== Ji || k ? "translate3d(" + a + ", " + s + ", " + l + ") " : "translate(" + a + ", " + s + ni),
    u !== ii && (T += "rotate(" + u + ni),
    f !== ii && (T += "rotateY(" + f + ni),
    h !== ii && (T += "rotateX(" + h + ni),
    (c !== ii || d !== ii) && (T += "skew(" + c + ", " + d + ni),
    (_ !== 1 || p !== 1) && (T += "scale(" + _ + ", " + p + ni),
    v.style[zt] = T || "translate(0, 0)"
}, lc = function(t, r) {
    var e = r || this, i = e.xPercent, n = e.yPercent, a = e.x, s = e.y, l = e.rotation, u = e.skewX, f = e.skewY, h = e.scaleX, c = e.scaleY, d = e.target, _ = e.xOrigin, p = e.yOrigin, g = e.xOffset, w = e.yOffset, v = e.forceCSS, x = parseFloat(a), T = parseFloat(s), k, C, S, O, P;
    l = parseFloat(l),
    u = parseFloat(u),
    f = parseFloat(f),
    f && (f = parseFloat(f),
    u += f,
    l += f),
    l || u ? (l *= Bi,
    u *= Bi,
    k = Math.cos(l) * h,
    C = Math.sin(l) * h,
    S = Math.sin(l - u) * -c,
    O = Math.cos(l - u) * c,
    u && (f *= Bi,
    P = Math.tan(u - f),
    P = Math.sqrt(1 + P * P),
    S *= P,
    O *= P,
    f && (P = Math.tan(f),
    P = Math.sqrt(1 + P * P),
    k *= P,
    C *= P)),
    k = $t(k),
    C = $t(C),
    S = $t(S),
    O = $t(O)) : (k = h,
    O = c,
    C = S = 0),
    (x && !~(a + "").indexOf("px") || T && !~(s + "").indexOf("px")) && (x = Gr(d, "x", a, "px"),
    T = Gr(d, "y", s, "px")),
    (_ || p || g || w) && (x = $t(x + _ - (_ * k + p * S) + g),
    T = $t(T + p - (_ * C + p * O) + w)),
    (i || n) && (P = d.getBBox(),
    x = $t(x + i / 100 * P.width),
    T = $t(T + n / 100 * P.height)),
    P = "matrix(" + k + "," + C + "," + S + "," + O + "," + x + "," + T + ")",
    d.setAttribute("transform", P),
    v && (d.style[zt] = P)
}, uc = function(t, r, e, i, n) {
    var a = 360, s = te(n), l = parseFloat(n) * (s && ~n.indexOf("rad") ? si : 1), u = l - i, f = i + u + "deg", h, c;
    return s && (h = n.split("_")[1],
    h === "short" && (u %= a,
    u !== u % (a / 2) && (u += u < 0 ? a : -a)),
    h === "cw" && u < 0 ? u = (u + a * ma) % a - ~~(u / a) * a : h === "ccw" && u > 0 && (u = (u - a * ma) % a - ~~(u / a) * a)),
    t._pt = c = new ze(t._pt,r,e,i,u,Wf),
    c.e = f,
    c.u = "deg",
    t._props.push(e),
    c
}, Ta = function(t, r) {
    for (var e in r)
        t[e] = r[e];
    return t
}, fc = function(t, r, e) {
    var i = Ta({}, e._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", a = e.style, s, l, u, f, h, c, d, _;
    i.svg ? (u = e.getAttribute("transform"),
    e.setAttribute("transform", ""),
    a[zt] = r,
    s = Mn(e, 1),
    Cn(e, zt),
    e.setAttribute("transform", u)) : (u = getComputedStyle(e)[zt],
    a[zt] = r,
    s = Mn(e, 1),
    a[zt] = u);
    for (l in Nr)
        u = i[l],
        f = s[l],
        u !== f && n.indexOf(l) < 0 && (d = me(u),
        _ = me(f),
        h = d !== _ ? Gr(e, l, u, _) : parseFloat(u),
        c = parseFloat(f),
        t._pt = new ze(t._pt,s,l,h,c - h,ho),
        t._pt.u = _ || 0,
        t._props.push(l));
    Ta(s, i)
};
Fe("padding,margin,Width,Radius", function(o, t) {
    var r = "Top"
      , e = "Right"
      , i = "Bottom"
      , n = "Left"
      , a = (t < 3 ? [r, e, i, n] : [r + n, r + e, i + e, i + n]).map(function(s) {
        return t < 2 ? o + s : "border" + s + o
    });
    ws[t > 1 ? "border" + o : o] = function(s, l, u, f, h) {
        var c, d;
        if (arguments.length < 4)
            return c = a.map(function(_) {
                return Ar(s, _, u)
            }),
            d = c.join(" "),
            d.split(c[0]).length === 5 ? c[0] : d;
        c = (f + "").split(" "),
        d = {},
        a.forEach(function(_, p) {
            return d[_] = c[p] = c[p] || c[(p - 1) / 2 | 0]
        }),
        s.init(l, d, h)
    }
});
var lu = {
    name: "css",
    register: _o,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, r, e, i, n) {
        var a = this._props, s = t.style, l = e.vars.startAt, u, f, h, c, d, _, p, g, w, v, x, T, k, C, S, O;
        Uo || _o(),
        this.styles = this.styles || eu(t),
        O = this.styles.props,
        this.tween = e;
        for (p in r)
            if (p !== "autoRound" && (f = r[p],
            !(We[p] && ql(p, r, e, i, t, n)))) {
                if (d = typeof f,
                _ = ws[p],
                d === "function" && (f = f.call(e, i, t, n),
                d = typeof f),
                d === "string" && ~f.indexOf("random(") && (f = Sn(f)),
                _)
                    _(this, t, p, f, e) && (S = 1);
                else if (p.substr(0, 2) === "--")
                    u = (getComputedStyle(t).getPropertyValue(p) + "").trim(),
                    f += "",
                    Kr.lastIndex = 0,
                    Kr.test(u) || (g = me(u),
                    w = me(f)),
                    w ? g !== w && (u = Gr(t, p, u, w) + w) : g && (f += g),
                    this.add(s, "setProperty", u, f, i, n, 0, 0, p),
                    a.push(p),
                    O.push(p, 0, s[p]);
                else if (d !== "undefined") {
                    if (l && p in l ? (u = typeof l[p] == "function" ? l[p].call(e, i, t, n) : l[p],
                    te(u) && ~u.indexOf("random(") && (u = Sn(u)),
                    me(u + "") || (u += Ke.units[p] || me(Ar(t, p)) || ""),
                    (u + "").charAt(1) === "=" && (u = Ar(t, p))) : u = Ar(t, p),
                    c = parseFloat(u),
                    v = d === "string" && f.charAt(1) === "=" && f.substr(0, 2),
                    v && (f = f.substr(2)),
                    h = parseFloat(f),
                    p in Tr && (p === "autoAlpha" && (c === 1 && Ar(t, "visibility") === "hidden" && h && (c = 0),
                    O.push("visibility", 0, s.visibility),
                    Xr(this, s, "visibility", c ? "inherit" : "hidden", h ? "inherit" : "hidden", !h)),
                    p !== "scale" && p !== "transform" && (p = Tr[p],
                    ~p.indexOf(",") && (p = p.split(",")[0]))),
                    x = p in Nr,
                    x) {
                        if (this.styles.save(p),
                        T || (k = t._gsap,
                        k.renderTransform && !r.parseTransform || Mn(t, r.parseTransform),
                        C = r.smoothOrigin !== !1 && k.smooth,
                        T = this._pt = new ze(this._pt,s,zt,0,1,k.renderTransform,k,0,-1),
                        T.dep = 1),
                        p === "scale")
                            this._pt = new ze(this._pt,k,"scaleY",k.scaleY,(v ? zi(k.scaleY, v + h) : h) - k.scaleY || 0,ho),
                            this._pt.u = 0,
                            a.push("scaleY", p),
                            p += "X";
                        else if (p === "transformOrigin") {
                            O.push(hr, 0, s[hr]),
                            f = sc(f),
                            k.svg ? go(t, f, 0, C, 0, this) : (w = parseFloat(f.split(" ")[2]) || 0,
                            w !== k.zOrigin && Xr(this, k, "zOrigin", k.zOrigin, w),
                            Xr(this, s, p, xs(u), xs(f)));
                            continue
                        } else if (p === "svgOrigin") {
                            go(t, f, 1, C, 0, this);
                            continue
                        } else if (p in su) {
                            uc(this, k, p, c, v ? zi(c, v + f) : f);
                            continue
                        } else if (p === "smoothOrigin") {
                            Xr(this, k, "smooth", k.smooth, f);
                            continue
                        } else if (p === "force3D") {
                            k[p] = f;
                            continue
                        } else if (p === "transform") {
                            fc(this, f, t);
                            continue
                        }
                    } else
                        p in s || (p = Wi(p) || p);
                    if (x || (h || h === 0) && (c || c === 0) && !Xf.test(f) && p in s)
                        g = (u + "").substr((c + "").length),
                        h || (h = 0),
                        w = me(f) || (p in Ke.units ? Ke.units[p] : g),
                        g !== w && (c = Gr(t, p, u, w)),
                        this._pt = new ze(this._pt,x ? k : s,p,c,(v ? zi(c, v + h) : h) - c,!x && (w === "px" || p === "zIndex") && r.autoRound !== !1 ? jf : ho),
                        this._pt.u = w || 0,
                        g !== w && w !== "%" && (this._pt.b = u,
                        this._pt.r = Uf);
                    else if (p in s)
                        nc.call(this, t, p, u, v ? v + f : f);
                    else if (p in t)
                        this.add(t, p, u || t[p], v ? v + f : f, i, n);
                    else if (p !== "parseTransform") {
                        Bo(p, f);
                        continue
                    }
                    x || (p in s ? O.push(p, 0, s[p]) : O.push(p, 1, u || t[p])),
                    a.push(p)
                }
            }
        S && Ql(this)
    },
    render: function(t, r) {
        if (r.tween._time || !jo())
            for (var e = r._pt; e; )
                e.r(t, e.d),
                e = e._next;
        else
            r.styles.revert()
    },
    get: Ar,
    aliases: Tr,
    getSetter: function(t, r, e) {
        var i = Tr[r];
        return i && i.indexOf(",") < 0 && (r = i),
        r in Nr && r !== hr && (t._gsap.x || Ar(t, "x")) ? e && ga === e ? r === "scale" ? Gf : Zf : (ga = e || {}) && (r === "scale" ? Jf : tc) : t.style && !Fo(t.style[r]) ? Kf : ~r.indexOf("-") ? Qf : Xo(t, r)
    },
    core: {
        _removeProperty: Cn,
        _getMatrix: Qo
    }
};
Ne.utils.checkPrefix = Wi;
Ne.core.getStyleSaver = eu;
(function(o, t, r, e) {
    var i = Fe(o + "," + t + "," + r, function(n) {
        Nr[n] = 1
    });
    Fe(t, function(n) {
        Ke.units[n] = "deg",
        su[n] = 1
    }),
    Tr[i[13]] = o + "," + t,
    Fe(e, function(n) {
        var a = n.split(":");
        Tr[a[1]] = i[a[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Fe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    Ke.units[o] = "px"
});
Ne.registerPlugin(lu);
var tt = Ne.registerPlugin(lu) || Ne;
tt.core.Tween;
/*!
 * paths 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var cc = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig
  , hc = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/ig
  , dc = Math.PI / 180
  , zn = Math.sin
  , Nn = Math.cos
  , pn = Math.abs
  , tn = Math.sqrt
  , pc = function(t) {
    return typeof t == "number"
}
  , Sa = 1e5
  , Ir = function(t) {
    return Math.round(t * Sa) / Sa || 0
};
function _c(o, t, r, e, i, n, a) {
    for (var s = o.length, l, u, f, h, c; --s > -1; )
        for (l = o[s],
        u = l.length,
        f = 0; f < u; f += 2)
            h = l[f],
            c = l[f + 1],
            l[f] = h * t + c * e + n,
            l[f + 1] = h * r + c * i + a;
    return o._dirty = 1,
    o
}
function gc(o, t, r, e, i, n, a, s, l) {
    if (!(o === s && t === l)) {
        r = pn(r),
        e = pn(e);
        var u = i % 360 * dc
          , f = Nn(u)
          , h = zn(u)
          , c = Math.PI
          , d = c * 2
          , _ = (o - s) / 2
          , p = (t - l) / 2
          , g = f * _ + h * p
          , w = -h * _ + f * p
          , v = g * g
          , x = w * w
          , T = v / (r * r) + x / (e * e);
        T > 1 && (r = tn(T) * r,
        e = tn(T) * e);
        var k = r * r
          , C = e * e
          , S = (k * C - k * x - C * v) / (k * x + C * v);
        S < 0 && (S = 0);
        var O = (n === a ? -1 : 1) * tn(S)
          , P = O * (r * w / e)
          , M = O * -(e * g / r)
          , E = (o + s) / 2
          , A = (t + l) / 2
          , $ = E + (f * P - h * M)
          , W = A + (h * P + f * M)
          , N = (g - P) / r
          , I = (w - M) / e
          , z = (-g - P) / r
          , B = (-w - M) / e
          , Q = N * N + I * I
          , b = (I < 0 ? -1 : 1) * Math.acos(N / tn(Q))
          , q = (N * B - I * z < 0 ? -1 : 1) * Math.acos((N * z + I * B) / tn(Q * (z * z + B * B)));
        isNaN(q) && (q = c),
        !a && q > 0 ? q -= d : a && q < 0 && (q += d),
        b %= d,
        q %= d;
        var _t = Math.ceil(pn(q) / (d / 4)), gt = [], nt = q / _t, vt = 4 / 3 * zn(nt / 2) / (1 + Nn(nt / 2)), At = f * r, Pt = h * r, Yt = h * -e, Nt = f * e, Ot;
        for (Ot = 0; Ot < _t; Ot++)
            i = b + Ot * nt,
            g = Nn(i),
            w = zn(i),
            N = Nn(i += nt),
            I = zn(i),
            gt.push(g - vt * w, w + vt * g, N + vt * I, I - vt * N, N, I);
        for (Ot = 0; Ot < gt.length; Ot += 2)
            g = gt[Ot],
            w = gt[Ot + 1],
            gt[Ot] = g * At + w * Yt + $,
            gt[Ot + 1] = g * Pt + w * Nt + W;
        return gt[Ot - 2] = s,
        gt[Ot - 1] = l,
        gt
    }
}
function mc(o) {
    var t = (o + "").replace(hc, function(P) {
        var M = +P;
        return M < 1e-4 && M > -1e-4 ? 0 : M
    }).match(cc) || [], r = [], e = 0, i = 0, n = 2 / 3, a = t.length, s = 0, l = "ERROR: malformed path: " + o, u, f, h, c, d, _, p, g, w, v, x, T, k, C, S, O = function(M, E, A, $) {
        v = (A - M) / 3,
        x = ($ - E) / 3,
        p.push(M + v, E + x, A - v, $ - x, A, $)
    };
    if (!o || !isNaN(t[0]) || isNaN(t[1]))
        return console.log(l),
        r;
    for (u = 0; u < a; u++)
        if (k = d,
        isNaN(t[u]) ? (d = t[u].toUpperCase(),
        _ = d !== t[u]) : u--,
        h = +t[u + 1],
        c = +t[u + 2],
        _ && (h += e,
        c += i),
        u || (g = h,
        w = c),
        d === "M")
            p && (p.length < 8 ? r.length -= 1 : s += p.length),
            e = g = h,
            i = w = c,
            p = [h, c],
            r.push(p),
            u += 2,
            d = "L";
        else if (d === "C")
            p || (p = [0, 0]),
            _ || (e = i = 0),
            p.push(h, c, e + t[u + 3] * 1, i + t[u + 4] * 1, e += t[u + 5] * 1, i += t[u + 6] * 1),
            u += 6;
        else if (d === "S")
            v = e,
            x = i,
            (k === "C" || k === "S") && (v += e - p[p.length - 4],
            x += i - p[p.length - 3]),
            _ || (e = i = 0),
            p.push(v, x, h, c, e += t[u + 3] * 1, i += t[u + 4] * 1),
            u += 4;
        else if (d === "Q")
            v = e + (h - e) * n,
            x = i + (c - i) * n,
            _ || (e = i = 0),
            e += t[u + 3] * 1,
            i += t[u + 4] * 1,
            p.push(v, x, e + (h - e) * n, i + (c - i) * n, e, i),
            u += 4;
        else if (d === "T")
            v = e - p[p.length - 4],
            x = i - p[p.length - 3],
            p.push(e + v, i + x, h + (e + v * 1.5 - h) * n, c + (i + x * 1.5 - c) * n, e = h, i = c),
            u += 2;
        else if (d === "H")
            O(e, i, e = h, i),
            u += 1;
        else if (d === "V")
            O(e, i, e, i = h + (_ ? i - e : 0)),
            u += 1;
        else if (d === "L" || d === "Z")
            d === "Z" && (h = g,
            c = w,
            p.closed = !0),
            (d === "L" || pn(e - h) > .5 || pn(i - c) > .5) && (O(e, i, h, c),
            d === "L" && (u += 2)),
            e = h,
            i = c;
        else if (d === "A") {
            if (C = t[u + 4],
            S = t[u + 5],
            v = t[u + 6],
            x = t[u + 7],
            f = 7,
            C.length > 1 && (C.length < 3 ? (x = v,
            v = S,
            f--) : (x = S,
            v = C.substr(2),
            f -= 2),
            S = C.charAt(1),
            C = C.charAt(0)),
            T = gc(e, i, +t[u + 1], +t[u + 2], +t[u + 3], +C, +S, (_ ? e : 0) + v * 1, (_ ? i : 0) + x * 1),
            u += f,
            T)
                for (f = 0; f < T.length; f++)
                    p.push(T[f]);
            e = p[p.length - 2],
            i = p[p.length - 1]
        } else
            console.log(l);
    return u = p.length,
    u < 6 ? (r.pop(),
    u = 0) : p[0] === p[u - 2] && p[1] === p[u - 1] && (p.closed = !0),
    r.totalPoints = s + u,
    r
}
function vc(o) {
    pc(o[0]) && (o = [o]);
    var t = "", r = o.length, e, i, n, a;
    for (i = 0; i < r; i++) {
        for (a = o[i],
        t += "M" + Ir(a[0]) + "," + Ir(a[1]) + " C",
        e = a.length,
        n = 2; n < e; n++)
            t += Ir(a[n++]) + "," + Ir(a[n++]) + " " + Ir(a[n++]) + "," + Ir(a[n++]) + " " + Ir(a[n++]) + "," + Ir(a[n]) + " ";
        a.closed && (t += "z")
    }
    return t
}
/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var Re, uu, fu = function() {
    return Re || typeof window < "u" && (Re = window.gsap) && Re.registerPlugin && Re
}, ka = function() {
    Re = fu(),
    Re ? (Re.registerEase("_CE", Er.create),
    uu = 1) : console.warn("Please gsap.registerPlugin(CustomEase)")
}, yc = 1e20, Bn = function(t) {
    return ~~(t * 1e3 + (t < 0 ? -.5 : .5)) / 1e3
}, bc = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, wc = /[cLlsSaAhHvVtTqQ]/g, xc = function(t) {
    var r = t.length, e = yc, i;
    for (i = 1; i < r; i += 6)
        +t[i] < e && (e = +t[i]);
    return e
}, Tc = function(t, r, e) {
    !e && e !== 0 && (e = Math.max(+t[t.length - 1], +t[1]));
    var i = +t[0] * -1, n = -e, a = t.length, s = 1 / (+t[a - 2] + i), l = -r || (Math.abs(+t[a - 1] - +t[1]) < .01 * (+t[a - 2] - +t[0]) ? xc(t) + n : +t[a - 1] + n), u;
    for (l ? l = 1 / l : l = -s,
    u = 0; u < a; u += 2)
        t[u] = (+t[u] + i) * s,
        t[u + 1] = (+t[u + 1] + n) * l
}, Sc = function o(t, r, e, i, n, a, s, l, u, f, h) {
    var c = (t + e) / 2, d = (r + i) / 2, _ = (e + n) / 2, p = (i + a) / 2, g = (n + s) / 2, w = (a + l) / 2, v = (c + _) / 2, x = (d + p) / 2, T = (_ + g) / 2, k = (p + w) / 2, C = (v + T) / 2, S = (x + k) / 2, O = s - t, P = l - r, M = Math.abs((e - s) * P - (i - l) * O), E = Math.abs((n - s) * P - (a - l) * O), A;
    return f || (f = [{
        x: t,
        y: r
    }, {
        x: s,
        y: l
    }],
    h = 1),
    f.splice(h || f.length - 1, 0, {
        x: C,
        y: S
    }),
    (M + E) * (M + E) > u * (O * O + P * P) && (A = f.length,
    o(t, r, c, d, v, x, C, S, u, f, h),
    o(C, S, T, k, g, w, s, l, u, f, h + 1 + (f.length - A))),
    f
}, Er = function() {
    function o(r, e, i) {
        uu || ka(),
        this.id = r,
        this.setData(e, i)
    }
    var t = o.prototype;
    return t.setData = function(e, i) {
        i = i || {},
        e = e || "0,0,1,1";
        var n = e.match(bc), a = 1, s = [], l = [], u = i.precision || 1, f = u <= 1, h, c, d, _, p, g, w, v, x;
        if (this.data = e,
        (wc.test(e) || ~e.indexOf("M") && e.indexOf("C") < 0) && (n = mc(e)[0]),
        h = n.length,
        h === 4)
            n.unshift(0, 0),
            n.push(1, 1),
            h = 8;
        else if ((h - 2) % 6)
            throw "Invalid CustomEase";
        for ((+n[0] != 0 || +n[h - 2] != 1) && Tc(n, i.height, i.originY),
        this.segment = n,
        _ = 2; _ < h; _ += 6)
            c = {
                x: +n[_ - 2],
                y: +n[_ - 1]
            },
            d = {
                x: +n[_ + 4],
                y: +n[_ + 5]
            },
            s.push(c, d),
            Sc(c.x, c.y, +n[_], +n[_ + 1], +n[_ + 2], +n[_ + 3], d.x, d.y, 1 / (u * 2e5), s, s.length - 1);
        for (h = s.length,
        _ = 0; _ < h; _++)
            w = s[_],
            v = s[_ - 1] || w,
            (w.x > v.x || v.y !== w.y && v.x === w.x || w === v) && w.x <= 1 ? (v.cx = w.x - v.x,
            v.cy = w.y - v.y,
            v.n = w,
            v.nx = w.x,
            f && _ > 1 && Math.abs(v.cy / v.cx - s[_ - 2].cy / s[_ - 2].cx) > 2 && (f = 0),
            v.cx < a && (v.cx ? a = v.cx : (v.cx = .001,
            _ === h - 1 && (v.x -= .001,
            a = Math.min(a, .001),
            f = 0)))) : (s.splice(_--, 1),
            h--);
        if (h = 1 / a + 1 | 0,
        p = 1 / h,
        g = 0,
        w = s[0],
        f) {
            for (_ = 0; _ < h; _++)
                x = _ * p,
                w.nx < x && (w = s[++g]),
                c = w.y + (x - w.x) / w.cx * w.cy,
                l[_] = {
                    x,
                    cx: p,
                    y: c,
                    cy: 0,
                    nx: 9
                },
                _ && (l[_ - 1].cy = c - l[_ - 1].y);
            l[h - 1].cy = s[s.length - 1].y - c
        } else {
            for (_ = 0; _ < h; _++)
                w.nx < _ * p && (w = s[++g]),
                l[_] = w;
            g < s.length - 1 && (l[_ - 1] = s[s.length - 2])
        }
        return this.ease = function(T) {
            var k = l[T * h | 0] || l[h - 1];
            return k.nx < T && (k = k.n),
            k.y + (T - k.x) / k.cx * k.cy
        }
        ,
        this.ease.custom = this,
        this.id && Re && Re.registerEase(this.id, this.ease),
        this
    }
    ,
    t.getSVGData = function(e) {
        return o.getSVGData(this, e)
    }
    ,
    o.create = function(e, i, n) {
        return new o(e,i,n).ease
    }
    ,
    o.register = function(e) {
        Re = e,
        ka()
    }
    ,
    o.get = function(e) {
        return Re.parseEase(e)
    }
    ,
    o.getSVGData = function(e, i) {
        i = i || {};
        var n = i.width || 100, a = i.height || 100, s = i.x || 0, l = (i.y || 0) + a, u = Re.utils.toArray(i.path)[0], f, h, c, d, _, p, g, w, v, x;
        if (i.invert && (a = -a,
        l = 0),
        typeof e == "string" && (e = Re.parseEase(e)),
        e.custom && (e = e.custom),
        e instanceof o)
            f = vc(_c([e.segment], n, 0, 0, -a, s, l));
        else {
            for (f = [s, l],
            g = Math.max(5, (i.precision || 1) * 200),
            d = 1 / g,
            g += 2,
            w = 5 / g,
            v = Bn(s + d * n),
            x = Bn(l + e(d) * -a),
            h = (x - l) / (v - s),
            c = 2; c < g; c++)
                _ = Bn(s + c * d * n),
                p = Bn(l + e(c * d) * -a),
                (Math.abs((p - x) / (_ - v) - h) > w || c === g - 1) && (f.push(v, x),
                h = (p - x) / (_ - v)),
                v = _,
                x = p;
            f = "M" + f.join(",")
        }
        return u && u.setAttribute("d", f),
        f
    }
    ,
    o
}();
fu() && Re.registerPlugin(Er);
Er.version = "3.12.2";
function Pa(o, t) {
    for (var r = 0; r < t.length; r++) {
        var e = t[r];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(o, e.key, e)
    }
}
function kc(o, t, r) {
    return t && Pa(o.prototype, t),
    r && Pa(o, r),
    o
}
/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var fe, mo, je, Wr, Ur, Ii, cu, oi, _n, hu, Lr, fr, du, pu = function() {
    return fe || typeof window < "u" && (fe = window.gsap) && fe.registerPlugin && fe
}, _u = 1, Ri = [], it = [], Pr = [], gn = Date.now, vo = function(t, r) {
    return r
}, Pc = function() {
    var t = _n.core
      , r = t.bridge || {}
      , e = t._scrollers
      , i = t._proxies;
    e.push.apply(e, it),
    i.push.apply(i, Pr),
    it = e,
    Pr = i,
    vo = function(a, s) {
        return r[a](s)
    }
}, Qr = function(t, r) {
    return ~Pr.indexOf(t) && Pr[Pr.indexOf(t) + 1][r]
}, mn = function(t) {
    return !!~hu.indexOf(t)
}, ke = function(t, r, e, i, n) {
    return t.addEventListener(r, e, {
        passive: !i,
        capture: !!n
    })
}, Se = function(t, r, e, i) {
    return t.removeEventListener(r, e, !!i)
}, In = "scrollLeft", Hn = "scrollTop", yo = function() {
    return Lr && Lr.isPressed || it.cache++
}, Ts = function(t, r) {
    var e = function i(n) {
        if (n || n === 0) {
            _u && (je.history.scrollRestoration = "manual");
            var a = Lr && Lr.isPressed;
            n = i.v = Math.round(n) || (Lr && Lr.iOS ? 1 : 0),
            t(n),
            i.cacheID = it.cache,
            a && vo("ss", n)
        } else
            (r || it.cache !== i.cacheID || vo("ref")) && (i.cacheID = it.cache,
            i.v = t());
        return i.v + i.offset
    };
    return e.offset = 0,
    t && e
}, Me = {
    s: In,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: Ts(function(o) {
        return arguments.length ? je.scrollTo(o, Kt.sc()) : je.pageXOffset || Wr[In] || Ur[In] || Ii[In] || 0
    })
}, Kt = {
    s: Hn,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: Me,
    sc: Ts(function(o) {
        return arguments.length ? je.scrollTo(Me.sc(), o) : je.pageYOffset || Wr[Hn] || Ur[Hn] || Ii[Hn] || 0
    })
}, Ee = function(t, r) {
    return (r && r._ctx && r._ctx.selector || fe.utils.toArray)(t)[0] || (typeof t == "string" && fe.config().nullTargetWarn !== !1 ? console.warn("Element not found:", t) : null)
}, Jr = function(t, r) {
    var e = r.s
      , i = r.sc;
    mn(t) && (t = Wr.scrollingElement || Ur);
    var n = it.indexOf(t)
      , a = i === Kt.sc ? 1 : 2;
    !~n && (n = it.push(t) - 1),
    it[n + a] || ke(t, "scroll", yo);
    var s = it[n + a]
      , l = s || (it[n + a] = Ts(Qr(t, e), !0) || (mn(t) ? i : Ts(function(u) {
        return arguments.length ? t[e] = u : t[e]
    })));
    return l.target = t,
    s || (l.smooth = fe.getProperty(t, "scrollBehavior") === "smooth"),
    l
}, bo = function(t, r, e) {
    var i = t
      , n = t
      , a = gn()
      , s = a
      , l = r || 50
      , u = Math.max(500, l * 3)
      , f = function(_, p) {
        var g = gn();
        p || g - a > l ? (n = i,
        i = _,
        s = a,
        a = g) : e ? i += _ : i = n + (_ - n) / (g - s) * (a - s)
    }
      , h = function() {
        n = i = e ? 0 : i,
        s = a = 0
    }
      , c = function(_) {
        var p = s
          , g = n
          , w = gn();
        return (_ || _ === 0) && _ !== i && f(_),
        a === s || w - s > u ? 0 : (i + (e ? g : -g)) / ((e ? w : a) - p) * 1e3
    };
    return {
        update: f,
        reset: h,
        getVelocity: c
    }
}, en = function(t, r) {
    return r && !t._gsapAllow && t.preventDefault(),
    t.changedTouches ? t.changedTouches[0] : t
}, Ca = function(t) {
    var r = Math.max.apply(Math, t)
      , e = Math.min.apply(Math, t);
    return Math.abs(r) >= Math.abs(e) ? r : e
}, gu = function() {
    _n = fe.core.globals().ScrollTrigger,
    _n && _n.core && Pc()
}, mu = function(t) {
    return fe = t || pu(),
    fe && typeof document < "u" && document.body && (je = window,
    Wr = document,
    Ur = Wr.documentElement,
    Ii = Wr.body,
    hu = [je, Wr, Ur, Ii],
    fe.utils.clamp,
    du = fe.core.context || function() {}
    ,
    oi = "onpointerenter"in Ii ? "pointer" : "mouse",
    cu = Ut.isTouch = je.matchMedia && je.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart"in je || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0,
    fr = Ut.eventTypes = ("ontouchstart"in Ur ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown"in Ur ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","),
    setTimeout(function() {
        return _u = 0
    }, 500),
    gu(),
    mo = 1),
    mo
};
Me.op = Kt;
it.cache = 0;
var Ut = function() {
    function o(r) {
        this.init(r)
    }
    var t = o.prototype;
    return t.init = function(e) {
        mo || mu(fe) || console.warn("Please gsap.registerPlugin(Observer)"),
        _n || gu();
        var i = e.tolerance
          , n = e.dragMinimum
          , a = e.type
          , s = e.target
          , l = e.lineHeight
          , u = e.debounce
          , f = e.preventDefault
          , h = e.onStop
          , c = e.onStopDelay
          , d = e.ignore
          , _ = e.wheelSpeed
          , p = e.event
          , g = e.onDragStart
          , w = e.onDragEnd
          , v = e.onDrag
          , x = e.onPress
          , T = e.onRelease
          , k = e.onRight
          , C = e.onLeft
          , S = e.onUp
          , O = e.onDown
          , P = e.onChangeX
          , M = e.onChangeY
          , E = e.onChange
          , A = e.onToggleX
          , $ = e.onToggleY
          , W = e.onHover
          , N = e.onHoverEnd
          , I = e.onMove
          , z = e.ignoreCheck
          , B = e.isNormalizer
          , Q = e.onGestureStart
          , b = e.onGestureEnd
          , q = e.onWheel
          , _t = e.onEnable
          , gt = e.onDisable
          , nt = e.onClick
          , vt = e.scrollSpeed
          , At = e.capture
          , Pt = e.allowClicks
          , Yt = e.lockAxis
          , Nt = e.onLockAxis;
        this.target = s = Ee(s) || Ur,
        this.vars = e,
        d && (d = fe.utils.toArray(d)),
        i = i || 1e-9,
        n = n || 0,
        _ = _ || 1,
        vt = vt || 1,
        a = a || "wheel,touch,pointer",
        u = u !== !1,
        l || (l = parseFloat(je.getComputedStyle(Ii).lineHeight) || 22);
        var Ot, ce, Be, at, kt, ee, y, m = this, F = 0, Y = 0, U = Jr(s, Me), Z = Jr(s, Kt), lt = U(), mt = Z(), yt = ~a.indexOf("touch") && !~a.indexOf("pointer") && fr[0] === "pointerdown", ut = mn(s), H = s.ownerDocument || Wr, he = [0, 0, 0], be = [0, 0, 0], Ze = 0, we = function() {
            return Ze = gn()
        }, re = function(V, ft) {
            return (m.event = V) && d && ~d.indexOf(V.target) || ft && yt && V.pointerType !== "touch" || z && z(V, ft)
        }, ie = function() {
            m._vx.reset(),
            m._vy.reset(),
            ce.pause(),
            h && h(m)
        }, lr = function() {
            var V = m.deltaX = Ca(he)
              , ft = m.deltaY = Ca(be)
              , Bt = Math.abs(V) >= i
              , R = Math.abs(ft) >= i;
            E && (Bt || R) && E(m, V, ft, he, be),
            Bt && (k && m.deltaX > 0 && k(m),
            C && m.deltaX < 0 && C(m),
            P && P(m),
            A && m.deltaX < 0 != F < 0 && A(m),
            F = m.deltaX,
            he[0] = he[1] = he[2] = 0),
            R && (O && m.deltaY > 0 && O(m),
            S && m.deltaY < 0 && S(m),
            M && M(m),
            $ && m.deltaY < 0 != Y < 0 && $(m),
            Y = m.deltaY,
            be[0] = be[1] = be[2] = 0),
            (at || Be) && (I && I(m),
            Be && (v(m),
            Be = !1),
            at = !1),
            ee && !(ee = !1) && Nt && Nt(m),
            kt && (q(m),
            kt = !1),
            Ot = 0
        }, dr = function(V, ft, Bt) {
            he[Bt] += V,
            be[Bt] += ft,
            m._vx.update(V),
            m._vy.update(ft),
            u ? Ot || (Ot = requestAnimationFrame(lr)) : lr()
        }, Ie = function(V, ft) {
            Yt && !y && (m.axis = y = Math.abs(V) > Math.abs(ft) ? "x" : "y",
            ee = !0),
            y !== "y" && (he[2] += V,
            m._vx.update(V, !0)),
            y !== "x" && (be[2] += ft,
            m._vy.update(ft, !0)),
            u ? Ot || (Ot = requestAnimationFrame(lr)) : lr()
        }, pr = function(V) {
            if (!re(V, 1)) {
                V = en(V, f);
                var ft = V.clientX
                  , Bt = V.clientY
                  , R = ft - m.x
                  , ct = Bt - m.y
                  , j = m.isDragging;
                m.x = ft,
                m.y = Bt,
                (j || Math.abs(m.startX - ft) >= n || Math.abs(m.startY - Bt) >= n) && (v && (Be = !0),
                j || (m.isDragging = !0),
                Ie(R, ct),
                j || g && g(m))
            }
        }, bt = m.onPress = function(K) {
            re(K, 1) || K && K.button || (m.axis = y = null,
            ce.pause(),
            m.isPressed = !0,
            K = en(K),
            F = Y = 0,
            m.startX = m.x = K.clientX,
            m.startY = m.y = K.clientY,
            m._vx.reset(),
            m._vy.reset(),
            ke(B ? s : H, fr[1], pr, f, !0),
            m.deltaX = m.deltaY = 0,
            x && x(m))
        }
        , wt = m.onRelease = function(K) {
            if (!re(K, 1)) {
                Se(B ? s : H, fr[1], pr, !0);
                var V = !isNaN(m.y - m.startY)
                  , ft = m.isDragging && (Math.abs(m.x - m.startX) > 3 || Math.abs(m.y - m.startY) > 3)
                  , Bt = en(K);
                !ft && V && (m._vx.reset(),
                m._vy.reset(),
                f && Pt && fe.delayedCall(.08, function() {
                    if (gn() - Ze > 300 && !K.defaultPrevented) {
                        if (K.target.click)
                            K.target.click();
                        else if (H.createEvent) {
                            var R = H.createEvent("MouseEvents");
                            R.initMouseEvent("click", !0, !0, je, 1, Bt.screenX, Bt.screenY, Bt.clientX, Bt.clientY, !1, !1, !1, !1, 0, null),
                            K.target.dispatchEvent(R)
                        }
                    }
                })),
                m.isDragging = m.isGesturing = m.isPressed = !1,
                h && !B && ce.restart(!0),
                w && ft && w(m),
                T && T(m, ft)
            }
        }
        , G = function(V) {
            return V.touches && V.touches.length > 1 && (m.isGesturing = !0) && Q(V, m.isDragging)
        }, ne = function() {
            return (m.isGesturing = !1) || b(m)
        }, Et = function(V) {
            if (!re(V)) {
                var ft = U()
                  , Bt = Z();
                dr((ft - lt) * vt, (Bt - mt) * vt, 1),
                lt = ft,
                mt = Bt,
                h && ce.restart(!0)
            }
        }, qt = function(V) {
            if (!re(V)) {
                V = en(V, f),
                q && (kt = !0);
                var ft = (V.deltaMode === 1 ? l : V.deltaMode === 2 ? je.innerHeight : 1) * _;
                dr(V.deltaX * ft, V.deltaY * ft, 0),
                h && !B && ce.restart(!0)
            }
        }, Qt = function(V) {
            if (!re(V)) {
                var ft = V.clientX
                  , Bt = V.clientY
                  , R = ft - m.x
                  , ct = Bt - m.y;
                m.x = ft,
                m.y = Bt,
                at = !0,
                (R || ct) && Ie(R, ct)
            }
        }, He = function(V) {
            m.event = V,
            W(m)
        }, xe = function(V) {
            m.event = V,
            N(m)
        }, Ge = function(V) {
            return re(V) || en(V, f) && nt(m)
        };
        ce = m._dc = fe.delayedCall(c || .25, ie).pause(),
        m.deltaX = m.deltaY = 0,
        m._vx = bo(0, 50, !0),
        m._vy = bo(0, 50, !0),
        m.scrollX = U,
        m.scrollY = Z,
        m.isDragging = m.isGesturing = m.isPressed = !1,
        du(this),
        m.enable = function(K) {
            return m.isEnabled || (ke(ut ? H : s, "scroll", yo),
            a.indexOf("scroll") >= 0 && ke(ut ? H : s, "scroll", Et, f, At),
            a.indexOf("wheel") >= 0 && ke(s, "wheel", qt, f, At),
            (a.indexOf("touch") >= 0 && cu || a.indexOf("pointer") >= 0) && (ke(s, fr[0], bt, f, At),
            ke(H, fr[2], wt),
            ke(H, fr[3], wt),
            Pt && ke(s, "click", we, !1, !0),
            nt && ke(s, "click", Ge),
            Q && ke(H, "gesturestart", G),
            b && ke(H, "gestureend", ne),
            W && ke(s, oi + "enter", He),
            N && ke(s, oi + "leave", xe),
            I && ke(s, oi + "move", Qt)),
            m.isEnabled = !0,
            K && K.type && bt(K),
            _t && _t(m)),
            m
        }
        ,
        m.disable = function() {
            m.isEnabled && (Ri.filter(function(K) {
                return K !== m && mn(K.target)
            }).length || Se(ut ? H : s, "scroll", yo),
            m.isPressed && (m._vx.reset(),
            m._vy.reset(),
            Se(B ? s : H, fr[1], pr, !0)),
            Se(ut ? H : s, "scroll", Et, At),
            Se(s, "wheel", qt, At),
            Se(s, fr[0], bt, At),
            Se(H, fr[2], wt),
            Se(H, fr[3], wt),
            Se(s, "click", we, !0),
            Se(s, "click", Ge),
            Se(H, "gesturestart", G),
            Se(H, "gestureend", ne),
            Se(s, oi + "enter", He),
            Se(s, oi + "leave", xe),
            Se(s, oi + "move", Qt),
            m.isEnabled = m.isPressed = m.isDragging = !1,
            gt && gt(m))
        }
        ,
        m.kill = m.revert = function() {
            m.disable();
            var K = Ri.indexOf(m);
            K >= 0 && Ri.splice(K, 1),
            Lr === m && (Lr = 0)
        }
        ,
        Ri.push(m),
        B && mn(s) && (Lr = m),
        m.enable(p)
    }
    ,
    kc(o, [{
        key: "velocityX",
        get: function() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function() {
            return this._vy.getVelocity()
        }
    }]),
    o
}();
Ut.version = "3.12.2";
Ut.create = function(o) {
    return new Ut(o)
}
;
Ut.register = mu;
Ut.getAll = function() {
    return Ri.slice()
}
;
Ut.getById = function(o) {
    return Ri.filter(function(t) {
        return t.vars.id === o
    })[0]
}
;
pu() && fe.registerPlugin(Ut);
/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var L, Oi, st, Dt, cr, Ct, vu, Ss, ks, Li, os, Vn, ge, Es, wo, Pe, Oa, Ma, Mi, yu, Xs, bu, Ye, wu, xu, Tu, Vr, xo, Zo, Hi, Go, Ws, $n = 1, Oe = Date.now, Us = Oe(), or = 0, ln = 0, Aa = function(t, r, e) {
    var i = Xe(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return e["_" + r + "Clamp"] = i,
    i ? t.substr(6, t.length - 7) : t
}, Ea = function(t, r) {
    return r && (!Xe(t) || t.substr(0, 6) !== "clamp(") ? "clamp(" + t + ")" : t
}, Cc = function o() {
    return ln && requestAnimationFrame(o)
}, Ra = function() {
    return Es = 1
}, La = function() {
    return Es = 0
}, br = function(t) {
    return t
}, un = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, Su = function() {
    return typeof window < "u"
}, ku = function() {
    return L || Su() && (L = window.gsap) && L.registerPlugin && L
}, wi = function(t) {
    return !!~vu.indexOf(t)
}, Pu = function(t) {
    return (t === "Height" ? Go : st["inner" + t]) || cr["client" + t] || Ct["client" + t]
}, Cu = function(t) {
    return Qr(t, "getBoundingClientRect") || (wi(t) ? function() {
        return hs.width = st.innerWidth,
        hs.height = Go,
        hs
    }
    : function() {
        return Rr(t)
    }
    )
}, Oc = function(t, r, e) {
    var i = e.d
      , n = e.d2
      , a = e.a;
    return (a = Qr(t, "getBoundingClientRect")) ? function() {
        return a()[i]
    }
    : function() {
        return (r ? Pu(n) : t["client" + n]) || 0
    }
}, Mc = function(t, r) {
    return !r || ~Pr.indexOf(t) ? Cu(t) : function() {
        return hs
    }
}, Dr = function(t, r) {
    var e = r.s
      , i = r.d2
      , n = r.d
      , a = r.a;
    return Math.max(0, (e = "scroll" + i) && (a = Qr(t, e)) ? a() - Cu(t)()[n] : wi(t) ? (cr[e] || Ct[e]) - Pu(i) : t[e] - t["offset" + i])
}, Yn = function(t, r) {
    for (var e = 0; e < Mi.length; e += 3)
        (!r || ~r.indexOf(Mi[e + 1])) && t(Mi[e], Mi[e + 1], Mi[e + 2])
}, Xe = function(t) {
    return typeof t == "string"
}, Ae = function(t) {
    return typeof t == "function"
}, as = function(t) {
    return typeof t == "number"
}, ai = function(t) {
    return typeof t == "object"
}, rn = function(t, r, e) {
    return t && t.progress(r ? 0 : 1) && e && t.pause()
}, js = function(t, r) {
    if (t.enabled) {
        var e = r(t);
        e && e.totalTime && (t.callbackAnimation = e)
    }
}, Pi = Math.abs, Ou = "left", Mu = "top", Jo = "right", ta = "bottom", gi = "width", mi = "height", vn = "Right", yn = "Left", bn = "Top", wn = "Bottom", Xt = "padding", er = "margin", Ui = "Width", ea = "Height", ae = "px", rr = function(t) {
    return st.getComputedStyle(t)
}, Ac = function(t) {
    var r = rr(t).position;
    t.style.position = r === "absolute" || r === "fixed" ? r : "relative"
}, Da = function(t, r) {
    for (var e in r)
        e in t || (t[e] = r[e]);
    return t
}, Rr = function(t, r) {
    var e = r && rr(t)[wo] !== "matrix(1, 0, 0, 1, 0, 0)" && L.to(t, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
    }).progress(1)
      , i = t.getBoundingClientRect();
    return e && e.progress(0).kill(),
    i
}, To = function(t, r) {
    var e = r.d2;
    return t["offset" + e] || t["client" + e] || 0
}, Au = function(t) {
    var r = [], e = t.labels, i = t.duration(), n;
    for (n in e)
        r.push(e[n] / i);
    return r
}, Ec = function(t) {
    return function(r) {
        return L.utils.snap(Au(t), r)
    }
}, ra = function(t) {
    var r = L.utils.snap(t)
      , e = Array.isArray(t) && t.slice(0).sort(function(i, n) {
        return i - n
    });
    return e ? function(i, n, a) {
        a === void 0 && (a = .001);
        var s;
        if (!n)
            return r(i);
        if (n > 0) {
            for (i -= a,
            s = 0; s < e.length; s++)
                if (e[s] >= i)
                    return e[s];
            return e[s - 1]
        } else
            for (s = e.length,
            i += a; s--; )
                if (e[s] <= i)
                    return e[s];
        return e[0]
    }
    : function(i, n, a) {
        a === void 0 && (a = .001);
        var s = r(i);
        return !n || Math.abs(s - i) < a || s - i < 0 == n < 0 ? s : r(n < 0 ? i - t : i + t)
    }
}, Rc = function(t) {
    return function(r, e) {
        return ra(Au(t))(r, e.direction)
    }
}, qn = function(t, r, e, i) {
    return e.split(",").forEach(function(n) {
        return t(r, n, i)
    })
}, Jt = function(t, r, e, i, n) {
    return t.addEventListener(r, e, {
        passive: !i,
        capture: !!n
    })
}, Gt = function(t, r, e, i) {
    return t.removeEventListener(r, e, !!i)
}, Xn = function(t, r, e) {
    e = e && e.wheelHandler,
    e && (t(r, "wheel", e),
    t(r, "touchmove", e))
}, Fa = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
}, Wn = {
    toggleActions: "play",
    anticipatePin: 0
}, Ps = {
    top: 0,
    left: 0,
    center: .5,
    bottom: 1,
    right: 1
}, ls = function(t, r) {
    if (Xe(t)) {
        var e = t.indexOf("=")
          , i = ~e ? +(t.charAt(e - 1) + 1) * parseFloat(t.substr(e + 1)) : 0;
        ~e && (t.indexOf("%") > e && (i *= r / 100),
        t = t.substr(0, e - 1)),
        t = i + (t in Ps ? Ps[t] * r : ~t.indexOf("%") ? parseFloat(t) * r / 100 : parseFloat(t) || 0)
    }
    return t
}, Un = function(t, r, e, i, n, a, s, l) {
    var u = n.startColor
      , f = n.endColor
      , h = n.fontSize
      , c = n.indent
      , d = n.fontWeight
      , _ = Dt.createElement("div")
      , p = wi(e) || Qr(e, "pinType") === "fixed"
      , g = t.indexOf("scroller") !== -1
      , w = p ? Ct : e
      , v = t.indexOf("start") !== -1
      , x = v ? u : f
      , T = "border-color:" + x + ";font-size:" + h + ";color:" + x + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return T += "position:" + ((g || l) && p ? "fixed;" : "absolute;"),
    (g || l || !p) && (T += (i === Kt ? Jo : ta) + ":" + (a + parseFloat(c)) + "px;"),
    s && (T += "box-sizing:border-box;text-align:left;width:" + s.offsetWidth + "px;"),
    _._isStart = v,
    _.setAttribute("class", "gsap-marker-" + t + (r ? " marker-" + r : "")),
    _.style.cssText = T,
    _.innerText = r || r === 0 ? t + "-" + r : t,
    w.children[0] ? w.insertBefore(_, w.children[0]) : w.appendChild(_),
    _._offset = _["offset" + i.op.d2],
    us(_, 0, i, v),
    _
}, us = function(t, r, e, i) {
    var n = {
        display: "block"
    }
      , a = e[i ? "os2" : "p2"]
      , s = e[i ? "p2" : "os2"];
    t._isFlipped = i,
    n[e.a + "Percent"] = i ? -100 : 0,
    n[e.a] = i ? "1px" : 0,
    n["border" + a + Ui] = 1,
    n["border" + s + Ui] = 0,
    n[e.p] = r + "px",
    L.set(t, n)
}, et = [], So = {}, An, za = function() {
    return Oe() - or > 34 && (An || (An = requestAnimationFrame(Fr)))
}, Ci = function() {
    (!Ye || !Ye.isPressed || Ye.startX > Ct.clientWidth) && (it.cache++,
    Ye ? An || (An = requestAnimationFrame(Fr)) : Fr(),
    or || Ti("scrollStart"),
    or = Oe())
}, Ks = function() {
    Tu = st.innerWidth,
    xu = st.innerHeight
}, fn = function() {
    it.cache++,
    !ge && !bu && !Dt.fullscreenElement && !Dt.webkitFullscreenElement && (!wu || Tu !== st.innerWidth || Math.abs(st.innerHeight - xu) > st.innerHeight * .25) && Ss.restart(!0)
}, xi = {}, Lc = [], Eu = function o() {
    return Gt(X, "scrollEnd", o) || ci(!0)
}, Ti = function(t) {
    return xi[t] && xi[t].map(function(r) {
        return r()
    }) || Lc
}, qe = [], Ru = function(t) {
    for (var r = 0; r < qe.length; r += 5)
        (!t || qe[r + 4] && qe[r + 4].query === t) && (qe[r].style.cssText = qe[r + 1],
        qe[r].getBBox && qe[r].setAttribute("transform", qe[r + 2] || ""),
        qe[r + 3].uncache = 1)
}, ia = function(t, r) {
    var e;
    for (Pe = 0; Pe < et.length; Pe++)
        e = et[Pe],
        e && (!r || e._ctx === r) && (t ? e.kill(1) : e.revert(!0, !0));
    r && Ru(r),
    r || Ti("revert")
}, Lu = function(t, r) {
    it.cache++,
    (r || !Ce) && it.forEach(function(e) {
        return Ae(e) && e.cacheID++ && (e.rec = 0)
    }),
    Xe(t) && (st.history.scrollRestoration = Zo = t)
}, Ce, vi = 0, Na, Dc = function() {
    if (Na !== vi) {
        var t = Na = vi;
        requestAnimationFrame(function() {
            return t === vi && ci(!0)
        })
    }
}, Du = function() {
    Ct.appendChild(Hi),
    Go = Hi.offsetHeight || st.innerHeight,
    Ct.removeChild(Hi)
}, ci = function(t, r) {
    if (or && !t) {
        Jt(X, "scrollEnd", Eu);
        return
    }
    Du(),
    Ce = X.isRefreshing = !0,
    it.forEach(function(i) {
        return Ae(i) && ++i.cacheID && (i.rec = i())
    });
    var e = Ti("refreshInit");
    yu && X.sort(),
    r || ia(),
    it.forEach(function(i) {
        Ae(i) && (i.smooth && (i.target.style.scrollBehavior = "auto"),
        i(0))
    }),
    et.slice(0).forEach(function(i) {
        return i.refresh()
    }),
    et.forEach(function(i, n) {
        if (i._subPinOffset && i.pin) {
            var a = i.vars.horizontal ? "offsetWidth" : "offsetHeight"
              , s = i.pin[a];
            i.revert(!0, 1),
            i.adjustPinSpacing(i.pin[a] - s),
            i.refresh()
        }
    }),
    et.forEach(function(i) {
        var n = Dr(i.scroller, i._dir);
        (i.vars.end === "max" || i._endClamp && i.end > n) && i.setPositions(i.start, Math.max(i.start + 1, n), !0)
    }),
    e.forEach(function(i) {
        return i && i.render && i.render(-1)
    }),
    it.forEach(function(i) {
        Ae(i) && (i.smooth && requestAnimationFrame(function() {
            return i.target.style.scrollBehavior = "smooth"
        }),
        i.rec && i(i.rec))
    }),
    Lu(Zo, 1),
    Ss.pause(),
    vi++,
    Ce = 2,
    Fr(2),
    et.forEach(function(i) {
        return Ae(i.vars.onRefresh) && i.vars.onRefresh(i)
    }),
    Ce = X.isRefreshing = !1,
    Ti("refresh")
}, ko = 0, fs = 1, xn, Fr = function(t) {
    if (!Ce || t === 2) {
        X.isUpdating = !0,
        xn && xn.update(0);
        var r = et.length
          , e = Oe()
          , i = e - Us >= 50
          , n = r && et[0].scroll();
        if (fs = ko > n ? -1 : 1,
        Ce || (ko = n),
        i && (or && !Es && e - or > 200 && (or = 0,
        Ti("scrollEnd")),
        os = Us,
        Us = e),
        fs < 0) {
            for (Pe = r; Pe-- > 0; )
                et[Pe] && et[Pe].update(0, i);
            fs = 1
        } else
            for (Pe = 0; Pe < r; Pe++)
                et[Pe] && et[Pe].update(0, i);
        X.isUpdating = !1
    }
    An = 0
}, Po = [Ou, Mu, ta, Jo, er + wn, er + vn, er + bn, er + yn, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"], cs = Po.concat([gi, mi, "boxSizing", "max" + Ui, "max" + ea, "position", er, Xt, Xt + bn, Xt + vn, Xt + wn, Xt + yn]), Fc = function(t, r, e) {
    Vi(e);
    var i = t._gsap;
    if (i.spacerIsNative)
        Vi(i.spacerState);
    else if (t._gsap.swappedIn) {
        var n = r.parentNode;
        n && (n.insertBefore(t, r),
        n.removeChild(r))
    }
    t._gsap.swappedIn = !1
}, Qs = function(t, r, e, i) {
    if (!t._gsap.swappedIn) {
        for (var n = Po.length, a = r.style, s = t.style, l; n--; )
            l = Po[n],
            a[l] = e[l];
        a.position = e.position === "absolute" ? "absolute" : "relative",
        e.display === "inline" && (a.display = "inline-block"),
        s[ta] = s[Jo] = "auto",
        a.flexBasis = e.flexBasis || "auto",
        a.overflow = "visible",
        a.boxSizing = "border-box",
        a[gi] = To(t, Me) + ae,
        a[mi] = To(t, Kt) + ae,
        a[Xt] = s[er] = s[Mu] = s[Ou] = "0",
        Vi(i),
        s[gi] = s["max" + Ui] = e[gi],
        s[mi] = s["max" + ea] = e[mi],
        s[Xt] = e[Xt],
        t.parentNode !== r && (t.parentNode.insertBefore(r, t),
        r.appendChild(t)),
        t._gsap.swappedIn = !0
    }
}, zc = /([A-Z])/g, Vi = function(t) {
    if (t) {
        var r = t.t.style, e = t.length, i = 0, n, a;
        for ((t.t._gsap || L.core.getCache(t.t)).uncache = 1; i < e; i += 2)
            a = t[i + 1],
            n = t[i],
            a ? r[n] = a : r[n] && r.removeProperty(n.replace(zc, "-$1").toLowerCase())
    }
}, jn = function(t) {
    for (var r = cs.length, e = t.style, i = [], n = 0; n < r; n++)
        i.push(cs[n], e[cs[n]]);
    return i.t = t,
    i
}, Nc = function(t, r, e) {
    for (var i = [], n = t.length, a = e ? 8 : 0, s; a < n; a += 2)
        s = t[a],
        i.push(s, s in r ? r[s] : t[a + 1]);
    return i.t = t.t,
    i
}, hs = {
    left: 0,
    top: 0
}, Ba = function(t, r, e, i, n, a, s, l, u, f, h, c, d, _) {
    Ae(t) && (t = t(l)),
    Xe(t) && t.substr(0, 3) === "max" && (t = c + (t.charAt(4) === "=" ? ls("0" + t.substr(3), e) : 0));
    var p = d ? d.time() : 0, g, w, v;
    if (d && d.seek(0),
    isNaN(t) || (t = +t),
    as(t))
        d && (t = L.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, c, t)),
        s && us(s, e, i, !0);
    else {
        Ae(r) && (r = r(l));
        var x = (t || "0").split(" "), T, k, C, S;
        v = Ee(r, l) || Ct,
        T = Rr(v) || {},
        (!T || !T.left && !T.top) && rr(v).display === "none" && (S = v.style.display,
        v.style.display = "block",
        T = Rr(v),
        S ? v.style.display = S : v.style.removeProperty("display")),
        k = ls(x[0], T[i.d]),
        C = ls(x[1] || "0", e),
        t = T[i.p] - u[i.p] - f + k + n - C,
        s && us(s, C, i, e - C < 20 || s._isStart && C > 20),
        e -= e - C
    }
    if (_ && (l[_] = t || -.001,
    t < 0 && (t = 0)),
    a) {
        var O = t + e
          , P = a._isStart;
        g = "scroll" + i.d2,
        us(a, O, i, P && O > 20 || !P && (h ? Math.max(Ct[g], cr[g]) : a.parentNode[g]) <= O + 1),
        h && (u = Rr(s),
        h && (a.style[i.op.p] = u[i.op.p] - i.op.m - a._offset + ae))
    }
    return d && v && (g = Rr(v),
    d.seek(c),
    w = Rr(v),
    d._caScrollDist = g[i.p] - w[i.p],
    t = t / d._caScrollDist * c),
    d && d.seek(p),
    d ? t : Math.round(t)
}, Bc = /(webkit|moz|length|cssText|inset)/i, Ia = function(t, r, e, i) {
    if (t.parentNode !== r) {
        var n = t.style, a, s;
        if (r === Ct) {
            t._stOrig = n.cssText,
            s = rr(t);
            for (a in s)
                !+a && !Bc.test(a) && s[a] && typeof n[a] == "string" && a !== "0" && (n[a] = s[a]);
            n.top = e,
            n.left = i
        } else
            n.cssText = t._stOrig;
        L.core.getCache(t).uncache = 1,
        r.appendChild(t)
    }
}, Fu = function(t, r, e) {
    var i = r
      , n = i;
    return function(a) {
        var s = Math.round(t());
        return s !== i && s !== n && Math.abs(s - i) > 3 && Math.abs(s - n) > 3 && (a = s,
        e && e()),
        n = i,
        i = a,
        a
    }
}, Kn = function(t, r, e) {
    var i = {};
    i[r.p] = "+=" + e,
    L.set(t, i)
}, Ha = function(t, r) {
    var e = Jr(t, r)
      , i = "_scroll" + r.p2
      , n = function a(s, l, u, f, h) {
        var c = a.tween
          , d = l.onComplete
          , _ = {};
        u = u || e();
        var p = Fu(e, u, function() {
            c.kill(),
            a.tween = 0
        });
        return h = f && h || 0,
        f = f || s - u,
        c && c.kill(),
        l[i] = s,
        l.modifiers = _,
        _[i] = function() {
            return p(u + f * c.ratio + h * c.ratio * c.ratio)
        }
        ,
        l.onUpdate = function() {
            it.cache++,
            Fr()
        }
        ,
        l.onComplete = function() {
            a.tween = 0,
            d && d.call(c)
        }
        ,
        c = a.tween = L.to(t, l),
        c
    };
    return t[i] = e,
    e.wheelHandler = function() {
        return n.tween && n.tween.kill() && (n.tween = 0)
    }
    ,
    Jt(t, "wheel", e.wheelHandler),
    X.isTouch && Jt(t, "touchmove", e.wheelHandler),
    n
}, X = function() {
    function o(r, e) {
        Oi || o.register(L) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        xo(this),
        this.init(r, e)
    }
    var t = o.prototype;
    return t.init = function(e, i) {
        if (this.progress = this.start = 0,
        this.vars && this.kill(!0, !0),
        !ln) {
            this.update = this.refresh = this.kill = br;
            return
        }
        e = Da(Xe(e) || as(e) || e.nodeType ? {
            trigger: e
        } : e, Wn);
        var n = e, a = n.onUpdate, s = n.toggleClass, l = n.id, u = n.onToggle, f = n.onRefresh, h = n.scrub, c = n.trigger, d = n.pin, _ = n.pinSpacing, p = n.invalidateOnRefresh, g = n.anticipatePin, w = n.onScrubComplete, v = n.onSnapComplete, x = n.once, T = n.snap, k = n.pinReparent, C = n.pinSpacer, S = n.containerAnimation, O = n.fastScrollEnd, P = n.preventOverlaps, M = e.horizontal || e.containerAnimation && e.horizontal !== !1 ? Me : Kt, E = !h && h !== 0, A = Ee(e.scroller || st), $ = L.core.getCache(A), W = wi(A), N = ("pinType"in e ? e.pinType : Qr(A, "pinType") || W && "fixed") === "fixed", I = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], z = E && e.toggleActions.split(" "), B = "markers"in e ? e.markers : Wn.markers, Q = W ? 0 : parseFloat(rr(A)["border" + M.p2 + Ui]) || 0, b = this, q = e.onRefreshInit && function() {
            return e.onRefreshInit(b)
        }
        , _t = Oc(A, W, M), gt = Mc(A, W), nt = 0, vt = 0, At = 0, Pt = Jr(A, M), Yt, Nt, Ot, ce, Be, at, kt, ee, y, m, F, Y, U, Z, lt, mt, yt, ut, H, he, be, Ze, we, re, ie, lr, dr, Ie, pr, bt, wt, G, ne, Et, qt, Qt, He, xe, Ge;
        if (b._startClamp = b._endClamp = !1,
        b._dir = M,
        g *= 45,
        b.scroller = A,
        b.scroll = S ? S.time.bind(S) : Pt,
        ce = Pt(),
        b.vars = e,
        i = i || e.animation,
        "refreshPriority"in e && (yu = 1,
        e.refreshPriority === -9999 && (xn = b)),
        $.tweenScroll = $.tweenScroll || {
            top: Ha(A, Kt),
            left: Ha(A, Me)
        },
        b.tweenTo = Yt = $.tweenScroll[M.p],
        b.scrubDuration = function(R) {
            ne = as(R) && R,
            ne ? G ? G.duration(R) : G = L.to(i, {
                ease: "expo",
                totalProgress: "+=0",
                duration: ne,
                paused: !0,
                onComplete: function() {
                    return w && w(b)
                }
            }) : (G && G.progress(1).kill(),
            G = 0)
        }
        ,
        i && (i.vars.lazy = !1,
        i._initted && !b.isReverted || i.vars.immediateRender !== !1 && e.immediateRender !== !1 && i.duration() && i.render(0, !0, !0),
        b.animation = i.pause(),
        i.scrollTrigger = b,
        b.scrubDuration(h),
        bt = 0,
        l || (l = i.vars.id)),
        T && ((!ai(T) || T.push) && (T = {
            snapTo: T
        }),
        "scrollBehavior"in Ct.style && L.set(W ? [Ct, cr] : A, {
            scrollBehavior: "auto"
        }),
        it.forEach(function(R) {
            return Ae(R) && R.target === (W ? Dt.scrollingElement || cr : A) && (R.smooth = !1)
        }),
        Ot = Ae(T.snapTo) ? T.snapTo : T.snapTo === "labels" ? Ec(i) : T.snapTo === "labelsDirectional" ? Rc(i) : T.directional !== !1 ? function(R, ct) {
            return ra(T.snapTo)(R, Oe() - vt < 500 ? 0 : ct.direction)
        }
        : L.utils.snap(T.snapTo),
        Et = T.duration || {
            min: .1,
            max: 2
        },
        Et = ai(Et) ? Li(Et.min, Et.max) : Li(Et, Et),
        qt = L.delayedCall(T.delay || ne / 2 || .1, function() {
            var R = Pt()
              , ct = Oe() - vt < 500
              , j = Yt.tween;
            if ((ct || Math.abs(b.getVelocity()) < 10) && !j && !Es && nt !== R) {
                var rt = (R - at) / Z
                  , Zt = i && !E ? i.totalProgress() : rt
                  , dt = ct ? 0 : (Zt - wt) / (Oe() - os) * 1e3 || 0
                  , Vt = L.utils.clamp(-rt, 1 - rt, Pi(dt / 2) * dt / .185)
                  , Te = rt + (T.inertia === !1 ? 0 : Vt)
                  , se = Li(0, 1, Ot(Te, b))
                  , Rt = Math.round(at + se * Z)
                  , xt = T
                  , ur = xt.onStart
                  , Lt = xt.onInterrupt
                  , Ve = xt.onComplete;
                if (R <= kt && R >= at && Rt !== R) {
                    if (j && !j._initted && j.data <= Pi(Rt - R))
                        return;
                    T.inertia === !1 && (Vt = se - rt),
                    Yt(Rt, {
                        duration: Et(Pi(Math.max(Pi(Te - Zt), Pi(se - Zt)) * .185 / dt / .05 || 0)),
                        ease: T.ease || "power3",
                        data: Pi(Rt - R),
                        onInterrupt: function() {
                            return qt.restart(!0) && Lt && Lt(b)
                        },
                        onComplete: function() {
                            b.update(),
                            nt = Pt(),
                            bt = wt = i && !E ? i.totalProgress() : b.progress,
                            v && v(b),
                            Ve && Ve(b)
                        }
                    }, R, Vt * Z, Rt - R - Vt * Z),
                    ur && ur(b, Yt.tween)
                }
            } else
                b.isActive && nt !== R && qt.restart(!0)
        }).pause()),
        l && (So[l] = b),
        c = b.trigger = Ee(c || d !== !0 && d),
        Ge = c && c._gsap && c._gsap.stRevert,
        Ge && (Ge = Ge(b)),
        d = d === !0 ? c : Ee(d),
        Xe(s) && (s = {
            targets: c,
            className: s
        }),
        d && (_ === !1 || _ === er || (_ = !_ && d.parentNode && d.parentNode.style && rr(d.parentNode).display === "flex" ? !1 : Xt),
        b.pin = d,
        Nt = L.core.getCache(d),
        Nt.spacer ? lt = Nt.pinState : (C && (C = Ee(C),
        C && !C.nodeType && (C = C.current || C.nativeElement),
        Nt.spacerIsNative = !!C,
        C && (Nt.spacerState = jn(C))),
        Nt.spacer = ut = C || Dt.createElement("div"),
        ut.classList.add("pin-spacer"),
        l && ut.classList.add("pin-spacer-" + l),
        Nt.pinState = lt = jn(d)),
        e.force3D !== !1 && L.set(d, {
            force3D: !0
        }),
        b.spacer = ut = Nt.spacer,
        pr = rr(d),
        re = pr[_ + M.os2],
        he = L.getProperty(d),
        be = L.quickSetter(d, M.a, ae),
        Qs(d, ut, pr),
        yt = jn(d)),
        B) {
            Y = ai(B) ? Da(B, Fa) : Fa,
            m = Un("scroller-start", l, A, M, Y, 0),
            F = Un("scroller-end", l, A, M, Y, 0, m),
            H = m["offset" + M.op.d2];
            var K = Ee(Qr(A, "content") || A);
            ee = this.markerStart = Un("start", l, K, M, Y, H, 0, S),
            y = this.markerEnd = Un("end", l, K, M, Y, H, 0, S),
            S && (xe = L.quickSetter([ee, y], M.a, ae)),
            !N && !(Pr.length && Qr(A, "fixedMarkers") === !0) && (Ac(W ? Ct : A),
            L.set([m, F], {
                force3D: !0
            }),
            lr = L.quickSetter(m, M.a, ae),
            Ie = L.quickSetter(F, M.a, ae))
        }
        if (S) {
            var V = S.vars.onUpdate
              , ft = S.vars.onUpdateParams;
            S.eventCallback("onUpdate", function() {
                b.update(0, 0, 1),
                V && V.apply(S, ft || [])
            })
        }
        if (b.previous = function() {
            return et[et.indexOf(b) - 1]
        }
        ,
        b.next = function() {
            return et[et.indexOf(b) + 1]
        }
        ,
        b.revert = function(R, ct) {
            if (!ct)
                return b.kill(!0);
            var j = R !== !1 || !b.enabled
              , rt = ge;
            j !== b.isReverted && (j && (Qt = Math.max(Pt(), b.scroll.rec || 0),
            At = b.progress,
            He = i && i.progress()),
            ee && [ee, y, m, F].forEach(function(Zt) {
                return Zt.style.display = j ? "none" : "block"
            }),
            j && (ge = b,
            b.update(j)),
            d && (!k || !b.isActive) && (j ? Fc(d, ut, lt) : Qs(d, ut, rr(d), ie)),
            j || b.update(j),
            ge = rt,
            b.isReverted = j)
        }
        ,
        b.refresh = function(R, ct, j, rt) {
            if (!((ge || !b.enabled) && !ct)) {
                if (d && R && or) {
                    Jt(o, "scrollEnd", Eu);
                    return
                }
                !Ce && q && q(b),
                ge = b,
                Yt.tween && !j && (Yt.tween.kill(),
                Yt.tween = 0),
                G && G.pause(),
                p && i && i.revert({
                    kill: !1
                }).invalidate(),
                b.isReverted || b.revert(!0, !0),
                b._subPinOffset = !1;
                var Zt = _t(), dt = gt(), Vt = S ? S.duration() : Dr(A, M), Te = Z <= .01, se = 0, Rt = rt || 0, xt = ai(j) ? j.end : e.end, ur = e.endTrigger || c, Lt = ai(j) ? j.start : e.start || (e.start === 0 || !c ? 0 : d ? "0 0" : "0 100%"), Ve = b.pinnedContainer = e.pinnedContainer && Ee(e.pinnedContainer, b), _r = c && Math.max(0, et.indexOf(b)) || 0, $e = _r, oe, de, ri, Ln, pe, jt, gr, Fs, aa, Qi, mr, Zi, Dn;
                for (B && ai(j) && (Zi = L.getProperty(m, M.p),
                Dn = L.getProperty(F, M.p)); $e--; )
                    jt = et[$e],
                    jt.end || jt.refresh(0, 1) || (ge = b),
                    gr = jt.pin,
                    gr && (gr === c || gr === d || gr === Ve) && !jt.isReverted && (Qi || (Qi = []),
                    Qi.unshift(jt),
                    jt.revert(!0, !0)),
                    jt !== et[$e] && (_r--,
                    $e--);
                for (Ae(Lt) && (Lt = Lt(b)),
                Lt = Aa(Lt, "start", b),
                at = Ba(Lt, c, Zt, M, Pt(), ee, m, b, dt, Q, N, Vt, S, b._startClamp && "_startClamp") || (d ? -.001 : 0),
                Ae(xt) && (xt = xt(b)),
                Xe(xt) && !xt.indexOf("+=") && (~xt.indexOf(" ") ? xt = (Xe(Lt) ? Lt.split(" ")[0] : "") + xt : (se = ls(xt.substr(2), Zt),
                xt = Xe(Lt) ? Lt : (S ? L.utils.mapRange(0, S.duration(), S.scrollTrigger.start, S.scrollTrigger.end, at) : at) + se,
                ur = c)),
                xt = Aa(xt, "end", b),
                kt = Math.max(at, Ba(xt || (ur ? "100% 0" : Vt), ur, Zt, M, Pt() + se, y, F, b, dt, Q, N, Vt, S, b._endClamp && "_endClamp")) || -.001,
                se = 0,
                $e = _r; $e--; )
                    jt = et[$e],
                    gr = jt.pin,
                    gr && jt.start - jt._pinPush <= at && !S && jt.end > 0 && (oe = jt.end - (b._startClamp ? Math.max(0, jt.start) : jt.start),
                    (gr === c && jt.start - jt._pinPush < at || gr === Ve) && isNaN(Lt) && (se += oe * (1 - jt.progress)),
                    gr === d && (Rt += oe));
                if (at += se,
                kt += se,
                b._startClamp && (b._startClamp += se),
                b._endClamp && !Ce && (b._endClamp = kt || -.001,
                kt = Math.min(kt, Dr(A, M))),
                Z = kt - at || (at -= .01) && .001,
                Te && (At = L.utils.clamp(0, 1, L.utils.normalize(at, kt, Qt))),
                b._pinPush = Rt,
                ee && se && (oe = {},
                oe[M.a] = "+=" + se,
                Ve && (oe[M.p] = "-=" + Pt()),
                L.set([ee, y], oe)),
                d)
                    oe = rr(d),
                    Ln = M === Kt,
                    ri = Pt(),
                    Ze = parseFloat(he(M.a)) + Rt,
                    !Vt && kt > 1 && (mr = (W ? Dt.scrollingElement || cr : A).style,
                    mr = {
                        style: mr,
                        value: mr["overflow" + M.a.toUpperCase()]
                    },
                    W && rr(Ct)["overflow" + M.a.toUpperCase()] !== "scroll" && (mr.style["overflow" + M.a.toUpperCase()] = "scroll")),
                    Qs(d, ut, oe),
                    yt = jn(d),
                    de = Rr(d, !0),
                    Fs = N && Jr(A, Ln ? Me : Kt)(),
                    _ && (ie = [_ + M.os2, Z + Rt + ae],
                    ie.t = ut,
                    $e = _ === Xt ? To(d, M) + Z + Rt : 0,
                    $e && ie.push(M.d, $e + ae),
                    Vi(ie),
                    Ve && et.forEach(function(Gi) {
                        Gi.pin === Ve && Gi.vars.pinSpacing !== !1 && (Gi._subPinOffset = !0)
                    }),
                    N && Pt(Qt)),
                    N && (pe = {
                        top: de.top + (Ln ? ri - at : Fs) + ae,
                        left: de.left + (Ln ? Fs : ri - at) + ae,
                        boxSizing: "border-box",
                        position: "fixed"
                    },
                    pe[gi] = pe["max" + Ui] = Math.ceil(de.width) + ae,
                    pe[mi] = pe["max" + ea] = Math.ceil(de.height) + ae,
                    pe[er] = pe[er + bn] = pe[er + vn] = pe[er + wn] = pe[er + yn] = "0",
                    pe[Xt] = oe[Xt],
                    pe[Xt + bn] = oe[Xt + bn],
                    pe[Xt + vn] = oe[Xt + vn],
                    pe[Xt + wn] = oe[Xt + wn],
                    pe[Xt + yn] = oe[Xt + yn],
                    mt = Nc(lt, pe, k),
                    Ce && Pt(0)),
                    i ? (aa = i._initted,
                    Xs(1),
                    i.render(i.duration(), !0, !0),
                    we = he(M.a) - Ze + Z + Rt,
                    dr = Math.abs(Z - we) > 1,
                    N && dr && mt.splice(mt.length - 2, 2),
                    i.render(0, !0, !0),
                    aa || i.invalidate(!0),
                    i.parent || i.totalTime(i.totalTime()),
                    Xs(0)) : we = Z,
                    mr && (mr.value ? mr.style["overflow" + M.a.toUpperCase()] = mr.value : mr.style.removeProperty("overflow-" + M.a));
                else if (c && Pt() && !S)
                    for (de = c.parentNode; de && de !== Ct; )
                        de._pinOffset && (at -= de._pinOffset,
                        kt -= de._pinOffset),
                        de = de.parentNode;
                Qi && Qi.forEach(function(Gi) {
                    return Gi.revert(!1, !0)
                }),
                b.start = at,
                b.end = kt,
                ce = Be = Ce ? Qt : Pt(),
                !S && !Ce && (ce < Qt && Pt(Qt),
                b.scroll.rec = 0),
                b.revert(!1, !0),
                vt = Oe(),
                qt && (nt = -1,
                qt.restart(!0)),
                ge = 0,
                i && E && (i._initted || He) && i.progress() !== He && i.progress(He || 0, !0).render(i.time(), !0, !0),
                (Te || At !== b.progress || S) && (i && !E && i.totalProgress(S && at < -.001 && !At ? L.utils.normalize(at, kt, 0) : At, !0),
                b.progress = Te || (ce - at) / Z === At ? 0 : At),
                d && _ && (ut._pinOffset = Math.round(b.progress * we)),
                G && G.invalidate(),
                isNaN(Zi) || (Zi -= L.getProperty(m, M.p),
                Dn -= L.getProperty(F, M.p),
                Kn(m, M, Zi),
                Kn(ee, M, Zi - (rt || 0)),
                Kn(F, M, Dn),
                Kn(y, M, Dn - (rt || 0))),
                Te && !Ce && b.update(),
                f && !Ce && !U && (U = !0,
                f(b),
                U = !1)
            }
        }
        ,
        b.getVelocity = function() {
            return (Pt() - Be) / (Oe() - os) * 1e3 || 0
        }
        ,
        b.endAnimation = function() {
            rn(b.callbackAnimation),
            i && (G ? G.progress(1) : i.paused() ? E || rn(i, b.direction < 0, 1) : rn(i, i.reversed()))
        }
        ,
        b.labelToScroll = function(R) {
            return i && i.labels && (at || b.refresh() || at) + i.labels[R] / i.duration() * Z || 0
        }
        ,
        b.getTrailing = function(R) {
            var ct = et.indexOf(b)
              , j = b.direction > 0 ? et.slice(0, ct).reverse() : et.slice(ct + 1);
            return (Xe(R) ? j.filter(function(rt) {
                return rt.vars.preventOverlaps === R
            }) : j).filter(function(rt) {
                return b.direction > 0 ? rt.end <= at : rt.start >= kt
            })
        }
        ,
        b.update = function(R, ct, j) {
            if (!(S && !j && !R)) {
                var rt = Ce === !0 ? Qt : b.scroll(), Zt = R ? 0 : (rt - at) / Z, dt = Zt < 0 ? 0 : Zt > 1 ? 1 : Zt || 0, Vt = b.progress, Te, se, Rt, xt, ur, Lt, Ve, _r;
                if (ct && (Be = ce,
                ce = S ? Pt() : rt,
                T && (wt = bt,
                bt = i && !E ? i.totalProgress() : dt)),
                g && !dt && d && !ge && !$n && or && at < rt + (rt - Be) / (Oe() - os) * g && (dt = 1e-4),
                dt !== Vt && b.enabled) {
                    if (Te = b.isActive = !!dt && dt < 1,
                    se = !!Vt && Vt < 1,
                    Lt = Te !== se,
                    ur = Lt || !!dt != !!Vt,
                    b.direction = dt > Vt ? 1 : -1,
                    b.progress = dt,
                    ur && !ge && (Rt = dt && !Vt ? 0 : dt === 1 ? 1 : Vt === 1 ? 2 : 3,
                    E && (xt = !Lt && z[Rt + 1] !== "none" && z[Rt + 1] || z[Rt],
                    _r = i && (xt === "complete" || xt === "reset" || xt in i))),
                    P && (Lt || _r) && (_r || h || !i) && (Ae(P) ? P(b) : b.getTrailing(P).forEach(function(ri) {
                        return ri.endAnimation()
                    })),
                    E || (G && !ge && !$n ? (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start),
                    G.resetTo ? G.resetTo("totalProgress", dt, i._tTime / i._tDur) : (G.vars.totalProgress = dt,
                    G.invalidate().restart())) : i && i.totalProgress(dt, !!(ge && (vt || R)))),
                    d) {
                        if (R && _ && (ut.style[_ + M.os2] = re),
                        !N)
                            be(un(Ze + we * dt));
                        else if (ur) {
                            if (Ve = !R && dt > Vt && kt + 1 > rt && rt + 1 >= Dr(A, M),
                            k)
                                if (!R && (Te || Ve)) {
                                    var $e = Rr(d, !0)
                                      , oe = rt - at;
                                    Ia(d, Ct, $e.top + (M === Kt ? oe : 0) + ae, $e.left + (M === Kt ? 0 : oe) + ae)
                                } else
                                    Ia(d, ut);
                            Vi(Te || Ve ? mt : yt),
                            dr && dt < 1 && Te || be(Ze + (dt === 1 && !Ve ? we : 0))
                        }
                    }
                    T && !Yt.tween && !ge && !$n && qt.restart(!0),
                    s && (Lt || x && dt && (dt < 1 || !Ws)) && ks(s.targets).forEach(function(ri) {
                        return ri.classList[Te || x ? "add" : "remove"](s.className)
                    }),
                    a && !E && !R && a(b),
                    ur && !ge ? (E && (_r && (xt === "complete" ? i.pause().totalProgress(1) : xt === "reset" ? i.restart(!0).pause() : xt === "restart" ? i.restart(!0) : i[xt]()),
                    a && a(b)),
                    (Lt || !Ws) && (u && Lt && js(b, u),
                    I[Rt] && js(b, I[Rt]),
                    x && (dt === 1 ? b.kill(!1, 1) : I[Rt] = 0),
                    Lt || (Rt = dt === 1 ? 1 : 3,
                    I[Rt] && js(b, I[Rt]))),
                    O && !Te && Math.abs(b.getVelocity()) > (as(O) ? O : 2500) && (rn(b.callbackAnimation),
                    G ? G.progress(1) : rn(i, xt === "reverse" ? 1 : !dt, 1))) : E && a && !ge && a(b)
                }
                if (Ie) {
                    var de = S ? rt / S.duration() * (S._caScrollDist || 0) : rt;
                    lr(de + (m._isFlipped ? 1 : 0)),
                    Ie(de)
                }
                xe && xe(-rt / S.duration() * (S._caScrollDist || 0))
            }
        }
        ,
        b.enable = function(R, ct) {
            b.enabled || (b.enabled = !0,
            Jt(A, "resize", fn),
            W || Jt(A, "scroll", Ci),
            q && Jt(o, "refreshInit", q),
            R !== !1 && (b.progress = At = 0,
            ce = Be = nt = Pt()),
            ct !== !1 && b.refresh())
        }
        ,
        b.getTween = function(R) {
            return R && Yt ? Yt.tween : G
        }
        ,
        b.setPositions = function(R, ct, j, rt) {
            if (S) {
                var Zt = S.scrollTrigger
                  , dt = S.duration()
                  , Vt = Zt.end - Zt.start;
                R = Zt.start + Vt * R / dt,
                ct = Zt.start + Vt * ct / dt
            }
            b.refresh(!1, !1, {
                start: Ea(R, j && !!b._startClamp),
                end: Ea(ct, j && !!b._endClamp)
            }, rt),
            b.update()
        }
        ,
        b.adjustPinSpacing = function(R) {
            if (ie && R) {
                var ct = ie.indexOf(M.d) + 1;
                ie[ct] = parseFloat(ie[ct]) + R + ae,
                ie[1] = parseFloat(ie[1]) + R + ae,
                Vi(ie)
            }
        }
        ,
        b.disable = function(R, ct) {
            if (b.enabled && (R !== !1 && b.revert(!0, !0),
            b.enabled = b.isActive = !1,
            ct || G && G.pause(),
            Qt = 0,
            Nt && (Nt.uncache = 1),
            q && Gt(o, "refreshInit", q),
            qt && (qt.pause(),
            Yt.tween && Yt.tween.kill() && (Yt.tween = 0)),
            !W)) {
                for (var j = et.length; j--; )
                    if (et[j].scroller === A && et[j] !== b)
                        return;
                Gt(A, "resize", fn),
                W || Gt(A, "scroll", Ci)
            }
        }
        ,
        b.kill = function(R, ct) {
            b.disable(R, ct),
            G && !ct && G.kill(),
            l && delete So[l];
            var j = et.indexOf(b);
            j >= 0 && et.splice(j, 1),
            j === Pe && fs > 0 && Pe--,
            j = 0,
            et.forEach(function(rt) {
                return rt.scroller === b.scroller && (j = 1)
            }),
            j || Ce || (b.scroll.rec = 0),
            i && (i.scrollTrigger = null,
            R && i.revert({
                kill: !1
            }),
            ct || i.kill()),
            ee && [ee, y, m, F].forEach(function(rt) {
                return rt.parentNode && rt.parentNode.removeChild(rt)
            }),
            xn === b && (xn = 0),
            d && (Nt && (Nt.uncache = 1),
            j = 0,
            et.forEach(function(rt) {
                return rt.pin === d && j++
            }),
            j || (Nt.spacer = 0)),
            e.onKill && e.onKill(b)
        }
        ,
        et.push(b),
        b.enable(!1, !1),
        Ge && Ge(b),
        i && i.add && !Z) {
            var Bt = b.update;
            b.update = function() {
                b.update = Bt,
                at || kt || b.refresh()
            }
            ,
            L.delayedCall(.01, b.update),
            Z = .01,
            at = kt = 0
        } else
            b.refresh();
        d && Dc()
    }
    ,
    o.register = function(e) {
        return Oi || (L = e || ku(),
        Su() && window.document && o.enable(),
        Oi = ln),
        Oi
    }
    ,
    o.defaults = function(e) {
        if (e)
            for (var i in e)
                Wn[i] = e[i];
        return Wn
    }
    ,
    o.disable = function(e, i) {
        ln = 0,
        et.forEach(function(a) {
            return a[i ? "kill" : "disable"](e)
        }),
        Gt(st, "wheel", Ci),
        Gt(Dt, "scroll", Ci),
        clearInterval(Vn),
        Gt(Dt, "touchcancel", br),
        Gt(Ct, "touchstart", br),
        qn(Gt, Dt, "pointerdown,touchstart,mousedown", Ra),
        qn(Gt, Dt, "pointerup,touchend,mouseup", La),
        Ss.kill(),
        Yn(Gt);
        for (var n = 0; n < it.length; n += 3)
            Xn(Gt, it[n], it[n + 1]),
            Xn(Gt, it[n], it[n + 2])
    }
    ,
    o.enable = function() {
        if (st = window,
        Dt = document,
        cr = Dt.documentElement,
        Ct = Dt.body,
        L && (ks = L.utils.toArray,
        Li = L.utils.clamp,
        xo = L.core.context || br,
        Xs = L.core.suppressOverwrites || br,
        Zo = st.history.scrollRestoration || "auto",
        ko = st.pageYOffset,
        L.core.globals("ScrollTrigger", o),
        Ct)) {
            ln = 1,
            Hi = document.createElement("div"),
            Hi.style.height = "100vh",
            Hi.style.position = "absolute",
            Du(),
            Cc(),
            Ut.register(L),
            o.isTouch = Ut.isTouch,
            Vr = Ut.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),
            Jt(st, "wheel", Ci),
            vu = [st, Dt, cr, Ct],
            L.matchMedia ? (o.matchMedia = function(l) {
                var u = L.matchMedia(), f;
                for (f in l)
                    u.add(f, l[f]);
                return u
            }
            ,
            L.addEventListener("matchMediaInit", function() {
                return ia()
            }),
            L.addEventListener("matchMediaRevert", function() {
                return Ru()
            }),
            L.addEventListener("matchMedia", function() {
                ci(0, 1),
                Ti("matchMedia")
            }),
            L.matchMedia("(orientation: portrait)", function() {
                return Ks(),
                Ks
            })) : console.warn("Requires GSAP 3.11.0 or later"),
            Ks(),
            Jt(Dt, "scroll", Ci);
            var e = Ct.style, i = e.borderTopStyle, n = L.core.Animation.prototype, a, s;
            for (n.revert || Object.defineProperty(n, "revert", {
                value: function() {
                    return this.time(-.01, !0)
                }
            }),
            e.borderTopStyle = "solid",
            a = Rr(Ct),
            Kt.m = Math.round(a.top + Kt.sc()) || 0,
            Me.m = Math.round(a.left + Me.sc()) || 0,
            i ? e.borderTopStyle = i : e.removeProperty("border-top-style"),
            Vn = setInterval(za, 250),
            L.delayedCall(.5, function() {
                return $n = 0
            }),
            Jt(Dt, "touchcancel", br),
            Jt(Ct, "touchstart", br),
            qn(Jt, Dt, "pointerdown,touchstart,mousedown", Ra),
            qn(Jt, Dt, "pointerup,touchend,mouseup", La),
            wo = L.utils.checkPrefix("transform"),
            cs.push(wo),
            Oi = Oe(),
            Ss = L.delayedCall(.2, ci).pause(),
            Mi = [Dt, "visibilitychange", function() {
                var l = st.innerWidth
                  , u = st.innerHeight;
                Dt.hidden ? (Oa = l,
                Ma = u) : (Oa !== l || Ma !== u) && fn()
            }
            , Dt, "DOMContentLoaded", ci, st, "load", ci, st, "resize", fn],
            Yn(Jt),
            et.forEach(function(l) {
                return l.enable(0, 1)
            }),
            s = 0; s < it.length; s += 3)
                Xn(Gt, it[s], it[s + 1]),
                Xn(Gt, it[s], it[s + 2])
        }
    }
    ,
    o.config = function(e) {
        "limitCallbacks"in e && (Ws = !!e.limitCallbacks);
        var i = e.syncInterval;
        i && clearInterval(Vn) || (Vn = i) && setInterval(za, i),
        "ignoreMobileResize"in e && (wu = o.isTouch === 1 && e.ignoreMobileResize),
        "autoRefreshEvents"in e && (Yn(Gt) || Yn(Jt, e.autoRefreshEvents || "none"),
        bu = (e.autoRefreshEvents + "").indexOf("resize") === -1)
    }
    ,
    o.scrollerProxy = function(e, i) {
        var n = Ee(e)
          , a = it.indexOf(n)
          , s = wi(n);
        ~a && it.splice(a, s ? 6 : 2),
        i && (s ? Pr.unshift(st, i, Ct, i, cr, i) : Pr.unshift(n, i))
    }
    ,
    o.clearMatchMedia = function(e) {
        et.forEach(function(i) {
            return i._ctx && i._ctx.query === e && i._ctx.kill(!0, !0)
        })
    }
    ,
    o.isInViewport = function(e, i, n) {
        var a = (Xe(e) ? Ee(e) : e).getBoundingClientRect()
          , s = a[n ? gi : mi] * i || 0;
        return n ? a.right - s > 0 && a.left + s < st.innerWidth : a.bottom - s > 0 && a.top + s < st.innerHeight
    }
    ,
    o.positionInViewport = function(e, i, n) {
        Xe(e) && (e = Ee(e));
        var a = e.getBoundingClientRect()
          , s = a[n ? gi : mi]
          , l = i == null ? s / 2 : i in Ps ? Ps[i] * s : ~i.indexOf("%") ? parseFloat(i) * s / 100 : parseFloat(i) || 0;
        return n ? (a.left + l) / st.innerWidth : (a.top + l) / st.innerHeight
    }
    ,
    o.killAll = function(e) {
        if (et.slice(0).forEach(function(n) {
            return n.vars.id !== "ScrollSmoother" && n.kill()
        }),
        e !== !0) {
            var i = xi.killAll || [];
            xi = {},
            i.forEach(function(n) {
                return n()
            })
        }
    }
    ,
    o
}();
X.version = "3.12.2";
X.saveStyles = function(o) {
    return o ? ks(o).forEach(function(t) {
        if (t && t.style) {
            var r = qe.indexOf(t);
            r >= 0 && qe.splice(r, 5),
            qe.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), L.core.getCache(t), xo())
        }
    }) : qe
}
;
X.revert = function(o, t) {
    return ia(!o, t)
}
;
X.create = function(o, t) {
    return new X(o,t)
}
;
X.refresh = function(o) {
    return o ? fn() : (Oi || X.register()) && ci(!0)
}
;
X.update = function(o) {
    return ++it.cache && Fr(o === !0 ? 2 : 0)
}
;
X.clearScrollMemory = Lu;
X.maxScroll = function(o, t) {
    return Dr(o, t ? Me : Kt)
}
;
X.getScrollFunc = function(o, t) {
    return Jr(Ee(o), t ? Me : Kt)
}
;
X.getById = function(o) {
    return So[o]
}
;
X.getAll = function() {
    return et.filter(function(o) {
        return o.vars.id !== "ScrollSmoother"
    })
}
;
X.isScrolling = function() {
    return !!or
}
;
X.snapDirectional = ra;
X.addEventListener = function(o, t) {
    var r = xi[o] || (xi[o] = []);
    ~r.indexOf(t) || r.push(t)
}
;
X.removeEventListener = function(o, t) {
    var r = xi[o]
      , e = r && r.indexOf(t);
    e >= 0 && r.splice(e, 1)
}
;
X.batch = function(o, t) {
    var r = [], e = {}, i = t.interval || .016, n = t.batchMax || 1e9, a = function(u, f) {
        var h = []
          , c = []
          , d = L.delayedCall(i, function() {
            f(h, c),
            h = [],
            c = []
        }).pause();
        return function(_) {
            h.length || d.restart(!0),
            h.push(_.trigger),
            c.push(_),
            n <= h.length && d.progress(1)
        }
    }, s;
    for (s in t)
        e[s] = s.substr(0, 2) === "on" && Ae(t[s]) && s !== "onRefreshInit" ? a(s, t[s]) : t[s];
    return Ae(n) && (n = n(),
    Jt(X, "refresh", function() {
        return n = t.batchMax()
    })),
    ks(o).forEach(function(l) {
        var u = {};
        for (s in e)
            u[s] = e[s];
        u.trigger = l,
        r.push(X.create(u))
    }),
    r
}
;
var Va = function(t, r, e, i) {
    return r > i ? t(i) : r < 0 && t(0),
    e > i ? (i - r) / (e - r) : e < 0 ? r / (r - e) : 1
}, Zs = function o(t, r) {
    r === !0 ? t.style.removeProperty("touch-action") : t.style.touchAction = r === !0 ? "auto" : r ? "pan-" + r + (Ut.isTouch ? " pinch-zoom" : "") : "none",
    t === cr && o(Ct, r)
}, Qn = {
    auto: 1,
    scroll: 1
}, Ic = function(t) {
    var r = t.event, e = t.target, i = t.axis, n = (r.changedTouches ? r.changedTouches[0] : r).target, a = n._gsap || L.core.getCache(n), s = Oe(), l;
    if (!a._isScrollT || s - a._isScrollT > 2e3) {
        for (; n && n !== Ct && (n.scrollHeight <= n.clientHeight && n.scrollWidth <= n.clientWidth || !(Qn[(l = rr(n)).overflowY] || Qn[l.overflowX])); )
            n = n.parentNode;
        a._isScroll = n && n !== e && !wi(n) && (Qn[(l = rr(n)).overflowY] || Qn[l.overflowX]),
        a._isScrollT = s
    }
    (a._isScroll || i === "x") && (r.stopPropagation(),
    r._gsapAllow = !0)
}, zu = function(t, r, e, i) {
    return Ut.create({
        target: t,
        capture: !0,
        debounce: !1,
        lockAxis: !0,
        type: r,
        onWheel: i = i && Ic,
        onPress: i,
        onDrag: i,
        onScroll: i,
        onEnable: function() {
            return e && Jt(Dt, Ut.eventTypes[0], Ya, !1, !0)
        },
        onDisable: function() {
            return Gt(Dt, Ut.eventTypes[0], Ya, !0)
        }
    })
}, Hc = /(input|label|select|textarea)/i, $a, Ya = function(t) {
    var r = Hc.test(t.target.tagName);
    (r || $a) && (t._gsapAllow = !0,
    $a = r)
}, Vc = function(t) {
    ai(t) || (t = {}),
    t.preventDefault = t.isNormalizer = t.allowClicks = !0,
    t.type || (t.type = "wheel,touch"),
    t.debounce = !!t.debounce,
    t.id = t.id || "normalizer";
    var r = t, e = r.normalizeScrollX, i = r.momentum, n = r.allowNestedScroll, a = r.onRelease, s, l, u = Ee(t.target) || cr, f = L.core.globals().ScrollSmoother, h = f && f.get(), c = Vr && (t.content && Ee(t.content) || h && t.content !== !1 && !h.smooth() && h.content()), d = Jr(u, Kt), _ = Jr(u, Me), p = 1, g = (Ut.isTouch && st.visualViewport ? st.visualViewport.scale * st.visualViewport.width : st.outerWidth) / st.innerWidth, w = 0, v = Ae(i) ? function() {
        return i(s)
    }
    : function() {
        return i || 2.8
    }
    , x, T, k = zu(u, t.type, !0, n), C = function() {
        return T = !1
    }, S = br, O = br, P = function() {
        l = Dr(u, Kt),
        O = Li(Vr ? 1 : 0, l),
        e && (S = Li(0, Dr(u, Me))),
        x = vi
    }, M = function() {
        c._gsap.y = un(parseFloat(c._gsap.y) + d.offset) + "px",
        c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(c._gsap.y) + ", 0, 1)",
        d.offset = d.cacheID = 0
    }, E = function() {
        if (T) {
            requestAnimationFrame(C);
            var B = un(s.deltaY / 2)
              , Q = O(d.v - B);
            if (c && Q !== d.v + d.offset) {
                d.offset = Q - d.v;
                var b = un((parseFloat(c && c._gsap.y) || 0) - d.offset);
                c.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + b + ", 0, 1)",
                c._gsap.y = b + "px",
                d.cacheID = it.cache,
                Fr()
            }
            return !0
        }
        d.offset && M(),
        T = !0
    }, A, $, W, N, I = function() {
        P(),
        A.isActive() && A.vars.scrollY > l && (d() > l ? A.progress(1) && d(l) : A.resetTo("scrollY", l))
    };
    return c && L.set(c, {
        y: "+=0"
    }),
    t.ignoreCheck = function(z) {
        return Vr && z.type === "touchmove" && E() || p > 1.05 && z.type !== "touchstart" || s.isGesturing || z.touches && z.touches.length > 1
    }
    ,
    t.onPress = function() {
        T = !1;
        var z = p;
        p = un((st.visualViewport && st.visualViewport.scale || 1) / g),
        A.pause(),
        z !== p && Zs(u, p > 1.01 ? !0 : e ? !1 : "x"),
        $ = _(),
        W = d(),
        P(),
        x = vi
    }
    ,
    t.onRelease = t.onGestureStart = function(z, B) {
        if (d.offset && M(),
        !B)
            N.restart(!0);
        else {
            it.cache++;
            var Q = v(), b, q;
            e && (b = _(),
            q = b + Q * .05 * -z.velocityX / .227,
            Q *= Va(_, b, q, Dr(u, Me)),
            A.vars.scrollX = S(q)),
            b = d(),
            q = b + Q * .05 * -z.velocityY / .227,
            Q *= Va(d, b, q, Dr(u, Kt)),
            A.vars.scrollY = O(q),
            A.invalidate().duration(Q).play(.01),
            (Vr && A.vars.scrollY >= l || b >= l - 1) && L.to({}, {
                onUpdate: I,
                duration: Q
            })
        }
        a && a(z)
    }
    ,
    t.onWheel = function() {
        A._ts && A.pause(),
        Oe() - w > 1e3 && (x = 0,
        w = Oe())
    }
    ,
    t.onChange = function(z, B, Q, b, q) {
        if (vi !== x && P(),
        B && e && _(S(b[2] === B ? $ + (z.startX - z.x) : _() + B - b[1])),
        Q) {
            d.offset && M();
            var _t = q[2] === Q
              , gt = _t ? W + z.startY - z.y : d() + Q - q[1]
              , nt = O(gt);
            _t && gt !== nt && (W += nt - gt),
            d(nt)
        }
        (Q || B) && Fr()
    }
    ,
    t.onEnable = function() {
        Zs(u, e ? !1 : "x"),
        X.addEventListener("refresh", I),
        Jt(st, "resize", I),
        d.smooth && (d.target.style.scrollBehavior = "auto",
        d.smooth = _.smooth = !1),
        k.enable()
    }
    ,
    t.onDisable = function() {
        Zs(u, !0),
        Gt(st, "resize", I),
        X.removeEventListener("refresh", I),
        k.kill()
    }
    ,
    t.lockAxis = t.lockAxis !== !1,
    s = new Ut(t),
    s.iOS = Vr,
    Vr && !d() && d(1),
    Vr && L.ticker.add(br),
    N = s._dc,
    A = L.to(s, {
        ease: "power4",
        paused: !0,
        scrollX: e ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
            scrollY: Fu(d, d(), function() {
                return A.pause()
            })
        },
        onUpdate: Fr,
        onComplete: N.vars.onComplete
    }),
    s
};
X.sort = function(o) {
    return et.sort(o || function(t, r) {
        return (t.vars.refreshPriority || 0) * -1e6 + t.start - (r.start + (r.vars.refreshPriority || 0) * -1e6)
    }
    )
}
;
X.observe = function(o) {
    return new Ut(o)
}
;
X.normalizeScroll = function(o) {
    if (typeof o > "u")
        return Ye;
    if (o === !0 && Ye)
        return Ye.enable();
    if (o === !1)
        return Ye && Ye.kill();
    var t = o instanceof Ut ? o : Vc(o);
    return Ye && Ye.target === t.target && Ye.kill(),
    wi(t.target) && (Ye = t),
    t
}
;
X.core = {
    _getVelocityProp: bo,
    _inputObserver: zu,
    _scrollers: it,
    _proxies: Pr,
    bridge: {
        ss: function() {
            or || Ti("scrollStart"),
            or = Oe()
        },
        ref: function() {
            return ge
        }
    }
};
ku() && L.registerPlugin(X);
let pt, Zn, _e, Di, nn, vr, li, qa, J, wr, Gn, Xa, Wa, Ua, ja, Nu = () => typeof window < "u", Bu = () => pt || Nu() && (pt = window.gsap) && pt.registerPlugin && pt, ht = function() {
    return String.fromCharCode.apply(null, arguments)
}, $c = ht(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), Yc = ht(103, 115, 97, 112, 46, 99, 111, 109), qc = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/, Hr = (function(o) {
    var t = typeof window < "u";
    (t ? window.location.href : "").indexOf(ht(102, 105, 108, 101, 58, 47, 47)) === 0 || o.indexOf(ht(108, 111, 99, 97, 108, 104, 111, 115, 116)) !== -1 || qc.test(o);
    var r = [$c, Yc, ht(99, 111, 100, 101, 112, 101, 110, 46, 105, 111), ht(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103), ht(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118), ht(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112), ht(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101), ht(112, 101, 110, 115, 46, 99, 108, 111, 117, 100), ht(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), ht(99, 100, 112, 110, 46, 105, 111), ht(112, 101, 110, 115, 46, 105, 111), ht(103, 97, 110, 110, 111, 110, 46, 116, 118), ht(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116), ht(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116), ht(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107), ht(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116), ht(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109), ht(112, 108, 110, 107, 114, 46, 99, 111), ht(104, 111, 116, 106, 97, 114, 46, 99, 111, 109), ht(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109), ht(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103), ht(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111), ht(99, 115, 98, 46, 97, 112, 112), ht(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109), ht(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111), ht(99, 111, 100, 105, 101, 114, 46, 105, 111), ht(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109), ht(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109), ht(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109), ht(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109), ht(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111), ht(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116)]
      , e = function() {
        t && (document.readyState === "loading" || document.readyState === "interactive" ? document.addEventListener("readystatechange", e) : document.removeEventListener("readystatechange", e))
    }
      , i = r.length;
    for (setTimeout(e, 50); --i > -1; )
        if (o.indexOf(r[i]) !== -1)
            return !0
}(typeof window < "u" ? window.location.host : ""),
o => J.maxScroll(o || _e)), Xc = o => {
    let t = Di.querySelector(".ScrollSmoother-wrapper");
    return t || (t = Di.createElement("div"),
    t.classList.add("ScrollSmoother-wrapper"),
    o.parentNode.insertBefore(t, o),
    t.appendChild(o)),
    t
}
, ui = class $r {
    constructor(t) {
        Zn || $r.register(pt) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"),
        t = this.vars = t || {},
        wr && wr.kill(),
        wr = this,
        Ua(this);
        let r, e, i, n, a, s, l, u, f, h, c, d, _, p, g, {smoothTouch: w, onUpdate: v, onStop: x, smooth: T, onFocusIn: k, normalizeScroll: C, wholePixels: S} = t, O = this, P = t.effectsPrefix || "", M = J.getScrollFunc(_e), E = J.isTouch === 1 ? w === !0 ? .8 : parseFloat(w) || 0 : T === 0 || T === !1 ? 0 : parseFloat(T) || .8, A = E && +t.speed || 1, $ = 0, W = 0, N = 1, I = Xa(0), z = () => I.update(-$), B = {
            y: 0
        }, Q = () => r.style.overflow = "visible", b = y => {
            y.update();
            let m = y.getTween();
            m && (m.pause(),
            m._time = m._dur,
            m._tTime = m._tDur),
            p = !1,
            y.animation.progress(y.progress, !0)
        }
        , q = (y, m) => {
            (y !== $ && !h || m) && (S && (y = Math.round(y)),
            E && (r.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)",
            r._gsap.y = y + "px"),
            W = y - $,
            $ = y,
            J.isUpdating || $r.isRefreshing || J.update())
        }
        , _t = function(y) {
            return arguments.length ? (y < 0 && (y = 0),
            B.y = -y,
            p = !0,
            h ? $ = -y : q(-y),
            J.isRefreshing ? n.update() : M(y / A),
            this) : -$
        }, gt = typeof ResizeObserver < "u" && t.autoResize !== !1 && new ResizeObserver( () => {
            if (!J.isRefreshing) {
                let y = Hr(e) * A;
                y < -$ && _t(y),
                ja.restart(!0)
            }
        }
        ), nt = y => {
            e.scrollTop = 0,
            y.target.contains && y.target.contains(e) || k && k(this, y) === !1 || (J.isInViewport(y.target) || y.target === g || this.scrollTo(y.target, !1, "center center"),
            g = y.target)
        }
        , vt = (y, m) => {
            if (y < m.start)
                return y;
            let F = isNaN(m.ratio) ? 1 : m.ratio
              , Y = m.end - m.start
              , U = y - m.start
              , Z = m.offset || 0
              , lt = m.pins || []
              , mt = lt.offset || 0
              , yt = m._startClamp && m.start <= 0 || m.pins && m.pins.offset ? 0 : m._endClamp && m.end === Hr() ? 1 : .5;
            return lt.forEach(ut => {
                Y -= ut.distance,
                ut.nativeStart <= y && (U -= ut.distance)
            }
            ),
            mt && (U *= (Y - mt / F) / Y),
            y + (U - Z * yt) / F - U
        }
        , At = (y, m, F) => {
            F || (y.pins.length = y.pins.offset = 0);
            let Y, U, Z, lt, mt, yt, ut, H, he = y.pins, be = y.markers;
            for (ut = 0; ut < m.length; ut++)
                if (H = m[ut],
                y.trigger && H.trigger && y !== H && (H.trigger === y.trigger || H.pinnedContainer === y.trigger || y.trigger.contains(H.trigger)) && (mt = H._startNative || H._startClamp || H.start,
                yt = H._endNative || H._endClamp || H.end,
                Z = vt(mt, y),
                lt = H.pin && yt > 0 ? Z + (yt - mt) : vt(yt, y),
                H.setPositions(Z, lt, !0, (H._startClamp ? Math.max(0, Z) : Z) - mt),
                H.markerStart && be.push(pt.quickSetter([H.markerStart, H.markerEnd], "y", "px")),
                H.pin && H.end > 0 && !F)) {
                    if (Y = H.end - H.start,
                    U = y._startClamp && H.start < 0,
                    U) {
                        if (y.start > 0)
                            return y.setPositions(0, y.end + (y._startNative - y.start), !0),
                            void At(y, m);
                        Y += H.start,
                        he.offset = -H.start
                    }
                    he.push({
                        start: H.start,
                        nativeStart: mt,
                        end: H.end,
                        distance: Y,
                        trig: H
                    }),
                    y.setPositions(y.start, y.end + (U ? -H.start : Y), !0)
                }
        }
        , Pt = (y, m) => {
            a.forEach(F => At(F, y, m))
        }
        , Yt = () => {
            Q(),
            requestAnimationFrame(Q),
            a && (J.getAll().forEach(y => {
                y._startNative = y.start,
                y._endNative = y.end
            }
            ),
            a.forEach(y => {
                let m = y._startClamp || y.start
                  , F = y.autoSpeed ? Math.min(Hr(), y.end) : m + Math.abs((y.end - m) / y.ratio)
                  , Y = F - y.end;
                if (m -= Y / 2,
                F -= Y / 2,
                m > F) {
                    let U = m;
                    m = F,
                    F = U
                }
                y._startClamp && m < 0 ? (F = y.ratio < 0 ? Hr() : y.end / y.ratio,
                Y = F - y.end,
                m = 0) : (y.ratio < 0 || y._endClamp && F >= Hr()) && (F = Hr(),
                m = y.ratio < 0 || y.ratio > 1 ? 0 : F - (F - y.start) / y.ratio,
                Y = (F - m) * y.ratio - (y.end - y.start)),
                y.offset = Y || 1e-4,
                y.pins.length = y.pins.offset = 0,
                y.setPositions(m, F, !0)
            }
            ),
            Pt(J.sort())),
            I.reset()
        }
        , Nt = () => J.addEventListener("refresh", Yt), Ot = () => a && a.forEach(y => y.vars.onRefresh(y)), ce = () => (a && a.forEach(y => y.vars.onRefreshInit(y)),
        Ot), Be = (y, m, F, Y) => () => {
            let U = typeof m == "function" ? m(F, Y) : m;
            U || U === 0 || (U = Y.getAttribute("data-" + P + y) || (y === "speed" ? 1 : 0)),
            Y.setAttribute("data-" + P + y, U);
            let Z = (U + "").substr(0, 6) === "clamp(";
            return {
                clamp: Z,
                value: Z ? U.substr(6, U.length - 7) : U
            }
        }
        , at = (y, m, F, Y, U) => {
            U = (typeof U == "function" ? U(Y, y) : U) || 0;
            let Z, lt, mt, yt, ut, H, he = Be("speed", m, Y, y), be = Be("lag", F, Y, y), Ze = pt.getProperty(y, "y"), we = y._gsap, re = [], ie = () => {
                m = he(),
                F = parseFloat(be().value),
                Z = parseFloat(m.value) || 1,
                mt = m.value === "auto",
                ut = mt || lt && lt._startClamp && lt.start <= 0 || re.offset ? 0 : lt && lt._endClamp && lt.end === Hr() ? 1 : .5,
                yt && yt.kill(),
                yt = F && pt.to(y, {
                    ease: Gn,
                    overwrite: !1,
                    y: "+=0",
                    duration: F
                }),
                lt && (lt.ratio = Z,
                lt.autoSpeed = mt)
            }
            , lr = () => {
                we.y = Ze + "px",
                we.renderTransform(1),
                ie()
            }
            , dr = [], Ie = 0, pr = bt => {
                if (mt) {
                    lr();
                    let wt = ( (G, ne) => {
                        let Et, qt, Qt = G.parentNode || nn, He = G.getBoundingClientRect(), xe = Qt.getBoundingClientRect(), Ge = xe.top - He.top, K = xe.bottom - He.bottom, V = (Math.abs(Ge) > Math.abs(K) ? Ge : K) / (1 - ne), ft = -V * ne;
                        return V > 0 && (Et = xe.height / (_e.innerHeight + xe.height),
                        qt = Et === .5 ? 2 * xe.height : 2 * Math.min(xe.height, Math.abs(-V * Et / (2 * Et - 1))) * (ne || 1),
                        ft += ne ? -qt * ne : -qt / 2,
                        V += qt),
                        {
                            change: V,
                            offset: ft
                        }
                    }
                    )(y, qa(0, 1, -bt.start / (bt.end - bt.start)));
                    Ie = wt.change,
                    H = wt.offset
                } else
                    H = re.offset || 0,
                    Ie = (bt.end - bt.start - H) * (1 - Z);
                re.forEach(wt => Ie -= wt.distance * (1 - Z)),
                bt.offset = Ie || .001,
                bt.vars.onUpdate(bt),
                yt && yt.progress(1)
            }
            ;
            return ie(),
            (Z !== 1 || mt || yt) && (lt = J.create({
                trigger: mt ? y.parentNode : y,
                start: () => m.clamp ? "clamp(top bottom+=" + U + ")" : "top bottom+=" + U,
                end: () => m.value < 0 ? "max" : m.clamp ? "clamp(bottom top-=" + U + ")" : "bottom top-=" + U,
                scroller: e,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: lr,
                onRefresh: pr,
                onKill: bt => {
                    let wt = a.indexOf(bt);
                    wt >= 0 && a.splice(wt, 1),
                    lr()
                }
                ,
                onUpdate: bt => {
                    let wt, G, ne, Et = Ze + Ie * (bt.progress - ut), qt = re.length, Qt = 0;
                    if (bt.offset) {
                        if (qt) {
                            for (G = -$,
                            ne = bt.end; qt--; ) {
                                if (wt = re[qt],
                                wt.trig.isActive || G >= wt.start && G <= wt.end)
                                    return void (yt && (wt.trig.progress += wt.trig.direction < 0 ? .001 : -.001,
                                    wt.trig.update(0, 0, 1),
                                    yt.resetTo("y", parseFloat(we.y), -W, !0),
                                    N && yt.progress(1)));
                                G > wt.end && (Qt += wt.distance),
                                ne -= wt.distance
                            }
                            Et = Ze + Qt + Ie * ((pt.utils.clamp(bt.start, bt.end, G) - bt.start - Qt) / (ne - bt.start) - ut)
                        }
                        dr.length && !mt && dr.forEach(xe => xe(Et - Qt)),
                        He = Et + H,
                        Et = Math.round(1e5 * He) / 1e5 || 0,
                        yt ? (yt.resetTo("y", Et, -W, !0),
                        N && yt.progress(1)) : (we.y = Et + "px",
                        we.renderTransform(1))
                    }
                    var He
                }
            }),
            pr(lt),
            pt.core.getCache(lt.trigger).stRevert = ce,
            lt.startY = Ze,
            lt.pins = re,
            lt.markers = dr,
            lt.ratio = Z,
            lt.autoSpeed = mt,
            y.style.willChange = "transform"),
            lt
        }
        ;
        function kt() {
            return i = r.clientHeight,
            r.style.overflow = "visible",
            vr.style.height = _e.innerHeight + (i - _e.innerHeight) / A + "px",
            i - _e.innerHeight
        }
        Nt(),
        J.addEventListener("killAll", Nt),
        pt.delayedCall(.5, () => N = 0),
        this.scrollTop = _t,
        this.scrollTo = (y, m, F) => {
            let Y = pt.utils.clamp(0, Hr(), isNaN(y) ? this.offset(y, F) : +y);
            m ? h ? pt.to(this, {
                duration: E,
                scrollTop: Y,
                overwrite: "auto",
                ease: Gn
            }) : M(Y) : _t(Y)
        }
        ,
        this.offset = (y, m) => {
            let F, Y = (y = li(y)[0]).style.cssText, U = J.create({
                trigger: y,
                start: m || "top top"
            });
            return a && (N ? J.refresh() : Pt([U], !0)),
            F = U.start / A,
            U.kill(!1),
            y.style.cssText = Y,
            pt.core.getCache(y).uncache = 1,
            F
        }
        ,
        this.content = function(y) {
            if (arguments.length) {
                let m = li(y || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || vr.children[0];
                return m !== r && (r = m,
                f = r.getAttribute("style") || "",
                gt && gt.observe(r),
                pt.set(r, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0"
                }),
                E || pt.set(r, {
                    clearProps: "transform"
                })),
                this
            }
            return r
        }
        ,
        this.wrapper = function(y) {
            return arguments.length ? (e = li(y || "#smooth-wrapper")[0] || Xc(r),
            u = e.getAttribute("style") || "",
            kt(),
            pt.set(e, E ? {
                overflow: "hidden",
                position: "fixed",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0
            } : {
                overflow: "visible",
                position: "relative",
                width: "100%",
                height: "auto",
                top: "auto",
                bottom: "auto",
                left: "auto",
                right: "auto"
            }),
            this) : e
        }
        ,
        this.effects = (y, m) => {
            if (a || (a = []),
            !y)
                return a.slice(0);
            (y = li(y)).forEach(yt => {
                let ut = a.length;
                for (; ut--; )
                    a[ut].trigger === yt && a[ut].kill()
            }
            ),
            m = m || {};
            let F, Y, {speed: U, lag: Z, effectsPadding: lt} = m, mt = [];
            for (F = 0; F < y.length; F++)
                Y = at(y[F], U, Z, F, lt),
                Y && mt.push(Y);
            return a.push(...mt),
            mt
        }
        ,
        this.sections = (y, m) => {
            if (s || (s = []),
            !y)
                return s.slice(0);
            let F = li(y).map(Y => J.create({
                trigger: Y,
                start: "top 120%",
                end: "bottom -20%",
                onToggle: U => {
                    Y.style.opacity = U.isActive ? "1" : "0",
                    Y.style.pointerEvents = U.isActive ? "all" : "none"
                }
            }));
            return m && m.add ? s.push(...F) : s = F.slice(0),
            F
        }
        ,
        this.content(t.content),
        this.wrapper(t.wrapper),
        this.render = y => q(y || y === 0 ? y : $),
        this.getVelocity = () => I.getVelocity(-$),
        J.scrollerProxy(e, {
            scrollTop: _t,
            scrollHeight: () => kt() && vr.scrollHeight,
            fixedMarkers: t.fixedMarkers !== !1 && !!E,
            content: r,
            getBoundingClientRect: () => ({
                top: 0,
                left: 0,
                width: _e.innerWidth,
                height: _e.innerHeight
            })
        }),
        J.defaults({
            scroller: e
        });
        let ee = J.getAll().filter(y => y.scroller === _e || y.scroller === e);
        ee.forEach(y => y.revert(!0, !0)),
        n = J.create({
            animation: pt.fromTo(B, {
                y: 0
            }, {
                y: () => -kt(),
                immediateRender: !1,
                ease: "none",
                data: "ScrollSmoother",
                duration: 100,
                onUpdate: function() {
                    if (this._dur) {
                        let y = p;
                        y && (b(n),
                        B.y = $),
                        q(B.y, y),
                        z(),
                        v && !h && v(O)
                    }
                }
            }),
            onRefreshInit: y => {
                if ($r.isRefreshing)
                    return;
                if ($r.isRefreshing = !0,
                a) {
                    let F = J.getAll().filter(Y => !!Y.pin);
                    a.forEach(Y => {
                        Y.vars.pinnedContainer || F.forEach(U => {
                            if (U.pin.contains(Y.trigger)) {
                                let Z = Y.vars;
                                Z.pinnedContainer = U.pin,
                                Y.vars = null,
                                Y.init(Z, Y.animation)
                            }
                        }
                        )
                    }
                    )
                }
                let m = y.getTween();
                _ = m && m._end > m._dp._time,
                d = $,
                B.y = 0,
                E && (J.isTouch === 1 && (e.style.position = "absolute"),
                e.scrollTop = 0,
                J.isTouch === 1 && (e.style.position = "fixed"))
            }
            ,
            onRefresh: y => {
                y.animation.invalidate(),
                y.setPositions(y.start, kt() / A),
                _ || b(y),
                B.y = -M() * A,
                q(B.y),
                N || y.animation.progress(pt.utils.clamp(0, 1, d / A / -y.end)),
                _ && (y.progress -= .001,
                y.update()),
                $r.isRefreshing = !1
            }
            ,
            id: "ScrollSmoother",
            scroller: _e,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => kt() / A,
            onScrubComplete: () => {
                I.reset(),
                x && x(this)
            }
            ,
            scrub: E || !0
        }),
        this.smooth = function(y) {
            return arguments.length && (E = y || 0,
            A = E && +t.speed || 1,
            n.scrubDuration(y)),
            n.getTween() ? n.getTween().duration() : 0
        }
        ,
        n.getTween() && (n.getTween().vars.ease = t.ease || Gn),
        this.scrollTrigger = n,
        t.effects && this.effects(t.effects === !0 ? "[data-" + P + "speed], [data-" + P + "lag]" : t.effects, {
            effectsPadding: t.effectsPadding
        }),
        t.sections && this.sections(t.sections === !0 ? "[data-section]" : t.sections),
        ee.forEach(y => {
            y.vars.scroller = e,
            y.revert(!1, !0),
            y.init(y.vars, y.animation)
        }
        ),
        this.paused = function(y, m) {
            return arguments.length ? (!!h !== y && (y ? (n.getTween() && n.getTween().pause(),
            M(-$ / A),
            I.reset(),
            c = J.normalizeScroll(),
            c && c.disable(),
            h = J.observe({
                preventDefault: !0,
                type: "wheel,touch,scroll",
                debounce: !1,
                allowClicks: !0,
                onChangeY: () => _t(-$)
            }),
            h.nested = Wa(nn, "wheel,touch,scroll", !0, m !== !1)) : (h.nested.kill(),
            h.kill(),
            h = 0,
            c && c.enable(),
            n.progress = (-$ / A - n.start) / (n.end - n.start),
            b(n))),
            this) : !!h
        }
        ,
        this.kill = this.revert = () => {
            this.paused(!1),
            b(n),
            n.kill();
            let y = (a || []).concat(s || [])
              , m = y.length;
            for (; m--; )
                y[m].kill();
            J.scrollerProxy(e),
            J.removeEventListener("killAll", Nt),
            J.removeEventListener("refresh", Yt),
            e.style.cssText = u,
            r.style.cssText = f;
            let F = J.defaults({});
            F && F.scroller === e && J.defaults({
                scroller: _e
            }),
            this.normalizer && J.normalizeScroll(!1),
            clearInterval(l),
            wr = null,
            gt && gt.disconnect(),
            vr.style.removeProperty("height"),
            _e.removeEventListener("focusin", nt)
        }
        ,
        this.refresh = (y, m) => n.refresh(y, m),
        C && (this.normalizer = J.normalizeScroll(C === !0 ? {
            debounce: !0,
            content: !E && r
        } : C)),
        J.config(t),
        "overscrollBehavior"in _e.getComputedStyle(vr) && pt.set([vr, nn], {
            overscrollBehavior: "none"
        }),
        "scrollBehavior"in _e.getComputedStyle(vr) && pt.set([vr, nn], {
            scrollBehavior: "auto"
        }),
        _e.addEventListener("focusin", nt),
        l = setInterval(z, 250),
        Di.readyState === "loading" || requestAnimationFrame( () => J.refresh())
    }
    get progress() {
        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
    }
    static register(t) {
        return Zn || (pt = t || Bu(),
        Nu() && window.document && (_e = window,
        Di = document,
        nn = Di.documentElement,
        vr = Di.body),
        pt && (li = pt.utils.toArray,
        qa = pt.utils.clamp,
        Gn = pt.parseEase("expo"),
        Ua = pt.core.context || function() {}
        ,
        J = pt.core.globals().ScrollTrigger,
        pt.core.globals("ScrollSmoother", $r),
        vr && J && (ja = pt.delayedCall(.2, () => J.isRefreshing || wr && wr.refresh()).pause(),
        Xa = J.core._getVelocityProp,
        Wa = J.core._inputObserver,
        $r.refresh = J.refresh,
        Zn = 1))),
        Zn
    }
}
;
ui.version = "3.12.2",
ui.create = o => wr && o && wr.content() === li(o.content)[0] ? wr : new ui(o),
ui.get = () => wr,
Bu() && pt.registerPlugin(ui);
let Fi, Co, Iu, sn, Hu, yi, Wc = /(?:\r|\n|\t\t)/g, Uc = /(?:\s\s+)/g, Vu = o => {
    Fi = document,
    Co = window,
    sn = sn || o || Co.gsap || console.warn("Please gsap.registerPlugin(SplitText)"),
    sn && (yi = sn.utils.toArray,
    Hu = sn.core.context || function() {}
    ,
    Iu = 1)
}
, $u = function() {
    return String.fromCharCode.apply(null, arguments)
}, jc = $u(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109), Kc = $u(103, 115, 97, 112, 46, 99, 111, 109), Qc = function(o) {
    var t = typeof window < "u"
      , r = !0
      , e = [jc, Kc]
      , i = function() {
        t && (document.readyState === "loading" || document.readyState === "interactive") && document.addEventListener("readystatechange", i)
    };
    for (yi = e.length,
    setTimeout(i, 50); --yi > -1; )
        if (o.indexOf(e[yi]) !== -1)
            return !0;
    return r
}(typeof window < "u" ? window.location.host : ""), Yu = o => Co.getComputedStyle(o), na = o => o.position === "absolute" || o.absolute === !0, Zc = (o, t) => {
    let r, e = t.length;
    for (; --e > -1; )
        if (r = t[e],
        o.substr(0, r.length) === r)
            return r.length
}
, Ka = (o="", t) => {
    let r = ~o.indexOf("++")
      , e = 1;
    return r && (o = o.split("++").join("")),
    () => "<" + t + " style='position:relative;display:inline-block;'" + (o ? " class='" + o + (r ? e++ : "") + "'>" : ">")
}
, sa = (o, t, r) => {
    let e = o.nodeType;
    if (e === 1 || e === 9 || e === 11)
        for (o = o.firstChild; o; o = o.nextSibling)
            sa(o, t, r);
    else
        e !== 3 && e !== 4 || (o.nodeValue = o.nodeValue.split(t).join(r))
}
, Gs = (o, t) => {
    let r = t.length;
    for (; --r > -1; )
        o.push(t[r])
}
, Qa = (o, t, r) => {
    let e;
    for (; o && o !== t; ) {
        if (e = o._next || o.nextSibling,
        e)
            return e.textContent.charAt(0) === r;
        o = o.parentNode || o._parent
    }
}
, qu = o => {
    let t, r, e = yi(o.childNodes), i = e.length;
    for (t = 0; t < i; t++)
        r = e[t],
        r._isSplit ? qu(r) : t && r.previousSibling && r.previousSibling.nodeType === 3 ? (r.previousSibling.nodeValue += r.nodeType === 3 ? r.nodeValue : r.firstChild.nodeValue,
        o.removeChild(r)) : r.nodeType !== 3 && (o.insertBefore(r.firstChild, r),
        o.removeChild(r))
}
, yr = (o, t) => parseFloat(t[o]) || 0, Gc = (o, t, r, e, i, n, a) => {
    let s, l, u, f, h, c, d, _, p, g, w, v, x = Yu(o), T = yr("paddingLeft", x), k = -999, C = yr("borderBottomWidth", x) + yr("borderTopWidth", x), S = yr("borderLeftWidth", x) + yr("borderRightWidth", x), O = yr("paddingTop", x) + yr("paddingBottom", x), P = yr("paddingLeft", x) + yr("paddingRight", x), M = yr("fontSize", x) * (t.lineThreshold || .2), E = x.textAlign, A = [], $ = [], W = [], N = t.wordDelimiter || " ", I = t.tag ? t.tag : t.span ? "span" : "div", z = t.type || t.split || "chars,words,lines", B = i && ~z.indexOf("lines") ? [] : null, Q = ~z.indexOf("words"), b = ~z.indexOf("chars"), q = na(t), _t = t.linesClass, gt = ~(_t || "").indexOf("++"), nt = [], vt = x.display === "flex", At = o.style.display;
    for (gt && (_t = _t.split("++").join("")),
    vt && (o.style.display = "block"),
    l = o.getElementsByTagName("*"),
    u = l.length,
    h = [],
    s = 0; s < u; s++)
        h[s] = l[s];
    if (B || q)
        for (s = 0; s < u; s++)
            f = h[s],
            c = f.parentNode === o,
            (c || q || b && !Q) && (v = f.offsetTop,
            B && c && Math.abs(v - k) > M && (f.nodeName !== "BR" || s === 0) && (d = [],
            B.push(d),
            k = v),
            q && (f._x = f.offsetLeft,
            f._y = v,
            f._w = f.offsetWidth,
            f._h = f.offsetHeight),
            B && ((f._isSplit && c || !b && c || Q && c || !Q && f.parentNode.parentNode === o && !f.parentNode._isSplit) && (d.push(f),
            f._x -= T,
            Qa(f, o, N) && (f._wordEnd = !0)),
            f.nodeName === "BR" && (f.nextSibling && f.nextSibling.nodeName === "BR" || s === 0) && B.push([])));
    for (s = 0; s < u; s++)
        if (f = h[s],
        c = f.parentNode === o,
        f.nodeName !== "BR")
            if (q && (p = f.style,
            Q || c || (f._x += f.parentNode._x,
            f._y += f.parentNode._y),
            p.left = f._x + "px",
            p.top = f._y + "px",
            p.position = "absolute",
            p.display = "block",
            p.width = f._w + 1 + "px",
            p.height = f._h + "px"),
            !Q && b)
                if (f._isSplit)
                    for (f._next = l = f.nextSibling,
                    f.parentNode.appendChild(f); l && l.nodeType === 3 && l.textContent === " "; )
                        f._next = l.nextSibling,
                        f.parentNode.appendChild(l),
                        l = l.nextSibling;
                else
                    f.parentNode._isSplit ? (f._parent = f.parentNode,
                    !f.previousSibling && f.firstChild && (f.firstChild._isFirst = !0),
                    f.nextSibling && f.nextSibling.textContent === " " && !f.nextSibling.nextSibling && nt.push(f.nextSibling),
                    f._next = f.nextSibling && f.nextSibling._isFirst ? null : f.nextSibling,
                    f.parentNode.removeChild(f),
                    h.splice(s--, 1),
                    u--) : c || (v = !f.nextSibling && Qa(f.parentNode, o, N),
                    f.parentNode._parent && f.parentNode._parent.appendChild(f),
                    v && f.parentNode.appendChild(Fi.createTextNode(" ")),
                    I === "span" && (f.style.display = "inline"),
                    A.push(f));
            else
                f.parentNode._isSplit && !f._isSplit && f.innerHTML !== "" ? $.push(f) : b && !f._isSplit && (I === "span" && (f.style.display = "inline"),
                A.push(f));
        else
            B || q ? (f.parentNode && f.parentNode.removeChild(f),
            h.splice(s--, 1),
            u--) : Q || o.appendChild(f);
    for (s = nt.length; --s > -1; )
        nt[s].parentNode.removeChild(nt[s]);
    if (B) {
        for (q && (g = Fi.createElement(I),
        o.appendChild(g),
        w = g.offsetWidth + "px",
        v = g.offsetParent === o ? 0 : o.offsetLeft,
        o.removeChild(g)),
        p = o.style.cssText,
        o.style.cssText = "display:none;"; o.firstChild; )
            o.removeChild(o.firstChild);
        for (_ = N === " " && (!q || !Q && !b),
        s = 0; s < B.length; s++) {
            for (d = B[s],
            g = Fi.createElement(I),
            g.style.cssText = "display:block;text-align:" + E + ";position:" + (q ? "absolute;" : "relative;"),
            _t && (g.className = _t + (gt ? s + 1 : "")),
            W.push(g),
            u = d.length,
            l = 0; l < u; l++)
                d[l].nodeName !== "BR" && (f = d[l],
                g.appendChild(f),
                _ && f._wordEnd && g.appendChild(Fi.createTextNode(" ")),
                q && (l === 0 && (g.style.top = f._y + "px",
                g.style.left = T + v + "px"),
                f.style.top = "0px",
                v && (f.style.left = f._x - v + "px")));
            u === 0 ? g.innerHTML = "&nbsp;" : Q || b || (qu(g),
            sa(g, String.fromCharCode(160), " ")),
            q && (g.style.width = w,
            g.style.height = f._h + "px"),
            o.appendChild(g)
        }
        o.style.cssText = p
    }
    q && (a > o.clientHeight && (o.style.height = a - O + "px",
    o.clientHeight < a && (o.style.height = a + C + "px")),
    n > o.clientWidth && (o.style.width = n - P + "px",
    o.clientWidth < n && (o.style.width = n + S + "px"))),
    vt && (At ? o.style.display = At : o.style.removeProperty("display")),
    Gs(r, A),
    Q && Gs(e, $),
    Gs(i, W)
}
, Jc = (o, t, r, e) => {
    let i, n, a, s, l, u, f, h, c = t.tag ? t.tag : t.span ? "span" : "div", d = ~(t.type || t.split || "chars,words,lines").indexOf("chars"), _ = na(t), p = t.wordDelimiter || " ", g = p !== " " ? "" : _ ? "&#173; " : " ", w = "</" + c + ">", v = 1, x = t.specialChars ? typeof t.specialChars == "function" ? t.specialChars : Zc : null, T = Fi.createElement("div"), k = o.parentNode;
    for (k.insertBefore(T, o),
    T.textContent = o.nodeValue,
    k.removeChild(o),
    i = function C(S) {
        let O = S.nodeType
          , P = "";
        if (O === 1 || O === 9 || O === 11) {
            if (typeof S.textContent == "string")
                return S.textContent;
            for (S = S.firstChild; S; S = S.nextSibling)
                P += C(S)
        } else if (O === 3 || O === 4)
            return S.nodeValue;
        return P
    }(o = T),
    f = i.indexOf("<") !== -1,
    t.reduceWhiteSpace !== !1 && (i = i.replace(Uc, " ").replace(Wc, "")),
    f && (i = i.split("<").join("{{LT}}")),
    l = i.length,
    n = (i.charAt(0) === " " ? g : "") + r(),
    a = 0; a < l; a++)
        if (u = i.charAt(a),
        x && (h = x(i.substr(a), t.specialChars)))
            u = i.substr(a, h || 1),
            n += d && u !== " " ? e() + u + "</" + c + ">" : u,
            a += h - 1;
        else if (u === p && i.charAt(a - 1) !== p && a) {
            for (n += v ? w : "",
            v = 0; i.charAt(a + 1) === p; )
                n += g,
                a++;
            a === l - 1 ? n += g : i.charAt(a + 1) !== ")" && (n += g + r(),
            v = 1)
        } else
            u === "{" && i.substr(a, 6) === "{{LT}}" ? (n += d ? e() + "{{LT}}</" + c + ">" : "{{LT}}",
            a += 5) : u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319 || i.charCodeAt(a + 1) >= 65024 && i.charCodeAt(a + 1) <= 65039 ? (s = ((i.substr(a, 12).split(D) || [])[1] || "").length || 2,
            n += d && u !== " " ? e() + i.substr(a, s) + "</" + c + ">" : i.substr(a, s),
            a += s - 1) : n += d && u !== " " ? e() + u + "</" + c + ">" : u;
    o.outerHTML = n + (v ? w : ""),
    f && sa(k, "{{LT}}", "<")
}
, Xu = (o, t, r, e) => {
    let i, n, a = yi(o.childNodes), s = a.length, l = na(t);
    if (o.nodeType !== 3 || s > 1) {
        for (t.absolute = !1,
        i = 0; i < s; i++)
            n = a[i],
            n._next = n._isFirst = n._parent = n._wordEnd = null,
            (n.nodeType !== 3 || /\S+/.test(n.nodeValue)) && (l && n.nodeType !== 3 && Yu(n).display === "inline" && (n.style.display = "inline-block",
            n.style.position = "relative"),
            n._isSplit = !0,
            Xu(n, t, r, e));
        return t.absolute = l,
        void (o._isSplit = !0)
    }
    Jc(o, t, r, e)
}
;
class Sr {
    constructor(t, r) {
        Iu || Vu(),
        this.elements = yi(t),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this._originals = [],
        this.vars = r || {},
        Hu(this),
        Qc && this.split(r)
    }
    split(t) {
        this.isSplit && this.revert(),
        this.vars = t = t || this.vars,
        this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        let r, e, i, n = this.elements.length, a = t.tag ? t.tag : t.span ? "span" : "div", s = Ka(t.wordsClass, a), l = Ka(t.charsClass, a);
        for (; --n > -1; )
            i = this.elements[n],
            this._originals[n] = i.innerHTML,
            r = i.clientHeight,
            e = i.clientWidth,
            Xu(i, t, s, l),
            Gc(i, t, this.chars, this.words, this.lines, e, r);
        return this.chars.reverse(),
        this.words.reverse(),
        this.lines.reverse(),
        this.isSplit = !0,
        this
    }
    revert() {
        let t = this._originals;
        if (!t)
            throw "revert() call wasn't scoped properly.";
        return this.elements.forEach( (r, e) => r.innerHTML = t[e]),
        this.chars = [],
        this.words = [],
        this.lines = [],
        this.isSplit = !1,
        this
    }
    static create(t, r) {
        return new Sr(t,r)
    }
}
Sr.version = "3.12.2",
Sr.register = Vu;
tt.registerPlugin(X, ui, Sr, Er);
console.log(Sr);
function th() {
    var o = ui.create({
        content: "#scrollsmoother-container",
        normalizeScroll: !0,
        ignoreMobileResize: !0,
        smooth: 3,
        effects: !0
    });
    if (window.matchMedia("(max-width:1200px)").matches && o.kill(),
    document.querySelector("body").classList.contains("home")) {
        let s = tt.timeline()
          , l = tt.timeline();
        tt.to(".hero-img-start", {
            visibility: "visible",
            duration: 0
        }).delay(0),
        tt.to(".hero-logo", {
            visibility: "visible",
            duration: 0
        }).delay(0),
        tt.to(".hero-title", {
            visibility: "visible",
            duration: 0
        }).delay(0),
        s.to(".hero-img-start", {
            top: "0%",
            duration: .6,
            ease: Er.create("custom", "M0,0 C0.098,0.81 0.154,1 1,1.011 ")
        }).delay(.2),
        l.from(".hero-logo", {
            y: "115%",
            duration: .7,
            ease: Er.create("custom", "M0,0 C0.098,0.81 0.154,1 1,1.011 ")
        }).delay(.4),
        l.from(".hero-title-wrap", {
            y: 40,
            opacity: 0,
            duration: .9,
            ease: Er.create("custom", "M0,0 C0.098,0.81 0.154,1 1,1.011 ")
        }).delay(0);
        const u = new Sr(".hero-title",{
            types: "line"
        });
        let f = tt.timeline({
            paused: !0
        });
        f.to(".hero-logo", {
            width: "200px",
            duration: 60
        }, 0),
        f.to(".hero-img", {
            borderRadius: 0,
            duration: 60
        }, 0),
        f.to(".hero-img", {
            top: "0",
            duration: 30
        }, 0),
        f.to(u.lines[0], {
            y: 0,
            opacity: 1,
            duration: 35,
            ease: "back.inOut"
        }, 15),
        f.to(u.lines[1], {
            y: 0,
            opacity: 1,
            duration: 35,
            ease: "back.inOut"
        }, 20),
        f.to(".animation-svg", {
            opacity: 1,
            duration: 0
        }, 15),
        X.create({
            animation: f,
            trigger: "#hero",
            start: "top 0",
            end: "=+300",
            scrub: !0,
            pin: !0,
            id: "#hero"
        })
    }
    let t = tt.timeline({
        scrollTrigger: {
            trigger: "#aboutHero",
            start: "top-=150px top",
            end: "bottom top",
            scrub: !0
        }
    });
    if (t.to("#aboutHeroWrap", {
        width: "100%",
        marginTop: "70px"
    }, 0),
    t.to(".aboutVideo video", {
        borderRadius: 0
    }, 0),
    t.to(".abouImage img", {
        borderRadius: 0
    }, 0),
    tt.utils.toArray(".text-animation").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = .45
                  , u = .5;
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration)),
                window.matchMedia("(max-width:992px)").matches && (l = .3,
                u = .5),
                tt.to(s, {
                    y: 0,
                    opacity: 1,
                    duration: u,
                    ease: Br.out
                }).delay(l)
            }
        })
    }
    ),
    tt.utils.toArray(".title-animation-top").forEach(s => {
        tt.to(s, {
            visibility: "visible"
        }).delay(0),
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = .3
                  , u = 1.3
                  , f = .3;
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration)),
                window.matchMedia("(max-width:992px)").matches && (l = .3,
                u = 1,
                f = 0);
                const h = new Sr(s,{
                    types: "line"
                });
                tt.from(h.lines, {
                    y: 95,
                    opacity: 0,
                    stagger: f,
                    duration: u,
                    ease: Er.create("custom", "M0,0 C0.098,0.81 0.154,1 1,1.011 ")
                }).delay(l)
            }
        })
    }
    ),
    tt.utils.toArray(".title-animation").forEach(s => {
        if (tt.to(s, {
            visibility: "visible"
        }).delay(0),
        window.matchMedia("(max-width:992px)").matches)
            X.create({
                trigger: s,
                start: "top 100%",
                onEnter: () => {
                    let l = .3
                      , u = 1;
                    s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                    s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration));
                    const f = new Sr(s,{
                        types: "line"
                    });
                    tt.from(f.lines, {
                        y: 60,
                        opacity: 0,
                        stagger: .05,
                        duration: u,
                        ease: Er.create("custom", "M0,0 C0.098,0.81 0.154,1 1,1.011 ")
                    }).delay(l)
                }
            });
        else {
            let l = tt.timeline({
                scrollTrigger: {
                    trigger: s,
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: 2,
                    markers: !1,
                    toggleActions: "play none play reset"
                }
            });
            const u = new Sr(s,{
                types: "line"
            });
            l.from(u.lines, {
                y: 70,
                opacity: 0,
                stagger: .05,
                duration: .5,
                ease: "back.inOut"
            })
        }
    }
    ),
    document.querySelectorAll(".title-animation, .title-animation-top").forEach(function(s) {
        const l = s.querySelectorAll(".line");
        for (let u = 0; u < l.length; u++) {
            const f = l[u]
              , h = f.textContent.split(" ")
              , c = h[h.length - 1];
            if (c.length <= 2) {
                let d = c;
                if (u + 1 < l.length) {
                    const _ = l[u + 1]
                      , p = _.textContent;
                    _.textContent = d + " " + p,
                    f.textContent = f.textContent.slice(0, -(c.length + 1))
                }
            }
        }
    }),
    tt.utils.toArray(".img-animation").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = 0;
                window.matchMedia("(max-width:992px)").matches && (l = .1),
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                setTimeout( () => {
                    s.classList.add("scroll")
                }
                , l)
            }
        })
    }
    ),
    tt.utils.toArray(".animation-svg").forEach(s => {
        X.create({
            trigger: s,
            start: "bottom bottom+=100px",
            onEnter: () => {
                tt.to(s, {
                    top: "20vh",
                    scale: .95,
                    ease: Br.in,
                    duration: .8
                })
            }
        })
    }
    ),
    tt.utils.toArray(".animation-background").forEach(s => {
        X.create({
            trigger: s,
            start: "top top",
            onEnter: () => {
                tt.to(s, {
                    bottom: "0",
                    opacity: 1,
                    ease: Br.in,
                    duration: .7
                })
            }
        })
    }
    ),
    tt.utils.toArray(".animation-opacity").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = .45
                  , u = .5;
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration)),
                window.matchMedia("(max-width:992px)").matches && (l = .3,
                u = .5),
                tt.to(s, {
                    opacity: 1,
                    duration: u,
                    ease: Br.out
                }).delay(l)
            }
        })
    }
    ),
    tt.utils.toArray(".text-animation-side").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = .45
                  , u = .5;
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration)),
                tt.to(s, {
                    x: 0,
                    opacity: 1,
                    duration: u,
                    ease: Br.out
                }).delay(l)
            }
        })
    }
    ),
    tt.utils.toArray(".line-animation").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = .45
                  , u = .7;
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration)),
                tt.to(s, {
                    width: "100%",
                    duration: u,
                    ease: Br.out
                }).delay(l)
            }
        })
    }
    ),
    tt.utils.toArray(".line-vertical-animation").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = .45
                  , u = .5;
                s.hasAttribute("data-delay") && (l = parseFloat(s.dataset.delay)),
                s.hasAttribute("data-duration") && (u = parseFloat(s.dataset.duration)),
                tt.to(s, {
                    height: "100%",
                    duration: u,
                    ease: Br.out
                }).delay(l)
            }
        })
    }
    ),
    tt.utils.toArray(".zoom-animation").forEach(s => {
        X.create({
            trigger: s,
            start: "top 100%",
            onEnter: () => {
                let l = parseFloat(s.dataset.delay)
                  , u = parseFloat(s.dataset.duration);
                tt.to(s, {
                    scale: 1,
                    opacity: 1,
                    duration: u,
                    ease: Br.out
                }).delay(l)
            }
        })
    }
    ),
    window.location.hash) {
        let s = window.location.hash;
        if (console.log(s),
        window.matchMedia("(max-width:992px)").matches) {
            const l = document.querySelector(s);
            document.querySelector(".js-menu-mobile").classList.remove("active"),
            l.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        } else
            tt.to(o, {
                scrollTop: Math.min(X.maxScroll(window), o.offset(s, "top 140px")),
                duaration: 1
            })
    }
    let e = document.querySelectorAll('a[href^="#"]');
    e.length > 0 && Array.from(e).forEach(s => {
        s.onclick = function(l) {
            l.preventDefault();
            let u = s.getAttribute("href");
            if (u && u !== "#" && u !== "")
                if (window.matchMedia("(max-width:992px)").matches) {
                    const f = document.querySelector(u);
                    document.querySelector(".js-menu-mobile").classList.remove("active"),
                    f.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    })
                } else
                    tt.to(o, {
                        scrollTop: Math.min(X.maxScroll(window), o.offset(u, "top 50px")),
                        duaration: 1
                    })
        }
    }
    );
    let i = document.querySelector("#hero");
    i && (i.onclick = function(s) {
        s.preventDefault();
        let l = "#sectionLeftRight";
        tt.to(o, {
            scrollTop: Math.min(X.maxScroll(window), o.offset(l, "top -50px")),
            duaration: 2
        })
    }
    );
    let n = document.querySelectorAll(".item-plus");
    n && [...n].forEach( (s, l) => {
        s.querySelector(".item-plus-title").addEventListener("click", () => {
            const f = s.querySelector(".item-plus-text");
            s.classList.contains("active") ? (tt.to(f, {
                height: "0",
                duration: .2
            }),
            s.classList.remove("active")) : (tt.to(f, {
                height: "auto",
                duration: .2
            }),
            s.classList.add("active"))
        }
        )
    }
    );
    let a = document.querySelectorAll(".js-read-more");
    a && [...a].forEach( (s, l) => {
        s.addEventListener("click", () => {
            s.classList.add("clicked");
            const u = document.querySelector(".read-more");
            tt.to(u, {
                height: "auto",
                duration: .2
            })
        }
        )
    }
    )
}
setTimeout(th, 500);
/*!
 * Glide.js v3.6.0
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
function ds(o) {
    "@babel/helpers - typeof";
    return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ds = function(t) {
        return typeof t
    }
    : ds = function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }
    ,
    ds(o)
}
function Rs(o, t) {
    if (!(o instanceof t))
        throw new TypeError("Cannot call a class as a function")
}
function Za(o, t) {
    for (var r = 0; r < t.length; r++) {
        var e = t[r];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(o, e.key, e)
    }
}
function Ls(o, t, r) {
    return t && Za(o.prototype, t),
    r && Za(o, r),
    o
}
function eh(o, t) {
    if (typeof t != "function" && t !== null)
        throw new TypeError("Super expression must either be null or a function");
    o.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: o,
            writable: !0,
            configurable: !0
        }
    }),
    t && Oo(o, t)
}
function ji(o) {
    return ji = Object.setPrototypeOf ? Object.getPrototypeOf : function(r) {
        return r.__proto__ || Object.getPrototypeOf(r)
    }
    ,
    ji(o)
}
function Oo(o, t) {
    return Oo = Object.setPrototypeOf || function(e, i) {
        return e.__proto__ = i,
        e
    }
    ,
    Oo(o, t)
}
function rh() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
    if (typeof Proxy == "function")
        return !0;
    try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
        !0
    } catch {
        return !1
    }
}
function ih(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function nh(o, t) {
    if (t && (typeof t == "object" || typeof t == "function"))
        return t;
    if (t !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return ih(o)
}
function sh(o) {
    var t = rh();
    return function() {
        var e = ji(o), i;
        if (t) {
            var n = ji(this).constructor;
            i = Reflect.construct(e, arguments, n)
        } else
            i = e.apply(this, arguments);
        return nh(this, i)
    }
}
function oh(o, t) {
    for (; !Object.prototype.hasOwnProperty.call(o, t) && (o = ji(o),
    o !== null); )
        ;
    return o
}
function ps() {
    return typeof Reflect < "u" && Reflect.get ? ps = Reflect.get : ps = function(t, r, e) {
        var i = oh(t, r);
        if (i) {
            var n = Object.getOwnPropertyDescriptor(i, r);
            return n.get ? n.get.call(arguments.length < 3 ? t : e) : n.value
        }
    }
    ,
    ps.apply(this, arguments)
}
var ah = {
    type: "slider",
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: !1,
    hoverpause: !0,
    keyboard: !0,
    bound: !1,
    swipeThreshold: 80,
    dragThreshold: 120,
    perSwipe: "",
    touchRatio: .5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: !0,
    rewindDuration: 800,
    animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
    waitForTransition: !0,
    throttle: 10,
    direction: "ltr",
    peek: 0,
    cloningRatio: 1,
    breakpoints: {},
    classes: {
        swipeable: "glide--swipeable",
        dragging: "glide--dragging",
        direction: {
            ltr: "glide--ltr",
            rtl: "glide--rtl"
        },
        type: {
            slider: "glide--slider",
            carousel: "glide--carousel"
        },
        slide: {
            clone: "glide__slide--clone",
            active: "glide__slide--active"
        },
        arrow: {
            disabled: "glide__arrow--disabled"
        },
        nav: {
            active: "glide__bullet--active"
        }
    }
};
function Cr(o) {
    console.error("[Glide warn]: ".concat(o))
}
function ue(o) {
    return parseInt(o)
}
function lh(o) {
    return parseFloat(o)
}
function Mo(o) {
    return typeof o == "string"
}
function Ki(o) {
    var t = ds(o);
    return t === "function" || t === "object" && !!o
}
function Cs(o) {
    return typeof o == "function"
}
function Wu(o) {
    return typeof o > "u"
}
function Ao(o) {
    return o.constructor === Array
}
function uh(o, t, r) {
    var e = {};
    for (var i in t)
        Cs(t[i]) ? e[i] = t[i](o, e, r) : Cr("Extension must be a function");
    for (var n in e)
        Cs(e[n].mount) && e[n].mount();
    return e
}
function Mt(o, t, r) {
    Object.defineProperty(o, t, r)
}
function fh(o) {
    return Object.keys(o).sort().reduce(function(t, r) {
        return t[r] = o[r],
        t[r],
        t
    }, {})
}
function Eo(o, t) {
    var r = Object.assign({}, o, t);
    return t.hasOwnProperty("classes") && (r.classes = Object.assign({}, o.classes, t.classes),
    t.classes.hasOwnProperty("direction") && (r.classes.direction = Object.assign({}, o.classes.direction, t.classes.direction)),
    t.classes.hasOwnProperty("type") && (r.classes.type = Object.assign({}, o.classes.type, t.classes.type)),
    t.classes.hasOwnProperty("slide") && (r.classes.slide = Object.assign({}, o.classes.slide, t.classes.slide)),
    t.classes.hasOwnProperty("arrow") && (r.classes.arrow = Object.assign({}, o.classes.arrow, t.classes.arrow)),
    t.classes.hasOwnProperty("nav") && (r.classes.nav = Object.assign({}, o.classes.nav, t.classes.nav))),
    t.hasOwnProperty("breakpoints") && (r.breakpoints = Object.assign({}, o.breakpoints, t.breakpoints)),
    r
}
var ch = function() {
    function o() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Rs(this, o),
        this.events = t,
        this.hop = t.hasOwnProperty
    }
    return Ls(o, [{
        key: "on",
        value: function(r, e) {
            if (Ao(r)) {
                for (var i = 0; i < r.length; i++)
                    this.on(r[i], e);
                return
            }
            this.hop.call(this.events, r) || (this.events[r] = []);
            var n = this.events[r].push(e) - 1;
            return {
                remove: function() {
                    delete this.events[r][n]
                }
            }
        }
    }, {
        key: "emit",
        value: function(r, e) {
            if (Ao(r)) {
                for (var i = 0; i < r.length; i++)
                    this.emit(r[i], e);
                return
            }
            this.hop.call(this.events, r) && this.events[r].forEach(function(n) {
                n(e || {})
            })
        }
    }]),
    o
}()
  , hh = function() {
    function o(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        Rs(this, o),
        this._c = {},
        this._t = [],
        this._e = new ch,
        this.disabled = !1,
        this.selector = t,
        this.settings = Eo(ah, r),
        this.index = this.settings.startAt
    }
    return Ls(o, [{
        key: "mount",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return this._e.emit("mount.before"),
            Ki(r) ? this._c = uh(this, r, this._e) : Cr("You need to provide a object on `mount()`"),
            this._e.emit("mount.after"),
            this
        }
    }, {
        key: "mutate",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            return Ao(r) ? this._t = r : Cr("You need to provide a array on `mutate()`"),
            this
        }
    }, {
        key: "update",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return this.settings = Eo(this.settings, r),
            r.hasOwnProperty("startAt") && (this.index = r.startAt),
            this._e.emit("update"),
            this
        }
    }, {
        key: "go",
        value: function(r) {
            return this._c.Run.make(r),
            this
        }
    }, {
        key: "move",
        value: function(r) {
            return this._c.Transition.disable(),
            this._c.Move.make(r),
            this
        }
    }, {
        key: "destroy",
        value: function() {
            return this._e.emit("destroy"),
            this
        }
    }, {
        key: "play",
        value: function() {
            var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
            return r && (this.settings.autoplay = r),
            this._e.emit("play"),
            this
        }
    }, {
        key: "pause",
        value: function() {
            return this._e.emit("pause"),
            this
        }
    }, {
        key: "disable",
        value: function() {
            return this.disabled = !0,
            this
        }
    }, {
        key: "enable",
        value: function() {
            return this.disabled = !1,
            this
        }
    }, {
        key: "on",
        value: function(r, e) {
            return this._e.on(r, e),
            this
        }
    }, {
        key: "isType",
        value: function(r) {
            return this.settings.type === r
        }
    }, {
        key: "settings",
        get: function() {
            return this._o
        },
        set: function(r) {
            Ki(r) ? this._o = r : Cr("Options must be an `object` instance.")
        }
    }, {
        key: "index",
        get: function() {
            return this._i
        },
        set: function(r) {
            this._i = ue(r)
        }
    }, {
        key: "type",
        get: function() {
            return this.settings.type
        }
    }, {
        key: "disabled",
        get: function() {
            return this._d
        },
        set: function(r) {
            this._d = !!r
        }
    }]),
    o
}();
function dh(o, t, r) {
    var e = {
        mount: function() {
            this._o = !1
        },
        make: function(u) {
            var f = this;
            o.disabled || (!o.settings.waitForTransition || o.disable(),
            this.move = u,
            r.emit("run.before", this.move),
            this.calculate(),
            r.emit("run", this.move),
            t.Transition.after(function() {
                f.isStart() && r.emit("run.start", f.move),
                f.isEnd() && r.emit("run.end", f.move),
                f.isOffset() && (f._o = !1,
                r.emit("run.offset", f.move)),
                r.emit("run.after", f.move),
                o.enable()
            }))
        },
        calculate: function() {
            var u = this.move
              , f = this.length
              , h = u.steps
              , c = u.direction
              , d = 1;
            if (c === "=") {
                if (o.settings.bound && ue(h) > f) {
                    o.index = f;
                    return
                }
                o.index = h;
                return
            }
            if (c === ">" && h === ">") {
                o.index = f;
                return
            }
            if (c === "<" && h === "<") {
                o.index = 0;
                return
            }
            if (c === "|" && (d = o.settings.perView || 1),
            c === ">" || c === "|" && h === ">") {
                var _ = i(d);
                _ > f && (this._o = !0),
                o.index = n(_, d);
                return
            }
            if (c === "<" || c === "|" && h === "<") {
                var p = a(d);
                p < 0 && (this._o = !0),
                o.index = s(p, d);
                return
            }
            Cr("Invalid direction pattern [".concat(c).concat(h, "] has been used"))
        },
        isStart: function() {
            return o.index <= 0
        },
        isEnd: function() {
            return o.index >= this.length
        },
        isOffset: function() {
            var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
            return u ? this._o ? u === "|>" ? this.move.direction === "|" && this.move.steps === ">" : u === "|<" ? this.move.direction === "|" && this.move.steps === "<" : this.move.direction === u : !1 : this._o
        },
        isBound: function() {
            return o.isType("slider") && o.settings.focusAt !== "center" && o.settings.bound
        }
    };
    function i(l) {
        var u = o.index;
        return o.isType("carousel") ? u + l : u + (l - u % l)
    }
    function n(l, u) {
        var f = e.length;
        return l <= f ? l : o.isType("carousel") ? l - (f + 1) : o.settings.rewind ? e.isBound() && !e.isEnd() ? f : 0 : e.isBound() ? f : Math.floor(f / u) * u
    }
    function a(l) {
        var u = o.index;
        if (o.isType("carousel"))
            return u - l;
        var f = Math.ceil(u / l);
        return (f - 1) * l
    }
    function s(l, u) {
        var f = e.length;
        return l >= 0 ? l : o.isType("carousel") ? l + (f + 1) : o.settings.rewind ? e.isBound() && e.isStart() ? f : Math.floor(f / u) * u : 0
    }
    return Mt(e, "move", {
        get: function() {
            return this._m
        },
        set: function(u) {
            var f = u.substr(1);
            this._m = {
                direction: u.substr(0, 1),
                steps: f ? ue(f) ? ue(f) : f : 0
            }
        }
    }),
    Mt(e, "length", {
        get: function() {
            var u = o.settings
              , f = t.Html.slides.length;
            return this.isBound() ? f - 1 - (ue(u.perView) - 1) + ue(u.focusAt) : f - 1
        }
    }),
    Mt(e, "offset", {
        get: function() {
            return this._o
        }
    }),
    e
}
function Ga() {
    return new Date().getTime()
}
function Ds(o, t, r) {
    var e, i, n, a, s = 0;
    r || (r = {});
    var l = function() {
        s = r.leading === !1 ? 0 : Ga(),
        e = null,
        a = o.apply(i, n),
        e || (i = n = null)
    }
      , u = function() {
        var h = Ga();
        !s && r.leading === !1 && (s = h);
        var c = t - (h - s);
        return i = this,
        n = arguments,
        c <= 0 || c > t ? (e && (clearTimeout(e),
        e = null),
        s = h,
        a = o.apply(i, n),
        e || (i = n = null)) : !e && r.trailing !== !1 && (e = setTimeout(l, c)),
        a
    };
    return u.cancel = function() {
        clearTimeout(e),
        s = 0,
        e = i = n = null
    }
    ,
    u
}
var Jn = {
    ltr: ["marginLeft", "marginRight"],
    rtl: ["marginRight", "marginLeft"]
};
function ph(o, t, r) {
    var e = {
        apply: function(n) {
            for (var a = 0, s = n.length; a < s; a++) {
                var l = n[a].style
                  , u = t.Direction.value;
                a !== 0 ? l[Jn[u][0]] = "".concat(this.value / 2, "px") : l[Jn[u][0]] = "",
                a !== n.length - 1 ? l[Jn[u][1]] = "".concat(this.value / 2, "px") : l[Jn[u][1]] = ""
            }
        },
        remove: function(n) {
            for (var a = 0, s = n.length; a < s; a++) {
                var l = n[a].style;
                l.marginLeft = "",
                l.marginRight = ""
            }
        }
    };
    return Mt(e, "value", {
        get: function() {
            return ue(o.settings.gap)
        }
    }),
    Mt(e, "grow", {
        get: function() {
            return e.value * t.Sizes.length
        }
    }),
    Mt(e, "reductor", {
        get: function() {
            var n = o.settings.perView;
            return e.value * (n - 1) / n
        }
    }),
    r.on(["build.after", "update"], Ds(function() {
        e.apply(t.Html.wrapper.children)
    }, 30)),
    r.on("destroy", function() {
        e.remove(t.Html.wrapper.children)
    }),
    e
}
function Uu(o) {
    if (o && o.parentNode) {
        for (var t = o.parentNode.firstChild, r = []; t; t = t.nextSibling)
            t.nodeType === 1 && t !== o && r.push(t);
        return r
    }
    return []
}
function Ja(o) {
    return !!(o && o instanceof window.HTMLElement)
}
function Ro(o) {
    return Array.prototype.slice.call(o)
}
var tl = '[data-glide-el="track"]';
function _h(o, t, r) {
    var e = {
        mount: function() {
            this.root = o.selector,
            this.track = this.root.querySelector(tl),
            this.collectSlides()
        },
        collectSlides: function() {
            this.slides = Ro(this.wrapper.children).filter(function(n) {
                return !n.classList.contains(o.settings.classes.slide.clone)
            })
        }
    };
    return Mt(e, "root", {
        get: function() {
            return e._r
        },
        set: function(n) {
            Mo(n) && (n = document.querySelector(n)),
            Ja(n) ? e._r = n : Cr("Root element must be a existing Html node")
        }
    }),
    Mt(e, "track", {
        get: function() {
            return e._t
        },
        set: function(n) {
            Ja(n) ? e._t = n : Cr("Could not find track element. Please use ".concat(tl, " attribute."))
        }
    }),
    Mt(e, "wrapper", {
        get: function() {
            return e.track.children[0]
        }
    }),
    r.on("update", function() {
        e.collectSlides()
    }),
    e
}
function gh(o, t, r) {
    var e = {
        mount: function() {
            this.value = o.settings.peek
        }
    };
    return Mt(e, "value", {
        get: function() {
            return e._v
        },
        set: function(n) {
            Ki(n) ? (n.before = ue(n.before),
            n.after = ue(n.after)) : n = ue(n),
            e._v = n
        }
    }),
    Mt(e, "reductor", {
        get: function() {
            var n = e.value
              , a = o.settings.perView;
            return Ki(n) ? n.before / a + n.after / a : n * 2 / a
        }
    }),
    r.on(["resize", "update"], function() {
        e.mount()
    }),
    e
}
function mh(o, t, r) {
    var e = {
        mount: function() {
            this._o = 0
        },
        make: function() {
            var n = this
              , a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            this.offset = a,
            r.emit("move", {
                movement: this.value
            }),
            t.Transition.after(function() {
                r.emit("move.after", {
                    movement: n.value
                })
            })
        }
    };
    return Mt(e, "offset", {
        get: function() {
            return e._o
        },
        set: function(n) {
            e._o = Wu(n) ? 0 : ue(n)
        }
    }),
    Mt(e, "translate", {
        get: function() {
            return t.Sizes.slideWidth * o.index
        }
    }),
    Mt(e, "value", {
        get: function() {
            var n = this.offset
              , a = this.translate;
            return t.Direction.is("rtl") ? a + n : a - n
        }
    }),
    r.on(["build.before", "run"], function() {
        e.make()
    }),
    e
}
function vh(o, t, r) {
    var e = {
        setupSlides: function() {
            for (var n = "".concat(this.slideWidth, "px"), a = t.Html.slides, s = 0; s < a.length; s++)
                a[s].style.width = n
        },
        setupWrapper: function() {
            t.Html.wrapper.style.width = "".concat(this.wrapperSize, "px")
        },
        remove: function() {
            for (var n = t.Html.slides, a = 0; a < n.length; a++)
                n[a].style.width = "";
            t.Html.wrapper.style.width = ""
        }
    };
    return Mt(e, "length", {
        get: function() {
            return t.Html.slides.length
        }
    }),
    Mt(e, "width", {
        get: function() {
            return t.Html.track.offsetWidth
        }
    }),
    Mt(e, "wrapperSize", {
        get: function() {
            return e.slideWidth * e.length + t.Gaps.grow + t.Clones.grow
        }
    }),
    Mt(e, "slideWidth", {
        get: function() {
            return e.width / o.settings.perView - t.Peek.reductor - t.Gaps.reductor
        }
    }),
    r.on(["build.before", "resize", "update"], function() {
        e.setupSlides(),
        e.setupWrapper()
    }),
    r.on("destroy", function() {
        e.remove()
    }),
    e
}
function yh(o, t, r) {
    var e = {
        mount: function() {
            r.emit("build.before"),
            this.typeClass(),
            this.activeClass(),
            r.emit("build.after")
        },
        typeClass: function() {
            t.Html.root.classList.add(o.settings.classes.type[o.settings.type])
        },
        activeClass: function() {
            var n = o.settings.classes
              , a = t.Html.slides[o.index];
            a && (a.classList.add(n.slide.active),
            Uu(a).forEach(function(s) {
                s.classList.remove(n.slide.active)
            }))
        },
        removeClasses: function() {
            var n = o.settings.classes
              , a = n.type
              , s = n.slide;
            t.Html.root.classList.remove(a[o.settings.type]),
            t.Html.slides.forEach(function(l) {
                l.classList.remove(s.active)
            })
        }
    };
    return r.on(["destroy", "update"], function() {
        e.removeClasses()
    }),
    r.on(["resize", "update"], function() {
        e.mount()
    }),
    r.on("move.after", function() {
        e.activeClass()
    }),
    e
}
function bh(o, t, r) {
    var e = {
        mount: function() {
            this.items = [],
            o.isType("carousel") && (this.items = this.collect())
        },
        collect: function() {
            var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
              , a = t.Html.slides
              , s = o.settings
              , l = s.perView
              , u = s.classes
              , f = s.cloningRatio;
            if (a.length !== 0)
                for (var h = +!!o.settings.peek, c = l + h + Math.round(l / 2), d = a.slice(0, c).reverse(), _ = a.slice(c * -1), p = 0; p < Math.max(f, Math.floor(l / a.length)); p++) {
                    for (var g = 0; g < d.length; g++) {
                        var w = d[g].cloneNode(!0);
                        w.classList.add(u.slide.clone),
                        n.push(w)
                    }
                    for (var v = 0; v < _.length; v++) {
                        var x = _[v].cloneNode(!0);
                        x.classList.add(u.slide.clone),
                        n.unshift(x)
                    }
                }
            return n
        },
        append: function() {
            for (var n = this.items, a = t.Html, s = a.wrapper, l = a.slides, u = Math.floor(n.length / 2), f = n.slice(0, u).reverse(), h = n.slice(u * -1).reverse(), c = "".concat(t.Sizes.slideWidth, "px"), d = 0; d < h.length; d++)
                s.appendChild(h[d]);
            for (var _ = 0; _ < f.length; _++)
                s.insertBefore(f[_], l[0]);
            for (var p = 0; p < n.length; p++)
                n[p].style.width = c
        },
        remove: function() {
            for (var n = this.items, a = 0; a < n.length; a++)
                t.Html.wrapper.removeChild(n[a])
        }
    };
    return Mt(e, "grow", {
        get: function() {
            return (t.Sizes.slideWidth + t.Gaps.value) * e.items.length
        }
    }),
    r.on("update", function() {
        e.remove(),
        e.mount(),
        e.append()
    }),
    r.on("build.before", function() {
        o.isType("carousel") && e.append()
    }),
    r.on("destroy", function() {
        e.remove()
    }),
    e
}
var ei = function() {
    function o() {
        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        Rs(this, o),
        this.listeners = t
    }
    return Ls(o, [{
        key: "on",
        value: function(r, e, i) {
            var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
            Mo(r) && (r = [r]);
            for (var a = 0; a < r.length; a++)
                this.listeners[r[a]] = i,
                e.addEventListener(r[a], this.listeners[r[a]], n)
        }
    }, {
        key: "off",
        value: function(r, e) {
            var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            Mo(r) && (r = [r]);
            for (var n = 0; n < r.length; n++)
                e.removeEventListener(r[n], this.listeners[r[n]], i)
        }
    }, {
        key: "destroy",
        value: function() {
            delete this.listeners
        }
    }]),
    o
}();
function wh(o, t, r) {
    var e = new ei
      , i = {
        mount: function() {
            this.bind()
        },
        bind: function() {
            e.on("resize", window, Ds(function() {
                r.emit("resize")
            }, o.settings.throttle))
        },
        unbind: function() {
            e.off("resize", window)
        }
    };
    return r.on("destroy", function() {
        i.unbind(),
        e.destroy()
    }),
    i
}
var xh = ["ltr", "rtl"]
  , Th = {
    ">": "<",
    "<": ">",
    "=": "="
};
function Sh(o, t, r) {
    var e = {
        mount: function() {
            this.value = o.settings.direction
        },
        resolve: function(n) {
            var a = n.slice(0, 1);
            return this.is("rtl") ? n.split(a).join(Th[a]) : n
        },
        is: function(n) {
            return this.value === n
        },
        addClass: function() {
            t.Html.root.classList.add(o.settings.classes.direction[this.value])
        },
        removeClass: function() {
            t.Html.root.classList.remove(o.settings.classes.direction[this.value])
        }
    };
    return Mt(e, "value", {
        get: function() {
            return e._v
        },
        set: function(n) {
            xh.indexOf(n) > -1 ? e._v = n : Cr("Direction value must be `ltr` or `rtl`")
        }
    }),
    r.on(["destroy", "update"], function() {
        e.removeClass()
    }),
    r.on("update", function() {
        e.mount()
    }),
    r.on(["build.before", "update"], function() {
        e.addClass()
    }),
    e
}
function kh(o, t) {
    return {
        modify: function(e) {
            return t.Direction.is("rtl") ? -e : e
        }
    }
}
function Ph(o, t) {
    return {
        modify: function(e) {
            var i = Math.floor(e / t.Sizes.slideWidth);
            return e + t.Gaps.value * i
        }
    }
}
function Ch(o, t) {
    return {
        modify: function(e) {
            return e + t.Clones.grow / 2
        }
    }
}
function Oh(o, t) {
    return {
        modify: function(e) {
            if (o.settings.focusAt >= 0) {
                var i = t.Peek.value;
                return Ki(i) ? e - i.before : e - i
            }
            return e
        }
    }
}
function Mh(o, t) {
    return {
        modify: function(e) {
            var i = t.Gaps.value
              , n = t.Sizes.width
              , a = o.settings.focusAt
              , s = t.Sizes.slideWidth;
            return a === "center" ? e - (n / 2 - s / 2) : e - s * a - i * a
        }
    }
}
function Ah(o, t, r) {
    var e = [Ph, Ch, Oh, Mh].concat(o._t, [kh]);
    return {
        mutate: function(n) {
            for (var a = 0; a < e.length; a++) {
                var s = e[a];
                Cs(s) && Cs(s().modify) ? n = s(o, t, r).modify(n) : Cr("Transformer should be a function that returns an object with `modify()` method")
            }
            return n
        }
    }
}
function Eh(o, t, r) {
    var e = {
        set: function(n) {
            var a = Ah(o, t).mutate(n)
              , s = "translate3d(".concat(-1 * a, "px, 0px, 0px)");
            t.Html.wrapper.style.mozTransform = s,
            t.Html.wrapper.style.webkitTransform = s,
            t.Html.wrapper.style.transform = s
        },
        remove: function() {
            t.Html.wrapper.style.transform = ""
        },
        getStartIndex: function() {
            var n = t.Sizes.length
              , a = o.index
              , s = o.settings.perView;
            return t.Run.isOffset(">") || t.Run.isOffset("|>") ? n + (a - s) : (a + s) % n
        },
        getTravelDistance: function() {
            var n = t.Sizes.slideWidth * o.settings.perView;
            return t.Run.isOffset(">") || t.Run.isOffset("|>") ? n * -1 : n
        }
    };
    return r.on("move", function(i) {
        if (!o.isType("carousel") || !t.Run.isOffset())
            return e.set(i.movement);
        t.Transition.after(function() {
            r.emit("translate.jump"),
            e.set(t.Sizes.slideWidth * o.index)
        });
        var n = t.Sizes.slideWidth * t.Translate.getStartIndex();
        return e.set(n - t.Translate.getTravelDistance())
    }),
    r.on("destroy", function() {
        e.remove()
    }),
    e
}
function Rh(o, t, r) {
    var e = !1
      , i = {
        compose: function(a) {
            var s = o.settings;
            return e ? "".concat(a, " 0ms ").concat(s.animationTimingFunc) : "".concat(a, " ").concat(this.duration, "ms ").concat(s.animationTimingFunc)
        },
        set: function() {
            var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "transform";
            t.Html.wrapper.style.transition = this.compose(a)
        },
        remove: function() {
            t.Html.wrapper.style.transition = ""
        },
        after: function(a) {
            setTimeout(function() {
                a()
            }, this.duration)
        },
        enable: function() {
            e = !1,
            this.set()
        },
        disable: function() {
            e = !0,
            this.set()
        }
    };
    return Mt(i, "duration", {
        get: function() {
            var a = o.settings;
            return o.isType("slider") && t.Run.offset ? a.rewindDuration : a.animationDuration
        }
    }),
    r.on("move", function() {
        i.set()
    }),
    r.on(["build.before", "resize", "translate.jump"], function() {
        i.disable()
    }),
    r.on("run", function() {
        i.enable()
    }),
    r.on("destroy", function() {
        i.remove()
    }),
    i
}
var ju = !1;
try {
    var el = Object.defineProperty({}, "passive", {
        get: function() {
            ju = !0
        }
    });
    window.addEventListener("testPassive", null, el),
    window.removeEventListener("testPassive", null, el)
} catch {}
var Lo = ju
  , ts = ["touchstart", "mousedown"]
  , rl = ["touchmove", "mousemove"]
  , il = ["touchend", "touchcancel", "mouseup", "mouseleave"]
  , nl = ["mousedown", "mousemove", "mouseup", "mouseleave"];
function Lh(o, t, r) {
    var e = new ei
      , i = 0
      , n = 0
      , a = 0
      , s = !1
      , l = Lo ? {
        passive: !0
    } : !1
      , u = {
        mount: function() {
            this.bindSwipeStart()
        },
        start: function(h) {
            if (!s && !o.disabled) {
                this.disable();
                var c = this.touches(h);
                i = null,
                n = ue(c.pageX),
                a = ue(c.pageY),
                this.bindSwipeMove(),
                this.bindSwipeEnd(),
                r.emit("swipe.start")
            }
        },
        move: function(h) {
            if (!o.disabled) {
                var c = o.settings
                  , d = c.touchAngle
                  , _ = c.touchRatio
                  , p = c.classes
                  , g = this.touches(h)
                  , w = ue(g.pageX) - n
                  , v = ue(g.pageY) - a
                  , x = Math.abs(w << 2)
                  , T = Math.abs(v << 2)
                  , k = Math.sqrt(x + T)
                  , C = Math.sqrt(T);
                if (i = Math.asin(C / k),
                i * 180 / Math.PI < d)
                    h.stopPropagation(),
                    t.Move.make(w * lh(_)),
                    t.Html.root.classList.add(p.dragging),
                    r.emit("swipe.move");
                else
                    return !1
            }
        },
        end: function(h) {
            if (!o.disabled) {
                var c = o.settings
                  , d = c.perSwipe
                  , _ = c.touchAngle
                  , p = c.classes
                  , g = this.touches(h)
                  , w = this.threshold(h)
                  , v = g.pageX - n
                  , x = i * 180 / Math.PI;
                this.enable(),
                v > w && x < _ ? t.Run.make(t.Direction.resolve("".concat(d, "<"))) : v < -w && x < _ ? t.Run.make(t.Direction.resolve("".concat(d, ">"))) : t.Move.make(),
                t.Html.root.classList.remove(p.dragging),
                this.unbindSwipeMove(),
                this.unbindSwipeEnd(),
                r.emit("swipe.end")
            }
        },
        bindSwipeStart: function() {
            var h = this
              , c = o.settings
              , d = c.swipeThreshold
              , _ = c.dragThreshold;
            d && e.on(ts[0], t.Html.wrapper, function(p) {
                h.start(p)
            }, l),
            _ && e.on(ts[1], t.Html.wrapper, function(p) {
                h.start(p)
            }, l)
        },
        unbindSwipeStart: function() {
            e.off(ts[0], t.Html.wrapper, l),
            e.off(ts[1], t.Html.wrapper, l)
        },
        bindSwipeMove: function() {
            var h = this;
            e.on(rl, t.Html.wrapper, Ds(function(c) {
                h.move(c)
            }, o.settings.throttle), l)
        },
        unbindSwipeMove: function() {
            e.off(rl, t.Html.wrapper, l)
        },
        bindSwipeEnd: function() {
            var h = this;
            e.on(il, t.Html.wrapper, function(c) {
                h.end(c)
            })
        },
        unbindSwipeEnd: function() {
            e.off(il, t.Html.wrapper)
        },
        touches: function(h) {
            return nl.indexOf(h.type) > -1 ? h : h.touches[0] || h.changedTouches[0]
        },
        threshold: function(h) {
            var c = o.settings;
            return nl.indexOf(h.type) > -1 ? c.dragThreshold : c.swipeThreshold
        },
        enable: function() {
            return s = !1,
            t.Transition.enable(),
            this
        },
        disable: function() {
            return s = !0,
            t.Transition.disable(),
            this
        }
    };
    return r.on("build.after", function() {
        t.Html.root.classList.add(o.settings.classes.swipeable)
    }),
    r.on("destroy", function() {
        u.unbindSwipeStart(),
        u.unbindSwipeMove(),
        u.unbindSwipeEnd(),
        e.destroy()
    }),
    u
}
function Dh(o, t, r) {
    var e = new ei
      , i = {
        mount: function() {
            this.bind()
        },
        bind: function() {
            e.on("dragstart", t.Html.wrapper, this.dragstart)
        },
        unbind: function() {
            e.off("dragstart", t.Html.wrapper)
        },
        dragstart: function(a) {
            a.preventDefault()
        }
    };
    return r.on("destroy", function() {
        i.unbind(),
        e.destroy()
    }),
    i
}
function Fh(o, t, r) {
    var e = new ei
      , i = !1
      , n = !1
      , a = {
        mount: function() {
            this._a = t.Html.wrapper.querySelectorAll("a"),
            this.bind()
        },
        bind: function() {
            e.on("click", t.Html.wrapper, this.click)
        },
        unbind: function() {
            e.off("click", t.Html.wrapper)
        },
        click: function(l) {
            n && (l.stopPropagation(),
            l.preventDefault())
        },
        detach: function() {
            if (n = !0,
            !i) {
                for (var l = 0; l < this.items.length; l++)
                    this.items[l].draggable = !1;
                i = !0
            }
            return this
        },
        attach: function() {
            if (n = !1,
            i) {
                for (var l = 0; l < this.items.length; l++)
                    this.items[l].draggable = !0;
                i = !1
            }
            return this
        }
    };
    return Mt(a, "items", {
        get: function() {
            return a._a
        }
    }),
    r.on("swipe.move", function() {
        a.detach()
    }),
    r.on("swipe.end", function() {
        t.Transition.after(function() {
            a.attach()
        })
    }),
    r.on("destroy", function() {
        a.attach(),
        a.unbind(),
        e.destroy()
    }),
    a
}
var zh = '[data-glide-el="controls[nav]"]'
  , oa = '[data-glide-el^="controls"]'
  , Nh = "".concat(oa, ' [data-glide-dir*="<"]')
  , Bh = "".concat(oa, ' [data-glide-dir*=">"]');
function Ih(o, t, r) {
    var e = new ei
      , i = Lo ? {
        passive: !0
    } : !1
      , n = {
        mount: function() {
            this._n = t.Html.root.querySelectorAll(zh),
            this._c = t.Html.root.querySelectorAll(oa),
            this._arrowControls = {
                previous: t.Html.root.querySelectorAll(Nh),
                next: t.Html.root.querySelectorAll(Bh)
            },
            this.addBindings()
        },
        setActive: function() {
            for (var s = 0; s < this._n.length; s++)
                this.addClass(this._n[s].children)
        },
        removeActive: function() {
            for (var s = 0; s < this._n.length; s++)
                this.removeClass(this._n[s].children)
        },
        addClass: function(s) {
            var l = o.settings
              , u = s[o.index];
            u && u && (u.classList.add(l.classes.nav.active),
            Uu(u).forEach(function(f) {
                f.classList.remove(l.classes.nav.active)
            }))
        },
        removeClass: function(s) {
            var l = s[o.index];
            l && l.classList.remove(o.settings.classes.nav.active)
        },
        setArrowState: function() {
            if (!o.settings.rewind) {
                var s = n._arrowControls.next
                  , l = n._arrowControls.previous;
                this.resetArrowState(s, l),
                o.index === 0 && this.disableArrow(l),
                o.index === t.Run.length && this.disableArrow(s)
            }
        },
        resetArrowState: function() {
            for (var s = o.settings, l = arguments.length, u = new Array(l), f = 0; f < l; f++)
                u[f] = arguments[f];
            u.forEach(function(h) {
                Ro(h).forEach(function(c) {
                    c.classList.remove(s.classes.arrow.disabled)
                })
            })
        },
        disableArrow: function() {
            for (var s = o.settings, l = arguments.length, u = new Array(l), f = 0; f < l; f++)
                u[f] = arguments[f];
            u.forEach(function(h) {
                Ro(h).forEach(function(c) {
                    c.classList.add(s.classes.arrow.disabled)
                })
            })
        },
        addBindings: function() {
            for (var s = 0; s < this._c.length; s++)
                this.bind(this._c[s].children)
        },
        removeBindings: function() {
            for (var s = 0; s < this._c.length; s++)
                this.unbind(this._c[s].children)
        },
        bind: function(s) {
            for (var l = 0; l < s.length; l++)
                e.on("click", s[l], this.click),
                e.on("touchstart", s[l], this.click, i)
        },
        unbind: function(s) {
            for (var l = 0; l < s.length; l++)
                e.off(["click", "touchstart"], s[l])
        },
        click: function(s) {
            !Lo && s.type === "touchstart" && s.preventDefault();
            var l = s.currentTarget.getAttribute("data-glide-dir");
            t.Run.make(t.Direction.resolve(l))
        }
    };
    return Mt(n, "items", {
        get: function() {
            return n._c
        }
    }),
    r.on(["mount.after", "move.after"], function() {
        n.setActive()
    }),
    r.on(["mount.after", "run"], function() {
        n.setArrowState()
    }),
    r.on("destroy", function() {
        n.removeBindings(),
        n.removeActive(),
        e.destroy()
    }),
    n
}
function Hh(o, t, r) {
    var e = new ei
      , i = {
        mount: function() {
            o.settings.keyboard && this.bind()
        },
        bind: function() {
            e.on("keyup", document, this.press)
        },
        unbind: function() {
            e.off("keyup", document)
        },
        press: function(a) {
            var s = o.settings.perSwipe;
            a.code === "ArrowRight" && t.Run.make(t.Direction.resolve("".concat(s, ">"))),
            a.code === "ArrowLeft" && t.Run.make(t.Direction.resolve("".concat(s, "<")))
        }
    };
    return r.on(["destroy", "update"], function() {
        i.unbind()
    }),
    r.on("update", function() {
        i.mount()
    }),
    r.on("destroy", function() {
        e.destroy()
    }),
    i
}
function Vh(o, t, r) {
    var e = new ei
      , i = {
        mount: function() {
            this.enable(),
            this.start(),
            o.settings.hoverpause && this.bind()
        },
        enable: function() {
            this._e = !0
        },
        disable: function() {
            this._e = !1
        },
        start: function() {
            var a = this;
            this._e && (this.enable(),
            o.settings.autoplay && Wu(this._i) && (this._i = setInterval(function() {
                a.stop(),
                t.Run.make(">"),
                a.start(),
                r.emit("autoplay")
            }, this.time)))
        },
        stop: function() {
            this._i = clearInterval(this._i)
        },
        bind: function() {
            var a = this;
            e.on("mouseover", t.Html.root, function() {
                a._e && a.stop()
            }),
            e.on("mouseout", t.Html.root, function() {
                a._e && a.start()
            })
        },
        unbind: function() {
            e.off(["mouseover", "mouseout"], t.Html.root)
        }
    };
    return Mt(i, "time", {
        get: function() {
            var a = t.Html.slides[o.index].getAttribute("data-glide-autoplay");
            return ue(a || o.settings.autoplay)
        }
    }),
    r.on(["destroy", "update"], function() {
        i.unbind()
    }),
    r.on(["run.before", "swipe.start", "update"], function() {
        i.stop()
    }),
    r.on(["pause", "destroy"], function() {
        i.disable(),
        i.stop()
    }),
    r.on(["run.after", "swipe.end"], function() {
        i.start()
    }),
    r.on(["play"], function() {
        i.enable(),
        i.start()
    }),
    r.on("update", function() {
        i.mount()
    }),
    r.on("destroy", function() {
        e.destroy()
    }),
    i
}
function sl(o) {
    return Ki(o) ? fh(o) : (Cr("Breakpoints option must be an object"),
    {})
}
function $h(o, t, r) {
    var e = new ei
      , i = o.settings
      , n = sl(i.breakpoints)
      , a = Object.assign({}, i)
      , s = {
        match: function(u) {
            if (typeof window.matchMedia < "u") {
                for (var f in u)
                    if (u.hasOwnProperty(f) && window.matchMedia("(max-width: ".concat(f, "px)")).matches)
                        return u[f]
            }
            return a
        }
    };
    return Object.assign(i, s.match(n)),
    e.on("resize", window, Ds(function() {
        o.settings = Eo(i, s.match(n))
    }, o.settings.throttle)),
    r.on("update", function() {
        n = sl(n),
        a = Object.assign({}, i)
    }),
    r.on("destroy", function() {
        e.off("resize", window)
    }),
    s
}
var Yh = {
    Html: _h,
    Translate: Eh,
    Transition: Rh,
    Direction: Sh,
    Peek: gh,
    Sizes: vh,
    Gaps: ph,
    Move: mh,
    Clones: bh,
    Resize: wh,
    Build: yh,
    Run: dh,
    Swipe: Lh,
    Images: Dh,
    Anchors: Fh,
    Controls: Ih,
    Keyboard: Hh,
    Autoplay: Vh,
    Breakpoints: $h
}
  , Rn = function(o) {
    eh(r, o);
    var t = sh(r);
    function r() {
        return Rs(this, r),
        t.apply(this, arguments)
    }
    return Ls(r, [{
        key: "mount",
        value: function() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            return ps(ji(r.prototype), "mount", this).call(this, Object.assign({}, Yh, i))
        }
    }]),
    r
}(hh);
let ol = document.querySelectorAll(".projects");
ol && [...ol].forEach( (o, t) => {
    new Rn(o,{
        type: "carousel",
        rewind: !1,
        bound: !0,
        startAt: 0,
        gap: 40,
        perView: 1.4,
        breakpoints: {
            768: {
                gap: 20,
                perView: 1.1
            }
        }
    }).mount()
}
);
let qh = document.querySelector(".tabs-glide");
qh && new Rn(".tabs-glide",{
    type: "carousel",
    rewind: !1,
    bound: !0,
    startAt: 0,
    gap: 20,
    perView: 2.2,
    breakpoints: {
        768: {
            perView: 1.1
        }
    }
}).mount();
let Xh = document.querySelector(".glide");
Xh && new Rn(".glide",{
    type: "carousel",
    rewind: !1,
    bound: !0,
    startAt: 0,
    gap: 20,
    perView: 2.5,
    breakpoints: {
        768: {
            perView: 1.1
        }
    }
}).mount();
let Wh = document.querySelector(".glide-carousel-text");
Wh && new Rn(".glide-carousel-text",{
    type: "carousel",
    rewind: !1,
    bound: !0,
    startAt: 0,
    gap: 20,
    perView: 2.2,
    breakpoints: {
        768: {
            perView: 1.1
        }
    }
}).mount();
let Uh = document.querySelector(".glide-carousel");
Uh && new Rn(".glide-carousel",{
    type: "carousel",
    rewind: !1,
    bound: !0,
    startAt: 0,
    gap: 20,
    perView: 3.2,
    breakpoints: {
        768: {
            perView: 1.1
        }
    }
}).mount();
function jh(o) {
    let t;
    o.forEach( (r, e) => {
        r.innerHTML.match(/[{}]|<script|^\n$/gi) || (t = r.innerHTML.replace(/(\s)([\S])[\s]+/g, "$1$2&nbsp;"),
        t = t.replace(/(\s)([^<][\S]{1})[\s]+/g, "$1$2&nbsp;")),
        r.innerHTML = t
    }
    )
}
let Kh = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, .text");
jh(Kh);
const Js = document.getElementById("header");
function Ku() {
    const o = window.scrollY
      , t = document.body.classList.contains("home");
    t && o >= window.innerHeight + 200 || !t && o >= 50 ? Js.classList.add("scrolled") : Js.classList.remove("scrolled")
}
window.addEventListener("scroll", Ku);
Ku();
let al = 0
  , ll = 0
  , es = 0
  , rs = 0
  , ul = 1 / 60;
const Qh = window.innerWidth
  , Zh = window.innerHeight
  , to = document.getElementById("footer");
if (to) {
    let t = function() {
        es += (al - es) * ul,
        rs += (ll - rs) * ul,
        Array.from(o).forEach( (r, e) => {
            let i = es
              , n = rs;
            e % 2 != 0 && (i = -es,
            n = -rs);
            let a = "";
            e == 0 && (a = "translate(" + i + "px, " + n + "px)"),
            e == 1 && (a = "translate(" + i + "px, " + n + "px)"),
            r.style.transform = a
        }
        ),
        window.requestAnimationFrame(t)
    };
    var Gh = t;
    const o = to.querySelectorAll(".shape");
    to.onmousemove = function(r) {
        let e = Math.max(-100, Math.min(100, Qh / 2 - r.clientX))
          , i = Math.max(-100, Math.min(100, Zh / 2 - r.clientY));
        al = 20 * e / 100,
        ll = 40 * i / 100
    }
    ,
    o.length > 0 && t()
}
