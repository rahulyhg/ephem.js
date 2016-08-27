/* autogenerated by webmerge (join context) */
;
(function() {

	// generic vsop87 solver (pass coefficients and time)
	// this is basically a one to one translation from the official
	// fortran code in vsop87.f at around line 185. Only change is
	// that I took out the multiplication for the summands and apply
	// it after the sum has been calculated. IMO this should be a bit
	// faster than the original implementation, but not sure if the
	// precision will suffer from that change.
	if (typeof window.vsop87 !== "function") {
		// only define once in global scope
		// otherwise we overwrite loaded data
		window.vsop87 = function vsop87(coeffs, time)
		{
			// want 1000 JY (KJY)
			var t = time / 1000, result = {},
			    u, cu, tt = [0, 1, t, t*t];
			// reuse old multiplications
			// fortran t(x) array starts at -1!
			// therefore t(it) = tt[it+1] (js)
			tt[4] = tt[3] * t, tt[5] = tt[4] * t, tt[6] = tt[5] * t;
			// do a cheap test if coefficients are from the main vsop87
			// theories. All other [a-e] only need 3 to calculate the
			// full 6 elements (velocity is calculated from position).
			var main = 'a' in coeffs;
			// calculate poisson series
			for (var v in coeffs) {
				// init result holders
				result[v] = 0;
				if (!main) result['v'+v] = 0;
				// loop all coefficients for all powers (t^0, t^1, t^2, etc.)
				for (var it = 0, sum = 0, dsum = 0; it < coeffs[v].length; it += 1) {
					var pow_sum = 0, dpow_sum = 0, coeff = coeffs[v][it];
					for (var i = 0, cl = coeff.length; i < cl; i += 3) {
						// assign coefficients as in fortran code
						// `read (lu,1002,err=500) a,b,c` (line 187)
						var a = coeff[i+0], b = coeff[i+1], c = coeff[i+2];
						// `u=b+c*t(1)` and `cu=dcos(u)`
						u = b + c * t, cu = Math.cos(u);
						// `r(ic)=r(ic)+a*cu*t(it)`
						pow_sum += a * cu * tt[it+1];
						// condition for `if (iv.eq.0) goto 200`
						// calculation for `t(it)*a*c*su` (line 194)
						// note to myself: tt[it]*it != tt[it+1]
						if (!main) dpow_sum += tt[it]*it*a*cu - tt[it+1]*a*c*Math.sin(u);
					}
					// this is the step for r(ic)=r(ic)+(...) (line 191)
					result[v] += pow_sum; /*t(it)*/;
					if (!main) result['v'+v] += dpow_sum / 365250;
				}
			}
			// normalize angles
			if ('L' in result) {
				result.L = result.L % (Math.PI * 2);
				if (result.L < 0) result.L += (Math.PI * 2);
			}
			if ('l' in result) {
				result.l = result.l % (Math.PI * 2);
				if (result.l < 0) result.l += (Math.PI * 2);
			}
			if ('b' in result) {
				result.n = result.n % (Math.PI * 2);
				if (result.n < 0) result.n += (Math.PI * 2);
			}
			// return result
			return result;
		}

	}

	/*
	// position = heliocentric
	function vsop2fk5(position, JD)
	{
		var LL, cos_LL, sin_LL, T, delta_L, delta_B, B;

		// get julian centuries from 2000
		T = (JD - 2451545.0) / 36525.0;

		LL = position.L + (- 1.397 * DEG2RAD - 0.00031 * DEG2RAD * T) * T;
		// LL = ln_deg_to_rad(LL);
		cos_LL = Math.cos(LL);
		sin_LL = Math.sin(LL);
		// B = ln_deg_to_rad(position.B);

		delta_L = (-0.09033 / 3600.0) + (0.03916 / 3600.0) *
				(cos_LL + sin_LL) * Math.tan(B);
		delta_B = (0.03916 / 3600.0) * (cos_LL - sin_LL);

		return {
			l: L + delta_L,
			b: B + delta_B
		};
	}
	*/

})();;
(function(vsop87) {;

function vsop87_mer(jy) { return vsop87(vsop87_mer.coeffs, jy); }
vsop87_mer.coeffs = {
	a: [[0.38709830982,0,0]],
	L: [[4.4026088424,0,0],[26087.9031415742,0,0]],
	k: [[0.0446605976,0,0]],
	h: [[0.20072331368,0,0]],
	q: [[0.04061563384,0,0]],
	p: [[0.04563550461,0,0]]
}; // assign to function
vsop87.mer = vsop87_mer; // export function
;

function vsop87_ven(jy) { return vsop87(vsop87_ven.coeffs, jy); }
vsop87_ven.coeffs = {
	a: [[0.72332981996,0,0]],
	L: [[3.17614669689,0,0],[10213.285546211,0,0]],
	k: [[0.00449282133,3.14159265359,0]],
	h: [[0.00506684726,0,0]],
	q: [[0.00682410142,0,0]],
	p: [[0.02882285775,0,0]]
}; // assign to function
vsop87.ven = vsop87_ven; // export function
;

function vsop87_emb(jy) { return vsop87(vsop87_emb.coeffs, jy); }
vsop87_emb.coeffs = {
	a: [[1.00000101778,0,0]],
	L: [[1.75347045953,0,0],[6283.0758499914,0,0]],
	k: [[0.0037408165,3.14159265359,0]],
	h: [[0.01628447663,0,0]],
	q: [[4.699e-007,1.03836320801,775.522611324]],
	p: [[4.8408e-007,5.76054381234,775.522611324]]
}; // assign to function
vsop87.emb = vsop87_emb; // export function
;

function vsop87_mar(jy) { return vsop87(vsop87_mar.coeffs, jy); }
vsop87_mar.coeffs = {
	a: [[1.52367934191,0,0]],
	L: [[6.20347611291,0,0],[3340.61242669981,0,0]],
	k: [[0.08536560252,0,0]],
	h: [[0.03789973236,3.14159265359,0]],
	q: [[0.01047042574,0,0]],
	p: [[0.01228449307,0,0]]
}; // assign to function
vsop87.mar = vsop87_mar; // export function
;

function vsop87_jup(jy) { return vsop87(vsop87_jup.coeffs, jy); }
vsop87_jup.coeffs = {
	a: [[5.20260319132,0,0]],
	L: [[0.59954649739,0,0],[529.6909650946,0,0]],
	k: [[0.04698572124,0,0]],
	h: [[0.01200385748,0,0]],
	q: [[0.00206561098,3.14159265359,0]],
	p: [[0.01118377157,0,0]]
}; // assign to function
vsop87.jup = vsop87_jup; // export function
;

function vsop87_sat(jy) { return vsop87(vsop87_sat.coeffs, jy); }
vsop87_sat.coeffs = {
	a: [[9.55490959574,0,0,0.03363448736,6.0097367346,316.3918696566]],
	L: [[0.8740167565,0,0,0.01411655077,4.58553469006,7.1135470008],[213.299095438,0,0]],
	k: [[0.00296003595,3.14159265359,0]],
	h: [[0.05542964254,0,0]],
	q: [[0.00871747436,3.14159265359,0]],
	p: [[0.01989147301,0,0]]
}; // assign to function
vsop87.sat = vsop87_sat; // export function
;

function vsop87_ura(jy) { return vsop87(vsop87_ura.coeffs, jy); }
vsop87_ura.coeffs = {
	a: [[19.21844606178,0,0,0.0803047624,1.40140954803,454.9093665273,0.02068375131,1.67626096637,138.5174968707]],
	L: [[5.48129387159,0,0,0.01503941337,3.62721239702,1.4844727083],[74.7815985673,0,0]],
	k: [[0.04595132376,3.14159265359,0]],
	h: [[0.00563791307,0,0]],
	q: [[0.00185915075,0,0]],
	p: [[0.00648617008,0,0]]
}; // assign to function
vsop87.ura = vsop87_ura; // export function
;

function vsop87_nep(jy) { return vsop87(vsop87_nep.coeffs, jy); }
vsop87_nep.coeffs = {
	a: [[30.11038686942,0,0,0.14818172119,1.57105922541,491.5579294568,0.03597274341,1.84552690821,175.1660598002]],
	L: [[5.31188628676,0,0,0.01017628072,0.48586478491,1.4844727083],[38.1330356378,0,0]],
	k: [[0.00599977571,0,0]],
	h: [[0.00669242413,0,0]],
	q: [[0.01029147819,3.14159265359,0]],
	p: [[0.01151683985,0,0]]
}; // assign to function
vsop87.nep = vsop87_nep; // export function
;
})(vsop87)
/* crc: 681C248E153A896662231B0053F0DBC5 */
