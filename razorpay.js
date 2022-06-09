
! function () {
	"use strict";
	! function () {
		var s = window,
			c = s.document,
			l = s.Boolean,
			m = s.Array,
			v = s.Object,
			g = s.String,
			a = s.Number,
			d = s.Date,
			p = s.Math,
			f = s.setTimeout,
			h = s.setInterval,
			r = s.clearTimeout,
			y = s.clearInterval,
			In = s.parseInt,
			_ = s.encodeURIComponent,
			b = s.decodeURIComponent,
			t = s.btoa,
			i = s.unescape,
			u = s.TypeError,
			o = s.navigator,
			e = s.location,
			n = s.XMLHttpRequest,
			w = s.FormData;

		function k(t) {
			return function (n, e) {
				return arguments.length < 2 ? function (e) {
					return t.call(null, e, n)
				} : t.call(null, n, e)
			}
		}

		function S(r) {
			return function (n, t, e) {
				return arguments.length < 3 ? function (e) {
					return r.call(null, e, n, t)
				} : r.call(null, n, t, e)
			}
		}

		function E() {
			for (var e = arguments.length, n = new m(e), t = 0; t < e; t++) n[t] = arguments[t];
			return function (e) {
				return function () {
					var t = arguments;
					return n.every(function (e, n) {
						return !!e(t[n]) || (function () {
							console.error.apply(console, arguments)
						}("wrong " + n + "th argtype", t[n]), void s.dispatchEvent(X("rzp_error", {
							detail: new Error("wrong " + n + "th argtype " + t[n])
						})))
					}) ? e.apply(null, t) : t[0]
				}
			}
		}

		function R(e) {
			return null === e
		}

		function A(e) {
			return L(e) && 1 === e.nodeType
		}

		function P(e) {
			var n = H();
			return function (e) {
				return H() - n
			}
		}
		var C = k(function (e, n) {
				return typeof e === n
			}),
			D = C("boolean"),
			x = C("number"),
			I = C("string"),
			T = C("function"),
			M = C("object"),
			N = m.isArray,
			B = C("undefined"),
			L = function (e) {
				return !R(e) && M(e)
			},
			O = function (e) {
				return !K(v.keys(e))
			},
			F = k(function (e, n) {
				return e && e[n]
			}),
			K = F("length"),
			j = F("prototype"),
			z = k(function (e, n) {
				return e instanceof n
			}),
			H = d.now,
			U = p.random,
			G = p.floor;

		function V(e, n) {
			return {
				error: (n = n, e = {
					description: g(e = e)
				}, n && (e.field = n), e)
			}
		}

		function Y(e) {
			throw new Error(e)
		}
		var $ = function (e) {
			return /data:image\/[^;]+;base64/.test(e)
		};

		function Z(e) {
			var n = function r(i, a) {
				var o = {};
				if (!L(i)) return o;
				var u = null == a;
				return v.keys(i).forEach(function (e) {
					var n, t = i[e],
						e = u ? e : a + "[" + e + "]";
					"object" == typeof t ? (n = r(t, e), v.keys(n).forEach(function (e) {
						o[e] = n[e]
					})) : o[e] = t
				}), o
			}(e);
			return v.keys(n).map(function (e) {
				return _(e) + "=" + _(n[e])
			}).join("&")
		}

		function W(e) {
			var r = {};
			return e.split(/=|&/).forEach(function (e, n, t) {
				n % 2 && (r[t[n - 1]] = b(e))
			}), r
		}

		function q(e, n) {
			return (n = L(n) ? Z(n) : n) && (e += 0 < e.indexOf("?") ? "&" : "?", e += n), e
		}

		function J(e) {
			return z(e, s.Event) && (e.which || e.charCode || e.keyCode)
		}

		function X(e, n) {
			n = n || {
				bubbles: !1,
				cancelable: !1,
				detail: void 0
			};
			var t = c.createEvent("CustomEvent");
			return t.initCustomEvent(e, n.bubbles, n.cancelable, n.detail), t
		}

		function Q(e) {
			try {
				return JSON.parse(e)
			} catch (e) {}
		}

		function ee(e, t) {
			void 0 === t && (t = "");
			var r = {};
			return Se(e, function (e, n) {
				n = t ? t + "." + n : n;
				L(e) ? Pe(r, ee(e, n)) : r[n] = e
			}), r
		}

		function ne(e) {
			return e.parentNode
		}
		var te = j(m),
			re = k(function (e, n) {
				return e && te.forEach.call(e, n), e
			}),
			ie = function (t) {
				return k(function (e, n) {
					return te[t].call(e, n)
				})
			},
			ae = ie("every"),
			oe = ie("map"),
			ue = k(function (e, n) {
				var e = e,
					e = oe(n)(e);
				return pe(he, [])(e)
			}),
			ce = ie("filter"),
			se = ie("indexOf"),
			le = k(function (e, n) {
				return 0 <= se(e, n)
			}),
			me = k(function (e, n) {
				for (var t = K(e), r = 0; r < t; r++)
					if (n(e[r], r, e)) return r;
				return -1
			}),
			de = k(function (e, n) {
				n = me(e, n);
				if (0 <= n) return e[n]
			}),
			pe = S(function (e, n, t) {
				return te.reduce.call(e, n, t)
			}),
			fe = k(function (e, n) {
				var t = K(n),
					r = m(t + K(e));
				return re(n, function (e, n) {
					return r[n] = e
				}), re(e, function (e, n) {
					return r[n + t] = e
				}), r
			}),
			he = k(function (e, n) {
				return fe(n, e)
			}),
			ve = function (e) {
				return v.keys(e || {})
			},
			ge = k(function (e, n) {
				return n in e
			}),
			ye = k(function (e, n) {
				return e && e.hasOwnProperty(n)
			}),
			_e = S(function (e, n, t) {
				return n[t] = e
			}),
			be = S(function (e, n, t) {
				return e[n] = t, e
			}),
			we = S(function (e, n, t) {
				return t && (e[n] = t), e
			}),
			ke = k(function (e, n) {
				return delete e[n], e
			}),
			Se = k(function (n, t) {
				return ve(n).forEach(function (e) {
					return t(n[e], e, n)
				}), n
			}),
			Ee = k(function (t, r) {
				return pe(ve(t), function (e, n) {
					return be(e, n, r(t[n], n, t))
				}, {})
			}),
			Re = JSON.stringify,
			Ae = function (e) {
				return Q(Re(e))
			},
			Pe = k(function (t, e) {
				return Se(e, function (e, n) {
					return t[n] = e
				}), t
			}),
			Ce = function (e) {
				var n = {};
				return Se(e, function (t, e) {
					var r = (e = e.replace(/\[([^[\]]+)\]/g, ".$1")).split("."),
						i = n;
					r.forEach(function (e, n) {
						n < r.length - 1 ? (i[e] || (i[e] = {}), i = i[e]) : i[e] = t
					})
				}), n
			},
			De = function (e) {
				var t = [];
				return L(e) && Se(e, function (e, n) {
					t.push([n, e])
				}), t
			},
			xe = function (e, n, t) {
				void 0 === t && (t = void 0);
				for (var r, i = n.split("."), a = e, o = 0; o < i.length; o++) try {
					var u = a[i[o]];
					if ((I(r = u) || x(r) || D(r) || R(r) || B(r)) && !I(u)) return !(o === i.length - 1) || void 0 === u ? t : u;
					a = u
				} catch (e) {
					return t
				}
				return a
			},
			Ie = s.Element,
			Te = function (e) {
				return c.createElement(e || "div")
			},
			Me = E(A),
			Ne = E(A, A),
			Be = E(A, I),
			C = E(A, I, function () {
				return !0
			}),
			ie = E(A, L),
			Le = (Ne = Ne(function (e, n) {
				return n.appendChild(e)
			}), k(Ne)),
			Oe = Me(function (e) {
				var n = ne(e);
				return n && n.removeChild(e), e
			});
		Me(F("selectionStart")), Me(F("selectionEnd")), Ne = function (e, n) {
			return e.selectionStart = e.selectionEnd = n, e
		}, Ne = E(A, x)(Ne), k(Ne);
		var Fe = Me(function (e) {
				return e.submit(), e
			}),
			Ke = (Ne = Be(function (e, n) {
				return (" " + e.className + " ").includes(" " + n + " ")
			}), k(Ne)),
			je = (Ne = Be(function (e, n) {
				return e.className ? Ke(e, n) || (e.className += " " + n) : e.className = n, e
			}), k(Ne)),
			ze = (Ne = Be(function (e, n) {
				return n = (" " + e.className + " ").replace(" " + n + " ", " ").replace(/^ | $/g, ""), e.className !== n && (e.className = n), e
			}), k(Ne)),
			He = S(C(function (e, n, t) {
				return e.setAttribute(n, t), e
			})),
			Ue = S(C(function (e, n, t) {
				return e.style[n] = t, e
			})),
			Ge = (C = ie(function (r, e) {
				return Se(function (e, n) {
					var t = r;
					return He(n, e)(t)
				})(e), r
			}), k(C)),
			Ve = (ie = ie(function (r, e) {
				return Se(function (e, n) {
					var t = r;
					return Ue(n, e)(t)
				})(e), r
			}), k(ie)),
			Ye = (ie = Be(function (e, n) {
				return e.innerHTML = n, e
			}), k(ie)),
			$e = (ie = Be(function (e, n) {
				return Ue("display", n)(e)
			}), k(ie));
		$e("none"), $e("block"), $e("inline-block"), F("offsetWidth");

		function Ze(n, r, i, a) {
			return z(n, Ie) ? console.error("use el |> _El.on(e, cb)") : function (t) {
				var e = r;
				return I(i) ? e = function (e) {
						for (var n = e.target; !Xe(n, i) && n !== t;) n = ne(n);
						n !== t && (e.delegateTarget = n, r(e))
					} : a = i, a = !!a, t.addEventListener(n, e, a),
					function () {
						return t.removeEventListener(n, e, a)
					}
			}
		}
		var We = F("offsetHeight"),
			qe = Me(function (e) {
				return e.getBoundingClientRect()
			}),
			F = j(Ie),
			Je = F.matches || F.matchesSelector || F.webkitMatchesSelector || F.mozMatchesSelector || F.msMatchesSelector || F.oMatchesSelector,
			Xe = (Me = Be(function (e, n) {
				return Je.call(e, n)
			}), k(Me)),
			Qe = c.documentElement,
			en = c.querySelector.bind(c);
		c.querySelectorAll.bind(c), c.getElementById.bind(c), s.getComputedStyle.bind(s);
		var nn = s.Event;

		function tn(e) {
			if (!e.target && s !== s.parent) return s.Razorpay.sendMessage({
				event: "redirect",
				data: e
			});
			rn(e.url, e.content, e.method, e.target)
		}

		function rn(e, n, t, r) {
			t && "get" === t.toLowerCase() ? (e = q(e, n), r ? s.open(e, r) : s.location = e) : (t = {
				action: e,
				method: t
			}, r && (t.target = r), r = Te("form"), r = Ge(t)(r), r = Ye(an(n))(r), r = Le(Qe)(r), r = Fe(r), Oe(r))
		}

		function an(e, t) {
			if (L(e)) {
				var r = "";
				return Se(e, function (e, n) {
					r += an(e, n = t ? t + "[" + n + "]" : n)
				}), r
			}
			var n = Te("input");
			return n.type = "hidden", n.value = e, n.name = t, n.outerHTML
		}

		function on(e) {
			z(e, nn) && (e.preventDefault(), e.stopPropagation())
		}
		var un, cn, sn, ln = n,
			mn = V("Network error"),
			dn = 0;

		function pn(e, n) {
			return n ? q(e, Z({
				keyless_header: n
			})) : e
		}

		function fn(e) {
			if (!z(this, fn)) return new fn(e);
			this.options = function (e) {
				I(e) && (e = {
					url: e
				});
				var n = e,
					t = n.method,
					r = n.headers,
					i = n.callback,
					n = n.data;
				r || (e.headers = {});
				t || (e.method = "get");
				i || (e.callback = function (e) {
					return e
				});
				L(n) && !z(n, w) && (n = Z(n));
				return e.data = n, e
			}(e), this.defer()
		}
		F = {
			setReq: function (e, n) {
				return this.abort(), this.type = e, this.req = n, this
			},
			till: function (n, t) {
				var r = this;
				return void 0 === t && (t = 0), this.setReq("timeout", f(function () {
					r.call(function (e) {
						e.error && 0 < t ? r.till(n, t - 1) : n(e) ? r.till(n, t) : r.options.callback(e)
					})
				}, 3e3))
			},
			abort: function () {
				var e = this.req,
					n = this.type;
				e && ("ajax" === n ? this.req.abort() : "jsonp" === n ? s.Razorpay[this.req] = function (e) {
					return e
				} : r(this.req), this.req = null)
			},
			defer: function () {
				var e = this;
				this.req = f(function () {
					return e.call()
				})
			},
			call: function (n) {
				void 0 === n && (n = this.options.callback);
				var e = this.options,
					t = e.url,
					r = e.method,
					i = e.data,
					e = e.headers,
					t = pn(t, sn),
					a = new ln;
				this.setReq("ajax", a), a.open(r, t, !0), a.onreadystatechange = function () {
					var e;
					4 === a.readyState && a.status && ((e = Q(a.responseText)) || ((e = V("Parsing error")).xhr = {
						status: a.status,
						text: a.responseText
					}), e.error && s.dispatchEvent(X("rzp_network_error", {
						detail: {
							method: r,
							url: t,
							baseUrl: t.split("?")[0],
							status: a.status,
							xhrErrored: !1,
							response: e
						}
					})), e.status_code = a.status, n(e))
				}, a.onerror = function () {
					var e = mn;
					e.xhr = {
						status: 0
					}, s.dispatchEvent(X("rzp_network_error", {
						detail: {
							method: r,
							url: t,
							baseUrl: t.split("?")[0],
							status: 0,
							xhrErrored: !0,
							response: e
						}
					})), n(e)
				}, e = e, e = we("X-Razorpay-SessionId", un)(e), e = we("X-Razorpay-TrackId", cn)(e), Se(function (e, n) {
					return a.setRequestHeader(n, e)
				})(e), a.send(i)
			}
		};
		(F.constructor = fn).prototype = F, fn.post = function (e) {
			return e.method = "post", e.headers || (e.headers = {}), e.headers["Content-type"] || (e.headers["Content-type"] = "application/x-www-form-urlencoded"), fn(e)
		}, fn.patch = function (e) {
			return e.method = "PATCH", e.headers || (e.headers = {}), e.headers["Content-type"] || (e.headers["Content-type"] = "application/x-www-form-urlencoded"), fn(e)
		}, fn.setSessionId = function (e) {
			un = e
		}, fn.setTrackId = function (e) {
			cn = e
		}, fn.setKeylessHeader = function (e) {
			sn = e
		}, fn.jsonp = function (o) {
			o.data || (o.data = {});
			var u = dn++,
				c = 0,
				e = new fn(o);
			return o = e.options, e.call = function (n) {
				void 0 === n && (n = o.callback);

				function e() {
					r || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (r = !0, this.onload = this.onreadystatechange = null, Oe(this))
				}
				var t = "jsonp" + u + "_" + ++c,
					r = !1,
					i = s.Razorpay[t] = function (e) {
						ke(e, "http_status_code"), n(e), ke(s.Razorpay, t)
					};
				this.setReq("jsonp", i);
				var a = q(o.url, o.data);
				a = q(a = pn(a, sn), Z({
					callback: "Razorpay." + t
				})), i = Te("script"), i = Pe({
					src: a,
					async: !0,
					onerror: function (e) {
						return n(mn)
					},
					onload: e,
					onreadystatechange: e
				})(i), Le(Qe)(i)
			}, e
		};
		var hn = function (e) {
				return console.warn("Promise error:", e)
			},
			vn = function (e) {
				return z(e, gn)
			};

		function gn(e) {
			if (!vn(this)) throw "new Promise";
			if ("function" != typeof e) throw new u("not a function");
			this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Sn(e, this)
		}

		function yn(t, r) {
			for (; 3 === t._state;) t = t._value;
			0 !== t._state ? (t._handled = !0, f(function () {
				var e, n = 1 === t._state ? r.onFulfilled : r.onRejected;
				if (null !== n) {
					try {
						e = n(t._value)
					} catch (e) {
						return void bn(r.promise, e)
					}
					_n(r.promise, e)
				} else(1 === t._state ? _n : bn)(r.promise, t._value)
			})) : t._deferreds.push(r)
		}

		function _n(n, e) {
			try {
				if (e === n) throw new u("promise resolved by itself");
				if (L(e) || T(e)) {
					var t = e.then;
					if (vn(e)) return n._state = 3, n._value = e, void wn(n);
					if (T(t)) return void Sn(t.bind(e), n)
				}
				n._state = 1, n._value = e, wn(n)
			} catch (e) {
				bn(n, e)
			}
		}

		function bn(e, n) {
			e._state = 2, e._value = n, wn(e)
		}

		function wn(n) {
			2 === n._state && 0 === n._deferreds.length && f(function () {
				n._handled || hn(n._value)
			}), (n._deferreds || []).forEach(function (e) {
				return yn(n, e)
			}), n._deferreds = null
		}

		function kn(e, n, t) {
			this.onFulfilled = T(e) ? e : null, this.onRejected = T(n) ? n : null, this.promise = t
		}

		function Sn(e, n) {
			var t = !1;
			try {
				e(function (e) {
					t || (t = !0, _n(n, e))
				}, function (e) {
					t || (t = !0, bn(n, e))
				})
			} catch (e) {
				if (t) return;
				t = !0, bn(n, e)
			}
		}
		Be = gn.prototype, Pe({
			catch: function (e) {
				return this.then(null, e)
			},
			then: function (e, n) {
				var t = new gn(function (e) {
					return e
				});
				return yn(this, new kn(e, n, t)), t
			},
			finally: function (n) {
				return this.then(function (e) {
					return gn.resolve(n()).then(function () {
						return e
					})
				}, function (e) {
					return gn.resolve(n()).then(function () {
						return gn.reject(e)
					})
				})
			}
		})(Be), gn.all = function (o) {
			return new gn(function (r, i) {
				if (!o || void 0 === o.length) throw new u("Promise.all accepts an array");
				if (0 === o.length) return r([]);
				var a = o.length;
				o.forEach(function n(e, t) {
					try {
						if ((L(e) || T(e)) && T(e.then)) return e.then(function (e) {
							return n(e, t)
						}, i);
						o[t] = e, 0 == --a && r(o)
					} catch (e) {
						i(e)
					}
				})
			})
		}, gn.resolve = function (n) {
			return vn(n) ? n : new gn(function (e) {
				return e(n)
			})
		}, gn.reject = function (t) {
			return new gn(function (e, n) {
				return n(t)
			})
		}, gn.race = function (e) {
			return new gn(function (n, t) {
				return e.forEach(function (e) {
					return e.then(n, t)
				})
			})
		};
		var Me = s.Promise,
			En = Me && T(j(Me).then) && Me || gn;

		function Rn(e, n) {
			for (var t = 0; t < n.length; t++) {
				var r = n[t];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}

		function An() {
			return (An = Object.assign || function (e) {
				for (var n = 1; n < arguments.length; n++) {
					var t, r = arguments[n];
					for (t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
				}
				return e
			}).apply(this, arguments)
		}

		function Pn(e) {
			return function (e) {
				if (Array.isArray(e)) return Dn(e)
			}(e) || function (e) {
				if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
			}(e) || Cn(e) || function () {
				throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
			}()
		}

		function Cn(e, n) {
			if (e) {
				if ("string" == typeof e) return Dn(e, n);
				var t = Object.prototype.toString.call(e).slice(8, -1);
				return "Map" === (t = "Object" === t && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Dn(e, n) : void 0
			}
		}

		function Dn(e, n) {
			(null == n || n > e.length) && (n = e.length);
			for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
			return r
		}
		T(En.prototype.finally) || (En.prototype.finally = gn.prototype.finally);
		var xn = "behav",
			Tn = "metric",
			Mn = Object.freeze({
				__proto__: null,
				BEHAV: xn,
				RENDER: "render",
				METRIC: Tn,
				DEBUG: "debug",
				INTEGRATION: "integration"
			}),
			Nn = {
				_storage: {},
				setItem: function (e, n) {
					this._storage[e] = n
				},
				getItem: function (e) {
					return this._storage[e] || null
				},
				removeItem: function (e) {
					delete this._storage[e]
				}
			};
		var Bn = function () {
				var e = H();
				try {
					s.localStorage.setItem("_storage", e);
					var n = s.localStorage.getItem("_storage");
					return s.localStorage.removeItem("_storage"), e !== In(n) ? Nn : s.localStorage
				} catch (e) {
					return Nn
				}
			}(),
			Ln = "rzp_checkout_exp",
			n = function () {
				function r(e) {
					var o = this;
					void 0 === e && (e = {}), this.getExperiment = function (e) {
						return e ? o.experiments[e] : null
					}, this.getAllActiveExperimentsName = function () {
						return v.keys(o.experiments)
					}, this.clearOldExperiments = function () {
						var t = r.getExperimentsFromStorage(),
							e = o.getAllActiveExperimentsName().reduce(function (e, n) {
								return void 0 !== t[n] && (e[n] = t[n]), e
							}, {});
						r.setExperimentsInStorage(e)
					}, this.create = function (e, n, t) {
						var r = t = void 0 === t ? {} : t,
							i = r.evaluatorArg,
							a = r.overrideFn;
						var t = "number" == typeof n ? function () {
							return p.random() < n ? 0 : 1
						} : n;
						if ("function" != typeof t) throw new Error("evaluatorFn must be a function or number");
						r = {
							name: e,
							enabled: function () {
								return 1 === this.getSegmentOrCreate(e, i, a)
							}.bind(o),
							evaluator: t
						};
						return o.register(((t = {})[e] = r, t)), r
					}, this.experiments = e
				}
				r.setExperimentsInStorage = function (e) {
					if (e && "object" == typeof e) try {
						e = JSON.stringify(e), Bn.setItem(Ln, e)
					} catch (e) {
						return
					}
				}, r.getExperimentsFromStorage = function () {
					var e;
					try {
						e = JSON.parse(Bn.getItem(Ln))
					} catch (e) {}
					return e && "object" == typeof e && !m.isArray(e) ? e : {}
				};
				var e = r.prototype;
				return e.setSegment = function (e, n, t) {
					e = this.getExperiment(e);
					if (e) {
						t = ("function" == typeof t ? t : e.evaluator)(n), n = r.getExperimentsFromStorage();
						return n[e.name] = t, r.setExperimentsInStorage(n), t
					}
				}, e.getSegment = function (e) {
					return r.getExperimentsFromStorage()[e]
				}, e.getSegmentOrCreate = function (e, n, t) {
					var r = this.getSegment(e);
					return "function" == typeof t ? t(n) : void 0 === r ? this.setSegment(e, n, t) : r
				}, e.register = function (e) {
					this.experiments = An({}, this.experiments, e)
				}, r
			}();
		new n({});
		var On = n.getExperimentsFromStorage,
			Fn = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
			Kn = (F = Fn, pe(function (e, n, t) {
				return be(e, n, t)
			}, {})(F));

		function jn(e) {
			for (var n = ""; e;) n = Fn[e % 62] + n, e = G(e / 62);
			return n
		}

		function zn() {
			var t, r = jn(g(H() - 13885344e5) + g("000000" + G(1e6 * U())).slice(-6)) + jn(G(238328 * U())) + "0",
				i = 0,
				e = r;
			return re(function (e, n) {
				t = Kn[r[r.length - 1 - n]], (r.length - n) % 2 && (t *= 2), i += t = 62 <= t ? t % 62 + 1 : t
			})(e), t = (t = i % 62) && Fn[62 - t], g(r).slice(0, 13) + t
		}
		var Hn = zn(),
			Un = {
				library: "checkoutjs",
				platform: "browser",
				referer: e.href
			};

		function Gn(e) {
			var t = {
					checkout_id: e ? e.id : Hn
				},
				e = ["device", "env", "integration", "library", "os_version", "os", "platform_version", "platform", "referer"];
			return re(function (e) {
				var n = t;
				return we(e, Un[e])(n)
			})(e), t
		}
		var Vn, Yn, $n = [],
			Zn = [],
			Wn = function (e) {
				return $n.push(e)
			},
			qn = function (e) {
				Yn = e
			},
			Jn = function (e) {
				if (e && (Vn = e), $n.length && "live" === Vn) {
					var n = ge(o, "sendBeacon"),
						e = {
							context: Yn,
							addons: [{
								name: "ua_parser",
								input_key: "user_agent",
								output_key: "user_agent_parsed"
							}],
							events: $n.splice(0, $n.length)
						},
						e = {
							url: "https://lumberjack.razorpay.com/v1/track",
							data: {
								key: "ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",
								data: (e = Re(e), e = _(e), e = i(e), e = t(e), _(e))
							}
						};
					try {
						n ? o.sendBeacon(e.url, Re(e.data)) : fn.post(e)
					} catch (e) {}
				}
			};

		function Xn(i, a, o, u) {
			i ? "test" !== (Vn = i.getMode()) && f(function () {
				o instanceof Error && (o = {
					message: o.message,
					stack: o.stack
				});
				var e = Gn(i);
				e.user_agent = null, e.mode = "live";
				var n = i.get("order_id");
				n && (e.order_id = n);
				var t = {
					options: r = {}
				};
				o && (t.data = o);
				var r = Pe(r, Ce(i.get()));
				"function" == typeof i.get("handler") && (r.handler = !0), "string" == typeof i.get("callback_url") && (r.callback_url = !0), ge(r, "prefill") && re(["card"], function (e) {
					ge(r.prefill, e) && (r.prefill[e] = !0)
				}), r.image && $(r.image) && (r.image = "base64");
				var n = i.get("external.wallets") || [];
				r.external_wallets = (n = n, pe(function (e, n) {
					return be(n, !0)(e)
				}, {})(n)), Hn && (t.local_order_id = Hn), t.build_number = 1562146463, t.experiments = On(), Wn({
					event: a,
					properties: t,
					timestamp: H()
				}), qn(e), u && Jn()
			}) : Zn.push([a, o, u])
		}
		h(function () {
			Jn()
		}, 1e3), Xn.dispatchPendingEvents = function (e) {
			var n;
			e && (n = Xn.bind(Xn, e), Zn.splice(0, Zn.length).forEach(function (e) {
				n.apply(Xn, e)
			}))
		}, Xn.parseAnalyticsData = function (e) {
			L(e) && (e = e, Se(function (e, n) {
				Un[e] = n
			})(e))
		}, Xn.makeUid = zn, Xn.common = Gn, Xn.props = Un, Xn.id = Hn, Xn.updateUid = function (e) {
			Hn = e, Xn.id = e
		}, Xn.flush = Jn;
		var Qn, et = {},
			nt = {},
			tt = {
				setR: function (e) {
					Qn = e, Xn.dispatchPendingEvents(e)
				},
				track: function (e, n) {
					var t, r, i = void 0 === n ? {} : n,
						a = i.type,
						o = i.data,
						u = void 0 === o ? {} : o,
						n = i.r,
						o = void 0 === n ? Qn : n,
						n = i.immediately,
						i = void 0 !== n && n,
						n = (t = ee(et), Se(t, function (e, n) {
							T(e) && (t[n] = e.call())
						}), t);
					r = Ae(u || {}), ["token"].forEach(function (e) {
						r[e] && (r[e] = "__REDACTED__")
					}), (u = L(u = r) ? Ae(u) : {
						data: u
					}).meta && L(u.meta) && (n = Pe(n, u.meta)), u.meta = n, u.meta.request_index = nt[Qn.id], Xn(o, e = a ? a + ":" + e : e, u, i)
				},
				setMeta: function (e, n) {
					be(et, e, n)
				},
				removeMeta: function (e) {
					ke(et, e)
				},
				getMeta: function () {
					return Ce(et)
				},
				updateRequestIndex: function (e) {
					if (!Qn || !e) return 0;
					ge(nt, Qn.id) || (nt[Qn.id] = {});
					var n = nt[Qn.id];
					return ge(n, e) || (n[e] = -1), n[e] += 1, n[e]
				}
			},
			Be = function (t, r) {
				if (!t) return r;
				var i = {};
				return v.keys(r).forEach(function (e) {
					var n = r[e];
					"__PREFIX" !== e || "__PREFIX" !== n ? i[e] = t + ":" + n : i[t.toUpperCase()] = "" + t
				}), i
			},
			j = Be("card", An({}, {
				ADD_NEW_CARD: "add_new"
			}, {
				APP_SELECT: "app:select"
			})),
			Me = Be("saved_cards", {
				__PREFIX: "__PREFIX",
				CHECK_SAVED_CARDS: "check",
				HIDE_SAVED_CARDS: "hide",
				SHOW_SAVED_CARDS: "show",
				SKIP_SAVED_CARDS: "skip",
				EMI_PLAN_VIEW_SAVED_CARDS: "emi:plans:view",
				OTP_SUBMIT_SAVED_CARDS: "save:otp:submit",
				ACCESS_OTP_SUBMIT_SAVED_CARDS: "access:otp:submit",
				USER_CONSENT_FOR_TOKENIZATION: "user_consent_for_tokenization",
				TOKENIZATION_KNOW_MORE_MODAL: "tokenization_know_more_modal"
			}),
			n = Be("emi", {
				VIEW_EMI_PLANS: "plans:view",
				EDIT_EMI_PLANS: "plans:edit",
				PAY_WITHOUT_EMI: "pay_without",
				VIEW_ALL_EMI_PLANS: "plans:view:all",
				SELECT_EMI_PLAN: "plan:select",
				CHOOSE_EMI_PLAN: "plan:choose",
				EMI_PLANS: "plans",
				EMI_CONTACT: "contact",
				EMI_CONTACT_FILLED: "contact:filled"
			}),
			F = An({}, {
				SHOW_AVS_SCREEN: "avs_screen:show"
			}, {
				HIDE_ADD_CARD_SCREEN: "add_cards:hide"
			}, {
				SHOW_PAYPAL_RETRY_SCREEN: "paypal_retry:show",
				SHOW_PAYPAL_RETRY_ON_OTP_SCREEN: "paypal_retry:show:otp_screen",
				PAYPAL_RETRY_CANCEL_BTN_CLICK: "paypal_retry:cancel_click",
				PAYPAL_RETRY_PAYPAL_BTN_CLICK: "paypal_retry:paypal_click",
				PAYPAL_RETRY_PAYPAL_ENABLED: "paypal_retry:paypal_enabled"
			});
		An({}, j, Me, n, F);
		var rt = Be("cred", {
			ELIGIBILITY_CHECK: "eligibility_check",
			SUBTEXT_OFFER_EXPERIMENT: "subtext_offer_experiment",
			EXPERIMENT_OFFER_SELECTED: "experiment_offer_selected"
		});
		Be("offer", An({}, {
			APPLY: "apply"
		}));
		Be("p13n", An({}, {
			INSTRUMENTS_SHOWN: "instruments_shown",
			INSTRUMENTS_LIST: "instruments:list"
		}));
		Be("home", An({}, {
			HOME_LOADED: "checkoutHomeScreenLoaded",
			PAYMENT_INSTRUMENT_SELECTED: "checkoutPaymentInstrumentSelected",
			PAYMENT_METHOD_SELECTED: "checkoutPaymentMethodSelected",
			METHODS_SHOWN: "methods:shown",
			METHODS_HIDE: "methods:hide",
			P13N_EXPERIMENT: "p13n:experiment",
			LANDING: "landing",
			PROCEED: "proceed"
		}));
		Be("order", An({}, {
			INVALID_TPV: "invalid_tpv"
		}));
		Be("downtime", An({}, {
			ALERT_SHOW: "alert:show",
			CALLOUT_SHOW: "callout:show",
			DOWNTIME_ALERTSHOW: "alert:show"
		}));
		var it, at = "js_error",
			ot = (it = {}, v.keys(Mn).forEach(function (e) {
				var t = Mn[e],
					e = "Track" + t.charAt(0).toUpperCase() + t.slice(1);
				it[e] = function (e, n) {
					tt.track(e, {
						type: t,
						data: n
					})
				}
			}), it.Track = function (e, n) {
				tt.track(e, {
					data: n
				})
			}, it);

		function ut(e) {
			for (var n = 0, t = g(e).split("").reverse(), r = 0; r < t.length; r++) {
				var i = t[r],
					i = In(i, 10);
				r % 2 && (i *= 2), 9 < i && (i -= 9), n += i
			}
			return n % 10 == 0
		}

		function ct(e) {
			return e
		}

		function st() {
			return this._evts = {}, this._defs = {}, this
		}
		ot = An({}, ot, {
			setMeta: tt.setMeta,
			removeMeta: tt.removeMeta,
			updateRequestIndex: tt.updateRequestIndex,
			setR: tt.setR
		}), st.prototype = {
			onNew: ct,
			def: function (e, n) {
				this._defs[e] = n
			},
			on: function (e, n) {
				var t;
				return I(e) && T(n) && ((t = this._evts)[e] || (t[e] = []), !1 !== this.onNew(e, n) && t[e].push(n)), this
			},
			once: function (n, e) {
				var t = e,
					r = this;
				return this.on(n, e = function e() {
					t.apply(r, arguments), r.off(n, e)
				})
			},
			off: function (t, e) {
				var n = arguments.length;
				if (!n) return st.call(this);
				var r = this._evts;
				if (2 === n) {
					n = r[t];
					if (!T(e) || !N(n)) return;
					if (n.splice(se(n, e), 1), n.length) return
				}
				return r[t] ? delete r[t] : (t += ".", Se(r, function (e, n) {
					n.indexOf(t) || delete r[n]
				})), this
			},
			emit: function (e, n) {
				var t = this;
				return (this._evts[e] || []).forEach(function (e) {
					try {
						e.call(t, n)
					} catch (e) {
						console.error
					}
				}), this
			},
			emitter: function () {
				var e = arguments,
					n = this;
				return function () {
					n.emit.apply(n, e)
				}
			}
		};
		var lt = o.userAgent,
			mt = o.vendor;

		function dt(e) {
			return e.test(lt)
		}

		function pt(e) {
			return e.test(mt)
		}
		dt(/MSIE |Trident\//);
		var ft = dt(/iPhone/),
			ht = ft || dt(/iPad/),
			vt = dt(/Android/),
			gt = dt(/iPad/),
			yt = dt(/Windows NT/),
			_t = dt(/Linux/),
			bt = dt(/Mac OS/);
		dt(/^((?!chrome|android).)*safari/i) || pt(/Apple/);
		Me = dt(/firefox/), n = dt(/Chrome/) && pt(/Google Inc/);
		dt(/; wv\) |Gecko\) Version\/[^ ]+ Chrome/);
		var wt = dt(/Instagram/),
			kt = dt(/SamsungBrowser/),
			F = dt(/FB_IAB/),
			Be = dt(/FBAN/),
			St = F || Be;
		var Et = dt(/; wv\) |Gecko\) Version\/[^ ]+ Chrome|Windows Phone|Opera Mini|UCBrowser|CriOS/) || St || wt || ht || dt(/Android 4/);
		dt(/iPhone/);
		var Be = (Be = lt.match(/Chrome\/(\d+)/)) && In(Be[1], 10),
			Rt = vt && (Be || Me),
			At = dt(/(Vivo|HeyTap|Realme|Oppo)Browser/) || ht || vt && !n && !Me,
			Pt = function () {
				return ft || gt ? "iOS" : vt ? "android" : yt ? "windows" : _t ? "linux" : bt ? "macOS" : "other"
			},
			Ct = function () {
				return ft ? "iPhone" : gt ? "iPad" : vt ? "android" : s.matchMedia("(max-device-height: 485px),(max-device-width: 485px)").matches ? "mobile" : "desktop"
			},
			Dt = {
				key: "",
				account_id: "",
				image: "",
				amount: 100,
				currency: "INR",
				order_id: "",
				invoice_id: "",
				subscription_id: "",
				auth_link_id: "",
				payment_link_id: "",
				notes: null,
				callback_url: "",
				redirect: !1,
				description: "",
				customer_id: "",
				recurring: null,
				payout: null,
				contact_id: "",
				signature: "",
				retry: !0,
				target: "",
				subscription_card_change: null,
				display_currency: "",
				display_amount: "",
				recurring_token: {
					max_amount: 0,
					expire_by: 0
				},
				checkout_config_id: "",
				send_sms_hash: !1,
				show_address: !0,
				show_coupons: !0,
				one_click_checkout: !1,
				force_cod: !1,
				mandatory_login: !1
			};

		function xt(e, n, t, r) {
			var i = n[t = t.toLowerCase()],
				n = typeof i;
			"object" == n && null === i ? I(r) && ("true" === r || "1" === r ? r = !0 : "false" !== r && "0" !== r || (r = !1)) : "string" == n && (x(r) || D(r)) ? r = g(r) : "number" == n ? r = a(r) : "boolean" == n && (I(r) ? "true" === r || "1" === r ? r = !0 : "false" !== r && "0" !== r || (r = !1) : x(r) && (r = !!r)), null !== i && n != typeof r || (e[t] = r)
		}

		function It(r, i, a) {
			Se(r[i], function (e, n) {
				var t = typeof e;
				"string" != t && "number" != t && "boolean" != t || (n = i + a[0] + n, 1 < a.length && (n += a[1]), r[n] = e)
			}), delete r[i]
		}

		function Tt(e, r) {
			var i = {};
			return Se(e, function (e, t) {
				t in Mt ? Se(e, function (e, n) {
					xt(i, r, t + "." + n, e)
				}) : xt(i, r, t, e)
			}), i
		}
		var Mt = {};

		function Nt(t) {
			var e;
			"object" == typeof (e = t).retry && "boolean" == typeof e.retry.enabled && (e.retry = e.retry.enabled), t = e, Se(Dt, function (e, t) {
				L(e) && !O(e) && (Mt[t] = !0, Se(e, function (e, n) {
					Dt[t + "." + n] = e
				}), delete Dt[t])
			}), (t = Tt(t, Dt)).callback_url && Et && (t.redirect = !0), this.get = function (e) {
				return arguments.length ? (e in t ? t : Dt)[e] : t
			}, this.set = function (e, n) {
				t[e] = n
			}, this.unset = function (e) {
				delete t[e]
			}
		}
		var Bt = "rzp_device_id",
			Lt = 1,
			Ot = "",
			Ft = "",
			Kt = s.screen;

		function jt() {
			return function (e) {
				e = new s.TextEncoder("utf-8").encode(e);
				return s.crypto.subtle.digest("SHA-1", e).then(function (e) {
					return Ot = function (e) {
						for (var n = [], t = new s.DataView(e), r = 0; r < t.byteLength; r += 4) {
							var i = t.getUint32(r).toString(16),
								a = "00000000",
								a = (a + i).slice(-a.length);
							n.push(a)
						}
						return n.join("")
					}(e)
				})
			}([o.userAgent, o.language, (new d).getTimezoneOffset(), o.platform, o.cpuClass, o.hardwareConcurrency, Kt.colorDepth, o.deviceMemory, Kt.width + Kt.height, Kt.width * Kt.height, s.devicePixelRatio].join())
		}
		try {
			jt().then(function (e) {
				e && function (e) {
					if (e) {
						try {
							Ft = Bn.getItem(Bt)
						} catch (e) {}
						if (!Ft) {
							Ft = [Lt, e, d.now(), p.random().toString().slice(-8)].join(".");
							try {
								Bn.setItem(Bt, Ft)
							} catch (e) {}
						}
					}
				}(Ot = e)
			}).catch(l)
		} catch (e) {}

		function zt() {}

		function Ht(e) {
			return e()
		}

		function Ut(e) {
			if (null == e) return zt;
			for (var n = arguments.length, t = new m(1 < n ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
			var i = e.subscribe.apply(e, t);
			return i.unsubscribe ? function () {
				return i.unsubscribe()
			} : i
		}

		function Gt(e) {
			var n;
			return Ut(e, function (e) {
				return n = e
			})(), n
		}
		En.resolve();
		var Vt = [];

		function Yt(o, r) {
			var u;
			void 0 === r && (r = zt);
			var c = new Set;

			function i(e) {
				if (a = e, ((i = o) != i ? a == a : i !== a || i && "object" == typeof i || "function" == typeof i) && (o = e, u)) {
					for (var e = !Vt.length, n = function (e, n) {
							var t = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
							if (t) return (t = t.call(e)).next.bind(t);
							if (Array.isArray(e) || (t = Cn(e)) || n && e && "number" == typeof e.length) {
								t && (e = t);
								var r = 0;
								return function () {
									return r >= e.length ? {
										done: !0
									} : {
										done: !1,
										value: e[r++]
									}
								}
							}
							throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
						}(c); !(t = n()).done;) {
						var t = t.value;
						t[1](), Vt.push(t, o)
					}
					if (e) {
						for (var r = 0; r < Vt.length; r += 2) Vt[r][0](Vt[r + 1]);
						Vt.length = 0
					}
				}
				var i, a
			}
			return {
				set: i,
				update: function (e) {
					i(e(o))
				},
				subscribe: function (e, n) {
					var t = [e, n = void 0 === n ? zt : n];
					return c.add(t), 1 === c.size && (u = r(i) || zt), e(o),
						function () {
							c.delete(t), 0 === c.size && (u(), u = null)
						}
				}
			}
		}

		function $t(e, u, n) {
			var c = !m.isArray(e),
				s = c ? [e] : e,
				l = u.length < 2;
			return {
				subscribe: Yt(n, function (n) {
					function t() {
						var e;
						a || (o(), e = u(c ? i[0] : i, n), l ? n(e) : o = "function" == typeof e ? e : zt)
					}
					var r = !1,
						i = [],
						a = 0,
						o = zt,
						e = s.map(function (e, n) {
							return Ut(e, function (e) {
								i[n] = e, a &= ~(1 << n), r && t()
							}, function () {
								a |= 1 << n
							})
						}),
						r = !0;
					return t(),
						function () {
							e.forEach(Ht), o()
						}
				}).subscribe
			}
		}
		var Zt = ["rzp_test_mZcDnA8WJMFQQD", "rzp_live_ENneAQv5t7kTEQ", "rzp_test_kD8QgcxVGzYSOU", "rzp_live_alEMh9FVT4XpwM"];

		function Wt(e, n, t) {
			return void 0 === t && (t = null), (n = "string" == typeof n ? n.split(".") : n).reduce(function (e, n) {
				return e && e[n] ? e[n] : t
			}, e)
		}

		function qt(r, i) {
			return void 0 === i && (i = "."),
				function (e) {
					for (var n = i, t = 0; t < r; t++) n += "0";
					return e.replace(n, "")
				}
		}

		function Jt(e, n) {
			return e.replace(/\./, n = void 0 === n ? "," : n)
		}

		function Xt(r) {
			Se(r, function (e, n) {
				var t;
				tr[n] = (t = {}, t = Pe(tr.default)(t), Pe(tr[n] || {})(t)), tr[n].code = n, r[n] && (tr[n].symbol = r[n])
			})
		}

		function Qt(t) {
			var r = {};
			Se(t, function (e, n) {
				nr[n] = e, tr[n] = tr[n] || {}, t[n].min_value && (tr[n].minimum = t[n].min_value), t[n].denomination && (tr[n].decimals = p.LOG10E * p.log(t[n].denomination)), r[n] = t[n].symbol
			}), Pe(or, r), Xt(r)
		}
		var er = new(function () {
				function e() {
					var r = this;
					this.instance = null, this.preferenceResponse = null, this.updateInstance = function (e) {
						r.razorpayInstance = e
					}, this.triggerInstanceMethod = function (e, n) {
						if (void 0 === n && (n = []), r.instance) return r.instance[e].apply(r.instance, n)
					}, this.set = function () {
						for (var e = arguments.length, n = new m(e), t = 0; t < e; t++) n[t] = arguments[t];
						return r.triggerInstanceMethod("set", n)
					}, this.subscribe = function () {
						for (var e = arguments.length, n = new m(e), t = 0; t < e; t++) n[t] = arguments[t];
						return r._store.subscribe.apply(r, n)
					}, this.get = function () {
						for (var e = arguments.length, n = new m(e), t = 0; t < e; t++) n[t] = arguments[t];
						return n.length ? r.triggerInstanceMethod("get", n) : r.instance
					}, this.getMerchantOption = function (e) {
						void 0 === e && (e = "");
						var n = r.triggerInstanceMethod("get") || {};
						return e ? Wt(n, e) : n
					}, this.isIRCTC = function () {
						return 0 <= Zt.indexOf(r.get("key"))
					}, this.getCardFeatures = function (e) {
						return r.instance.getCardFeatures(e)
					}, this._store = Yt()
				}
				var n, t, r;
				return n = e, (t = [{
					key: "razorpayInstance",
					get: function () {
						return this.instance
					},
					set: function (e) {
						this.instance = e, this.preferenceResponse = e.preferences, this._store.set(e), this.isIRCTC() && this.set("theme.image_frame", !1)
					}
				}, {
					key: "preferences",
					get: function () {
						return this.preferenceResponse
					}
				}]) && Rn(n.prototype, t), r && Rn(n, r), e
			}()),
			nr = {
				AED: {
					code: "784",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "د.إ",
					name: "Emirati Dirham"
				},
				ALL: {
					code: "008",
					denomination: 100,
					min_value: 221,
					min_auth_value: 100,
					symbol: "Lek",
					name: "Albanian Lek"
				},
				AMD: {
					code: "051",
					denomination: 100,
					min_value: 975,
					min_auth_value: 100,
					symbol: "֏",
					name: "Armenian Dram"
				},
				ARS: {
					code: "032",
					denomination: 100,
					min_value: 80,
					min_auth_value: 100,
					symbol: "ARS",
					name: "Argentine Peso"
				},
				AUD: {
					code: "036",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "A$",
					name: "Australian Dollar"
				},
				AWG: {
					code: "533",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "Afl.",
					name: "Aruban or Dutch Guilder"
				},
				BBD: {
					code: "052",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "Bds$",
					name: "Barbadian or Bajan Dollar"
				},
				BDT: {
					code: "050",
					denomination: 100,
					min_value: 168,
					min_auth_value: 100,
					symbol: "৳",
					name: "Bangladeshi Taka"
				},
				BMD: {
					code: "060",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "$",
					name: "Bermudian Dollar"
				},
				BND: {
					code: "096",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "BND",
					name: "Bruneian Dollar"
				},
				BOB: {
					code: "068",
					denomination: 100,
					min_value: 14,
					min_auth_value: 100,
					symbol: "Bs",
					name: "Bolivian Bolíviano"
				},
				BSD: {
					code: "044",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "BSD",
					name: "Bahamian Dollar"
				},
				BWP: {
					code: "072",
					denomination: 100,
					min_value: 22,
					min_auth_value: 100,
					symbol: "P",
					name: "Botswana Pula"
				},
				BZD: {
					code: "084",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "BZ$",
					name: "Belizean Dollar"
				},
				CAD: {
					code: "124",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "C$",
					name: "Canadian Dollar"
				},
				CHF: {
					code: "756",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "CHf",
					name: "Swiss Franc"
				},
				CNY: {
					code: "156",
					denomination: 100,
					min_value: 14,
					min_auth_value: 100,
					symbol: "¥",
					name: "Chinese Yuan Renminbi"
				},
				COP: {
					code: "170",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "COL$",
					name: "Colombian Peso"
				},
				CRC: {
					code: "188",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "₡",
					name: "Costa Rican Colon"
				},
				CUP: {
					code: "192",
					denomination: 100,
					min_value: 53,
					min_auth_value: 100,
					symbol: "$MN",
					name: "Cuban Peso"
				},
				CZK: {
					code: "203",
					denomination: 100,
					min_value: 46,
					min_auth_value: 100,
					symbol: "Kč",
					name: "Czech Koruna"
				},
				DKK: {
					code: "208",
					denomination: 100,
					min_value: 250,
					min_auth_value: 100,
					symbol: "DKK",
					name: "Danish Krone"
				},
				DOP: {
					code: "214",
					denomination: 100,
					min_value: 102,
					min_auth_value: 100,
					symbol: "RD$",
					name: "Dominican Peso"
				},
				DZD: {
					code: "012",
					denomination: 100,
					min_value: 239,
					min_auth_value: 100,
					symbol: "د.ج",
					name: "Algerian Dinar"
				},
				EGP: {
					code: "818",
					denomination: 100,
					min_value: 35,
					min_auth_value: 100,
					symbol: "E£",
					name: "Egyptian Pound"
				},
				ETB: {
					code: "230",
					denomination: 100,
					min_value: 57,
					min_auth_value: 100,
					symbol: "ብር",
					name: "Ethiopian Birr"
				},
				EUR: {
					code: "978",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "€",
					name: "Euro"
				},
				FJD: {
					code: "242",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "FJ$",
					name: "Fijian Dollar"
				},
				GBP: {
					code: "826",
					denomination: 100,
					min_value: 30,
					min_auth_value: 100,
					symbol: "£",
					name: "British Pound"
				},
				GIP: {
					code: "292",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "GIP",
					name: "Gibraltar Pound"
				},
				GMD: {
					code: "270",
					denomination: 100,
					min_value: 100,
					min_auth_value: 100,
					symbol: "D",
					name: "Gambian Dalasi"
				},
				GTQ: {
					code: "320",
					denomination: 100,
					min_value: 16,
					min_auth_value: 100,
					symbol: "Q",
					name: "Guatemalan Quetzal"
				},
				GYD: {
					code: "328",
					denomination: 100,
					min_value: 418,
					min_auth_value: 100,
					symbol: "G$",
					name: "Guyanese Dollar"
				},
				HKD: {
					code: "344",
					denomination: 100,
					min_value: 400,
					min_auth_value: 100,
					symbol: "HK$",
					name: "Hong Kong Dollar"
				},
				HNL: {
					code: "340",
					denomination: 100,
					min_value: 49,
					min_auth_value: 100,
					symbol: "HNL",
					name: "Honduran Lempira"
				},
				HRK: {
					code: "191",
					denomination: 100,
					min_value: 14,
					min_auth_value: 100,
					symbol: "kn",
					name: "Croatian Kuna"
				},
				HTG: {
					code: "332",
					denomination: 100,
					min_value: 167,
					min_auth_value: 100,
					symbol: "G",
					name: "Haitian Gourde"
				},
				HUF: {
					code: "348",
					denomination: 100,
					min_value: 555,
					min_auth_value: 100,
					symbol: "Ft",
					name: "Hungarian Forint"
				},
				IDR: {
					code: "360",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "Rp",
					name: "Indonesian Rupiah"
				},
				ILS: {
					code: "376",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "₪",
					name: "Israeli Shekel"
				},
				INR: {
					code: "356",
					denomination: 100,
					min_value: 100,
					min_auth_value: 100,
					symbol: "₹",
					name: "Indian Rupee"
				},
				JMD: {
					code: "388",
					denomination: 100,
					min_value: 250,
					min_auth_value: 100,
					symbol: "J$",
					name: "Jamaican Dollar"
				},
				KES: {
					code: "404",
					denomination: 100,
					min_value: 201,
					min_auth_value: 100,
					symbol: "Ksh",
					name: "Kenyan Shilling"
				},
				KGS: {
					code: "417",
					denomination: 100,
					min_value: 140,
					min_auth_value: 100,
					symbol: "Лв",
					name: "Kyrgyzstani Som"
				},
				KHR: {
					code: "116",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "៛",
					name: "Cambodian Riel"
				},
				KYD: {
					code: "136",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "CI$",
					name: "Caymanian Dollar"
				},
				KZT: {
					code: "398",
					denomination: 100,
					min_value: 759,
					min_auth_value: 100,
					symbol: "₸",
					name: "Kazakhstani Tenge"
				},
				LAK: {
					code: "418",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "₭",
					name: "Lao Kip"
				},
				LBP: {
					code: "422",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "ل.ل.",
					name: "Lebanese Pound"
				},
				LKR: {
					code: "144",
					denomination: 100,
					min_value: 358,
					min_auth_value: 100,
					symbol: "රු",
					name: "Sri Lankan Rupee"
				},
				LRD: {
					code: "430",
					denomination: 100,
					min_value: 325,
					min_auth_value: 100,
					symbol: "L$",
					name: "Liberian Dollar"
				},
				LSL: {
					code: "426",
					denomination: 100,
					min_value: 29,
					min_auth_value: 100,
					symbol: "LSL",
					name: "Basotho Loti"
				},
				MAD: {
					code: "504",
					denomination: 100,
					min_value: 20,
					min_auth_value: 100,
					symbol: "د.م.",
					name: "Moroccan Dirham"
				},
				MDL: {
					code: "498",
					denomination: 100,
					min_value: 35,
					min_auth_value: 100,
					symbol: "MDL",
					name: "Moldovan Leu"
				},
				MKD: {
					code: "807",
					denomination: 100,
					min_value: 109,
					min_auth_value: 100,
					symbol: "ден",
					name: "Macedonian Denar"
				},
				MMK: {
					code: "104",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "MMK",
					name: "Burmese Kyat"
				},
				MNT: {
					code: "496",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "₮",
					name: "Mongolian Tughrik"
				},
				MOP: {
					code: "446",
					denomination: 100,
					min_value: 17,
					min_auth_value: 100,
					symbol: "MOP$",
					name: "Macau Pataca"
				},
				MUR: {
					code: "480",
					denomination: 100,
					min_value: 70,
					min_auth_value: 100,
					symbol: "₨",
					name: "Mauritian Rupee"
				},
				MVR: {
					code: "462",
					denomination: 100,
					min_value: 31,
					min_auth_value: 100,
					symbol: "Rf",
					name: "Maldivian Rufiyaa"
				},
				MWK: {
					code: "454",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "MK",
					name: "Malawian Kwacha"
				},
				MXN: {
					code: "484",
					denomination: 100,
					min_value: 39,
					min_auth_value: 100,
					symbol: "Mex$",
					name: "Mexican Peso"
				},
				MYR: {
					code: "458",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "RM",
					name: "Malaysian Ringgit"
				},
				NAD: {
					code: "516",
					denomination: 100,
					min_value: 29,
					min_auth_value: 100,
					symbol: "N$",
					name: "Namibian Dollar"
				},
				NGN: {
					code: "566",
					denomination: 100,
					min_value: 723,
					min_auth_value: 100,
					symbol: "₦",
					name: "Nigerian Naira"
				},
				NIO: {
					code: "558",
					denomination: 100,
					min_value: 66,
					min_auth_value: 100,
					symbol: "NIO",
					name: "Nicaraguan Cordoba"
				},
				NOK: {
					code: "578",
					denomination: 100,
					min_value: 300,
					min_auth_value: 100,
					symbol: "NOK",
					name: "Norwegian Krone"
				},
				NPR: {
					code: "524",
					denomination: 100,
					min_value: 221,
					min_auth_value: 100,
					symbol: "रू",
					name: "Nepalese Rupee"
				},
				NZD: {
					code: "554",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "NZ$",
					name: "New Zealand Dollar"
				},
				PEN: {
					code: "604",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "S/",
					name: "Peruvian Sol"
				},
				PGK: {
					code: "598",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "PGK",
					name: "Papua New Guinean Kina"
				},
				PHP: {
					code: "608",
					denomination: 100,
					min_value: 106,
					min_auth_value: 100,
					symbol: "₱",
					name: "Philippine Peso"
				},
				PKR: {
					code: "586",
					denomination: 100,
					min_value: 227,
					min_auth_value: 100,
					symbol: "₨",
					name: "Pakistani Rupee"
				},
				QAR: {
					code: "634",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "QR",
					name: "Qatari Riyal"
				},
				RUB: {
					code: "643",
					denomination: 100,
					min_value: 130,
					min_auth_value: 100,
					symbol: "₽",
					name: "Russian Ruble"
				},
				SAR: {
					code: "682",
					denomination: 100,
					min_value: 10,
					min_auth_value: 100,
					symbol: "SR",
					name: "Saudi Arabian Riyal"
				},
				SCR: {
					code: "690",
					denomination: 100,
					min_value: 28,
					min_auth_value: 100,
					symbol: "SRe",
					name: "Seychellois Rupee"
				},
				SEK: {
					code: "752",
					denomination: 100,
					min_value: 300,
					min_auth_value: 100,
					symbol: "SEK",
					name: "Swedish Krona"
				},
				SGD: {
					code: "702",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "S$",
					name: "Singapore Dollar"
				},
				SLL: {
					code: "694",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "Le",
					name: "Sierra Leonean Leone"
				},
				SOS: {
					code: "706",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "Sh.so.",
					name: "Somali Shilling"
				},
				SSP: {
					code: "728",
					denomination: 100,
					min_value: 100,
					min_auth_value: 100,
					symbol: "SS£",
					name: "South Sudanese Pound"
				},
				SVC: {
					code: "222",
					denomination: 100,
					min_value: 18,
					min_auth_value: 100,
					symbol: "₡",
					name: "Salvadoran Colon"
				},
				SZL: {
					code: "748",
					denomination: 100,
					min_value: 29,
					min_auth_value: 100,
					symbol: "E",
					name: "Swazi Lilangeni"
				},
				THB: {
					code: "764",
					denomination: 100,
					min_value: 64,
					min_auth_value: 100,
					symbol: "฿",
					name: "Thai Baht"
				},
				TTD: {
					code: "780",
					denomination: 100,
					min_value: 14,
					min_auth_value: 100,
					symbol: "TT$",
					name: "Trinidadian Dollar"
				},
				TZS: {
					code: "834",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "Sh",
					name: "Tanzanian Shilling"
				},
				USD: {
					code: "840",
					denomination: 100,
					min_value: 50,
					min_auth_value: 100,
					symbol: "$",
					name: "US Dollar"
				},
				UYU: {
					code: "858",
					denomination: 100,
					min_value: 67,
					min_auth_value: 100,
					symbol: "$U",
					name: "Uruguayan Peso"
				},
				UZS: {
					code: "860",
					denomination: 100,
					min_value: 1e3,
					min_auth_value: 100,
					symbol: "so'm",
					name: "Uzbekistani Som"
				},
				YER: {
					code: "886",
					denomination: 100,
					min_value: 501,
					min_auth_value: 100,
					symbol: "﷼",
					name: "Yemeni Rial"
				},
				ZAR: {
					code: "710",
					denomination: 100,
					min_value: 29,
					min_auth_value: 100,
					symbol: "R",
					name: "South African Rand"
				}
			},
			Be = {
				three: function (e, n) {
					e = g(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1,");
					return qt(n)(e)
				},
				threecommadecimal: function (e, n) {
					e = Jt(g(e)).replace(new RegExp("(.{1,3})(?=(...)+(\\,.{" + n + "})$)", "g"), "$1.");
					return qt(n, ",")(e)
				},
				threespaceseparator: function (e, n) {
					e = g(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1 ");
					return qt(n)(e)
				},
				threespacecommadecimal: function (e, n) {
					e = Jt(g(e)).replace(new RegExp("(.{1,3})(?=(...)+(\\,.{" + n + "})$)", "g"), "$1 ");
					return qt(n, ",")(e)
				},
				szl: function (e, n) {
					e = g(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1, ");
					return qt(n)(e)
				},
				chf: function (e, n) {
					e = g(e).replace(new RegExp("(.{1,3})(?=(...)+(\\..{" + n + "})$)", "g"), "$1'");
					return qt(n)(e)
				},
				inr: function (e, n) {
					e = g(e).replace(new RegExp("(.{1,2})(?=.(..)+(\\..{" + n + "})$)", "g"), "$1,");
					return qt(n)(e)
				},
				none: function (e) {
					return g(e)
				}
			},
			tr = {
				default: {
					decimals: 2,
					format: Be.three,
					minimum: 100
				},
				AED: {
					minor: "fil",
					minimum: 10
				},
				AFN: {
					minor: "pul"
				},
				ALL: {
					minor: "qindarka",
					minimum: 221
				},
				AMD: {
					minor: "luma",
					minimum: 975
				},
				ANG: {
					minor: "cent"
				},
				AOA: {
					minor: "lwei"
				},
				ARS: {
					format: Be.threecommadecimal,
					minor: "centavo",
					minimum: 80
				},
				AUD: {
					format: Be.threespaceseparator,
					minimum: 50,
					minor: "cent"
				},
				AWG: {
					minor: "cent",
					minimum: 10
				},
				AZN: {
					minor: "qäpik"
				},
				BAM: {
					minor: "fenning"
				},
				BBD: {
					minor: "cent",
					minimum: 10
				},
				BDT: {
					minor: "paisa",
					minimum: 168
				},
				BGN: {
					minor: "stotinki"
				},
				BHD: {
					decimals: 3,
					minor: "fils"
				},
				BIF: {
					decimals: 0,
					major: "franc",
					minor: "centime"
				},
				BMD: {
					minor: "cent",
					minimum: 10
				},
				BND: {
					minor: "sen",
					minimum: 10
				},
				BOB: {
					minor: "centavo",
					minimum: 14
				},
				BRL: {
					format: Be.threecommadecimal,
					minimum: 50,
					minor: "centavo"
				},
				BSD: {
					minor: "cent",
					minimum: 10
				},
				BTN: {
					minor: "chetrum"
				},
				BWP: {
					minor: "thebe",
					minimum: 22
				},
				BYR: {
					decimals: 0,
					major: "ruble"
				},
				BZD: {
					minor: "cent",
					minimum: 10
				},
				CAD: {
					minimum: 50,
					minor: "cent"
				},
				CDF: {
					minor: "centime"
				},
				CHF: {
					format: Be.chf,
					minimum: 50,
					minor: "rappen"
				},
				CLP: {
					decimals: 0,
					format: Be.none,
					major: "peso",
					minor: "centavo"
				},
				CNY: {
					minor: "jiao",
					minimum: 14
				},
				COP: {
					format: Be.threecommadecimal,
					minor: "centavo",
					minimum: 1e3
				},
				CRC: {
					format: Be.threecommadecimal,
					minor: "centimo",
					minimum: 1e3
				},
				CUC: {
					minor: "centavo"
				},
				CUP: {
					minor: "centavo",
					minimum: 53
				},
				CVE: {
					minor: "centavo"
				},
				CZK: {
					format: Be.threecommadecimal,
					minor: "haler",
					minimum: 46
				},
				DJF: {
					decimals: 0,
					major: "franc",
					minor: "centime"
				},
				DKK: {
					minimum: 250,
					minor: "øre"
				},
				DOP: {
					minor: "centavo",
					minimum: 102
				},
				DZD: {
					minor: "centime",
					minimum: 239
				},
				EGP: {
					minor: "piaster",
					minimum: 35
				},
				ERN: {
					minor: "cent"
				},
				ETB: {
					minor: "cent",
					minimum: 57
				},
				EUR: {
					minimum: 50,
					minor: "cent"
				},
				FJD: {
					minor: "cent",
					minimum: 10
				},
				FKP: {
					minor: "pence"
				},
				GBP: {
					minimum: 30,
					minor: "pence"
				},
				GEL: {
					minor: "tetri"
				},
				GHS: {
					minor: "pesewas",
					minimum: 3
				},
				GIP: {
					minor: "pence",
					minimum: 10
				},
				GMD: {
					minor: "butut"
				},
				GTQ: {
					minor: "centavo",
					minimum: 16
				},
				GYD: {
					minor: "cent",
					minimum: 418
				},
				HKD: {
					minimum: 400,
					minor: "cent"
				},
				HNL: {
					minor: "centavo",
					minimum: 49
				},
				HRK: {
					format: Be.threecommadecimal,
					minor: "lipa",
					minimum: 14
				},
				HTG: {
					minor: "centime",
					minimum: 167
				},
				HUF: {
					decimals: 0,
					format: Be.none,
					major: "forint",
					minimum: 555
				},
				IDR: {
					format: Be.threecommadecimal,
					minor: "sen",
					minimum: 1e3
				},
				ILS: {
					minor: "agorot",
					minimum: 10
				},
				INR: {
					format: Be.inr,
					minor: "paise"
				},
				IQD: {
					decimals: 3,
					minor: "fil"
				},
				IRR: {
					minor: "rials"
				},
				ISK: {
					decimals: 0,
					format: Be.none,
					major: "króna",
					minor: "aurar"
				},
				JMD: {
					minor: "cent",
					minimum: 250
				},
				JOD: {
					decimals: 3,
					minor: "fil"
				},
				JPY: {
					decimals: 0,
					minimum: 50,
					minor: "sen"
				},
				KES: {
					minor: "cent",
					minimum: 201
				},
				KGS: {
					minor: "tyyn",
					minimum: 140
				},
				KHR: {
					minor: "sen",
					minimum: 1e3
				},
				KMF: {
					decimals: 0,
					major: "franc",
					minor: "centime"
				},
				KPW: {
					minor: "chon"
				},
				KRW: {
					decimals: 0,
					major: "won",
					minor: "chon"
				},
				KWD: {
					decimals: 3,
					minor: "fil"
				},
				KYD: {
					minor: "cent",
					minimum: 10
				},
				KZT: {
					minor: "tiyn",
					minimum: 759
				},
				LAK: {
					minor: "at",
					minimum: 1e3
				},
				LBP: {
					format: Be.threespaceseparator,
					minor: "piastre",
					minimum: 1e3
				},
				LKR: {
					minor: "cent",
					minimum: 358
				},
				LRD: {
					minor: "cent",
					minimum: 325
				},
				LSL: {
					minor: "lisente",
					minimum: 29
				},
				LTL: {
					format: Be.threespacecommadecimal,
					minor: "centu"
				},
				LVL: {
					minor: "santim"
				},
				LYD: {
					decimals: 3,
					minor: "dirham"
				},
				MAD: {
					minor: "centime",
					minimum: 20
				},
				MDL: {
					minor: "ban",
					minimum: 35
				},
				MGA: {
					decimals: 0,
					major: "ariary"
				},
				MKD: {
					minor: "deni"
				},
				MMK: {
					minor: "pya",
					minimum: 1e3
				},
				MNT: {
					minor: "mongo",
					minimum: 1e3
				},
				MOP: {
					minor: "avo",
					minimum: 17
				},
				MRO: {
					minor: "khoum"
				},
				MUR: {
					minor: "cent",
					minimum: 70
				},
				MVR: {
					minor: "lari",
					minimum: 31
				},
				MWK: {
					minor: "tambala",
					minimum: 1e3
				},
				MXN: {
					minor: "centavo",
					minimum: 39
				},
				MYR: {
					minor: "sen",
					minimum: 10
				},
				MZN: {
					decimals: 0,
					major: "metical"
				},
				NAD: {
					minor: "cent",
					minimum: 29
				},
				NGN: {
					minor: "kobo",
					minimum: 723
				},
				NIO: {
					minor: "centavo",
					minimum: 66
				},
				NOK: {
					format: Be.threecommadecimal,
					minimum: 300,
					minor: "øre"
				},
				NPR: {
					minor: "paise",
					minimum: 221
				},
				NZD: {
					minimum: 50,
					minor: "cent"
				},
				OMR: {
					minor: "baiza",
					decimals: 3
				},
				PAB: {
					minor: "centesimo"
				},
				PEN: {
					minor: "centimo",
					minimum: 10
				},
				PGK: {
					minor: "toea",
					minimum: 10
				},
				PHP: {
					minor: "centavo",
					minimum: 106
				},
				PKR: {
					minor: "paisa",
					minimum: 227
				},
				PLN: {
					format: Be.threespacecommadecimal,
					minor: "grosz"
				},
				PYG: {
					decimals: 0,
					major: "guarani",
					minor: "centimo"
				},
				QAR: {
					minor: "dirham",
					minimum: 10
				},
				RON: {
					format: Be.threecommadecimal,
					minor: "bani"
				},
				RUB: {
					format: Be.threecommadecimal,
					minor: "kopeck",
					minimum: 130
				},
				RWF: {
					decimals: 0,
					major: "franc",
					minor: "centime"
				},
				SAR: {
					minor: "halalat",
					minimum: 10
				},
				SBD: {
					minor: "cent"
				},
				SCR: {
					minor: "cent",
					minimum: 28
				},
				SEK: {
					format: Be.threespacecommadecimal,
					minimum: 300,
					minor: "öre"
				},
				SGD: {
					minimum: 50,
					minor: "cent"
				},
				SHP: {
					minor: "new pence"
				},
				SLL: {
					minor: "cent",
					minimum: 1e3
				},
				SOS: {
					minor: "centesimi",
					minimum: 1e3
				},
				SRD: {
					minor: "cent"
				},
				STD: {
					minor: "centimo"
				},
				SSP: {
					minor: "piaster"
				},
				SVC: {
					minor: "centavo",
					minimum: 18
				},
				SYP: {
					minor: "piaster"
				},
				SZL: {
					format: Be.szl,
					minor: "cent",
					minimum: 29
				},
				THB: {
					minor: "satang",
					minimum: 64
				},
				TJS: {
					minor: "diram"
				},
				TMT: {
					minor: "tenga"
				},
				TND: {
					decimals: 3,
					minor: "millime"
				},
				TOP: {
					minor: "seniti"
				},
				TRY: {
					minor: "kurus"
				},
				TTD: {
					minor: "cent",
					minimum: 14
				},
				TWD: {
					minor: "cent"
				},
				TZS: {
					minor: "cent",
					minimum: 1e3
				},
				UAH: {
					format: Be.threespacecommadecimal,
					minor: "kopiyka"
				},
				UGX: {
					minor: "cent"
				},
				USD: {
					minimum: 50,
					minor: "cent"
				},
				UYU: {
					format: Be.threecommadecimal,
					minor: "centé",
					minimum: 67
				},
				UZS: {
					minor: "tiyin",
					minimum: 1e3
				},
				VND: {
					format: Be.none,
					minor: "hao,xu"
				},
				VUV: {
					decimals: 0,
					major: "vatu",
					minor: "centime"
				},
				WST: {
					minor: "sene"
				},
				XAF: {
					decimals: 0,
					major: "franc",
					minor: "centime"
				},
				XCD: {
					minor: "cent"
				},
				XPF: {
					decimals: 0,
					major: "franc",
					minor: "centime"
				},
				YER: {
					minor: "fil",
					minimum: 501
				},
				ZAR: {
					format: Be.threespaceseparator,
					minor: "cent",
					minimum: 29
				},
				ZMK: {
					minor: "ngwee"
				}
			},
			rr = {},
			ir = function (e) {
				return tr[e] || tr.default
			},
			ar = ["AED", "ALL", "AMD", "ARS", "AUD", "AWG", "BBD", "BDT", "BMD", "BND", "BOB", "BSD", "BWP", "BZD", "CAD", "CHF", "CNY", "COP", "CRC", "CUP", "CZK", "DKK", "DOP", "DZD", "EGP", "ETB", "EUR", "FJD", "GBP", "GHS", "GIP", "GMD", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "INR", "JMD", "KES", "KGS", "KHR", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "MAD", "MDL", "MKD", "MMK", "MNT", "MOP", "MUR", "MVR", "MWK", "MXN", "MYR", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "PEN", "PGK", "PHP", "PKR", "QAR", "RUB", "SAR", "SCR", "SEK", "SGD", "SLL", "SOS", "SSP", "SVC", "SZL", "THB", "TTD", "TZS", "USD", "UYU", "UZS", "YER", "ZAR"],
			or = {
				AED: "د.إ",
				AFN: "؋",
				ALL: "Lek",
				AMD: "֏",
				ANG: "NAƒ",
				AOA: "Kz",
				ARS: "ARS",
				AUD: "A$",
				AWG: "Afl.",
				AZN: "ман",
				BAM: "KM",
				BBD: "Bds$",
				BDT: "৳",
				BGN: "лв",
				BHD: "د.ب",
				BIF: "FBu",
				BMD: "$",
				BND: "BND",
				BOB: "Bs.",
				BRL: "R$",
				BSD: "BSD",
				BTN: "Nu.",
				BWP: "P",
				BYR: "Br",
				BZD: "BZ$",
				CAD: "C$",
				CDF: "FC",
				CHF: "CHf",
				CLP: "CLP$",
				CNY: "¥",
				COP: "COL$",
				CRC: "₡",
				CUC: "₱",
				CUP: "$MN",
				CVE: "Esc",
				CZK: "Kč",
				DJF: "Fdj",
				DKK: "DKK",
				DOP: "RD$",
				DZD: "د.ج",
				EGP: "E£",
				ERN: "Nfa",
				ETB: "ብር",
				EUR: "€",
				FJD: "FJ$",
				FKP: "FK£",
				GBP: "£",
				GEL: "ლ",
				GHS: "₵",
				GIP: "GIP",
				GMD: "D",
				GNF: "FG",
				GTQ: "Q",
				GYD: "G$",
				HKD: "HK$",
				HNL: "HNL",
				HRK: "kn",
				HTG: "G",
				HUF: "Ft",
				IDR: "Rp",
				ILS: "₪",
				INR: "₹",
				IQD: "ع.د",
				IRR: "﷼",
				ISK: "ISK",
				JMD: "J$",
				JOD: "د.ا",
				JPY: "¥",
				KES: "Ksh",
				KGS: "Лв",
				KHR: "៛",
				KMF: "CF",
				KPW: "KPW",
				KRW: "KRW",
				KWD: "د.ك",
				KYD: "CI$",
				KZT: "₸",
				LAK: "₭",
				LBP: "ل.ل.",
				LD: "LD",
				LKR: "රු",
				LRD: "L$",
				LSL: "LSL",
				LTL: "Lt",
				LVL: "Ls",
				LYD: "LYD",
				MAD: "د.م.",
				MDL: "MDL",
				MGA: "Ar",
				MKD: "ден",
				MMK: "MMK",
				MNT: "₮",
				MOP: "MOP$",
				MRO: "UM",
				MUR: "₨",
				MVR: "Rf",
				MWK: "MK",
				MXN: "Mex$",
				MYR: "RM",
				MZN: "MT",
				NAD: "N$",
				NGN: "₦",
				NIO: "NIO",
				NOK: "NOK",
				NPR: "रू",
				NZD: "NZ$",
				OMR: "ر.ع.",
				PAB: "B/.",
				PEN: "S/",
				PGK: "PGK",
				PHP: "₱",
				PKR: "₨",
				PLN: "Zł",
				PYG: "₲",
				QAR: "QR",
				RON: "RON",
				RSD: "Дин.",
				RUB: "₽",
				RWF: "RF",
				SAR: "SR",
				SBD: "SI$",
				SCR: "SRe",
				SDG: "£Sd",
				SEK: "SEK",
				SFR: "Fr",
				SGD: "S$",
				SHP: "£",
				SLL: "Le",
				SOS: "Sh.so.",
				SRD: "Sr$",
				SSP: "SS£",
				STD: "Db",
				SVC: "₡",
				SYP: "S£",
				SZL: "E",
				THB: "฿",
				TJS: "SM",
				TMT: "M",
				TND: "د.ت",
				TOP: "T$",
				TRY: "TL",
				TTD: "TT$",
				TWD: "NT$",
				TZS: "Sh",
				UAH: "₴",
				UGX: "USh",
				USD: "$",
				UYU: "$U",
				UZS: "so'm",
				VEF: "Bs",
				VND: "₫",
				VUV: "VT",
				WST: "T",
				XAF: "FCFA",
				XCD: "EC$",
				XOF: "CFA",
				XPF: "CFPF",
				YER: "﷼",
				ZAR: "R",
				ZMK: "ZK",
				ZWL: "Z$"
			};

		function ur(e, n) {
			n = ir(n), e /= p.pow(10, n.decimals);
			return n.format(e.toFixed(n.decimals), n.decimals)
		}

		function cr(e, n, t) {
			return void 0 === t && (t = !0), [or[n], ur(e, n)].join(t ? " " : "")
		}

		function sr(e, n, t, r) {
			var i = e.get,
				a = i("display_currency"),
				o = parseFloat(i("display_amount"));
			if (a && o) return o = (o *= p.pow(10, ir(a).decimals)).toFixed(0), or[a] + ur(o, a);
			e = e.display_amount || n || i("amount");
			return cr(e = r && n ? n : e, t || i("currency"))
		}
		Qt(nr), Xt(or), pe(ar, function (e, n) {
			return e[n] = or[n], e
		}, {});
		var lr = function (e, n) {
				return e ? Wt(er.preferences, e, n) : er.preferences
			},
			n = function e(n, t) {
				return (t = void 0 !== t && t) ? function () {
					return e(n, !1)
				} : n ? er.get(n) : er.triggerInstanceMethod("get")
			};

		function mr() {
			return l(lr("order.convenience_fee_config", null))
		}
		n("callback_url", !0), n("order_id", !0), n("prefill.contact", !0), n("prefill.email", !0), n("prefill.name", !0), n("prefill.card[number]", !0), n("prefill.vpa", !0);

		function dr(e, n) {
			var n = e[n = void 0 === n ? "response" : n],
				t = {};
			if (n)
				if ("object" != typeof n || m.isArray(n)) {
					if ("string" == typeof n)
						for (var r = n.split("&"), i = 0; i < r.length; i++) {
							var a = r[i].split("=");
							"" === a[1] || "undefined" === a[1] || "null" === a[1] ? t[a[0]] = null : t[a[0]] = a[1]
						}
				} else t = n;
			return t = t.result ? An({}, t, dr(t, "result")) : t
		}
		var pr = "Payment Adapter does not exist.",
			fr = {
				description: pr
			},
			hr = "com.google.android.apps.nbu.paisa.user",
			vr = "com.phonepe.app",
			gr = "cred";

		function yr() {
			var n = [];
			return v.keys(br).forEach(function (e) {
				n = fe(br[e], n)
			}), n
		}

		function _r(r) {
			var e = (e = ["feesRedirect", "tez", "gpay", "avoidPopup"], pe(function (e, n) {
				var t = r;
				return ye(n)(t) && (e[n] = r[n]), e
			}, {})(e));
			r.data = Sr(r.data, r.r, e),
				function (e) {
					e = null == e ? void 0 : e["card[name]"];
					0 !== a(e) && e && ut(e) && Y("Error in integration. Card holder name is not valid, Please contact Razorpay for assistance")
				}(r.data)
		}
		var br = {
				preferred: [{
					app_name: "Google Pay",
					package_name: hr,
					app_icon: "https://cdn.razorpay.com/checkout/gpay.png",
					handles: ["okhdfcbank", "okicici", "okaxis", "oksbi"],
					verify_registration: !0,
					shortcode: "google_pay"
				}, {
					package_name: "com.phonepe.app",
					app_icon: "https://cdn.razorpay.com/checkout/phonepe.png",
					shortcode: "phonepe",
					app_name: "PhonePe",
					handles: ["ybl"]
				}, {
					name: "PayTM",
					app_name: "PayTM UPI",
					package_name: "net.one97.paytm",
					shortcode: "paytm",
					app_icon: "https://cdn.razorpay.com/app/paytm.svg",
					handles: ["paytm"]
				}, {
					package_name: "in.org.npci.upiapp",
					shortcode: "bhim",
					app_icon: "https://cdn.razorpay.com/app/bhim.svg",
					app_name: "Bhim",
					handles: ["upi"]
				}],
				whitelist: [{
					name: "WhatsApp Business",
					app_name: "WhatsApp Business UPI",
					package_name: "com.whatsapp.w4b",
					shortcode: "whatsapp-biz",
					handles: ["icicibank"],
					app_icon: "https://cdn.razorpay.com/app/whatsapp.svg"
				}, {
					package_name: "com.csam.icici.bank.imobile",
					shortcode: "imobile"
				}, {
					package_name: "com.sbi.upi",
					shortcode: "sbi",
					handles: ["sbi"]
				}, {
					package_name: "com.upi.axispay",
					shortcode: "axispay"
				}, {
					package_name: "com.samsung.android.spaymini",
					shortcode: "samsung-mini"
				}, {
					package_name: "com.samsung.android.spay",
					shortcode: "samsung"
				}, {
					package_name: "com.snapwork.hdfc",
					shortcode: "hdfc-bank"
				}, {
					package_name: "com.fss.pnbpsp",
					shortcode: "pnb-bank"
				}, {
					package_name: "com.icicibank.pockets",
					shortcode: "icici-pocket"
				}, {
					package_name: "com.bankofbaroda.upi",
					shortcode: "bank-of-baroda"
				}, {
					package_name: "com.freecharge.android",
					shortcode: "freecharge"
				}, {
					package_name: "com.fss.unbipsp",
					shortcode: "united-upi"
				}, {
					package_name: "com.axis.mobile",
					shortcode: "axis"
				}, {
					package_name: "com.mycompany.kvb",
					shortcode: "kvb"
				}, {
					package_name: "com.fss.vijayapsp",
					shortcode: "vijaya"
				}, {
					package_name: "com.dena.upi.gui",
					shortcode: "dena"
				}, {
					package_name: "com.fss.jnkpsp",
					shortcode: "jk-upi"
				}, {
					package_name: "com.olive.kotak.upi",
					shortcode: "kotak"
				}, {
					package_name: "com.enstage.wibmo.hdfc",
					shortcode: "payzapp"
				}, {
					package_name: "com.bsb.hike",
					shortcode: "hike"
				}, {
					package_name: "com.fss.idfcpsp",
					shortcode: "idfc"
				}, {
					package_name: "com.YesBank",
					shortcode: "yes-bank"
				}, {
					package_name: "com.abipbl.upi",
					shortcode: "abpb"
				}, {
					package_name: "com.microsoft.mobile.polymer",
					shortcode: "microsoft-kaizala"
				}, {
					package_name: "com.finopaytech.bpayfino",
					shortcode: "fino"
				}, {
					package_name: "com.mgs.obcbank",
					shortcode: "oriental"
				}, {
					package_name: "com.upi.federalbank.org.lotza",
					shortcode: "lotza"
				}, {
					package_name: "com.mgs.induspsp",
					shortcode: "induspay"
				}, {
					package_name: "ai.wizely.android",
					shortcode: "wizely"
				}, {
					package_name: "com.olive.dcb.upi",
					shortcode: "dcb-bank"
				}, {
					package_name: "com.mgs.yesmerchantnative.prod",
					shortcode: "yesmerchantnative"
				}, {
					package_name: "com.dbs.in.digitalbank",
					shortcode: "digibank"
				}, {
					package_name: "com.rblbank.mobank",
					shortcode: "rbl-mobank"
				}, {
					package_name: "in.chillr",
					shortcode: "chillr"
				}, {
					package_name: "money.bullet",
					shortcode: "bullet"
				}, {
					package_name: "com.SIBMobile",
					shortcode: "sibmirror"
				}, {
					package_name: "in.amazon.mShop.android.shopping",
					shortcode: "amazon",
					app_icon: "https://cdn.razorpay.com/app/amazonpay.svg"
				}, {
					package_name: "com.mipay.in.wallet",
					shortcode: "mipay"
				}, {
					package_name: "com.mipay.wallet.in",
					shortcode: "mipay_2"
				}, {
					package_name: "com.dreamplug.androidapp",
					shortcode: "cred"
				}, {
					package_name: "in.bajajfinservmarkets.app",
					shortcode: "finserv",
					handles: ["abfspay"]
				}, {
					package_name: "in.bajajfinservmarkets.app.uat",
					shortcode: "finserv-uat"
				}, {
					package_name: "com.fampay.in",
					shortcode: "fampay"
				}, {
					package_name: "com.mobikwik_new",
					shortcode: "mobikwik"
				}],
				blacklist: [{
					package_name: "com.whatsapp",
					shortcode: "whatsapp"
				}, {
					package_name: "com.truecaller",
					shortcode: "truecaller"
				}, {
					package_name: "com.olacabs.customer"
				}, {
					package_name: "com.myairtelapp",
					shortcode: "airtel"
				}, {
					package_name: "com.paytmmall"
				}, {
					package_name: "com.gbwhatsapp"
				}, {
					package_name: "com.msf.angelmobile"
				}, {
					package_name: "com.fundsindia"
				}, {
					package_name: "com.muthootfinance.imuthoot"
				}, {
					package_name: "com.angelbroking.angelwealth"
				}, {
					package_name: "com.citrus.citruspay",
					shortcode: "lazypay"
				}]
			},
			wr = {
				"_[method]": "upi",
				"_[flow]": "intent",
				"_[reason]": "UPI_INTENT_BACK_BUTTON"
			},
			kr = {};
		var Sr = function (e, t, n) {
				void 0 === n && (n = {});
				var r = Ae(e);
				n.feesRedirect && (r.view = "html");
				var i = t.get;
				["amount", "currency", "signature", "description", "order_id", "account_id", "notes", "subscription_id", "auth_link_id", "payment_link_id", "customer_id", "recurring", "subscription_card_change", "recurring_token.max_amount", "recurring_token.expire_by"].forEach(function (e) {
					var n = r;
					ye(e)(n) || (n = i(e)) && ("boolean" == typeof n && (n = 1), r[e.replace(/\.(\w+)/g, "[$1]")] = n)
				});
				e = i("key");
				!r.key_id && e && (r.key_id = e), n.avoidPopup && "wallet" === r.method && (r["_[source]"] = "checkoutjs"), (n.tez || n.gpay) && (r["_[flow]"] = "intent", r["_[app]"] || (r["_[app]"] = hr));
				["integration", "integration_version", "integration_parent_version"].forEach(function (e) {
					var n = t.get("_." + e);
					n && (r["_[" + e + "]"] = n)
				});
				var n = Ot;
				n && (r["_[shield][fhash]"] = n);
				n = Ft;
				n && (r["_[device_id]"] = n), r["_[shield][tz]"] = -(new d).getTimezoneOffset(), n = kr, Se(function (e, n) {
					r["_[shield][" + n + "]"] = e
				})(n), r["_[build]"] = 1562146463, It(r, "notes", "[]"), It(r, "card", "[]");
				n = r["card[expiry]"];
				return I(n) && (r["card[expiry_month]"] = n.slice(0, 2), r["card[expiry_year]"] = n.slice(-2), delete r["card[expiry]"]), r._ = Xn.common(), It(r, "_", "[]"), r
			},
			Er = {
				api: "https://api.razorpay.com/",
				version: "v1/",
				frameApi: "/",
				cdn: "https://cdn.razorpay.com/"
			};
		try {
			Pe(Er, s.Razorpay.config)
		} catch (e) {}
		var Rr = "forceIframeFlow",
			Me = "onlyPhoneRequired",
			Ar = "popupIframe",
			Pr = "forcePopupCustomCheckout",
			Be = "disableWalletAmountCheck",
			Cr = {
				wallet: {
					paytm: ((n = {})[Ar] = !0, n),
					paypal: ((n = {})[Be] = !0, n)
				},
				cardless_emi: {
					walnut369: ((Be = {})[Rr] = !0, Be[Me] = !0, Be[Pr] = !0, Be)
				},
				app: {
					twid: ((n = {})[Pr] = !0, n)
				}
			};

		function Dr(t, r, e) {
			r = Ae(r);
			var n = t.method,
				i = Nr[n].payment;
			return r.method = n, i.forEach(function (e) {
				var n = t[e];
				B(n) || (r[e] = n)
			}), t.token_id && e && (e = xe(e, "tokens.items", []), (e = de(function (e) {
				return e.id === t.token_id
			})(e)) && (r.token = e.token)), r
		}

		function xr(e) {
			return !0
		}

		function Ir(e, n) {
			return [e]
		}
		var Tr = ["types", "iins", "issuers", "networks", "token_id"],
			Mr = ["flows", "apps", "token_id", "vpas"],
			Nr = {
				card: {
					properties: Tr,
					payment: ["token"],
					groupedToIndividual: function (e, n) {
						var n = xe(n, "tokens.items", []),
							t = Ae(e);
						if (Tr.forEach(function (e) {
								delete t[e]
							}), e.token_id) {
							var r = e.token_id,
								n = de(n, function (e) {
									return e.id === r
								});
							if (n) return [Pe({
								token_id: r,
								type: n.card.type,
								issuer: n.card.issuer,
								network: n.card.network
							}, t)]
						}
						var i, a, e = (i = e, a = [], (e = void 0 === (e = ["issuers", "networks", "types", "iins"]) ? [] : e).forEach(function (e) {
							var r, n = i[e];
							n && n.length && (r = e.slice(0, -1), a = 0 === a.length ? oe(n, function (e) {
								var n = {};
								return n[r] = e, n
							}) : ue(n, function (t) {
								return oe(a, function (e) {
									var n;
									return Pe(((n = {})[r] = t, n), e)
								})
							}))
						}), a);
						return oe(e, function (e) {
							return Pe(e, t)
						})
					},
					isValid: function (e) {
						var n = l(e.issuers),
							t = l(e.networks),
							r = l(e.types);
						return !(n && !e.issuers.length) && (!(t && !e.networks.length) && !(r && !e.types.length))
					}
				},
				netbanking: {
					properties: ["banks"],
					payment: ["bank"],
					groupedToIndividual: function (e) {
						var n = Ae(e);
						return delete n.banks, oe(e.banks || [], function (e) {
							return Pe({
								bank: e
							}, n)
						})
					},
					isValid: function (e) {
						return l(e.banks) && 0 < e.banks.length
					}
				},
				wallet: {
					properties: ["wallets"],
					payment: ["wallet"],
					groupedToIndividual: function (e) {
						var n = Ae(e);
						return delete n.wallets, oe(e.wallets || [], function (e) {
							return Pe({
								wallet: e
							}, n)
						})
					},
					isValid: function (e) {
						return l(e.wallets) && 0 < e.wallets.length
					}
				},
				upi: {
					properties: Mr,
					payment: ["flow", "app", "token", "vpa"],
					groupedToIndividual: function (t, e) {
						var n, r = [],
							i = [],
							a = [],
							o = [],
							u = xe(e, "tokens.items", []),
							c = Ae(t);
						return Mr.forEach(function (e) {
							delete c[e]
						}), t.flows && (r = t.flows), t.vpas && (a = t.vpas), t.apps && (i = t.apps), le(r, "collect") && a.length && (n = oe(a, function (e) {
							var n, e = Pe({
								vpa: e,
								flow: "collect"
							}, c);
							return t.token_id && (n = t.token_id, de(u, function (e) {
								return e.id === n
							}) && (e.token_id = n)), e
						}), o = he(o, n)), le(r, "intent") && i.length && (n = oe(i, function (e) {
							return Pe({
								app: e,
								flow: "intent"
							}, c)
						}), o = he(o, n)), 0 < r.length && (r = oe(r, function (e) {
							var n = Pe({
								flow: e
							}, c);
							if (!("intent" === e && i.length || "collect" === e && a.length)) return n
						}), r = ce(l)(r), o = he(o, r)), o
					},
					getPaymentPayload: function (e, n, t) {
						return "collect" === (n = Dr(e, n, t)).flow && (n.flow = "directpay", n.token && n.vpa && delete n.vpa), "qr" === n.flow && (n["_[upiqr]"] = 1, n.flow = "intent"), n.flow && (n["_[flow]"] = n.flow, delete n.flow), n.app && (n.upi_app = n.app, delete n.app), n
					},
					isValid: function (e) {
						var n = l(e.flows),
							t = l(e.apps);
						if (!n || !e.flows.length) return !1;
						if (t) {
							if (!e.apps.length) return !1;
							if (!n || !le(e.flows, "intent")) return !1
						}
						return !0
					}
				},
				cardless_emi: {
					properties: ["providers"],
					payment: ["provider"],
					groupedToIndividual: function (e) {
						var n = Ae(e);
						return delete n.providers, oe(e.providers || [], function (e) {
							return Pe({
								provider: e
							}, n)
						})
					},
					isValid: function (e) {
						return l(e.providers) && 0 < e.providers.length
					}
				},
				paylater: {
					properties: ["providers"],
					payment: ["provider"],
					groupedToIndividual: function (e) {
						var n = Ae(e);
						return delete n.providers, oe(e.providers || [], function (e) {
							return Pe({
								provider: e
							}, n)
						})
					},
					isValid: function (e) {
						return l(e.providers) && 0 < e.providers.length
					}
				},
				app: {
					properties: ["providers"],
					payment: ["provider"],
					groupedToIndividual: function (e) {
						var n = Ae(e);
						return delete n.providers, oe(e.providers || [], function (e) {
							return Pe({
								provider: e
							}, n)
						})
					},
					isValid: function (e) {
						return l(e.providers) && 0 < e.providers.length
					}
				}
			};

		function Br(e) {
			var n = e.method,
				n = Nr[n];
			if (!n) return !1;
			var t = ve(e);
			return ae(n.properties, function (e) {
				return !le(t, e)
			})
		}
		Nr.emi = Nr.card, Nr.credit_card = Nr.card, Nr.debit_card = Nr.card, Nr.upi_otm = Nr.upi, ["card", "upi", "netbanking", "wallet", "upi_otm", "gpay", "emi", "cardless_emi", "qr", "paylater", "paypal", "bank_transfer", "nach", "app", "emandate", "cod"].forEach(function (e) {
			Nr[e] || (Nr[e] = {})
		}), Se(Nr, function (e, n) {
			Nr[n] = Pe({
				getPaymentPayload: Dr,
				groupedToIndividual: Ir,
				isValid: xr,
				properties: [],
				payment: []
			}, Nr[n])
		});
		var Me = Yt(""),
			Be = Yt(""),
			n = $t([Me, Be], function (e) {
				var n = e[0],
					e = e[1];
				return e ? n + e : ""
			}),
			Lr = Yt(""),
			Or = Yt("");
		$t([Lr, Or], function (e) {
			var n = e[0],
				e = e[1];
			return e ? n + e : ""
		}), Me.subscribe(function (e) {
			Lr.set(e)
		}), Be.subscribe(function (e) {
			Or.set(e)
		}), Yt(""), Yt(""), Yt(""), Yt(""), Yt(""), Yt("netbanking"), Yt(), Yt("");
		Be = $t(Yt([]), function (e) {
			return ue(e, function (e) {
				return e.instruments
			})
		});
		Yt([]), Yt([]), Yt([]);
		var Fr, Be = $t([Be, Yt(null)], function (e) {
			var n = e[0],
				e = e[1],
				t = void 0 === e ? null : e;
			return de(void 0 === n ? [] : n, function (e) {
				return e.id === t
			})
		});

		function Kr() {
			return xe(Fr, "features.raas", void 0) || (null == Fr ? void 0 : Fr.dynamic_wallet_flow)
		}
		$t(Be, function (e) {
			return e && (Br(e) || function (e) {
				var n = Br(e),
					t = le(["card", "emi"], e.method);
				if (n) return 1;
				if (t) return !e.token_id;
				if ("upi" === e.method && e.flows) {
					if (1 < e.flows.length) return 1;
					if (le(e.flows, "omnichannel")) return 1;
					if (le(e.flows, "collect")) {
						n = e._ungrouped;
						if (1 === n.length) {
							t = n[0], n = t.flow, t = t.vpa;
							if ("collect" === n && t) return
						}
						return 1
					}
					if (le(e.flows, "intent") && !e.apps) return 1
				}
				return 1 < e._ungrouped.length
			}(e)) ? e : null
		}), $t(n, function (e) {
			return e && "+91" !== e && "+" !== e
		}), Yt([]), Yt(!0), $t([n], function (e) {
			return e[0].startsWith("+91")
		});
		var jr = "add-card",
			zr = Yt({});
		Yt({}), Yt("");
		var Hr = Yt("");

		function Ur(e, n) {
			return function (e, n) {
				var t, r, i = function () {
						var e;
						return (null == Fr || null == (e = Fr.order) ? void 0 : e.convenience_fee_config) || null
					}(),
					e = null == i || null == (t = i.methods) ? void 0 : t[e]; {
					var a, o;
					e && 0 < v.keys(e).length ? n ? (a = v.keys(e).includes("type") && null != e && null != (r = e.type) && r[n] ? m.isArray(e.type[n]) ? void 0 : e.type[n].amount || (null == e ? void 0 : e.amount) : null == e ? void 0 : e.amount) ? zr.update(function (e) {
						return v.assign({}, e, ((e = {}).convenience_fee = a, e.checkout_label = null == i ? void 0 : i.label_on_checkout, e))
					}) : zr.update(function (e) {
						return v.assign({}, e, ((e = {}).checkout_label = null == i ? void 0 : i.label_on_checkout, e))
					}) : (o = null == e ? void 0 : e.amount) ? zr.update(function (e) {
						return v.assign({}, e, ((e = {}).convenience_fee = o, e.checkout_label = null == i ? void 0 : i.label_on_checkout, e))
					}) : zr.update(function (e) {
						return v.assign({}, e, ((e = {}).checkout_label = null == i ? void 0 : i.label_on_checkout, e))
					}) : zr.update(function (e) {
						return v.assign({}, e, ((e = {}).checkout_label = null == i ? void 0 : i.label_on_checkout, e))
					})
				}
			}(e, n), 0
		}

		function Gr() {
			return Gt(Hr) === jr
		}

		function Vr(e) {
			return e.tokenId || (e.cardNumber ? g(e.cardNumber).slice(0, 6) : e["card[number]"] ? g(e["card[number]"]).slice(0, 6) : e.iin ? g(e.iin).slice(0, 6) : void 0)
		}

		function Yr(e) {
			return Jr[e] || 16
		}
		var $r = {
				amex: "American Express",
				diners: "Diners Club",
				maestro: "Maestro",
				mastercard: "MasterCard",
				rupay: "RuPay",
				visa: "Visa",
				bajaj: "Bajaj Finserv",
				unknown: "unknown"
			},
			Zr = function (e) {
				return e.replace(/\D/g, "").slice(0, 6)
			},
			Wr = function (t) {
				var r;
				return Se($r, function (e, n) {
					t !== e && t !== n || (r = n)
				}), r
			},
			qr = [{
				name: "visa",
				regex: /^4/
			}, {
				name: "mastercard",
				regex: /^(5[1-5]|2[2-7])/
			}, {
				name: "maestro16",
				regex: /^(50(81(25|26|59|92)|8227)|4(437|681))/
			}, {
				name: "amex",
				regex: /^3[47]/
			}, {
				name: "rupay",
				regex: /^787878/
			}, {
				name: "rupay",
				regex: /^(508[5-9]|60(80(0|)[^0]|8[1-4]|8500|698[5-9]|699|7[^9]|79[0-7]|798[0-4])|65(2(1[5-9]|[2-9])|30|31[0-4])|817[2-9]|81[89]|820[01])/
			}, {
				name: "discover",
				regex: /^(65[1,3-9]|6011)/
			}, {
				name: "maestro",
				regex: /^(6|5(0|[6-9])).{5}/
			}, {
				name: "diners",
				regex: /^3[0689]/
			}, {
				name: "jcb",
				regex: /^35/
			}, {
				name: "bajaj",
				regex: /^203040/
			}],
			Jr = {
				amex: 15,
				diners: 14,
				maestro: 19,
				"": 19
			},
			Xr = function (n) {
				n = n.replace(/\D/g, "");
				var t = "";
				return qr.forEach(function (e) {
					e.regex.test(n) && (t = t || e.name)
				}), t
			},
			Qr = {
				iin: {},
				token: {}
			};
		var ei = {
				iin: {}
			},
			ni = {
				iin: {}
			};

		function ti(e) {
			var n = this;
			if (! function (e) {
					e = Zr(e);
					return e && 6 <= e.length
				}(e)) return En.resolve({});
			var i = Zr(e),
				t = ni.iin[i];
			return t ? (mr() && Gr() && ei.iin[i] && Ur("card", null == (e = ei.iin[i]) ? void 0 : e.type), t) : (ni.iin[i] = new En(function (t, r) {
				var e = q(e = Di(n, "payment/iin"), {
					iin: i,
					"_[source]": Xn.props.library
				});
				fn.jsonp({
					url: e,
					callback: function (e) {
						if (e.error) return tt.track("features:card:fetch:failure", {
							data: {
								iin: i,
								error: e.error
							}
						}), r(e.error);
						var n;
						ei.iin[i] = e,
							function (e, n) {
								void 0 === n && (n = {}), e = Zr(e), Qr.iin[e] || (Qr.iin[e] = {});
								var t = Qr.iin[e];
								n.issuer && (t.issuer = n.issuer), n.network ? t.network = Wr(n.network) : t.network = Xr(e), n.type && (t.type = n.type)
							}(i, e), mr() && Gr() && Ur("card", ei.iin[i] ? null == (n = ei.iin[i]) ? void 0 : n.type : null == e ? void 0 : e.type), t(e), tt.track("features:card:fetch:success", {
								data: {
									iin: i,
									features: e
								}
							})
					}
				}), tt.track("features:card:fetch:start", {
					data: {
						iin: i
					}
				})
			}), ni.iin[i])
		}
		var ri = Er.cdn + "bank/";
		! function (e) {
			e = De(e);
			oe(function (e) {
				return {
					name: e[1],
					code: e[0],
					logo: (e = e[0], ri + e.slice(0, 4) + ".gif")
				}
			})(e)
		}({
			ICIC_C: "ICICI Corporate",
			UTIB_C: "Axis Corporate",
			SBIN: "SBI",
			HDFC: "HDFC",
			ICIC: "ICICI",
			UTIB: "Axis",
			KKBK: "Kotak",
			YESB: "Yes",
			IBKL: "IDBI",
			BARB_R: "BOB",
			PUNB_R: "PNB",
			IOBA: "IOB",
			FDRL: "Federal",
			CORP: "Corporate",
			IDFB: "IDFC",
			INDB: "IndusInd",
			VIJB: "Vijaya Bank"
		});
		[{
			code: "KKBK",
			name: "Kotak Mahindra Bank"
		}, {
			code: "HDFC_DC",
			name: "HDFC Debit Cards"
		}, {
			code: "HDFC",
			name: "HDFC Credit Cards"
		}, {
			code: "UTIB",
			name: "Axis Bank"
		}, {
			code: "INDB",
			name: "Indusind Bank"
		}, {
			code: "RATN",
			name: "RBL Bank"
		}, {
			code: "ICIC",
			name: "ICICI Bank"
		}, {
			code: "SCBL",
			name: "Standard Chartered Bank"
		}, {
			code: "YESB",
			name: "Yes Bank"
		}, {
			code: "AMEX",
			name: "American Express"
		}, {
			code: "SBIN",
			name: "State Bank of India"
		}, {
			code: "BARB",
			name: "Bank of Baroda"
		}, {
			code: "BAJAJ",
			name: "Bajaj Finserv"
		}, {
			code: "CITI",
			name: "CITI Bank"
		}, {
			code: "HSBC",
			name: "HSBC Credit Cards"
		}].reduce(function (e, n) {
			return e[n.code] = n, e
		}, {});

		function ii(e) {
			return e = (ci[e] || {}).headless, l(e)
		}
		var n = Er.cdn,
			ai = n + "cardless_emi/",
			oi = n + "cardless_emi-sq/",
			ui = {
				min_amount: 3e5,
				headless: !0,
				fee_bearer_customer: !0
			},
			ci = Ee({
				walnut369: {
					name: "Walnut369",
					fee_bearer_customer: !1,
					headless: !1,
					pushToFirst: !0,
					min_amount: 100
				},
				bajaj: {
					name: "Bajaj Finserv"
				},
				sezzle: {
					name: "Sezzle",
					headless: !1,
					fee_bearer_customer: !1,
					min_amount: 2e4
				},
				earlysalary: {
					name: "EarlySalary",
					fee_bearer_customer: !1
				},
				zestmoney: {
					name: "ZestMoney",
					min_amount: 9e4,
					fee_bearer_customer: !1
				},
				flexmoney: {
					name: "Cardless EMI by InstaCred",
					headless: !1,
					fee_bearer_customer: !1
				},
				barb: {
					name: "Bank of Baroda Cardless EMI",
					headless: !1
				},
				fdrl: {
					name: "Federal Bank Cardless EMI",
					headless: !1
				},
				hdfc: {
					name: "HDFC Bank Cardless EMI",
					headless: !1
				},
				idfb: {
					name: "IDFC First Bank Cardless EMI",
					headless: !1
				},
				kkbk: {
					name: "Kotak Mahindra Bank Cardless EMI",
					headless: !1
				},
				icic: {
					name: "ICICI Bank Cardless EMI",
					headless: !1
				},
				hcin: {
					name: "Home Credit Ujjwal Card",
					headless: !1,
					min_amount: 5e4
				}
			}, function (e, n) {
				var t = {},
					t = Pe(ui)(t),
					t = Pe({
						code: n,
						logo: ai + n + ".svg",
						sqLogo: oi + n + ".svg"
					})(t);
				return Pe(e)(t)
			}),
			si = {
				S0: "S0",
				S1: "S1",
				S2: "S2",
				S3: "S3"
			},
			n = Object.freeze({
				__proto__: null,
				capture: function (e, n) {
					var t = n.analytics,
						r = n.severity,
						r = void 0 === r ? si.S1 : r,
						n = n.unhandled,
						n = void 0 !== n && n;
					try {
						var i = t || {},
							a = i.event,
							o = i.data,
							u = i.immediately,
							c = void 0 === u || u,
							s = "string" == typeof a ? a : at;
						tt.track(s, {
							data: An({}, "object" == typeof o ? o : {}, {
								error: function (e, n) {
									var t = {
										tags: n
									};
									switch (!0) {
										case !e:
											t.message = "NA";
											break;
										case "string" == typeof e:
											t.message = e;
											break;
										case "object" == typeof e:
											var r = e.name,
												i = e.message,
												a = e.stack,
												o = e.fileName,
												u = e.lineNumber,
												c = e.columnNumber,
												t = An({}, JSON.parse(JSON.stringify(e)), {
													name: r,
													message: i,
													stack: a,
													fileName: o,
													lineNumber: u,
													columnNumber: c,
													tags: n
												});
											break;
										default:
											t.message = JSON.stringify(e)
									}
									return t
								}(e, {
									severity: r,
									unhandled: n
								})
							}),
							immediately: l(c)
						})
					} catch (e) {}
				}
			});
		An({
			SEVERITY_LEVELS: si
		}, n);
		var n = Er.cdn,
			li = n + "paylater/",
			mi = n + "paylater-sq/",
			di = {
				min_amount: 3e5
			};

		function pi(e) {
			this.name = e, this._exists = !1, this.platform = "", this.bridge = {}, this.init()
		}
		Ee({
			epaylater: {
				name: "ePayLater"
			},
			getsimpl: {
				name: "Simpl"
			},
			icic: {
				name: "ICICI Bank PayLater"
			},
			hdfc: {
				name: "FlexiPay by HDFC Bank"
			},
			lazypay: {
				name: "LazyPay"
			},
			kkbk: {
				name: "kkbk"
			}
		}, function (e, n) {
			var t = {},
				t = Pe(di)(t),
				t = Pe({
					code: n,
					logo: li + n + ".svg",
					sqLogo: mi + n + ".svg"
				})(t);
			return Pe(e)(t)
		}), pi.prototype = {
			init: function () {
				var e = this.name,
					n = window[e],
					e = ((window.webkit || {}).messageHandlers || {})[e];
				e ? (this._exists = !0, this.bridge = e, this.platform = "ios") : n && (this._exists = !0, this.bridge = n, this.platform = "android")
			},
			exists: function () {
				return this._exists
			},
			get: function (e) {
				if (this.exists())
					if ("android" === this.platform) {
						if (T(this.bridge[e])) return this.bridge[e]
					} else if ("ios" === this.platform) return this.bridge.postMessage
			},
			has: function (e) {
				return !(!this.exists() || !this.get(e))
			},
			callAndroid: function (e) {
				for (var n = arguments.length, t = new m(1 < n ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
				var i = t,
					t = oe(function (e) {
						return "object" == typeof e ? Re(e) : e
					})(i),
					e = this.get(e);
				if (e) return e.apply(this.bridge, t)
			},
			callIos: function (e) {
				var n = this.get(e);
				if (n) try {
					var t = {
							action: e
						},
						r = arguments.length <= 1 ? void 0 : arguments[1];
					return r && (t.body = r), n.call(this.bridge, t)
				} catch (e) {}
			},
			call: function (e) {
				for (var n = arguments.length, t = new m(1 < n ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
				var i = this.get(e),
					t = [e].concat(t);
				i && (this.callAndroid.apply(this, t), this.callIos.apply(this, t))
			}
		};
		var fi = new pi("CheckoutBridge");
		new pi("StorageBridge");

		function hi(e) {
			return bi[e] && bi[e].power
		}
		var vi, n = Er.cdn,
			gi = n + "wallet/",
			yi = n + "wallet-sq/",
			_i = ["mobikwik", "freecharge", "payumoney"],
			bi = Ee({
				airtelmoney: ["Airtel Money", 32],
				amazonpay: ["Amazon Pay", 28],
				citrus: ["Citrus Wallet", 32],
				freecharge: ["Freecharge", 18],
				jiomoney: ["JioMoney", 68],
				mobikwik: ["Mobikwik", 20],
				olamoney: ["Ola Money (Postpaid + Wallet)", 22],
				paypal: ["PayPal", 20],
				paytm: ["Paytm", 18],
				payumoney: ["PayUMoney", 18],
				payzapp: ["PayZapp", 24],
				phonepe: ["PhonePe", 20],
				sbibuddy: ["SBI Buddy", 22],
				zeta: ["Zeta", 25],
				citibankrewards: ["Citibank Reward Points", 20],
				itzcash: ["Itz Cash", 20],
				paycash: ["PayCash", 20]
			}, function (e, n) {
				return {
					power: -1 !== _i.indexOf(n),
					name: e[0],
					h: e[1],
					code: n,
					logo: gi + n + ".png",
					sqLogo: yi + n + ".png"
				}
			}),
			wi = (void 0 === vi && (vi = e.search), I(vi) ? W(vi.slice(1)) : {});
		var ki = {},
			Si = {};

		function Ei(e) {
			return {
				"_[agent][platform]": (xe(window, "webkit.messageHandlers.CheckoutBridge") ? {
					platform: "ios"
				} : {
					platform: wi.platform || "web",
					library: "checkoutjs",
					version: (wi.version || 1562146463) + ""
				}).platform,
				"_[agent][device]": null != e && e.cred ? "desktop" !== Ct() ? "mobile" : "desktop" : Ct(),
				"_[agent][os]": Pt()
			}
		}[{
			package_name: hr,
			method: "upi"
		}, {
			package_name: vr,
			method: "upi"
		}, {
			package_name: gr,
			method: "app"
		}].forEach(function (e) {
			Si[e] = !1
		});

		function Ri(e, n, t) {
			Ai[e] = {
				eligible: n,
				offer: t
			}
		}
		var Ai = void 0;

		function Pi(e) {
			return Er.api + Er.version + (e = void 0 === e ? "" : e)
		}
		var Ci = ["key", "order_id", "invoice_id", "subscription_id", "auth_link_id", "payment_link_id", "contact_id", "checkout_config_id"];

		function Di(e, n) {
			n = Pi(n);
			for (var t = 0; t < Ci.length; t++) {
				var r = Ci[t],
					i = e.get(r),
					r = "key" === r ? "key_id" : "x_entity_id";
				if (i) {
					var a = e.get("account_id");
					return a && (i += "&account_id=" + a), n + (0 <= n.indexOf("?") ? "&" : "?") + r + "=" + i
				}
			}
			return n
		}

		function xi(n) {
			var t, r = this;
			if (!z(this, xi)) return new xi(n);
			st.call(this), this.id = Xn.makeUid(), tt.setR(this);
			try {
				t = function (e) {
					e && "object" == typeof e || Y("Invalid options");
					e = new Nt(e);
					return function (t, r) {
							void 0 === r && (r = []);
							var i = !0;
							return t = t.get(), Se(Ti, function (e, n) {
								le(r, n) || n in t && ((e = e(t[n], t)) && (i = !1, Y("Invalid " + n + " (" + e + ")")))
							}), i
						}(e, ["amount"]),
						function (e) {
							var t = e.get("notes");
							Se(t, function (e, n) {
								I(e) ? 254 < e.length && (t[n] = e.slice(0, 254)) : x(e) || D(e) || delete t[n]
							})
						}(e), e
				}(n), this.get = t.get, this.set = t.set
			} catch (e) {
				var i = e.message;
				this.get && this.isLiveMode() || L(n) && !n.parent && s.alert(i), Y(i)
			}["integration", "integration_version", "integration_parent_version"].forEach(function (e) {
				var n = r.get("_." + e);
				n && (Xn.props[e] = n)
			}), Ci.every(function (e) {
				return !t.get(e)
			}) && Y("No key passed"), this.postInit()
		}
		n = xi.prototype = new st;

		function Ii(e, n) {
			return fn.jsonp({
				url: Pi("preferences"),
				data: e,
				callback: n
			})
		}
		n.postInit = ct, n.onNew = function (e, n) {
			var t = this;
			"ready" === e && (this.prefs ? n(e, this.prefs) : Ii(function (e) {
				if (e) {
					var t = e.get,
						r = {},
						n = t("key");
					n && (r.key_id = n);
					var i = [t("currency")],
						a = t("display_currency"),
						n = t("display_amount");
					a && ("" + n).length && i.push(a), r.currency = i, ["order_id", "customer_id", "invoice_id", "payment_link_id", "subscription_id", "auth_link_id", "recurring", "subscription_card_change", "account_id", "contact_id", "checkout_config_id", "amount"].forEach(function (e) {
						var n = t(e);
						n && (r[e] = n)
					}), r["_[build]"] = 1562146463, r["_[checkout_id]"] = e.id, r["_[library]"] = Xn.props.library, r["_[platform]"] = Xn.props.platform;
					e = Ei() || {};
					return r = An({}, r, e)
				}
			}(this), function (e) {
				e.methods && (t.prefs = e, t.methods = e.methods), n(t.prefs, e)
			}))
		}, n.emi_calculator = function (e, n) {
			return xi.emi.calculator(this.get("amount") / 100, e, n)
		}, xi.emi = {
			calculator: function (e, n, t) {
				if (!t) return p.ceil(e / n);
				n = p.pow(1 + (t /= 1200), n);
				return In(e * t * n / (n - 1), 10)
			},
			calculatePlan: function (e, n, t) {
				var r = this.calculator(e, n, t);
				return {
					total: t ? r * n : e,
					installment: r
				}
			}
		}, xi.payment = {
			getMethods: function (n) {
				return Ii({
					key_id: xi.defaults.key
				}, function (e) {
					n(e.methods || e)
				})
			},
			getPrefs: function (n, t) {
				var r = P();
				return tt.track("prefs:start", {
					type: Tn
				}), L(n) && (n["_[request_index]"] = tt.updateRequestIndex("preferences")), fn({
					url: q(Pi("preferences"), n),
					callback: function (e) {
						if (tt.track("prefs:end", {
								type: Tn,
								data: {
									time: r()
								}
							}), e.xhr && 0 === e.xhr.status) return Ii(n, t);
						t(e)
					}
				})
			},
			getRewards: function (e, n) {
				var t = P();
				return tt.track("rewards:start", {
					type: Tn
				}), fn({
					url: q(Pi("checkout/rewards"), e),
					callback: function (e) {
						tt.track("rewards:end", {
							type: Tn,
							data: {
								time: t()
							}
						}), n(e)
					}
				})
			}
		}, n.isLiveMode = function () {
			var e = this.preferences;
			return !e && /^rzp_l/.test(this.get("key")) || e && "live" === e.mode
		}, n.getMode = function () {
			var e = this.preferences;
			return this.get("key") || e ? !e && /^rzp_l/.test(this.get("key")) || e && "live" === e.mode ? "live" : "test" : "pending"
		}, n.calculateFees = function (e) {
			var r = this;
			return new En(function (n, t) {
				e = Sr(e, r), fn.post({
					url: Pi("payments/calculate/fees"),
					data: e,
					callback: function (e) {
						return (e.error ? t : n)(e)
					}
				})
			})
		}, n.fetchVirtualAccount = function (e) {
			var i = e.customer_id,
				a = e.order_id,
				o = e.notes;
			return new En(function (n, t) {
				var e, r;
				a ? (e = {
					customer_id: i,
					notes: o
				}, i || delete e.customer_id, o || delete e.notes, r = Pi("orders/" + a + "/virtual_accounts?x_entity_id=" + a), fn.post({
					url: r,
					data: e,
					callback: function (e) {
						return (e.error ? t : n)(e)
					}
				})) : t("Order ID is required to fetch the account details")
			})
		}, n.checkCREDEligibility = function (o) {
			var e, n = ki[e = void 0 === e ? Xn.id : e],
				t = Ei({
					cred: !0
				}) || {},
				r = q(Di(n.r, "payments/validate/account"));
			return new En(function (i, a) {
				if (!o) return a(new Error("contact is required to check eligibility"));
				fn.post({
					url: r,
					data: An({
						entity: "cred",
						value: o,
						"_[checkout_id]": null == n ? void 0 : n.id
					}, t),
					callback: function (e) {
						var n = "ELIGIBLE" === (null == (n = e.data) ? void 0 : n.state);
						if (ot.Track(rt.ELIGIBILITY_CHECK, {
								source: "validate_api",
								isEligible: n
							}), n) {
							var t, r = null == e || null == (t = e.data) || null == (r = t.offer) ? void 0 : r.description;
							return Ri(o, !0, r), i(e)
						}
						return Ri(o, !1), a(e)
					}
				})
			})
		};
		var Ti = {
			notes: function (e) {
				if (L(e) && 15 < K(ve(e))) return "At most 15 notes are allowed"
			},
			amount: function (e, n) {
				var t = n.display_currency || n.currency || "INR",
					r = ir(t),
					i = r.minimum,
					a = "";
				if (r.decimals && r.minor ? a = " " + r.minor : r.major && (a = " " + r.major), void 0 === (r = i) && (r = 100), (/[^0-9]/.test(e = e) || !(r <= (e = In(e, 10)))) && !n.recurring) return "should be passed in integer" + a + ". Minimum value is " + i + a + ", i.e. " + cr(i, t)
			},
			currency: function (e) {
				if (!le(ar, e)) return "The provided currency is not currently supported"
			},
			display_currency: function (e) {
				if (!(e in or) && e !== xi.defaults.display_currency) return "This display currency is not supported"
			},
			display_amount: function (e) {
				if (!(e = g(e).replace(/([^0-9.])/g, "")) && e !== xi.defaults.display_amount) return ""
			},
			payout: function (e, n) {
				if (e) return n.key ? n.contact_id ? void 0 : "contact_id is required for a Payout" : "key is required for a Payout"
			}
		};
		xi.configure = function (e, n) {
			void 0 === n && (n = {}), Se(Tt(e, Dt), function (e, n) {
				typeof Dt[n] == typeof e && (Dt[n] = e)
			}), n.library && (Xn.props.library = n.library), n.referer && (Xn.props.referer = n.referer)
		}, xi.defaults = Dt, s.Razorpay = xi;
		var Mi = s.PaymentRequest,
			Ni = ["https://tez.google.com/pay"];

		function Bi(e) {
			var n, e = (n = e, void 0 === (e = this.additional_info) && (e = {}), {
					apiVersion: 2,
					apiVersionMinor: 0,
					allowedPaymentMethods: [{
						type: "UPI",
						parameters: {
							payeeVpa: (n = W(n.split("?")[1])).pa,
							payeeName: n.pn,
							mcc: n.mc,
							transactionReferenceId: n.tr
						},
						tokenizationSpecification: {
							type: "DIRECT"
						}
					}],
					transactionInfo: An({
						countryCode: "IN",
						totalPriceStatus: "FINAL",
						totalPrice: a(n.am).toFixed(2),
						currencyCode: n.cu,
						transactionNote: n.tn
					}, e || {})
				}),
				t = e.allowedPaymentMethods[0].parameters.transactionReferenceId;
			return s.microapps.requestPayment(e).then(function (e) {
				return e.paymentMethodData && (e.paymentMethodData.transactionReferenceId = t), e
			})
		}
		var Li = {
			"_[method]": "app",
			"_[provider]": "google_pay",
			"_[reason]": "PAYMENT_CANCEL_ON_APP"
		};

		function Oi(e) {
			var n = e.doc,
				t = void 0 === n ? window.document : n,
				r = e.path,
				i = e.method,
				n = void 0 === i ? "post" : i,
				i = e.target,
				a = (a = e.params) && function (e) {
					void 0 === e && (e = {});
					var u = {};
					return 0 === v.keys(e).length ? "" : (function e(n, t) {
						if (v(n) !== n) u[t] = n;
						else if (m.isArray(n)) {
							for (var r = 0, i = n.length; r < i; r++) e(n[r], t + "[" + r + "]");
							0 == i && (u[t] = [])
						} else {
							var a, o = !0;
							for (a in n) o = !1, e(n[a], t ? t + "[" + a + "]" : a);
							o && t && (u[t] = {})
						}
					}(e, ""), u)
				}(a);
			if (n && "get" === n.toLowerCase()) {
				e = function (e, n) {
					"object" == typeof n && null !== n && (n = function (e) {
						var n, t = [];
						for (n in e) e.hasOwnProperty(n) && t.push(_(n) + "=" + _(e[n]));
						return t.join("&")
					}(n));
					n && (e += 0 < e.indexOf("?") ? "&" : "?", e += n);
					return e
				}(r, a || "");
				i ? window.open(e, i) : t !== window.document ? t.location = e : window.location = e
			} else {
				var o, u, c = t.createElement("form");
				for (o in c.method = n, c.action = r, i && (c.target = i), a) a.hasOwnProperty(o) && ((u = t.createElement("input")).type = "hidden", u.name = o, u.value = a[o], c.appendChild(u));
				t.body.appendChild(c), c.submit()
			}
		}
		var Fi = s.PaymentRequest,
			Ki = ((Ee = {})[vr] = "https://mercury.phonepe.com/transact/pay", Ee[gr] = ["https://cred.club/checkout/pay"], Ee),
			ji = ((n = {
				"microapps.gpay": function () {
					return new En(function (e, n) {
						return ge(s, "microapps") && ge(s.microapps, "requestPayment") ? e() : n(fr)
					})
				}
			})[hr] = function () {
				function r() {
					return new En(function (n, t) {
						kt && t(), new En(function (n) {
							o.brave ? o.brave.isBrave().then(function (e) {
								n(e)
							}) : n(!1)
						}).then(function (e) {
							(e ? t : n)()
						})
					})
				}
				return new En(function (n, t) {
					try {
						new Fi([{
							supportedMethods: Ni
						}], {
							total: {
								label: "_",
								amount: {
									currency: "INR",
									value: 0
								}
							}
						}).canMakePayment().then(function (e) {
							e ? r().then(n).catch(function (e) {
								t(fr)
							}) : t(fr)
						}).catch(function () {
							t(fr)
						})
					} catch (e) {
						t(fr)
					}
				})
			}, n[vr] = function () {
				return new En(function (n, t) {
					try {
						new Fi([{
							supportedMethods: Ki[vr],
							data: {
								url: ""
							}
						}], {
							total: {
								label: "_",
								amount: {
									currency: "INR",
									value: 10
								}
							}
						}).canMakePayment().then(function (e) {
							e ? n() : t(fr)
						}).catch(function (e) {
							t(fr)
						})
					} catch (e) {
						t(fr)
					}
				})
			}, n[gr] = function () {
				return new En(function (n, t) {
					try {
						new Fi([{
							supportedMethods: Ki[gr]
						}], {
							total: {
								label: "_",
								amount: {
									currency: "INR",
									value: "10.00"
								}
							}
						}).canMakePayment().then(function (e) {
							e ? n() : t(fr)
						}).catch(function () {
							t(fr)
						})
					} catch (e) {
						t(fr)
					}
				})
			}, n);
		var zi = {
			"&": "&",
			"<": "<",
			">": ">",
			'"': """,
			"'": "'",
			"/": "/"
		};

		function Hi(e) {
			return e.replace(/[&<>"'/]/g, function (e) {
				return zi[e]
			})
		}

		function Ui(e, n) {
			var t, r = e.r.get,
				i = e.data && "wallet" === e.data.method ? "wallet" : "bank",
				a = r("theme.color") || "#3594E2",
				o = e.r.themeMeta.highlightColor,
				u = null != (t = null == (l = e.r.preferences) || null == (m = l.org) ? void 0 : m.checkout_logo_url) ? t : "https://cdn.razorpay.com/logo.svg",
				c = JSON.stringify({
					error: {
						code: "BAD_REQUEST_ERROR",
						description: n("payment_canceled")
					}
				}),
				s = Hi(r("name") || r("description") || n("redirecting")),
				l = sr(e.r, e.data && e.data.amount, e.data && e.data.currency),
				m = e.data && e.data.dcc_currency;
			m && (t = e.r.display_amount || e.data.amount, d = m, d = rr[t] ? rr[t][d] : "", l = sr(e.r, d, m, !0));
			var d = e.data && "emandate" === e.data.method ? "display: none;" : "",
				m = (m = r("image")) ? '<div id="logo"><img src="' + m.replace(/"/g, "") + '"/></div>' : "",
				r = Hi(e.message || n("wait_while_we_redirect", {
					method: i
				}));
			return '<!doctype html><html style="height:100%;width:100%;"><head>\n<title>' + n("processing") + '</title>\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<meta name="theme-color" content="' + a + "\">\n<style>* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nbody {\n  background: #f5f5f5;\n  overflow: hidden;\n  text-align: center;\n  height: 100%;\n  white-space: nowrap;\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, ubuntu, verdana, helvetica,\n    sans-serif;\n}\n#bg {\n  position: absolute;\n  bottom: 50%;\n  width: 100%;\n  height: 50%;\n  margin-bottom: 90px;\n}\n#cntnt {\n  position: relative;\n  width: 100%;\n  vertical-align: middle;\n  display: inline-block;\n  margin: auto;\n  max-width: 420px;\n  min-width: 280px;\n  height: 95%;\n  max-height: 360px;\n  background: #fff;\n  z-index: 9999;\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.16);\n  border-radius: 4px;\n  overflow: hidden;\n  padding: 24px;\n  text-align: left;\n}\n#ftr {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 80px;\n  background: #f5f5f5;\n  text-align: center;\n  color: #212121;\n  font-size: 14px;\n  letter-spacing: -0.3px;\n}\n#ldr {\n  width: 100%;\n  height: 3px;\n  position: relative;\n  margin-top: 16px;\n  border-radius: 3px;\n  overflow: hidden;\n}\n#ldr:before,\n#ldr:after {\n  content: '';\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0%;\n  transition: 20s cubic-bezier(0, 0.1, 0, 1);\n}\n#ldr:before {\n  width: 100%;\n  top: 1px;\n  border-top: 1px solid #bcbcbc;\n}\n.loaded #ldr:after {\n  width: 90%;\n}\n#logo {\n  width: 48px;\n  height: 48px;\n  padding: 8px;\n  border: 1px solid #e5e5e5;\n  border-radius: 3px;\n  text-align: center;\n}\n#hdr {\n  min-height: 48px;\n  position: relative;\n}\n#logo,\n#name,\n#amt {\n  display: inline-block;\n  vertical-align: middle;\n  letter-spacing: -0.5px;\n}\n#amt {\n  position: absolute;\n  right: 0;\n  top: 0;\n  background: #fff;\n  color: #212121;\n}\n#name {\n  line-height: 48px;\n  margin-left: 12px;\n  font-size: 16px;\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #212121;\n}\n#logo + #name {\n  line-height: 20px;\n}\n#txt {\n  height: 200px;\n  text-align: center;\n}\n#title {\n  font-size: 20px;\n  line-height: 24px;\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n#msg,\n#cncl {\n  font-size: 14px;\n  line-height: 20px;\n  color: #757575;\n  margin-bottom: 8px;\n  letter-spacing: -0.3px;\n}\n#cncl {\n  text-decoration: underline;\n  cursor: pointer;\n}\n#logo img {\n  max-width: 100%;\n  max-height: 100%;\n  vertical-align: middle;\n}\n@media (max-height: 580px), (max-width: 420px) {\n  #bg {\n    display: none;\n  }\n}\n@media (max-width: 420px) {\n  #cntnt {\n    padding: 16px;\n    width: 95%;\n  }\n  #name {\n    margin-left: 8px;\n  }\n}\n#ldr:after{background:" + o + "}#bg{background:" + a + "}\n@media(max-height:580px),(max-width:420px){body{background:" + a + "}}\n</style>\n</head><body><div id='bg'></div><div id='cntnt'>\n<div id=\"hdr\">" + m + "\n  <div id='name'>" + s + '</div>\n  <div id="amt" style="' + d + '">\n    <div style="font-size:12px;color:#757575;line-height:15px;margin-bottom:5px;text-align:right">' + n("paying") + '</div>\n    <div dir="ltr" style="font-size:20px;line-height:24px;">' + l + '</div>\n  </div>\n</div>\n<div id="ldr"></div>\n<div id="txt">\n  <div style="display:inline-block;vertical-align:middle;white-space:normal;">\n    <h2 id=\'title\'>' + n("loading_method_page", {
				method: i
			}) + "</h2><p id='msg'>" + r + '</p>\n  </div>\n  <div style="display:inline-block;vertical-align:middle;height:100%"></div>\n</div>\n<div id=\'ftr\'>\n  <div style="display:inline-block;">' + n("secured_by") + '\n    <img style="vertical-align:middle;margin-bottom:5px;" height="20px" src=' + u + ">\n  </div>\n  <div style=\"display:inline-block;vertical-align:middle;height:100%\"></div>\n</div>\n</div>\n<div style=\"display:inline-block;vertical-align:middle;height:100%\"></div>\n<script>\nvar doc = document;\nvar gel = doc.getElementById.bind(doc);\nsetTimeout(function(){doc.body.className='loaded'}, 10);\nsetTimeout(function(){\n  gel('title').innerHTML = '" + n("trying_to_load") + "';\n  gel('msg').innerHTML = '" + n("trying_bank_page_msg") + "';\n  gel('cncl').onclick = function(){\n    if(window.confirm(\"" + n("want_to_cancel") + "\")){\n      window.close();\n      if (CheckoutBridge && CheckoutBridge.oncomplete) {\n        CheckoutBridge.oncomplete('" + c + "');\n      }\n    }\n  };\n},1e4)\n<\/script>\n<form></form>\n" + (n = {
				live: e.r.isLiveMode(),
				checkout_id: e.r.id,
				library: Xn.props.library
			}, c = n.checkout_id, e = n.live, n = n.library, e ? '\n    <script>\n      var events={page:"checkout_popup",props:{checkout_id:"' + c + '",library:"' + n + '"},load:!0,unload:!0};!function(e){e.track=Boolean;try{if("object"!=typeof e.events)return;var n,t=e.events.props,o=e.events,a="https://lumberjack.razorpay.com/v1/track",r="ZmY5N2M0YzVkN2JiYzkyMWM1ZmVmYWJk",c="function"==typeof navigator.sendBeacon,s=Date.now(),i=[{name:"ua_parser",input_key:"user_agent",output_key:"user_agent_parsed"}];function p(e,p){(p=p||{}).beacon=c,p.time_since_render=Date.now()-s,p.url=location.href,function(e,n){if(e&&n)Object.keys(n).forEach(function(t){e[t]=n[t]})}(p,t);var u={addons:i,events:[{event:o.page+":"+e,properties:p,timestamp:Date.now()}]},d=encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(u))))),f=JSON.stringify({key:r,data:d});c?navigator.sendBeacon(a,f):((n=new XMLHttpRequest).open("post",a,!0),n.send(f))}p("load"),e.addEventListener("beforeunload",function(){p("unload")}),e.addEventListener("error",function(e){p("js_error",{message:e.message,line:e.line,col:e.col,stack:e.error&&e.error.stack})})}catch(e){}e.track=p}(window);\n    <\/script>\n  ' : "") + "\n</body>\n</html>"
		}

		function Gi() {
			try {
				return discreet.I18n.translatePaymentPopup.apply(null, arguments)
			} catch (e) {}
			return function (e, n) {
				return function (t, e) {
					return De(e).forEach(function (e) {
						var n = e[0],
							e = e[1];
						t = t.replace("{" + n + "}", e)
					}), t
				}(Yi[e], n)
			}.apply(null, arguments)
		}

		function Vi() {
			return 0 === Er.api.indexOf(e.protocol + "//" + e.hostname)
		}
		var Yi = {
			paying: "PAYING",
			payment_canceled: "Payment processing cancelled by user",
			secured_by: "Secured by",
			trying_to_load: "Still trying to load...",
			want_to_cancel: "Do you want to cancel the ongoing payment?",
			processing: "Processing, Please Wait...",
			wait_while_we_redirect: "Please wait while we redirect you to your {method} page.",
			redirecting: "Redirecting...",
			loading_method_page: "Loading {method} page…",
			trying_bank_page_msg: "The bank page is taking time to load. You can either wait or change the payment method."
		};

		function $i(e, n) {
			var t, r;
			return void 0 === e && (e = {}), !!(n = void 0 === n ? "" : n) && l(null == Cr || null == (t = Cr[null == e ? void 0 : e.method]) || null == (r = t[(null == e ? void 0 : e.wallet) || (null == e ? void 0 : e.provider)]) ? void 0 : r[n])
		}

		function Zi(e) {
			void 0 === e && (e = !1);
			var n = c.createElement("iframe"),
				t = c.getElementById("modal");
			return n.height = t.clientHeight ? t.clientHeight + "px" : "546px", n.width = t.clientWidth ? t.clientWidth + "px" : "344px", n.setAttribute("class", "mchild iframe-flow"), n.setAttribute("frameborder", "0"), n.setAttribute("id", "iframeFlow"), n.style.display = e ? "" : "none", c.getElementById("container").appendChild(n), n.window = {
				focus: function () {
					n.style.display = "", t && (t.style.display = "none")
				},
				destroy: function () {
					n.remove(), t && (t.style.display = "")
				},
				hide: function () {
					n.style.display = "none", t && (t.style.display = "")
				}
			}, n
		}

		function Wi(e) {
			var n = e.error;
			if (Xn(this.r, "otp_response", e), n) return "RETRY" === n.action ? this.emit("otp.required", "incorrect_otp_retry") : "TOPUP" === n.action ? this.emit("wallet.topup", n.description) : this.complete(e);
			Ji.call(this, e)
		}

		function qi(e) {
			return "return" === e.type ? e.request.content : e
		}
		var Ji = function (e) {
				if (!e.razorpay_payment_id && !e.error) {
					this.iframe && this.popup && (this.popup.writable = 1), this.emit("createPayment.responseType", e.type);
					var n = Xi[e.type],
						t = T(n);
					return t && n.call(this, e.request, e), t
				}
				this.complete(e)
			},
			Xi = {
				cardless_emi: function (e, n) {
					this.emit("process", {
						request: e,
						response: n
					})
				},
				first: function (e, n) {
					var t = this;
					"redirect" === e.method && ("app" === this.data.method && "cred" === this.data.provider && (this.avoidPopup = !1, this.tryPopup(), this.writePopup()), e.method = "post");
					var r, i, a = "direct" === e.method,
						o = e.content,
						u = this.popup;
					if (this.data && "amazonpay" === this.data.wallet && (e.content = {}), this.nativeotp) {
						if (tt.track("native_otp:error", {
								data: {
									error: "TYPE_FIRST"
								}
							}), !this.r.get("redirect")) return tt.track("native_otp:error", {
							data: {
								error: "REDIRECT_PARAMS_MISSING"
							}
						}), a ? this.gotoBankHtml = o : this.gotoBankRequest = e, this.emit("3ds.required");
						this.redirect(e)
					} else Vi() && $i(this.data, Rr) ? (r = this.forceIframeElement || Zi(!0), this.forceIframeElement || (this.forceIframeElement = r), null == r || null != (i = r.window) && i.focus(), this.popup = r, i = Ui(this, Gi), r.contentDocument.write(i), Oi({
						doc: r.contentDocument,
						path: e.url,
						params: e.content,
						method: e.method
					})) : u ? (this.iframe && u.show(), a ? u.write(o) : function (e) {
						var n = this.popup,
							t = this.data,
							r = !!s.CheckoutBridge,
							i = (ht || vt) && !r;
						if ("function" != typeof (r = null == (r = n.window) ? void 0 : r.document).write) return !1;
						if (t = $i(t, Ar), i && t) {
							r.write('\n      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n      <html xmlns="http://www.w3.org/1999/xhtml">\n        <head>\n          <meta name="viewport" content="width=device-width, initial-scale=1" />\n          <title>Razorpay</title>\n          <script>\n          window.addEventListener(\'message\', event => {\n            // IMPORTANT: check the origin of the data!\n            if (event.origin.startsWith(\'https://api.razorpay.com\')) {\n                const data = event.data;\n                if (!window.CheckoutBridge) {\n                  try { window.opener.onComplete(data) } catch(e){}\n                  try { (window.opener || window.parent).postMessage(data, \'*\') } catch(e){}\n                  setTimeout(window.close, 999);\n                }\n            } else {\n                // The data was NOT sent from your site!\n                // Be careful! Do not use it. This else branch is\n                // here just for clarity, you usually shouldn\'t need it.\n                return;\n            }\n        });\n          <\/script>\n          <style type="text/css">\n            body,\n            html {\n              margin: 0;\n              padding: 0;\n              height: 100%;\n              overflow: hidden;\n            }\n            #content {\n              position: absolute;\n              left: 0;\n              right: 0;\n              bottom: 0;\n              top: 0px;\n            }\n          </style>\n        </head>\n        <body>\n          <div id="content">\n            <iframe\n              id="frame"\n              width="100%"\n              height="100%"\n              frameborder="0"\n            ></iframe>\n          </div>\n        </body>\n      </html>\n    ');
							t = r.querySelector("#frame");
							return n.window.history && (r = "razorpay.html?url=" + e.url, n.window.history.pushState({
								Url: r
							}, "Razorpay", r)), Oi({
								doc: t.contentWindow.document,
								path: e.url,
								params: e.content,
								method: e.method
							}), !0
						}
						return !1
					}.call(this, e) || Oi({
						doc: window.document,
						path: e.url,
						params: e.content,
						method: e.method,
						target: u.name
					}), f(function () {
						u.window.closed && t.r.get("callback_url") && (t.r.set("redirect", !0), t.checkRedirect())
					})) : this.checkRedirect()
				},
				async: function (e, n) {
					var t = this;
					this.ajax = fn.jsonp({
						url: e.url,
						callback: function (e) {
							return t.complete(e)
						}
					}).till(function (e) {
						return e && e.status
					}, 10), "app" === this.data.method ? this.emit("app.pending", n) : this.emit("upi.pending", n.data)
				},
				application: function (e, n) {
					var t = this;
					t.request = e, t.emit("externalsdk.process", n), t.on("app.intent_response", function (e) {
						tt.track("intent_response", {
							data: {
								response: e
							}
						}), "GOOGLE_PAY" !== e.provider || "gpay_merged" !== e.data.apiResponse.type || 0 !== e.resultCode ? (e = t.request, t.ajax = fn.jsonp({
							url: e.url,
							callback: function (e) {
								return t.complete(qi(e))
							}
						}).till(function (e) {
							return e && e.status
						}, 10)) : t.emit("cancel", Li)
					})
				},
				gpay_inapp: function (e) {
					var n = this;
					this.ajax = fn.jsonp({
						url: e.url,
						callback: function (e) {
							return n.complete(e)
						}
					}).till(function (e) {
						return e && e.status
					}, 10), this.emit("upi.pending", {
						flow: "upi-intent"
					})
				},
				web_payments: function (e, n) {
					function t(e, n) {
						n.code && (0 <= [n.ABORT_ERR, n.NOT_SUPPORTED_ERR].indexOf(n.code) && i.data && "upi" === i.data.method && i.emit("upi.intent_response", {}), n.code === n.NOT_SUPPORTED_ERR && tt.track("web_payments_api:not_supported", {
							data: {
								error: n,
								app: e
							}
						}))
					}
					var r, i = this,
						a = e.data,
						o = {
							url: a.intent_url
						},
						a = (e = a.intent_url, r = {}, e.replace(/^.*\?/, "").replace(/([^=&]+)=([^&]*)/g, function (e, n, t) {
							r[b(n)] = b(t)
						}), r),
						e = [{
							supportedMethods: Ki[n],
							data: o
						}],
						o = this.data.amount / 100,
						o = {
							total: {
								label: "Payment",
								amount: {
									currency: "INR",
									value: parseFloat(a.am || o).toFixed(2)
								}
							}
						};
					try {
						var u = s.PaymentRequest;
						tt.track("upi.trigger_mweb_intent_open", {
							type: xn,
							data: {
								app: n
							}
						}), new u(e, o).show().then(function (e) {
							return Xn(i.r, "web_payments_api_response", {
								instrument: e
							}), i.data && "upi" === i.data.method ? i.emit("upi.intent_response", {
								response: e.details
							}) : i.data && "app" === i.data.method && i.emit("app.intent_response", {
								response: e.details
							}), e.complete()
						}).catch(function (e) {
							t(n, e)
						})
					} catch (e) {
						t(n, e)
					}
				},
				gpay: function (e, n, t) {
					var r = this;
					"payment_request" === (t = void 0 === t ? "payment_request" : t) ? function (e, n, t) {
						var r = {};
						t = t || function () {}, e.intent_url.replace(/^.*\?/, "").replace(/([^=&]+)=([^&]*)/g, function (e, n, t) {
							r[b(n)] = b(t)
						}), r.url = "https://razorpay.com";
						var i = [{
								supportedMethods: Ni,
								data: r
							}],
							e = {
								total: {
									label: "Payment",
									amount: {
										currency: "INR",
										value: parseFloat(r.am).toFixed(2)
									}
								}
							};
						try {
							new Mi(i, e).show().then(function (e) {
								return n(e), e.complete()
							}).catch(function (e) {
								t(e)
							})
						} catch (e) {
							t(e)
						}
					}(n.data, function (e) {
						Xn(r.r, "gpay_pay_response", {
							instrument: e
						}), r.emit("upi.intent_response", {
							response: e.details
						})
					}, function (e) {
						e.code && (0 <= [e.ABORT_ERR, e.NOT_SUPPORTED_ERR].indexOf(e.code) && r.emit("upi.intent_response", {}), e.code === e.NOT_SUPPORTED_ERR && tt.track("gpay:not_supported", {
							data: {
								error: e
							}
						})), Xn(r.r, "gpay_error", e)
					}) : "microapp" === t && Bi.call(this, n.data.intent_url).then(function (e) {
						r.additional_info && tt.track("google_spot_additional_info_passed", {
							data: r.additional_info
						}), tt.track("gpay_pay_response", {
							data: e.paymentMethodData
						}), r.emit("upi.intent_success_response", e.paymentMethodData)
					}).catch(function (e) {
						tt.track("gpay_error", {
							data: e
						}), r.emit("cancel", wr)
					})
				},
				intent: function (t, e) {
					var r = this,
						n = s.CheckoutBridge,
						i = (e.data || {}).intent_url;
					if ("app" === this.data.method) return this.emit("app.coproto_response", e), o = this.data.provider, Si[o = "cred" === o ? gr : o] ? Xi.web_payments.call(this, e, this.data.provider) : "ios" === fi.platform ? fi.callIos("callNativeIntent", {
						intent_url: i,
						shortcode: this.data.provider
					}) : n.callNativeIntent(i), void this.on("app.intent_response", function (e) {
						"CRED" !== e.provider || 0 !== e.data ? r.ajax = fn.jsonp({
							url: t.url,
							callback: function (e) {
								return r.complete(qi(e))
							}
						}).till(function (e) {
							return e && e.status
						}, 10) : r.emit("cancel", {
							"_[method]": "app",
							"_[provider]": "cred",
							"_[reason]": "PAYMENT_CANCEL_ON_APP"
						})
					});
					var a, o = function (e) {
						var n;
						e && r.emit("upi.pending", {
							flow: "upi-intent",
							response: e
						}), r.ajax = (n = (void 0 === (e = e) ? {} : e).transactionReferenceId, fn.jsonp({
							url: t.url,
							callback: function (e) {
								n && (e.transaction_reference = n), r.complete(e)
							}
						}).till(function (e) {
							return e && e.status
						}, 10))
					};
					if ("ios" === fi.platform ? o() : this.on("upi.intent_success_response", o), this.on("upi.intent_response", function (e) {
							var n = dr(e);
							l((n = n).txnId) || 0 === (n.Status || n.status || "").toLowerCase().indexOf("suc") ? r.emit("upi.intent_success_response", e) : r.emit("cancel", wr)
						}), this.emit("upi.coproto_response", e), n && n.callNativeIntent && "1" !== this.data["_[upiqr]"]) this.upi_app ? n.callNativeIntent(i, this.upi_app) : n.callNativeIntent(i);
					else {
						if (this.gpay) return this.microapps && this.microapps.gpay ? Xi.gpay.call(this, t, e, "microapp") : Rt ? !this.upi_app || this.upi_app === hr ? Xi.gpay.call(this, t, e) : Xi.web_payments.call(this, e, this.upi_app) : void 0;
						if (this.upi_app) {
							e = (a = this.upi_app, e = yr(), de(function (e) {
								return e.package_name === a
							})(e));
							return fi.callIos("callNativeIntent", {
								intent_url: i,
								upi_app: this.upi_app,
								shortcode: e.shortcode
							})
						}
					}
				},
				otp: function (e, n) {
					if (!this.nativeotp && !this.iframe && "direct" === e.method) return Xi.first.call(this, e, Xi);
					"wallet" === this.data.method ? (this.otpurl = e.url, this.emit("otp.required")) : ("emi" === this.data.method && "hdfc_debit_emi" === this.data["_[mode]"] ? (this.otpurl = n.submit_url, n.mode = "hdfc_debit_emi") : (tt.setMeta("headless", !0), this.otpurl = n.submit_url, this.gotoBankUrl = n.redirect), this.emit("otp.required", n))
				},
				return: function (e) {
					e.target = this.r.get("target"), tn(e)
				},
				respawn: function (e, n) {
					return (this.data && "cardless_emi" === this.data.method && this.data.contact ? Xi.cardless_emi : Xi.first).call(this, e, n)
				}
			};

		function Qi(e) {
			return na ? function (e) {
				var n = c.createElement("div");
				n.style.color = e, c.body.appendChild(n);
				e = window.getComputedStyle(n).color;
				return c.body.removeChild(n), da(e)
			}(e) : (ea.fillStyle = "#fff", ea.fillRect(0, 0, 1, 1), ea.fillStyle = e, ea.fillRect(0, 0, 1, 1), {
				red: (e = ea.getImageData(0, 0, 1, 1).data)[0],
				green: e[1],
				blue: e[2],
				alpha: e[3] / 255
			})
		}
		var ea = Te("canvas").getContext("2d"),
			na = 0 === ea.getImageData(0, 0, 1, 1).data.length,
			ta = function (e, n, t) {
				var r, i = p.max(e /= 255, n /= 255, t /= 255),
					a = p.min(e, n, t),
					o = i,
					u = i - a,
					c = 0 === i ? 0 : u / i;
				if (i === a) r = 0;
				else {
					switch (i) {
						case e:
							r = (n - t) / u + (n < t ? 6 : 0);
							break;
						case n:
							r = (t - e) / u + 2;
							break;
						case t:
							r = (e - n) / u + 4
					}
					r /= 6
				}
				return {
					hue: r,
					saturation: c,
					brightness: o
				}
			};

		function ra(e) {
			return e <= 10 ? e / 3294 : p.pow(e / 269 + .0513, 2.4)
		}

		function ia(e, n) {
			var t = (i = sa(e)).red,
				r = i.green,
				e = i.blue,
				i = i.alpha,
				r = (t = ta(t, r, e)).hue,
				e = t.saturation,
				t = t.brightness,
				e = function (e, n, t) {
					var r, i, a, o = p.floor(6 * e),
						u = t * (1 - n),
						c = t * (1 - (e = 6 * e - o) * n),
						s = t * (1 - (1 - e) * n);
					switch (o % 6) {
						case 0:
							r = t, i = s, a = u;
							break;
						case 1:
							r = c, i = t, a = u;
							break;
						case 2:
							r = u, i = t, a = s;
							break;
						case 3:
							r = u, i = c, a = t;
							break;
						case 4:
							r = s, i = u, a = t;
							break;
						case 5:
							r = t, i = u, a = c
					}
					return {
						red: 255 * r,
						green: 255 * i,
						blue: 255 * a
					}
				}(r, e, t += t * (n / 100));
			return n = e.red, t = e.green, e = e.blue, i = i, "rgba(" + p.round(n) + ", " + p.round(t) + ", " + p.round(e) + ", " + i + ")"
		}
		var aa, oa, ua, ca, sa = (aa = {}, function (e) {
				return aa[e] || (aa[e] = Qi(e))
			}),
			la = (oa = {}, function (e) {
				if (oa[e]) return oa[e];
				var n = sa(e),
					n = ta(n.red, n.green, n.blue);
				return oa[e] = n
			}),
			ma = (ua = {}, function (e) {
				if (ua[e]) return ua[e];
				var n = sa(e),
					t = n.red,
					r = n.green,
					n = n.blue,
					t = ra(t),
					n = ra(n),
					r = ra(r);
				return ua[e] = .2126 * t + .7152 * r + .0722 * n
			}),
			da = function (e) {
				var n = {
					red: 0,
					green: 0,
					blue: 0,
					alpha: 1
				};
				return e && 4 < e.length && (3 === (e = e.match(/\d+/g)).length && (n.red = e[0], n.green = e[1], n.blue = e[2])), n
			},
			pa = (ca = {}, function (e) {
				if (ca[e]) return ca[e];
				var n = 0,
					t = 0,
					r = ma(e);
				return .9 <= r ? (t = -50, n = -30) : .7 <= r && r < .9 ? (t = -55, n = -30) : .6 <= r && r < .7 ? (t = -50, n = -15) : .5 <= r && r < .6 ? (t = -45, n = -10) : .4 <= r && r < .5 ? (t = -40, n = -5) : .3 <= r && r < .4 ? (t = -35, n = 0) : .2 <= r && r < .3 ? (t = -30, n = 20) : .1 <= r && r < .2 ? (t = -20, n = 60) : 0 <= r && r < .1 && (t = 0, n = 80), ca[e] = {
					foregroundColor: ia(e, t),
					backgroundColor: ia(e, n)
				}
			});

		function fa(e, n) {
			var t, r;
			if (90 < (r = sa(t = e), r = 100 * (t = ta(r.red, r.green, r.blue)).saturation, t = 100 * t.brightness, p.sqrt(p.pow(100 - r, 2) + p.pow(100 - t, 2)))) return n;
			n = 100 * la(e).saturation, e = pa(e);
			return n <= 50 ? e.backgroundColor : e.foregroundColor
		}

		function ha(e, n, t) {
			return p.min(p.max(p.floor(e), n), t)
		}

		function va(e, n) {
			var t = window.innerWidth || c.documentElement.clientWidth,
				r = window.innerHeight || c.documentElement.clientHeight,
				i = {
					width: ha(.7 * t, 895, 1440),
					height: ha(.8 * r, 520, 1060),
					menubar: "no",
					resizable: "yes",
					location: "no",
					scrollbars: "yes"
				},
				a = null === window.screenX ? window.screenLeft : window.screenX,
				o = null === window.screenY ? window.screenTop : window.screenY,
				t = null === window.outerWidth ? c.documentElement.clientWidth : window.outerWidth,
				r = null === window.outerHeight ? c.documentElement.clientHeight - 22 : window.outerHeight;
			i.left = In(a + (t - i.width) / 2, 10), i.top = In(o + (r - i.height) / 2.5, 10);
			var u = [];
			Se(i, function (e, n) {
				u.push(n + "=" + e)
			}), u = u.join(","), this.name = n;
			try {
				this.window = window.open(e, n || "", u)
			} catch (e) {}
			if (!this.window) return null;
			this.window.focus(), this.listeners = [], this.interval = h(this.checkClose.bind(this), 200), this.on("beforeunload", this.beforeunload), this.on("unload", this.close)
		}
		va.prototype = {
			on: function (e, n) {
				var t;
				this.listeners.push((t = s, Ze(e, n)(t)))
			},
			write: function (e) {
				var n = this.window.document;
				n.write(e), n.close()
			},
			beforeunload: function (e) {
				return e.returnValue = "Your payment is incomplete.", e.returnValue
			},
			close: function () {
				y(this.interval), m.isArray(this.listeners) && this.listeners.forEach(function (e) {
					return e()
				}), this.listeners = [], this.window && this.window.close()
			},
			checkClose: function (e, n) {
				var t = this;
				if (!(20 < (n = void 0 === n ? 0 : n))) try {
					if (e || !1 !== this.window.closed) return f(function () {
						t && "function" == typeof t.onClose && t.onClose()
					}, 100), this.close(), !0
				} catch (e) {
					this.checkClose(!0, n + 1)
				}
			}
		};
		var ga = "iframe-active";

		function ya(e, n, t) {
			var r = this;
			this.name = n;
			var i = (this.payment = t).r.get();
			this.el = (a = Te("div"), a = je("payment-frame")(a), a = Ye((t = sr(t.r, i.amount, i.currency), "<div class='iframe-title'>\n<b class='iframe-close'></b> " + (i.name || i.description || "Payment") + "\n<b class='iframe-amount'>" + t + "</b>\n</div>\n<iframe></iframe>"))(a), Le(en("#modal-inner"))(a)), tt.track("iframe:create"), this.window = (a = this.el.querySelector("iframe").contentWindow, be("name", n)(a));
			var a = (a = en(".iframe-close"), Ze("click", function () {
				tt.track("iframe:cancel:click", {
					type: xn
				}), s.confirm("Do you want to cancel this payment?") && (r.close(), r.payment.emit("cancel"))
			})(a));
			this.listeners = [a]
		}

		function _a(e, n) {
			this.thisArg = 1 < arguments.length ? n : this, this.el = e, this.listeners = []
		}
		ya.prototype = {
			on: function (e, n) {
				var t;
				this.listeners.push((t = s, Ze(e, n)(t)))
			},
			write: function (e) {
				var n = this.window.document;
				n.write(e), n.close()
			},
			close: function () {
				var e;
				this.closed || (this.closed = !0, this.listeners.forEach(function (e) {
					return e()
				}), this.listeners = [], e = this.el, Oe(e), e = en("#modal"), ze(ga)(e), tt.track("iframe:close"), tt.removeMeta("iframe", !1))
			},
			show: function () {
				var e = this.el;
				$e("block")(e);
				var n = en("#modal"),
					t = qe(n),
					e = n;
				Ve({
					height: t.height + "px",
					width: t.width + "px"
				})(e), We(n), n = n, je(ga)(n), tt.track("iframe:show"), tt.setMeta("iframe", !0)
			}
		}, _a.prototype = {
			on: function (e, n, t, r) {
				var i, a, o, u, c, s, l;
				if ("string" == typeof e) return A(t) || (r = t, t = this.el), this.listeners.push((i = t, a = e, c = n, s = this.thisArg, o = function (e) {
					(e = e || window.event).target || (e.target = e.srcElement), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.preventDefault || (e.preventDefault = function () {
						return e.returnValue = !1
					}), "function" == typeof (c = "string" == typeof c ? s[c] : c) && c.call(s, e)
				}, u = r, i.addEventListener(a, o, u), function () {
					i.removeEventListener(a, o, u)
				})), this;
				for (l in e) this.on(l, e[l], n, t)
			},
			off: function () {
				return this.listeners.forEach(function (e) {
					e()
				}), this.listeners = [], this
			}
		};

		function ba(e, t, n) {
			var r = this;
			if (st.call(this), this.el = e, !(t = I(t) ? ba.rules[t] : t) || !A(e)) return !1;
			Se(t, function (e, n) {
				r[n] = t[n]
			}), n ? e._formatter = this : this.bind(), f(function () {
				return r.format()
			})
		}
		Ee = function (e) {
			e = e.replace(/[^a-zA-Z0-9]/g, "");
			return e = 0 < this.el.maxLength ? e.slice(0, this.el.maxLength) : e
		};
		ba.events = {
			keypress: "fwdFormat",
			input: "deferFormat",
			change: "format",
			blur: "format",
			keydown: "backFormat"
		}, ba.rules = {
			card: {
				setValue: function (e) {
					var n = this.currentType = Xr(e);
					n !== this.type && (this.maxLen = Yr(n)), this.value = e.slice(0, this.maxLen)
				},
				pretty: function (e, n) {
					var t = this.maxLen,
						r = e.slice(0, t).replace(function (e) {
							if (19 !== e) return e < 16 ? /(^.{4}|.{6})/g : /(.{4})/g
						}(t), "$1 ");
					return r = n || e.length >= t ? r.trim() : r
				},
				oninput: function () {
					var e = {
						type: this.currentType,
						maxLen: this.maxLen,
						valid: this.isValid()
					};
					e.type !== this.type && (this.type = e.type, this.emit("network", e)), this.emit("change", e)
				},
				isValid: function (e) {
					if (ut(e = e || this.value)) return "maestro" === this.type && 16 === e.length || e.length === (this.maxLen || Yr(this.type))
				}
			},
			alphanumeric: {
				raw: Ee
			},
			vpa: {
				raw: function (e) {
					var n = e.replace(/[\s]/, ""),
						t = n.split("@"),
						e = t[1];
					return e ? t[0] + "@" + e.replace(/[^a-zA-Z]/g, "").toLowerCase() : n
				},
				isValid: function () {
					return /^[^\s@]+@[a-z]{3,}$/i.test(this.value)
				}
			},
			ifsc: {
				raw: Ee,
				pretty: function (e, n) {
					var t = e.slice(0, 11).toUpperCase();
					return t = n || 11 <= e.length ? t.trim() : t
				},
				isValid: function () {
					return 11 === this.value.length && /^[a-zA-Z]{4}[a-zA-Z0-9]{7}$/.test(this.value)
				}
			},
			expiry: {
				pretty: function (e, n) {
					return e = e.replace(/^([2-9])$/, "0$1").replace(/^1[3-9]$/, "1").replace(/(.{2})/, "$1 / ").replace(/^(.{5})\d{2}(\d{2})$/, "$1$2").slice(0, 7), e = n ? e.replace(/\D+$/, "") : e
				},
				oninput: function () {
					this.emit("change", {
						valid: this.isValid()
					})
				},
				isValid: function () {
					if (4 !== this.value.length) return !1;
					if (12 < In(this.value.slice(0, 2), 10)) return !1;
					var e = In(this.value.slice(2), 10),
						n = new d,
						t = n.getFullYear() - 2e3;
					return t !== e ? t < e : In(this.value.slice(0, 2), 10) >= n.getMonth() + 1
				}
			},
			number: {
				raw: function (e) {
					e = e.replace(/\D/g, "");
					return e = 0 < this.el.maxLength ? e.slice(0, this.el.maxLength) : e
				}
			},
			amount: {
				raw: function (e) {
					return e.split(".").slice(0, 2).map(function (e, n) {
						return e = e.replace(/\D/g, ""), e = n ? e.slice(0, 2) : e
					}).join(".")
				},
				pretty: ct
			},
			phone: {
				raw: function (e) {
					return "" + e.slice(0, 15).replace(/[^+\d]/g, "")
				},
				isValid: function (e) {
					return e = e || this.value, /^\+?[0-9]{8,15}$/.test(e)
				}
			},
			country_code: {
				raw: function (e) {
					return e = !e.startsWith("+") ? "+" + e : e
				},
				isValid: function (e) {
					return e = e || this.value, /^\+[0-9]{1,6}$/.test(e)
				}
			}
		};
		n = ba.prototype = new st;
		n.backFormat = function (e) {
			var n, t, r;
			8 === J(e) && (n = this.getCaret(), t = this.el.value, n.start && n.start === n.end && --n.start, r = t.slice(0, n.start), this.run({
				e: e,
				left: r,
				value: r + t.slice(n.end)
			}))
		}, n.pretty = n.isValid = ct, n.prettyValue = "", n.raw = function (e) {
			return e.replace(/\D/g, "")
		}, n.setValue = function (e) {
			this.value = e
		}, n.oninput = function () {
			this.emit("change")
		}, n.fwdFormat = function (e) {
			var n, t, r = (t = J(n = e)) && !n.ctrlKey && g.fromCharCode(t).replace(/[^\x20-\x7E]/, "") || "";
			r && (n = this.getCaret(), t = (r = (t = this.el.value).slice(0, n.start) + r) + t.slice(n.end), this.run({
				e: e,
				left: r,
				value: t
			}))
		}, n.deferFormat = function (e) {
			var n = this;
			f(function () {
				n.format(e)
			})
		}, n.format = function (e) {
			var n = this.getCaret().start,
				t = this.el.value;
			this.run({
				value: t,
				left: t.slice(0, n)
			})
		}, n.bind = function () {
			return this.evtHandler = new _a(this.el, this).on(ba.events), this
		}, n.unbind = function () {
			var e = this.evtHandler;
			return e && (e.off(), this.evtHandler = null), this._events = {}, this
		}, n.run = function (e) {
			var n, t, r, i, a, o, u;
			this.el.readOnly || (u = e.value, i = this.raw(u), a = this.value, this.setValue(i), r = (t = (n = e.left).length) < this.caretPosition, i = this.pretty(this.value, r), u = e.e ? (on(e.e), i !== this.prettyValue) : i !== u, this.prettyValue = i, u && (this.el.value = i), n === i && !u || (t = this.pretty(this.raw(n), r).length, this.moveCaret(t)), this.caretPosition = t, a !== this.value && (this.oninput(), a = this.el, "function" == typeof s.Event ? o = new s.Event("input") : (o = c.createEvent("Event")).initEvent("input", !0, !0), a.dispatchEvent(o)))
		}, n.moveCaret = function (e) {
			var n = this.el;
			x(n.selectionStart) ? n.selectionStart !== e && (n.selectionStart = n.selectionEnd = e) : ((n = n.createTextRange()).collapse(!0), n.moveEnd("character", e), n.moveStart("character", e), n.select())
		}, n.getCaret = function () {
			var e, n = this.el,
				t = n.value.length,
				r = "";
			try {
				var i, a, o = n.selectionStart;
				x(o) ? e = n.selectionEnd : c.selection && (r = (i = c.selection.createRange()).text, (a = n.createTextRange()).moveToBookmark(i.getBookmark()), e = (o = -a.moveStart("character", -t)) + r.length)
			} catch (e) {}
			return {
				start: o = !x(o) ? e = t : o,
				end: e
			}
		};
		var wa, Ee = function e(n) {
				var r = this;
				if (!z(this, e)) return new e(n);
				_a.call(this, n), this.bits = [], Se(ba.events, function (t, e) {
					r.on(e, function (e) {
						var n = e.target._formatter;
						n && n[t](e)
					}, n, !0)
				})
			},
			n = Ee.prototype = new _a;

		function ka(e) {
			return e.type === wa.literal
		}

		function Sa(e) {
			return e.type === wa.select
		}

		function Ea(e) {
			return e.type === wa.plural
		}
		n.add = function (e, n) {
			if (ba.rules[e]) {
				e = new ba(n, e, !0);
				return this.bits.push(e), e
			}
		}, n.destroy = function () {
			this.off(), this.bits.forEach(function (e) {
				return e.unbind()
			}), this.bits = []
		}, (n = wa = wa || {})[n.literal = 0] = "literal", n[n.argument = 1] = "argument", n[n.number = 2] = "number", n[n.date = 3] = "date", n[n.time = 4] = "time", n[n.select = 5] = "select", n[n.plural = 6] = "plural", n[n.pound = 7] = "pound";
		var Ra, Aa, n = (Ra = function (e, n) {
				return (Ra = v.setPrototypeOf || {
						__proto__: []
					}
					instanceof m && function (e, n) {
						e.__proto__ = n
					} || function (e, n) {
						for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
					})(e, n)
			}, function (e, n) {
				function t() {
					this.constructor = e
				}
				Ra(e, n), e.prototype = null === n ? v.create(n) : (t.prototype = n.prototype, new t)
			}),
			Pa = function () {
				return (Pa = v.assign || function (e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) v.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}).apply(this, arguments)
			},
			Ca = (Aa = Error, n(Da, Aa), Da.buildMessage = function (e, n) {
				function t(e) {
					return e.charCodeAt(0).toString(16).toUpperCase()
				}

				function r(e) {
					return e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
						return "\\x0" + t(e)
					}).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
						return "\\x" + t(e)
					})
				}

				function i(e) {
					return e.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function (e) {
						return "\\x0" + t(e)
					}).replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
						return "\\x" + t(e)
					})
				}

				function a(e) {
					switch (e.type) {
						case "literal":
							return '"' + r(e.text) + '"';
						case "class":
							var n = e.parts.map(function (e) {
								return m.isArray(e) ? i(e[0]) + "-" + i(e[1]) : i(e)
							});
							return "[" + (e.inverted ? "^" : "") + n + "]";
						case "any":
							return "any character";
						case "end":
							return "end of input";
						case "other":
							return e.description
					}
				}
				return "Expected " + function (e) {
					var n, t, r = e.map(a);
					if (r.sort(), 0 < r.length) {
						for (t = n = 1; n < r.length; n++) r[n - 1] !== r[n] && (r[t] = r[n], t++);
						r.length = t
					}
					switch (r.length) {
						case 1:
							return r[0];
						case 2:
							return r[0] + " or " + r[1];
						default:
							return r.slice(0, -1).join(", ") + ", or " + r[r.length - 1]
					}
				}(e) + " but " + ((o = n) ? '"' + r(o) + '"' : "end of input") + " found.";
				var o
			}, Da);

		function Da(e, n, t, r) {
			var i = Aa.call(this) || this;
			return i.message = e, i.expected = n, i.found = t, i.location = r, i.name = "SyntaxError", "function" == typeof Error.captureStackTrace && Error.captureStackTrace(i, Da), i
		}
		var xa = function (l, e) {
				var m = {},
					n = {
						start: on
					},
					t = on,
					r = function (e) {
						return e.join("")
					},
					i = function (e) {
						return Pa({
							type: wa.literal,
							value: e
						}, xn())
					},
					a = "#",
					o = Qe("#", !1),
					u = function () {
						return Pa({
							type: wa.pound
						}, xn())
					},
					c = nn("argumentElement"),
					d = "{",
					p = Qe("{", !1),
					f = "}",
					h = Qe("}", !1),
					s = function (e) {
						return Pa({
							type: wa.argument,
							value: e
						}, xn())
					},
					v = nn("numberSkeletonId"),
					g = /^['\/{}]/,
					y = en(["'", "/", "{", "}"], !1, !1),
					_ = {
						type: "any"
					},
					b = nn("numberSkeletonTokenOption"),
					w = "/",
					k = Qe("/", !1),
					S = function (e) {
						return e
					},
					E = nn("numberSkeletonToken"),
					R = function (e, n) {
						return {
							stem: e,
							options: n
						}
					},
					A = function (e) {
						return Pa({
							type: 0,
							tokens: e
						}, xn())
					},
					P = "::",
					C = Qe("::", !1),
					D = function (e) {
						return e
					},
					x = function () {
						return Cn.push("numberArgStyle"), !0
					},
					I = function (e) {
						return Cn.pop(), e.replace(/\s*$/, "")
					},
					T = ",",
					M = Qe(",", !1),
					N = "number",
					B = Qe("number", !1),
					L = function (e, n, t) {
						return Pa({
							type: "number" === n ? wa.number : "date" === n ? wa.date : wa.time,
							style: t && t[2],
							value: e
						}, xn())
					},
					O = "'",
					F = Qe("'", !1),
					K = /^[^']/,
					j = en(["'"], !0, !1),
					z = /^[^a-zA-Z'{}]/,
					H = en([
						["a", "z"],
						["A", "Z"], "'", "{", "}"
					], !0, !1),
					U = /^[a-zA-Z]/,
					G = en([
						["a", "z"],
						["A", "Z"]
					], !1, !1),
					V = function (e) {
						return Pa({
							type: 1,
							pattern: e
						}, xn())
					},
					Y = function () {
						return Cn.push("dateOrTimeArgStyle"), !0
					},
					$ = "date",
					Z = Qe("date", !1),
					W = "time",
					q = Qe("time", !1),
					J = "plural",
					X = Qe("plural", !1),
					Q = "selectordinal",
					ee = Qe("selectordinal", !1),
					ne = "offset:",
					te = Qe("offset:", !1),
					re = function (e, n, t, r) {
						return Pa({
							type: wa.plural,
							pluralType: "plural" === n ? "cardinal" : "ordinal",
							value: e,
							offset: t ? t[2] : 0,
							options: r.reduce(function (e, n) {
								var t = n.id,
									r = n.value,
									n = n.location;
								return t in e && Xe('Duplicate option "' + t + '" in plural element: "' + qe() + '"', Je()), e[t] = {
									value: r,
									location: n
								}, e
							}, {})
						}, xn())
					},
					ie = "select",
					ae = Qe("select", !1),
					oe = function (e, n) {
						return Pa({
							type: wa.select,
							value: e,
							options: n.reduce(function (e, n) {
								var t = n.id,
									r = n.value,
									n = n.location;
								return t in e && Xe('Duplicate option "' + t + '" in select element: "' + qe() + '"', Je()), e[t] = {
									value: r,
									location: n
								}, e
							}, {})
						}, xn())
					},
					ue = "=",
					ce = Qe("=", !1),
					se = function (e) {
						return Cn.push("select"), !0
					},
					le = function (e, n) {
						return Cn.pop(), Pa({
							id: e,
							value: n
						}, xn())
					},
					me = function (e) {
						return Cn.push("plural"), !0
					},
					de = function (e, n) {
						return Cn.pop(), Pa({
							id: e,
							value: n
						}, xn())
					},
					pe = nn("whitespace"),
					fe = /^[\t-\r \x85\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,
					he = en([
						["\t", "\r"], " ", "", " ", " ", [" ", " "], "\u2028", "\u2029", " ", " ", "　"
					], !1, !1),
					ve = nn("syntax pattern"),
					ge = /^[!-\/:-@[-\^`{-~\xA1-\xA7\xA9\xAB\xAC\xAE\xB0\xB1\xB6\xBB\xBF\xD7\xF7\u2010-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u245F\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3020\u3030\uFD3E\uFD3F\uFE45\uFE46]/,
					ye = en([
						["!", "/"],
						[":", "@"],
						["[", "^"], "`", ["{", "~"],
						["¡", "§"], "©", "«", "¬", "®", "°", "±", "¶", "»", "¿", "×", "÷", ["‐", "‧"],
						["‰", "‾"],
						["⁁", "⁓"],
						["⁕", "⁞"],
						["←", "⑟"],
						["─", "❵"],
						["➔", "⯿"],
						["⸀", "⹿"],
						["、", "〃"],
						["〈", "〠"], "〰", "﴾", "﴿", "﹅", "﹆"
					], !1, !1),
					_e = nn("optional whitespace"),
					be = nn("number"),
					we = "-",
					ke = Qe("-", !1),
					Se = function (e, n) {
						return n ? e ? -n : n : 0
					},
					Ee = nn("double apostrophes"),
					Re = "''",
					Ae = Qe("''", !1),
					Pe = function () {
						return "'"
					},
					Ce = function (e, n) {
						return e + n.replace("''", "'")
					},
					De = function (e) {
						return !("{" === e || Dn() && "#" === e || 1 < Cn.length && "}" === e)
					},
					xe = "\n",
					Ie = Qe("\n", !1),
					Te = function (e) {
						return "{" === e || "}" === e || Dn() && "#" === e
					},
					Me = nn("argNameOrNumber"),
					Ne = nn("argNumber"),
					Be = "0",
					Le = Qe("0", !1),
					Oe = function () {
						return 0
					},
					Fe = /^[1-9]/,
					Ke = en([
						["1", "9"]
					], !1, !1),
					je = /^[0-9]/,
					ze = en([
						["0", "9"]
					], !1, !1),
					He = function (e) {
						return In(e.join(""), 10)
					},
					Ue = nn("argName"),
					Ge = 0,
					Ve = 0,
					Ye = [{
						line: 1,
						column: 1
					}],
					$e = 0,
					Ze = [],
					We = 0;
				if (void 0 !== (e = void 0 !== e ? e : {}).startRule) {
					if (!(e.startRule in n)) throw new Error("Can't start parsing from rule \"" + e.startRule + '".');
					t = n[e.startRule]
				}

				function qe() {
					return l.substring(Ve, Ge)
				}

				function Je() {
					return rn(Ve, Ge)
				}

				function Xe(e, n) {
					throw n = void 0 !== n ? n : rn(Ve, Ge), new Ca(e, [], "", n)
				}

				function Qe(e, n) {
					return {
						type: "literal",
						text: e,
						ignoreCase: n
					}
				}

				function en(e, n, t) {
					return {
						type: "class",
						parts: e,
						inverted: n,
						ignoreCase: t
					}
				}

				function nn(e) {
					return {
						type: "other",
						description: e
					}
				}

				function tn(e) {
					var n, t = Ye[e];
					if (t) return t;
					for (n = e - 1; !Ye[n];) n--;
					for (t = {
							line: (t = Ye[n]).line,
							column: t.column
						}; n < e;) 10 === l.charCodeAt(n) ? (t.line++, t.column = 1) : t.column++, n++;
					return Ye[e] = t
				}

				function rn(e, n) {
					var t = tn(e),
						r = tn(n);
					return {
						start: {
							offset: e,
							line: t.line,
							column: t.column
						},
						end: {
							offset: n,
							line: r.line,
							column: r.column
						}
					}
				}

				function an(e) {
					Ge < $e || ($e < Ge && ($e = Ge, Ze = []), Ze.push(e))
				}

				function on() {
					return un()
				}

				function un() {
					for (var e = [], n = cn(); n !== m;) e.push(n), n = cn();
					return e
				}

				function cn() {
					var e = function () {
						var e, n;
						e = Ge, (n = sn()) !== m && (Ve = e, n = i(n));
						return e = n
					}();
					return e = e === m && (e = function () {
						var e, n, t, r;
						We++, e = Ge, 123 === l.charCodeAt(Ge) ? (n = d, Ge++) : (n = m, 0 === We && an(p));
						e = n !== m ? (t = _n(), t !== m ? (t = En()) !== m ? _n() !== m ? (125 === l.charCodeAt(Ge) ? (r = f, Ge++) : (r = m, 0 === We && an(h)), r !== m ? (Ve = e, n = s(t)) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m);
						We--, e === m && (n = m, 0 === We && an(c));
						return e
					}()) === m && (e = function () {
						var e;
						(e = function () {
							var e, n, t, r, i, a, o, u;
							e = Ge, 123 === l.charCodeAt(Ge) ? (n = d, Ge++) : (n = m, 0 === We && an(p));
							e = n !== m ? (i = _n(), i !== m ? (t = En()) !== m ? _n() !== m ? (44 === l.charCodeAt(Ge) ? (u = T, Ge++) : (u = m, 0 === We && an(M)), u !== m ? _n() !== m ? (l.substr(Ge, 6) === N ? (r = N, Ge += 6) : (r = m, 0 === We && an(B)), r !== m ? _n() !== m ? (i = Ge, 44 === l.charCodeAt(Ge) ? (a = T, Ge++) : (a = m, 0 === We && an(M)), (i = (i = a !== m ? (o = _n()) !== m ? (u = function () {
								var e, n, t;
								e = Ge, l.substr(Ge, 2) === P ? (n = P, Ge += 2) : (n = m, 0 === We && an(C));
								e = n !== m ? (t = function () {
									var e, n, t;
									if (e = Ge, n = [], (t = dn()) !== m)
										for (; t !== m;) n.push(t), t = dn();
									else n = m;
									n !== m && (Ve = e, n = A(n));
									return e = n
								}(), t !== m ? (Ve = e, n = D(t)) : (Ge = e, m)) : (Ge = e, m);
								e === m && (Ve = e = Ge, n = x(), e = (n = n ? void 0 : m) !== m ? (t = sn()) !== m ? (Ve = e, n = I(t)) : (Ge = e, m) : (Ge = e, m));
								return e
							}()) !== m ? a = [a, o, u] : (Ge = i, m) : (Ge = i, m) : (Ge = i, m)) === m ? null : i) !== m ? (a = _n()) !== m ? (125 === l.charCodeAt(Ge) ? (o = f, Ge++) : (o = m, 0 === We && an(h)), o !== m ? (Ve = e, n = L(t, r, i)) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m);
							return e
						}()) === m && (e = function () {
							var e, n, t, r, i, a, o, u;
							e = Ge, 123 === l.charCodeAt(Ge) ? (n = d, Ge++) : (n = m, 0 === We && an(p));
							e = n !== m ? (i = _n(), i !== m ? (t = En()) !== m ? _n() !== m ? (44 === l.charCodeAt(Ge) ? (u = T, Ge++) : (u = m, 0 === We && an(M)), u !== m ? _n() !== m ? (l.substr(Ge, 4) === $ ? (r = $, Ge += 4) : (r = m, 0 === We && an(Z)), r === m && (l.substr(Ge, 4) === W ? (r = W, Ge += 4) : (r = m, 0 === We && an(q))), r !== m ? _n() !== m ? (i = Ge, 44 === l.charCodeAt(Ge) ? (a = T, Ge++) : (a = m, 0 === We && an(M)), (i = (i = a !== m ? (o = _n()) !== m ? (u = function () {
								var e, n, t;
								e = Ge, l.substr(Ge, 2) === P ? (n = P, Ge += 2) : (n = m, 0 === We && an(C));
								e = n !== m ? (t = function () {
									var e, n, t, r;
									n = e = Ge, t = [], (r = pn()) === m && (r = fn());
									if (r !== m)
										for (; r !== m;) t.push(r), (r = pn()) === m && (r = fn());
									else t = m;
									n = t !== m ? l.substring(n, Ge) : t;
									n !== m && (Ve = e, n = V(n));
									return e = n
								}(), t !== m ? (Ve = e, n = D(t)) : (Ge = e, m)) : (Ge = e, m);
								e === m && (Ve = e = Ge, n = Y(), e = (n = n ? void 0 : m) !== m ? (t = sn()) !== m ? (Ve = e, n = I(t)) : (Ge = e, m) : (Ge = e, m));
								return e
							}()) !== m ? a = [a, o, u] : (Ge = i, m) : (Ge = i, m) : (Ge = i, m)) === m ? null : i) !== m ? (a = _n()) !== m ? (125 === l.charCodeAt(Ge) ? (o = f, Ge++) : (o = m, 0 === We && an(h)), o !== m ? (Ve = e, n = L(t, r, i)) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m) : (Ge = e, m)) : (Ge = e, m);
							return e
						}());
						return e
					}()) === m && (e = function () {
						var e, n, t, r, i, a, o, u, c, s;
						e = Ge, 123 === l.charCodeAt(Ge) ? (n = d, Ge++) : (n = m, 0 === We && an(p));
						if (n !== m)
							if (_n() !== m)
								if ((t = En()) !== m)
									if (_n() !== m)
										if (44 === l.charCodeAt(Ge) ? (r = T, Ge++) : (r = m, 0 === We && an(M)), r !== m)
											if (_n() !== m)
												if (l.substr(Ge, 6) === J ? (i = J, Ge += 6) : (i = m, 0 === We && an(X)), i === m && (l.substr(Ge, 13) === Q ? (i = Q, Ge += 13) : (i = m, 0 === We && an(ee))), i !== m)
													if (_n() !== m)
														if (44 === l.charCodeAt(Ge) ? (a = T, Ge++) : (a = m, 0 === We && an(M)), a !== m)
															if (_n() !== m)
																if (a = Ge, l.substr(Ge, 7) === ne ? (o = ne, Ge += 7) : (o = m, 0 === We && an(te)), (a = (a = o !== m ? (u = _n()) !== m ? (c = bn()) !== m ? o = [o, u, c] : (Ge = a, m) : (Ge = a, m) : (Ge = a, m)) === m ? null : a) !== m)
																	if ((o = _n()) !== m) {
																		if (u = [], (c = vn()) !== m)
																			for (; c !== m;) u.push(c), c = vn();
																		else u = m;
																		e = u !== m ? (c = _n()) !== m ? (125 === l.charCodeAt(Ge) ? (s = f, Ge++) : (s = m, 0 === We && an(h)), s !== m ? (Ve = e, n = re(t, i, a, u)) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)
																	} else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						return e
					}()) === m && (e = function () {
						var e, n, t, r, i, a, o, u, c;
						e = Ge, 123 === l.charCodeAt(Ge) ? (n = d, Ge++) : (n = m, 0 === We && an(p));
						if (n !== m)
							if (_n() !== m)
								if ((t = En()) !== m)
									if (_n() !== m)
										if (44 === l.charCodeAt(Ge) ? (r = T, Ge++) : (r = m, 0 === We && an(M)), r !== m)
											if (_n() !== m)
												if (l.substr(Ge, 6) === ie ? (i = ie, Ge += 6) : (i = m, 0 === We && an(ae)), i !== m)
													if (_n() !== m)
														if (44 === l.charCodeAt(Ge) ? (a = T, Ge++) : (a = m, 0 === We && an(M)), a !== m)
															if (_n() !== m) {
																if (o = [], (u = hn()) !== m)
																	for (; u !== m;) o.push(u), u = hn();
																else o = m;
																e = o !== m ? (u = _n()) !== m ? (125 === l.charCodeAt(Ge) ? (c = f, Ge++) : (c = m, 0 === We && an(h)), c !== m ? (Ve = e, n = oe(t, o)) : (Ge = e, m)) : (Ge = e, m) : (Ge = e, m)
															} else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						else Ge = e, e = m;
						return e
					}()) === m ? function () {
						var e, n;
						e = Ge, 35 === l.charCodeAt(Ge) ? (n = a, Ge++) : (n = m, 0 === We && an(o));
						n !== m && (Ve = e, n = u());
						return e = n
					}() : e
				}

				function sn() {
					var e = Ge,
						n = [],
						t = wn();
					if ((t = t === m && (t = kn()) === m ? Sn() : t) !== m)
						for (; t !== m;) n.push(t), (t = wn()) === m && (t = kn()) === m && (t = Sn());
					else n = m;
					return n !== m && (Ve = e, n = r(n)), e = n
				}

				function ln() {
					var e, n, t, r, i;
					if (We++, n = [], r = t = e = Ge, We++, (i = gn()) === m && (g.test(l.charAt(Ge)) ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(y))), We--, (t = (r = i === m ? void 0 : (Ge = r, m)) !== m ? (l.length > Ge ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(_)), i !== m ? r = [r, i] : (Ge = t, m)) : (Ge = t, m)) !== m)
						for (; t !== m;) n.push(t), r = t = Ge, We++, (i = gn()) === m && (g.test(l.charAt(Ge)) ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(y))), We--, t = (r = i === m ? void 0 : (Ge = r, m)) !== m ? (l.length > Ge ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(_)), i !== m ? r = [r, i] : (Ge = t, m)) : (Ge = t, m);
					else n = m;
					return e = n !== m ? l.substring(e, Ge) : n, We--, e === m && (n = m, 0 === We && an(v)), e
				}

				function mn() {
					var e, n, t;
					return We++, e = Ge, 47 === l.charCodeAt(Ge) ? (n = w, Ge++) : (n = m, 0 === We && an(k)), e = n !== m && (t = ln()) !== m ? (Ve = e, n = S(t)) : (Ge = e, m), We--, e === m && (n = m, 0 === We && an(b)), e
				}

				function dn() {
					var e, n, t, r;
					if (We++, e = Ge, _n() !== m)
						if ((n = ln()) !== m) {
							for (t = [], r = mn(); r !== m;) t.push(r), r = mn();
							e = t !== m ? (Ve = e, R(n, t)) : (Ge = e, m)
						} else Ge = e, e = m;
					else Ge = e, e = m;
					return We--, e === m && (0 === We && an(E)), e
				}

				function pn() {
					var e, n, t, r = Ge;
					if (39 === l.charCodeAt(Ge) ? (e = O, Ge++) : (e = m, 0 === We && an(F)), e !== m) {
						if (n = [], (t = wn()) === m && (K.test(l.charAt(Ge)) ? (t = l.charAt(Ge), Ge++) : (t = m, 0 === We && an(j))), t !== m)
							for (; t !== m;) n.push(t), (t = wn()) === m && (K.test(l.charAt(Ge)) ? (t = l.charAt(Ge), Ge++) : (t = m, 0 === We && an(j)));
						else n = m;
						r = n !== m ? (39 === l.charCodeAt(Ge) ? (t = O, Ge++) : (t = m, 0 === We && an(F)), t !== m ? e = [e, n, t] : (Ge = r, m)) : (Ge = r, m)
					} else Ge = r, r = m;
					if (r === m)
						if (r = [], (e = wn()) === m && (z.test(l.charAt(Ge)) ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(H))), e !== m)
							for (; e !== m;) r.push(e), (e = wn()) === m && (z.test(l.charAt(Ge)) ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(H)));
						else r = m;
					return r
				}

				function fn() {
					var e, n = [];
					if (U.test(l.charAt(Ge)) ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(G)), e !== m)
						for (; e !== m;) n.push(e), U.test(l.charAt(Ge)) ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(G));
					else n = m;
					return n
				}

				function hn() {
					var e, n, t, r, i = Ge,
						a = _n();
					return i = a !== m && (e = An()) !== m && _n() !== m ? (123 === l.charCodeAt(Ge) ? (n = d, Ge++) : (n = m, 0 === We && an(p)), n !== m ? (Ve = Ge, (se() ? void 0 : m) !== m && (t = un()) !== m ? (125 === l.charCodeAt(Ge) ? (r = f, Ge++) : (r = m, 0 === We && an(h)), r !== m ? (Ve = i, le(e, t)) : (Ge = i, m)) : (Ge = i, m)) : (Ge = i, m)) : (Ge = i, m)
				}

				function vn() {
					var e, n, t, r, i, a, o, u = Ge,
						c = _n();
					return u = c !== m ? (o = a = Ge, 61 === l.charCodeAt(Ge) ? (r = ue, Ge++) : (r = m, 0 === We && an(ce)), (a = a = (a = (o = r !== m && (i = bn()) !== m ? r = [r, i] : (Ge = o, m)) !== m ? l.substring(a, Ge) : o) === m ? An() : a) !== m && _n() !== m ? (123 === l.charCodeAt(Ge) ? (e = d, Ge++) : (e = m, 0 === We && an(p)), e !== m ? (Ve = Ge, (me() ? void 0 : m) !== m && (n = un()) !== m ? (125 === l.charCodeAt(Ge) ? (t = f, Ge++) : (t = m, 0 === We && an(h)), t !== m ? (Ve = u, de(a, n)) : (Ge = u, m)) : (Ge = u, m)) : (Ge = u, m)) : (Ge = u, m)) : (Ge = u, m)
				}

				function gn() {
					var e;
					return We++, fe.test(l.charAt(Ge)) ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(he)), We--, e === m && 0 === We && an(pe), e
				}

				function yn() {
					var e;
					return We++, ge.test(l.charAt(Ge)) ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(ye)), We--, e === m && 0 === We && an(ve), e
				}

				function _n() {
					var e, n, t;
					for (We++, e = Ge, n = [], t = gn(); t !== m;) n.push(t), t = gn();
					return e = n !== m ? l.substring(e, Ge) : n, We--, e === m && (n = m, 0 === We && an(_e)), e
				}

				function bn() {
					var e, n, t;
					return We++, e = Ge, 45 === l.charCodeAt(Ge) ? (n = we, Ge++) : (n = m, 0 === We && an(ke)), e = (n = n === m ? null : n) !== m && (t = Rn()) !== m ? (Ve = e, n = Se(n, t)) : (Ge = e, m), We--, e === m && (n = m, 0 === We && an(be)), e
				}

				function wn() {
					var e, n;
					return We++, e = Ge, l.substr(Ge, 2) === Re ? (n = Re, Ge += 2) : (n = m, 0 === We && an(Ae)), n !== m && (Ve = e, n = Pe()), We--, (e = n) === m && (n = m, 0 === We && an(Ee)), e
				}

				function kn() {
					var e, n, t, r, i, a = Ge;
					if (39 === l.charCodeAt(Ge) ? (e = O, Ge++) : (e = m, 0 === We && an(F)), e !== m)
						if ((n = function () {
								var e, n, t, r;
								n = e = Ge, l.length > Ge ? (t = l.charAt(Ge), Ge++) : (t = m, 0 === We && an(_));
								n = t !== m ? (Ve = Ge, r = Te(t), (r = r ? void 0 : m) !== m ? t = [t, r] : (Ge = n, m)) : (Ge = n, m);
								e = n !== m ? l.substring(e, Ge) : n;
								return e
							}()) !== m) {
							for (t = Ge, r = [], l.substr(Ge, 2) === Re ? (i = Re, Ge += 2) : (i = m, 0 === We && an(Ae)), i === m && (K.test(l.charAt(Ge)) ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(j))); i !== m;) r.push(i), l.substr(Ge, 2) === Re ? (i = Re, Ge += 2) : (i = m, 0 === We && an(Ae)), i === m && (K.test(l.charAt(Ge)) ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(j)));
							a = (t = r !== m ? l.substring(t, Ge) : r) !== m ? (39 === l.charCodeAt(Ge) ? (r = O, Ge++) : (r = m, 0 === We && an(F)), (r = r === m ? null : r) !== m ? (Ve = a, e = Ce(n, t)) : (Ge = a, m)) : (Ge = a, m)
						} else Ge = a, a = m;
					else Ge = a, a = m;
					return a
				}

				function Sn() {
					var e, n, t = Ge,
						r = Ge;
					return l.length > Ge ? (e = l.charAt(Ge), Ge++) : (e = m, 0 === We && an(_)), (r = e !== m ? (Ve = Ge, (n = (n = De(e)) ? void 0 : m) !== m ? e = [e, n] : (Ge = r, m)) : (Ge = r, m)) === m && (10 === l.charCodeAt(Ge) ? (r = xe, Ge++) : (r = m, 0 === We && an(Ie))), t = r !== m ? l.substring(t, Ge) : r
				}

				function En() {
					var e, n;
					return We++, e = Ge, e = (n = (n = Rn()) === m ? An() : n) !== m ? l.substring(e, Ge) : n, We--, e === m && (n = m, 0 === We && an(Me)), e
				}

				function Rn() {
					var e, n, t, r, i;
					if (We++, e = Ge, 48 === l.charCodeAt(Ge) ? (n = Be, Ge++) : (n = m, 0 === We && an(Le)), n !== m && (Ve = e, n = Oe()), (e = n) === m) {
						if (n = e = Ge, Fe.test(l.charAt(Ge)) ? (t = l.charAt(Ge), Ge++) : (t = m, 0 === We && an(Ke)), t !== m) {
							for (r = [], je.test(l.charAt(Ge)) ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(ze)); i !== m;) r.push(i), je.test(l.charAt(Ge)) ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(ze));
							n = r !== m ? t = [t, r] : (Ge = n, m)
						} else Ge = n, n = m;
						n !== m && (Ve = e, n = He(n)), e = n
					}
					return We--, e === m && (n = m, 0 === We && an(Ne)), e
				}

				function An() {
					var e, n, t, r, i;
					if (We++, n = [], r = t = e = Ge, We++, (i = gn()) === m && (i = yn()), We--, (t = (r = i === m ? void 0 : (Ge = r, m)) !== m ? (l.length > Ge ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(_)), i !== m ? r = [r, i] : (Ge = t, m)) : (Ge = t, m)) !== m)
						for (; t !== m;) n.push(t), r = t = Ge, We++, (i = gn()) === m && (i = yn()), We--, t = (r = i === m ? void 0 : (Ge = r, m)) !== m ? (l.length > Ge ? (i = l.charAt(Ge), Ge++) : (i = m, 0 === We && an(_)), i !== m ? r = [r, i] : (Ge = t, m)) : (Ge = t, m);
					else n = m;
					return e = n !== m ? l.substring(e, Ge) : n, We--, e === m && (n = m, 0 === We && an(Ue)), e
				}
				var Pn, Cn = ["root"];

				function Dn() {
					return "plural" === Cn[Cn.length - 1]
				}

				function xn() {
					return e && e.captureLocation ? {
						location: Je()
					} : {}
				}
				if ((t = t()) !== m && Ge === l.length) return t;
				throw t !== m && Ge < l.length && an({
					type: "end"
				}), Pn = Ze, n = $e < l.length ? l.charAt($e) : null, t = $e < l.length ? rn($e, $e + 1) : rn($e, $e), new Ca(Ca.buildMessage(Pn, n), Pn, n, t)
			},
			Ia = function () {
				for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
				for (var r = m(e), i = 0, n = 0; n < t; n++)
					for (var a = arguments[n], o = 0, u = a.length; o < u; o++, i++) r[i] = a[o];
				return r
			},
			Ta = /(^|[^\\])#/g;
		var Ma = function () {
				return (Ma = v.assign || function (e) {
					for (var n, t = 1, r = arguments.length; t < r; t++)
						for (var i in n = arguments[t]) v.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
					return e
				}).apply(this, arguments)
			},
			Na = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
		var Ba = /^\.(?:(0+)(\+|#+)?)?$/g,
			La = /^(@+)?(\+|#+)?$/g;

		function Oa(e) {
			var r = {};
			return e.replace(La, function (e, n, t) {
				return "string" != typeof t ? (r.minimumSignificantDigits = n.length, r.maximumSignificantDigits = n.length) : "+" === t ? r.minimumSignificantDigits = n.length : "#" === n[0] ? r.maximumSignificantDigits = n.length : (r.minimumSignificantDigits = n.length, r.maximumSignificantDigits = n.length + ("string" == typeof t ? t.length : 0)), ""
			}), r
		}

		function Fa(e) {
			switch (e) {
				case "sign-auto":
					return {
						signDisplay: "auto"
					};
				case "sign-accounting":
					return {
						currencySign: "accounting"
					};
				case "sign-always":
					return {
						signDisplay: "always"
					};
				case "sign-accounting-always":
					return {
						signDisplay: "always",
						currencySign: "accounting"
					};
				case "sign-except-zero":
					return {
						signDisplay: "exceptZero"
					};
				case "sign-accounting-except-zero":
					return {
						signDisplay: "exceptZero",
						currencySign: "accounting"
					};
				case "sign-never":
					return {
						signDisplay: "never"
					}
			}
		}

		function Ka(e) {
			e = Fa(e);
			return e || {}
		}

		function ja(e, n) {
			e = xa(e, n);
			return n && !1 === n.normalizeHashtagInPlural || function c(e) {
				e.forEach(function (u) {
					(Ea(u) || Sa(u)) && v.keys(u.options).forEach(function (e) {
						for (var n, t = u.options[e], r = -1, i = void 0, a = 0; a < t.value.length; a++) {
							var o = t.value[a];
							if (ka(o) && Ta.test(o.value)) {
								r = a, i = o;
								break
							}
						}
						i && (n = i.value.replace(Ta, "$1{" + u.value + ", number}"), e = xa(n), (n = t.value).splice.apply(n, Ia([r, 1], e))), c(t.value)
					})
				})
			}(e), e
		}
		var za = function () {
			for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
			for (var r = m(e), i = 0, n = 0; n < t; n++)
				for (var a = arguments[n], o = 0, u = a.length; o < u; o++, i++) r[i] = a[o];
			return r
		};

		function Ha(e) {
			return JSON.stringify(e.map(function (e) {
				return e && "object" == typeof e ? (t = e, v.keys(t).sort().map(function (e) {
					var n = {};
					return n[e] = t[e], n
				})) : e;
				var t
			}))
		}
		var Ua, Ga, Va, Ya = function (i, a) {
				return void 0 === a && (a = {}),
					function () {
						for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
						var t = Ha(e),
							r = t && a[t];
						return r || (r = new(i.bind.apply(i, za([void 0], e))), t && (a[t] = r)), r
					}
			},
			n = (Ua = function (e, n) {
				return (Ua = v.setPrototypeOf || {
						__proto__: []
					}
					instanceof m && function (e, n) {
						e.__proto__ = n
					} || function (e, n) {
						for (var t in n) n.hasOwnProperty(t) && (e[t] = n[t])
					})(e, n)
			}, function (e, n) {
				function t() {
					this.constructor = e
				}
				Ua(e, n), e.prototype = null === n ? v.create(n) : (t.prototype = n.prototype, new t)
			}),
			$a = function () {
				for (var e = 0, n = 0, t = arguments.length; n < t; n++) e += arguments[n].length;
				for (var r = m(e), i = 0, n = 0; n < t; n++)
					for (var a = arguments[n], o = 0, u = a.length; o < u; o++, i++) r[i] = a[o];
				return r
			},
			Za = (Ga = Error, n(Wa, Ga), Wa);

		function Wa(e, n) {
			e = Ga.call(this, e) || this;
			return e.variableId = n, e
		}

		function qa(e, n, t, r, i, a, o) {
			if (1 === e.length && ka(e[0])) return [{
				type: 0,
				value: e[0].value
			}];
			for (var u, c = [], s = 0, l = e; s < l.length; s++) {
				var m = l[s];
				if (ka(m)) c.push({
					type: 0,
					value: m.value
				});
				else if (m.type !== wa.pound) {
					var d = m.value;
					if (!(i && d in i)) throw new Za('The intl string context variable "' + d + '" was not provided to the string "' + o + '"');
					var p, f = i[d];
					if (m.type !== wa.argument)
						if (m.type !== wa.date)
							if (m.type !== wa.time)
								if (m.type !== wa.number)
									if (Sa(m)) {
										if (!(p = m.options[f] || m.options.other)) throw new RangeError('Invalid values for "' + m.value + '": "' + f + '". Options are "' + v.keys(m.options).join('", "') + '"');
										c.push.apply(c, qa(p.value, n, t, r, i))
									} else if (Ea(m)) {
						if (!(p = m.options["=" + f])) {
							if (!Intl.PluralRules) throw new Za('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n');
							d = t.getPluralRules(n, {
								type: m.pluralType
							}).select(f - (m.offset || 0));
							p = m.options[d] || m.options.other
						}
						if (!p) throw new RangeError('Invalid values for "' + m.value + '": "' + f + '". Options are "' + v.keys(m.options).join('", "') + '"');
						c.push.apply(c, qa(p.value, n, t, r, i, f - (m.offset || 0)))
					} else;
					else {
						h = "string" == typeof m.style ? r.number[m.style] : (u = m.style) && "object" == typeof u && 0 === u.type ? function (e) {
							for (var r = {}, n = 0, t = e; n < t.length; n++) {
								var i, a = t[n];
								switch (a.stem) {
									case "percent":
										r.style = "percent";
										continue;
									case "currency":
										r.style = "currency", r.currency = a.options[0];
										continue;
									case "group-off":
										r.useGrouping = !1;
										continue;
									case "precision-integer":
										r.maximumFractionDigits = 0;
										continue;
									case "measure-unit":
										r.style = "unit", r.unit = a.options[0].replace(/^(.*?)-/, "");
										continue;
									case "compact-short":
										r.notation = "compact", r.compactDisplay = "short";
										continue;
									case "compact-long":
										r.notation = "compact", r.compactDisplay = "long";
										continue;
									case "scientific":
										r = Ma(Ma(Ma({}, r), {
											notation: "scientific"
										}), a.options.reduce(function (e, n) {
											return Ma(Ma({}, e), Ka(n))
										}, {}));
										continue;
									case "engineering":
										r = Ma(Ma(Ma({}, r), {
											notation: "engineering"
										}), a.options.reduce(function (e, n) {
											return Ma(Ma({}, e), Ka(n))
										}, {}));
										continue;
									case "notation-simple":
										r.notation = "standard";
										continue;
									case "unit-width-narrow":
										r.currencyDisplay = "narrowSymbol", r.unitDisplay = "narrow";
										continue;
									case "unit-width-short":
										r.currencyDisplay = "code", r.unitDisplay = "short";
										continue;
									case "unit-width-full-name":
										r.currencyDisplay = "name", r.unitDisplay = "long";
										continue;
									case "unit-width-iso-code":
										r.currencyDisplay = "symbol";
										continue
								}
								if (Ba.test(a.stem)) {
									if (1 < a.options.length) throw new RangeError("Fraction-precision stems only accept a single optional option");
									a.stem.replace(Ba, function (e, n, t) {
										return "." === e ? r.maximumFractionDigits = 0 : "+" === t ? r.minimumFractionDigits = t.length : "#" === n[0] ? r.maximumFractionDigits = n.length : (r.minimumFractionDigits = n.length, r.maximumFractionDigits = n.length + ("string" == typeof t ? t.length : 0)), ""
									}), a.options.length && (r = Ma(Ma({}, r), Oa(a.options[0])))
								} else La.test(a.stem) ? r = Ma(Ma({}, r), Oa(a.stem)) : (i = Fa(a.stem)) && (r = Ma(Ma({}, r), i))
							}
							return r
						}(m.style.tokens) : void 0;
						c.push({
							type: 0,
							value: t.getNumberFormat(n, h).format(f)
						})
					} else {
						var h = "string" == typeof m.style ? r.time[m.style] : (u = m.style) && "object" == typeof u && 1 === u.type ? function (e) {
							var t = {};
							return e.replace(Na, function (e) {
								var n = e.length;
								switch (e[0]) {
									case "G":
										t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
										break;
									case "y":
										t.year = 2 === n ? "2-digit" : "numeric";
										break;
									case "Y":
									case "u":
									case "U":
									case "r":
										throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
									case "q":
									case "Q":
										throw new RangeError("`q/Q` (quarter) patterns are not supported");
									case "M":
									case "L":
										t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
										break;
									case "w":
									case "W":
										throw new RangeError("`w/W` (week) patterns are not supported");
									case "d":
										t.day = ["numeric", "2-digit"][n - 1];
										break;
									case "D":
									case "F":
									case "g":
										throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
									case "E":
										t.weekday = 4 !== n && 5 === n ? "narrow" : "short";
										break;
									case "e":
										if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
										t.weekday = ["short", "long", "narrow", "short"][n - 4];
										break;
									case "c":
										if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
										t.weekday = ["short", "long", "narrow", "short"][n - 4];
										break;
									case "a":
										t.hour12 = !0;
										break;
									case "b":
									case "B":
										throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
									case "h":
										t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
										break;
									case "H":
										t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
										break;
									case "K":
										t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
										break;
									case "k":
										t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
										break;
									case "j":
									case "J":
									case "C":
										throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
									case "m":
										t.minute = ["numeric", "2-digit"][n - 1];
										break;
									case "s":
										t.second = ["numeric", "2-digit"][n - 1];
										break;
									case "S":
									case "A":
										throw new RangeError("`S/A` (second) pattenrs are not supported, use `s` instead");
									case "z":
										t.timeZoneName = n < 4 ? "short" : "long";
										break;
									case "Z":
									case "O":
									case "v":
									case "V":
									case "X":
									case "x":
										throw new RangeError("`Z/O/v/V/X/x` (timeZone) pattenrs are not supported, use `z` instead")
								}
								return ""
							}), t
						}(m.style.pattern) : void 0;
						c.push({
							type: 0,
							value: t.getDateTimeFormat(n, h).format(f)
						})
					} else {
						var h = "string" == typeof m.style ? r.date[m.style] : void 0;
						c.push({
							type: 0,
							value: t.getDateTimeFormat(n, h).format(f)
						})
					} else f && "string" != typeof f && "number" != typeof f || (f = "string" == typeof f || "number" == typeof f ? g(f) : ""), c.push({
						type: 1,
						value: f
					})
				} else "number" == typeof a && c.push({
					type: 0,
					value: t.getNumberFormat(n).format(a)
				})
			}
			return (e = c).length < 2 ? e : e.reduce(function (e, n) {
				var t = e[e.length - 1];
				return t && 0 === t.type && 0 === n.type ? t.value += n.value : e.push(n), e
			}, [])
		}
		var Ja = "@@",
			Xa = /@@(\d+_\d+)@@/g,
			Qa = 0;

		function eo(e, n) {
			return e.split(Xa).filter(l).map(function (e) {
				return null != n[e] ? n[e] : e
			}).reduce(function (e, n) {
				return e.length && "string" == typeof n && "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
			}, [])
		}
		var no = /(<([0-9a-zA-Z-_]*?)>(.*?)<\/([0-9a-zA-Z-_]*?)>)|(<[0-9a-zA-Z-_]*?\/>)/,
			to = d.now() + "@@",
			ro = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"];

		function io(e, n, t, r, i, a) {
			var r = qa(e, n, t, r, i, void 0, a),
				o = {},
				a = r.reduce(function (e, n) {
					if (0 === n.type) return e + n.value;
					var t = d.now() + "_" + ++Qa;
					return o[t] = n.value, e + (Ja + t) + Ja
				}, "");
			if (!no.test(a)) return eo(a, o);
			if (!i) throw new Za("Message has placeholders but no values was given");
			if ("undefined" == typeof DOMParser) throw new Za("Cannot format XML message without DOMParser");
			var u = (Va = Va || new DOMParser).parseFromString('<formatted-message id="' + to + '">' + a + "</formatted-message>", "text/html").getElementById(to);
			if (!u) throw new Za("Malformed HTML message " + a);
			r = v.keys(i).filter(function (e) {
				return !!u.getElementsByTagName(e).length
			});
			if (!r.length) return eo(a, o);
			r = r.filter(function (e) {
				return e !== e.toLowerCase()
			});
			if (r.length) throw new Za("HTML tag must be lowercased but the following tags are not: " + r.join(", "));
			return m.prototype.slice.call(u.childNodes).reduce(function (e, n) {
				return e.concat(function t(e, r, i) {
					var n = e.tagName,
						a = e.outerHTML,
						o = e.textContent,
						u = e.childNodes;
					if (!n) return eo(o || "", r);
					n = n.toLowerCase(), e = ~ro.indexOf(n), o = i[n];
					if (o && e) throw new Za(n + " is a self-closing tag and can not be used, please use another tag name.");
					if (!u.length) return [a];
					u = m.prototype.slice.call(u).reduce(function (e, n) {
						return e.concat(t(n, r, i))
					}, []);
					return o ? "function" == typeof o ? [o.apply(void 0, u)] : [o] : $a(["<" + n + ">"], u, ["</" + n + ">"])
				}(n, o, i))
			}, [])
		}
		var ao = function () {
			return (ao = v.assign || function (e) {
				for (var n, t = 1, r = arguments.length; t < r; t++)
					for (var i in n = arguments[t]) v.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
				return e
			}).apply(this, arguments)
		};

		function oo(i, a) {
			return a ? v.keys(i).reduce(function (e, n) {
				var t, r;
				return e[n] = (t = i[n], (r = a[n]) ? ao(ao(ao({}, t || {}), r || {}), v.keys(t).reduce(function (e, n) {
					return e[n] = ao(ao({}, t[n]), r[n] || {}), e
				}, {})) : t), e
			}, ao({}, i)) : i
		}

		function uo(e, n, t, r) {
			var o = this;
			if (void 0 === n && (n = uo.defaultLocale), this.formatterCache = {
					number: {},
					dateTime: {},
					pluralRules: {}
				}, this.format = function (e) {
					return n = o.ast, t = o.locales, r = o.formatters, i = o.formats, a = o.message, 1 === (a = qa(n, t, r, i, e, void 0, a)).length ? a[0].value : a.reduce(function (e, n) {
						return e + n.value
					}, "");
					var n, t, r, i, a
				}, this.formatToParts = function (e) {
					return qa(o.ast, o.locales, o.formatters, o.formats, e, void 0, o.message)
				}, this.formatHTMLMessage = function (e) {
					return io(o.ast, o.locales, o.formatters, o.formats, e, o.message)
				}, this.resolvedOptions = function () {
					return {
						locale: Intl.NumberFormat.supportedLocalesOf(o.locales)[0]
					}
				}, this.getAst = function () {
					return o.ast
				}, "string" == typeof e) {
				if (this.message = e, !uo.__parse) throw new u("IntlMessageFormat.__parse must be set to process `message` of type `string`");
				this.ast = uo.__parse(e, {
					normalizeHashtagInPlural: !1
				})
			} else this.ast = e;
			if (!m.isArray(this.ast)) throw new u("A message must be provided as a String or AST.");
			this.formats = oo(uo.formats, t), this.locales = n, this.formatters = r && r.formatters || (void 0 === (r = this.formatterCache) && (r = {
				number: {},
				dateTime: {},
				pluralRules: {}
			}), {
				getNumberFormat: Ya(Intl.NumberFormat, r.number),
				getDateTimeFormat: Ya(Intl.DateTimeFormat, r.dateTime),
				getPluralRules: Ya(Intl.PluralRules, r.pluralRules)
			})
		}
		var co, so = (uo.defaultLocale = (new Intl.NumberFormat).resolvedOptions().locale, uo.__parse = ja, uo.formats = {
				number: {
					currency: {
						style: "currency"
					},
					percent: {
						style: "percent"
					}
				},
				date: {
					short: {
						month: "numeric",
						day: "numeric",
						year: "2-digit"
					},
					medium: {
						month: "short",
						day: "numeric",
						year: "numeric"
					},
					long: {
						month: "long",
						day: "numeric",
						year: "numeric"
					},
					full: {
						weekday: "long",
						month: "long",
						day: "numeric",
						year: "numeric"
					}
				},
				time: {
					short: {
						hour: "numeric",
						minute: "numeric"
					},
					medium: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric"
					},
					long: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						timeZoneName: "short"
					},
					full: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						timeZoneName: "short"
					}
				}
			}, uo),
			lo = function e(n, t) {
				void 0 === t && (t = "");
				var r, i = {};
				for (r in n) {
					var a = t + r;
					"object" == typeof n[r] ? v.assign(i, e(n[r], a + ".")) : i[a] = n[r]
				}
				return i
			},
			mo = Yt({});

		function po(e) {
			return e in co
		}
		$t([mo], function (e) {
			e = e[0];
			return v.keys(e)
		}), mo.subscribe(function (e) {
			return co = e
		});
		var fo = {};

		function ho(e) {
			return fo[e]
		}

		function vo(e) {
			return Po(e).reverse().some(function (e) {
				return null === (e = ho(e)) || void 0 === e ? void 0 : e.size
			})
		}

		function go(t, e) {
			return En.all(e.map(function (e) {
				return fo[n = t].delete(e), 0 === fo[n].size && delete fo[n], e().then(function (e) {
					return e.default || e
				});
				var n
			})).then(function (e) {
				return function (n) {
					for (var e = arguments.length, t = new m(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
					var i = t.map(function (e) {
						return lo(e)
					});
					mo.update(function (e) {
						return e[n] = v.assign.apply(v, [e[n] || {}].concat(Pn(i))), e
					})
				}.apply(void 0, [t].concat(Pn(e)))
			})
		}
		var yo = {};

		function _o(e, n) {
			var t = {};
			for (i in e) v.prototype.hasOwnProperty.call(e, i) && n.indexOf(i) < 0 && (t[i] = e[i]);
			if (null != e && "function" == typeof v.getOwnPropertySymbols)
				for (var r = 0, i = v.getOwnPropertySymbols(e); r < i.length; r++) n.indexOf(i[r]) < 0 && v.prototype.propertyIsEnumerable.call(e, i[r]) && (t[i[r]] = e[i[r]]);
			return t
		}
		var bo = {
			fallbackLocale: null,
			initialLocale: null,
			loadingDelay: 200,
			formats: {
				number: {
					scientific: {
						notation: "scientific"
					},
					engineering: {
						notation: "engineering"
					},
					compactLong: {
						notation: "compact",
						compactDisplay: "long"
					},
					compactShort: {
						notation: "compact",
						compactDisplay: "short"
					}
				},
				date: {
					short: {
						month: "numeric",
						day: "numeric",
						year: "2-digit"
					},
					medium: {
						month: "short",
						day: "numeric",
						year: "numeric"
					},
					long: {
						month: "long",
						day: "numeric",
						year: "numeric"
					},
					full: {
						weekday: "long",
						month: "long",
						day: "numeric",
						year: "numeric"
					}
				},
				time: {
					short: {
						hour: "numeric",
						minute: "numeric"
					},
					medium: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric"
					},
					long: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						timeZoneName: "short"
					},
					full: {
						hour: "numeric",
						minute: "numeric",
						second: "numeric",
						timeZoneName: "short"
					}
				}
			},
			warnOnMissingMessages: !0
		};
		var wo, ko = Yt(!1),
			So = Yt(null);

		function Eo(e, n) {
			return 0 === n.indexOf(e) && e !== n
		}

		function Ro(e, n) {
			return e === n || Eo(e, n) || Eo(n, e)
		}

		function Ao(e) {
			var n = e.lastIndexOf("-");
			if (0 < n) return e.slice(0, n);
			n = bo.fallbackLocale;
			return n && !Ro(e, n) ? n : null
		}

		function Po(e) {
			var n = e.split("-").map(function (e, n, t) {
					return t.slice(0, n + 1).join("-")
				}),
				t = bo.fallbackLocale;
			return t && !Ro(e, t) ? n.concat(Po(t)) : n
		}
		So.subscribe(function (e) {
			wo = e, "undefined" != typeof window && c.documentElement.setAttribute("lang", e)
		});
		var Co = So.set;
		So.set = function (e) {
			if (function e(n) {
					return null == n || po(n) ? n : e(Ao(n))
				}(e) && vo(e)) {
				var n, t = bo.loadingDelay;
				return "undefined" != typeof window && null != wo && t ? n = window.setTimeout(function () {
						return ko.set(!0)
					}, t) : ko.set(!0),
					function e(n) {
						if (!vo(n)) return n in yo ? yo[n] : void 0;
						var t = Po(n).reverse().map(function (e) {
							var n = ho(e);
							return [e, n ? Pn(n) : []]
						}).filter(function (e) {
							return 0 < e[1].length
						});
						return yo[n] = En.all(t.map(function (e) {
							return go(e[0], e[1])
						})).then(function () {
							return vo(n) ? e(n) : void delete yo[n]
						}), yo[n]
					}(e).then(function () {
						Co(e)
					}).finally(function () {
						r(n), ko.set(!1)
					})
			}
			return Co(e)
		}, So.update = function (e) {
			return Co(e(wo))
		};

		function Do(e, n) {
			return null == n ? null : function (e, n) {
				if (po(e)) {
					e = co[e] || null;
					if (n in e) return e[n]
				}
				return null
			}(n, e) || Do(e, Ao(n))
		}

		function xo(e, n) {
			var t = bo.formats;
			if (e in t && n in t[e]) return t[e][n];
			throw new Error('[svelte-i18n] Unknown "' + n + '" ' + e + " format.")
		}

		function Io(e, n) {
			void 0 === n && (n = {}), "object" == typeof e && (e = (n = e).id);
			var t = n,
				r = t.values,
				n = void 0 === (i = t.locale) ? wo : i,
				i = t.default;
			if (null == n) throw new Error("[svelte-i18n] Cannot format a message without first setting the initial locale.");
			return (t = function (e, n) {
				if (n in Bo && e in Bo[n]) return Bo[n][e];
				var t = Do(e, n);
				return t ? (e = e, n = n, (t = t) && (n in Bo || (Bo[n] = {}), e in Bo[n] || (Bo[n][e] = t), t)) : null
			}(e, n)) ? r ? Ko(t, n).format(r) : t : (bo.warnOnMissingMessages && console.warn('[svelte-i18n] The message "' + e + '" was not found in "' + Po(n).join('", "') + '".' + (vo(wo) ? "\n\nNote: there are at least one loader still registered to this locale that wasn't executed." : "")), i || e)
		}

		function To(e, n) {
			return n = void 0 === (n = (t = void 0 === (t = n) ? {} : t).locale) ? wo : n, t = _o(t, ["locale"]), Fo(v.assign({
				locale: n
			}, t)).format(e);
			var t
		}

		function Mo(e, n) {
			return n = void 0 === (n = (t = void 0 === (t = n) ? {} : t).locale) ? wo : n, t = _o(t, ["locale"]), Oo(v.assign({
				locale: n
			}, t)).format(e);
			var t
		}

		function No(e, n) {
			return n = void 0 === (n = (t = void 0 === (t = n) ? {} : t).locale) ? wo : n, t = _o(t, ["locale"]), Lo(v.assign({
				locale: n
			}, t)).format(e);
			var t
		}
		var Bo = {},
			n = function (t) {
				var r = v.create(null);
				return function (e) {
					var n = JSON.stringify(e);
					return n in r ? r[n] : r[n] = t(e)
				}
			},
			Lo = n(function (e) {
				var n = e.locale,
					t = e.format,
					e = _o(e, ["locale", "format"]);
				if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
				return t && (e = xo("number", t)), new Intl.NumberFormat(n, e)
			}),
			Oo = n(function (e) {
				var n = e.locale,
					t = e.format,
					e = _o(e, ["locale", "format"]);
				if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format dates');
				return t ? e = xo("date", t) : 0 === v.keys(e).length && (e = xo("date", "short")), new Intl.DateTimeFormat(n, e)
			}),
			Fo = n(function (e) {
				var n = e.locale,
					t = e.format,
					e = _o(e, ["locale", "format"]);
				if (null == n) throw new Error('[svelte-i18n] A "locale" must be set to format time values');
				return t ? e = xo("time", t) : 0 === v.keys(e).length && (e = xo("time", "short")), new Intl.DateTimeFormat(n, e)
			}),
			Ko = n(function (e, n) {
				return new so(e, n = void 0 === n ? wo : n, bo.formats)
			}),
			jo = $t([So, mo], function () {
				return Io
			});

		function zo(e, n) {
			var t = Gt(So);
			return Gt(jo)(e, {
				locale: t,
				default: n
			})
		}
		$t([So], function () {
			return To
		}), $t([So], function () {
			return Mo
		}), $t([So], function () {
			return No
		});

		function Ho() {
			return (new d).getTime() - Go
		}
		var Uo, Go = (new d).getTime(),
			Vo = {
				savedInstrument: 2,
				paymentSuccess: 5,
				affordability_offers: 2,
				under40Sec: 3,
				timeToRender: function () {
					var e = Ho();
					return 6e3 < e ? -5 : 4e3 < e ? -2 : e <= 2800 ? 2 : void 0
				},
				clickOnSubmitWithoutDetails: -2,
				more60Sec: -1,
				failedPayment: -5,
				cancelledPayment: -3,
				wentBack: -.5,
				saveThisVpa: 1.5,
				paidViaSavedVpa: 2,
				vpaPrefilled: 3,
				loggedInUser: 1,
				hadMethodPrefilled: 4,
				switchingTabs: function (e) {
					e = e.tabsCount;
					return 20 < e ? -2 : 15 < e ? -1.5 : 10 < e ? -1 : 5 < e ? -.5 : void 0
				},
				timeToSubmit: function () {
					var e = Ho() / 1e3;
					return e < 20 ? 5 : e < 30 ? 3.5 : e < 40 ? 2 : 90 < e ? -5 : 70 < e ? -3.5 : 60 < e ? -2 : 0
				},
				instrumentSelected: function () {
					var e = Ho() / 1e3;
					return e < 5 ? 5 : e < 8 ? 3 : e < 10 ? 0 : 20 <= e ? -3 : 10 <= e ? -1 : 0
				},
				invalidVpaBlur: -2.5
			},
			Yo = {
				savedInstrument: "Saved Instrument",
				paymentSuccess: "Payment Success",
				affordability_offers: "Offers Applied",
				under40Sec: "Payment Completed Under 40 secs",
				timeToRender: function () {
					var e = Ho();
					return e <= 2800 ? "Rendered in under 2.8 secs" : 4e3 < e ? "Rendered in more then 4 secs" : void 0
				},
				clickOnSubmitWithoutDetails: "Clicked on submit without details",
				more60Sec: "Payment completed in more then 60 secs",
				timeToRender4s: "Rendered in more then 4 secs",
				failedPayment: "Failed Payment",
				cancelledPayment: "Cancelled Payment",
				loggedInUser: "User was logged in",
				timeToSubmit: function () {
					return "Time taken to submit - " + Ho() / 1e3
				},
				wentBack: "Back",
				saveThisVpa: "Chose to save vpa in payment",
				paidViaSavedVpa: "Used a saved vpa",
				vpaPrefilled: "Had his vpa prefilled",
				hadMethodPrefilled: "Render had the method pre-decided",
				switchingTabs: function (e) {
					e = e.tabsCount;
					return 3 < e && e <= 5 ? "Switched more then 3 tabs" : 5 < e && e <= 7 ? "Switched more then 5 tabs" : 7 < e && e <= 9 ? "Switched more then 7 tabs" : 9 < e ? "Switched more then 9 tabs" : void 0
				},
				instrumentSelected: function () {
					return "User selected an instrument"
				},
				invalidVpaBlur: "Filled an invalid vpa, moved away"
			},
			$o = 0,
			Zo = "",
			Wo = function (e, n) {
				Vo[e] ? ("number" == typeof Vo[e] ? ($o += Vo[e], Zo += Yo[e] + " | ") : ($o += Vo[e](n), Zo += Yo[e](n) + " | "), tt.setMeta("scoreVersion", 1), tt.setMeta("checkoutScore", $o), tt.setMeta("checkoutScoreReason", Zo)) : console.warn("incorrect key sent for score updatation")
			},
			qo = "#528FF0",
			Jo = 0;

		function Xo(e) {
			(e || Uo) && (c.cookie = "onComplete=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/", y(Uo), Uo = null)
		}

		function Qo(n) {
			var t, r, e, i, a, o = this;
			this.done || (t = {
				error: {
					code: "BAD_REQUEST_ERROR",
					description: null != n && n.upiNoApp ? zo("upi.intent_no_apps_error") : Gi("payment_canceled"),
					reason: null != n && n.upiNoApp ? "intent_no_apps_error" : ""
				}
			}, a = this.payment_id, r = this.r, e = {}, (i = this.getMetadata()) && (t.error.metadata = i), a ? (e.payment_id = a, a = Di(r, "payments/" + a + "/cancel"), L(n) && (a += "&" + Z(n)), fn({
				url: a,
				callback: function (e) {
					e.razorpay_payment_id ? tt.track("cancel_success", {
						data: e,
						r: r
					}) : (!e.error || null != n && n.upiNoApp) && (e = t), o.complete(e)
				}
			})) : this.complete(t), tt.track("cancel", {
				data: e,
				r: r
			}))
		}

		function eu(e, n, t) {
			(e = e || {}).token && t && t.preferences && (L(n.saved_card) || (n.saved_card = {}), n.saved_card.mode = t.preferences.global ? "global" : "local"), e.method && "upi" === e.method && e.vpa && (L(n.upi) || (n.upi = {}), null != (r = e.vpa) && r.includes("@") && (n.upi.provider = e.vpa.split("@")[1])), Wo("timeToSubmit");
			var r, r = (r = Ae(r = e), Se(function (e, n, t) {
				return "card" === n.slice(0, 4) && ke(t, n)
			})(r));
			n.downtimeSeverity && (r.downtimeSeverity = n.downtimeSeverity), e.default_dcc_currency && delete e.default_dcc_currency, tt.track("submit", {
				data: {
					data: r,
					params: n,
					count: Jo
				},
				r: t,
				immediately: !0
			})
		}

		function nu(e, n, t) {
			Jo++, this.iframe = (n = void 0 === n ? {} : n).iframe, this.nativeotp = n.nativeotp, this._time = H(), this.optional = n.optional || {}, n.feesRedirect = n.fees || n.feesRedirect;
			var r = n.external || {};
			this.isExternalAmazonPayPayment = r.amazonpay, this.isExternalGooglePayPayment = r.gpay, eu(e, n, t), this.r = t, this.on("cancel", Qo), e && e.upi_app && (this.upi_app = e.upi_app, delete e.upi_app), this.feesRedirect = n.feesRedirect, this.microapps = n.microapps, this.gpay = n.gpay || n.tez || this.microapps && this.microapps.gpay, this.microapps && this.microapps.gpay && tt.setMeta("microapps.gpay", !0);
			var r = !1,
				t = Kr(),
				i = this;
			if (this.nativeotp || this.gpay ? r = !0 : e && ("app" === e.method && (r = !0, "cred" !== e.provider || e.app_present || Vi() || (r = !1)), Vi() && (this.on("complete", this.complete), "wallet" === e.method && (hi(e.wallet) && !t && e.contact && e.email && (r = !0), "intent" === e["_[flow]"] && (r = !0)), "upi" === e.method && (r = !0), "epaylater" === e.provider && e.contact && (r = !0), "cardless_emi" === e.method && (r = "sezzle" !== e.provider && (!!e.contact && (!e.emi_duration || ii(e.provider)))), "nach" === e.method && (r = !0), n.feesRedirect && (r = !1), n.upiqr && (r = !0))), $i(e, Rr) && Vi() && (r = !0), $i(e, Pr) && !Vi() && (r = !1), this.avoidPopup = r, this.message = n.message, t && "wallet" === e.method ? this.r.on("payment.createPayment.responseType", function (e) {
					"otp" !== e && i.tryPopup()
				}) : this.tryPopup(), e && "object" == typeof e.additional_info && null !== e.additional_info && (this.additional_info = e.additional_info, delete e.additional_info), e && "app" === e.method && "google_pay" === e.provider && delete e.method, n.paused) {
				try {
					this.writePopup()
				} catch (e) {}
				this.data = e, this.on("resume", this.generate.bind(this))
			} else this.generate(e)
		}

		function tu(e) {
			return Pi("payments/create/" + (e ? "fees" : "checkout"))
		}
		nu.prototype = {
			on: function (e, n) {
				return this.r.on("payment." + e, n.bind(this))
			},
			emit: function (e, n) {
				this.r.emit("payment." + e, n)
			},
			off: function () {
				this.r.off("payment")
			},
			checkRedirect: function () {
				var e = this.r.get;
				if (!this.iframe && e("redirect")) {
					var n = this.data,
						t = e("callback_url");
					if (t && (n.callback_url = t), !this.avoidPopup || "upi" === n.method && !Vi()) return tn({
						url: tu(this.feesRedirect),
						content: n,
						method: "post",
						target: e("target")
					}), !0
				}
			},
			generate: function (e) {
				var r = this;
				if (this.data = Pe(Ae(this.data || {}), Ae(e || {})), (this.gpay || this.tez) && e["_[app]"] === hr && (!this.r.paymentAdapters || !this.r.paymentAdapters[hr] && !this.r.paymentAdapters["microapps.gpay"])) return this.r.emit("payment.error", V("GPay is not available"));
				_r(this);
				var n = function (e) {
						var n, t = r.complete.bind(r),
							t = _e(window, "onComplete")(t);
						n = t, Xo(!0), Uo = h(function () {
							var e = function (e) {
								for (var n = e + "=", t = c.cookie.split(";"), r = 0; r < t.length; r++) {
									for (var i = t[r];
										" " === i.charAt(0);) i = i.substring(1, i.length);
									if (0 === i.indexOf(n)) return i.substring(n.length, i.length)
								}
							}("onComplete");
							e && (Xo(), n(e))
						}, 150)
					},
					t = this.isExternalAmazonPayPayment || this.isExternalGooglePayPayment,
					e = this.isExternalGooglePayPayment && "google_pay" === this.data.provider;
				if (t && !e) return n(), window.setTimeout(function () {
					r.emit("externalsdk.process", r.data)
				}, 100);
				this.shouldPopup() && !this.popup && this.r.get("callback_url") && this.r.set("redirect", !0), this.checkRedirect() || (this.writePopup(), this.tryAjax() || this.trySubmit(), Vi() && !this.avoidPopup && n(), this.offmessage = (n = s, Ze("message", function (e) {
					this.popup && this.popup.window === e.source && this.complete(e.data, e)
				}.bind(this))(n)))
			},
			complete: function (e, n) {
				if (!this.done) {
					if ((e = "object" != typeof e ? JSON.parse(e) : e)._time) {
						if (e._time < this._time) return;
						delete e._time
					}
					if (e.error && "TOPUP" === e.error.action) return Wi.call(this, e);
					if (this.forceIframeElement && this.r.get("redirect") && this.r.get("callback_url")) {
						var t, r, i = this.r.get("callback_url");
						Oi({
							doc: (null == (t = window) || null == (r = t.parent) ? void 0 : r.document) || window.document,
							path: i,
							params: e,
							method: "POST",
							target: this.r.get("target") || "_top"
						})
					} else {
						if (e.razorpay_payment_id) this.clear(), tt.track("oncomplete", {
							r: this.r,
							data: Ae(e)
						}), this.emit("success", e);
						else {
							if (n && "null" !== n.origin && window.location.origin !== n.origin) return;
							this.clear();
							n = e.error;
							if (!L(n) || !n.description) {
								if (e.request && Ji.call(this, e)) return;
								e = V("Payment failed")
							}
							e.xhr && tt.track("ajax_error", e), this.emit("error", e)
						}
						this.off()
					}
				}
			},
			clear: function () {
				try {
					this.popup.onClose = null, this.popup.close()
				} catch (e) {}
				try {
					this.popup.window.destroy()
				} catch (e) {}
				this.done = !0, this.offmessage && this.offmessage(), Xo(), this.r._payment = null, this.ajax && this.ajax.abort()
			},
			tryAjax: function () {
				var e = this.data;
				if (!this.feesRedirect && ("paylater" !== e.method || "getsimpl" !== e.provider && "icic" !== e.provider && "lazypay" !== e.provider)) {
					$i(this.data, Rr) && Vi() && (this.forceIframeElement = Zi(), delete this.data.callback_url);
					var n = "wallet" === e.method && !Kr() && hi(e.wallet);
					if ((Vi() || !le(["cardless_emi"], e.method) && !n) && (this.avoidPopup || Vi() || "upi" !== e.method) && (this.avoidPopup || Vi() || "app" !== e.method || "cred" !== e.provider || e.app_present) && (this.iframe || this.avoidPopup || !At) && ("wallet" !== e.method && "cardless_emi" !== e.method || e.contact && e.email) && ("emandate" !== e.method || "UTIB" !== e.bank) && ("emandate" !== e.method || e.auth_type) && ("razorpayjs" !== Xn.props.library || !["card", "emi"].includes(e.method) || 1 !== a(e.save) && !e.token)) return e["_[request_index]"] = tt.updateRequestIndex("submit"), this.ajax = fn.post({
						url: Pi("payments/create/ajax"),
						data: e,
						callback: function (e) {
							var n = this,
								t = n.r;
							n.payment_id = e.payment_id, Xn(t, "ajax_response", e);
							t = n.popup;
							if (!(t && t.checkClose && t.checkClose())) return e.error && e.xhr && 0 === e.xhr.status ? (n.trySubmit(), Xn(n.r, "no_popup")) : void Ji.call(n, e)
						}.bind(this)
					}), 1
				}
			},
			trySubmit: function () {
				var e = this.popup;
				if (e || this.forceIframeElement) {
					var n, t = this.data;
					if (Se(t, function (e, n) {
							/^notes/.test(n) && 200 < K(e) && (t[n] = e.replace(/\n/g, " "))
						}), this.iframe && this.popup.show(), t["_[request_index]"] = tt.updateRequestIndex("submit"), this.forceIframeElement) return null == (n = this.forceIframeElement) || null != (n = n.window) && n.focus(), this.forceIframeElement.contentDocument.write(Ui(this, Gi)), t["_[iframe_mode]"] = !0, void Oi({
						doc: this.forceIframeElement.contentWindow.document,
						path: tu(this.fees),
						params: t,
						method: "POST"
					});
					rn(tu(this.fees), t, "post", e.name)
				}
			},
			redirect: function (e) {
				var n = e.url,
					t = e.content,
					e = e.method,
					e = void 0 === e ? "get" : e;
				s.CheckoutBridge ? rn(n, t, e) : xi.sendMessage({
					event: "redirect",
					data: {
						url: n,
						method: e,
						content: t
					}
				})
			},
			gotoBank: function () {
				this.gotoBankRequest ? this.gotoBankUsingRequest() : this.gotoBankHtml ? this.gotoBankUsingHtml() : this.gotoBankUrl && this.gotoBankUsingUrl()
			},
			gotoBankUsingUrl: function () {
				this.r.get("redirect") ? this.redirect({
					url: this.gotoBankUrl,
					method: "post"
				}) : (this.popup || this.makePopup(), this.writePopup(), rn(this.gotoBankUrl, null, "post", this.popup.name))
			},
			gotoBankUsingHtml: function () {
				this.popup || this.makePopup(), this.popup.write(this.gotoBankHtml)
			},
			gotoBankUsingRequest: function () {
				this.popup || this.makePopup();
				var e = this.gotoBankRequest;
				rn(e.url, e.content, e.method, this.popup.name)
			},
			makePopup: function () {
				var n = this,
					e = va,
					e = new(e = this.iframe ? ya : e)("", "popup_" + Xn.id, this);
				return (e && !e.window || !1 !== e.window.closed) && (e.close(), e = null), e && (e.onClose = function () {
					var e;
					tt.track(n.data.method + ":popup:closed"), "netbanking" !== n.data.method || "checkoutjs" !== Xn.props.library ? n.r.emit("payment.cancel") : (e = en("#error-message"), je(e, "cancel_netbanking"))
				}), this.popup = e
			},
			writePopup: function () {
				var e = this.popup;
				e && (e.write(Ui(this, Gi)), e.window.deserialize = an)
			},
			shouldPopup: function () {
				return !!this.iframe || !this.nativeotp && !(this.r.get("redirect") || this.avoidPopup)
			},
			tryPopup: function () {
				this.shouldPopup() && this.makePopup()
			},
			getMetadata: function () {
				var e = {};
				if (this.payment_id) return e.payment_id = this.payment_id, this.r.get("order_id") && (e.order_id = this.r.get("order_id")), e
			}
		}, xi.setFormatter = Ee;
		var ru = xi.prototype;
		ru.checkPaymentAdapter = function (n, e) {
			var t = this,
				r = ((r = {
					gpay: hr
				})[hr] = hr, r[vr] = vr, r["microapps.gpay"] = "microapps.gpay", r.cred = gr, r);
			return r = r[n], void 0 === (e = e) && (e = {}), ((r = ji[r]) ? r(e) : En.reject({
				description: pr
			})).then(function (e) {
				return t.paymentAdapters || (t.paymentAdapters = {}), t.paymentAdapters[n] = !0, En.resolve(e)
			})
		}, ru.isTezAvailable = function (e, n) {
			this.checkPaymentAdapter("gpay").then(e).catch(n)
		}, ru.postInit = function () {
			var e = this.get("theme.color") || qo;
			this.themeMeta = {
				color: e,
				textColor: ma(e) < .5 ? "#FFFFFF" : "rgba(0, 0, 0, 0.85)",
				highlightColor: fa(e, qo)
			}
		}, ru.createPayment = function (e, n) {
			return e && "data" in e && (n = e = e.data), L(n) || (n = {}), this._payment = this._payment || new nu(e, n, this), this
		};
		var iu = {};
		ru.verifyVpa = function (o, e) {
			var u = {
					vpa: o = void 0 === o ? "" : o,
					timeout: e = void 0 === e ? 0 : e
				},
				c = Di(this, "payments/validate/account"),
				n = iu[o];
			if (n) {
				var t = Pe({
					cache: !0
				}, u);
				return n.success ? (tt.track("validate:vpa:valid", {
					data: t
				}), En.resolve(n)) : (tt.track("validate:vpa:invalid", {
					data: t
				}), En.reject(n))
			}
			return new En(function (n, t) {
				var r, i = !1,
					a = P();
				tt.track("validate:vpa:init", {
					data: u
				}), e && (r = f(function () {
					i || (i = !0, u.time = a(), tt.track("validate:vpa:timeout", {
						data: u
					}), n())
				}, e)), fn.post({
					url: c,
					data: {
						entity: "vpa",
						value: o
					},
					callback: function (e) {
						y(r), tt.track("validate:vpa:response", {
							data: {
								time: a()
							}
						}), i || (i = !0, u.time = a(), !1 === e.success || e.error && "vpa" === e.error.field ? (iu[o] = e, tt.track("validate:vpa:invalid", {
							data: u
						}), t(e)) : (e.success && (iu[o] = e), tt.track("validate:vpa:valid", {
							data: u
						}), n(e)))
					}
				})
			})
		}, ru.focus = function () {
			try {
				this._payment.forceIframeElement && this._payment.forceIframeElement.window.focus(), this._payment.popup.window.focus()
			} catch (e) {}
		}, ru.submitOTP = function (e) {
			var n = this._payment;
			n.ajax = fn.post({
				url: n.otpurl,
				data: {
					type: "otp",
					otp: e
				},
				callback: Wi.bind(n)
			})
		}, ru.resendOTP = function (e) {
			var n = this._payment,
				t = Di(this, "payments/" + n.payment_id + "/otp_resend");
			n.ajax = fn.post({
				url: t,
				data: {
					"_[source]": "checkoutjs"
				},
				callback: Ji.bind(n)
			})
		}, ru.topupWallet = function () {
			var t = this,
				r = this._payment,
				i = this.get("redirect");
			i || (r.makePopup(), r.writePopup());
			var e = Di(this, "payments/" + r.payment_id + "/topup/ajax");
			r.ajax = fn.post({
				url: e,
				data: {
					"_[source]": "checkoutjs"
				},
				callback: function (e) {
					var n = e.request;
					i && !e.error && n ? tn({
						url: n.url,
						content: n.content,
						method: n.method || "post",
						target: t.get("target")
					}) : Ji.call(r, e)
				}
			})
		};
		var au = {},
			ou = {};

		function uu(e) {
			var n = this,
				t = e.requestPayload || {
					"_[source]": Xn.props.library
				},
				o = e.entity,
				u = o + "-" + e.amount,
				c = e.amount,
				r = e.currency;
			c && r && (t.amount = c, t.currency = r), e.wallet && (t.wallet = e.wallet);
			e = au[u];
			return e || (au[u] = new En(function (i, a) {
				var e = q(e = Di(n, "payment/flows"), t);
				fn.jsonp({
					url: e,
					callback: function (e) {
						if (e.error) return tt.track("currencies:card:fetch:failure", {
							data: {
								entity: o,
								error: e.error
							}
						}), a(e.error);
						var n, t, r;
						e.all_currencies && (Qt(e.all_currencies), n = e.all_currencies, t = c, r = {}, Se(n, function (e, n) {
							r[n] = e.amount
						}), rr[t] = r), ou[u] = e, i(e), tt.track("currencies:card:fetch:success", {
							data: {
								entity: o
							}
						})
					}
				}), tt.track("currencies:card:fetch:start", {
					data: {
						entity: o
					}
				})
			}), au[u])
		}
		ru.getCardFlows = function (e, n) {
			void 0 === e && (e = ""), void 0 === n && (n = ct), ti.bind(this)(e).then(function (e) {
				e = e.flows;
				n(void 0 === e ? {} : e)
			}).catch(function () {
				n({})
			})
		}, ru.getCardFeatures = ti, ru.getCardCurrencies = function (e) {
			var n = {
					"_[source]": Xn.props.library
				},
				t = Vr(e);
			return 6 === t.length ? n.iin = t : n.token = t, uu.call(this, An({}, e, {
				requestPayload: n,
				entity: t
			}))
		}, ru.getCurrencies = function (e) {
			return Vr(e) ? ru.getCardCurrencies.call(this, e) : e.walletCode ? uu.call(this, An({}, e, {
				entity: e.walletCode,
				wallet: e.walletCode
			})) : null
		}, s.addEventListener("rzp_error", function (e) {
			e = e.detail;
			tt.track("cfu_error", {
				data: {
					error: e
				},
				immediately: !0
			})
		}), s.addEventListener("rzp_network_error", function (e) {
			e = e.detail;
			e && "https://lumberjack.razorpay.com/v1/track" === e.baseUrl || tt.track("network_error", {
				data: e,
				immediately: !0
			})
		}), Xn.props.library = "razorpayjs", xi.payment.authorize = function (e) {
			var n = xi({
				amount: e.data.amount
			}).createPayment(e.data);
			return n.on("payment.success", e.success), n.on("payment.error", e.error), n
		}, xi.payment.validate = ct, xi.sendMessage = function (e) {
			e && "redirect" === e.event && rn((e = e.data).url, e.content, e.method)
		}
	}()
}();