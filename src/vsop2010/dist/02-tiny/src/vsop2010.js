/* autogenerated by webmerge (join context) */
;
(function(exports) {;
exports.vsop2010 = {};;
//***********************************************************
// (c) 2016 by Marcel Greter
// AstroJS VSOP2010/13 utility lib
// https://github.com/mgreter/ephem.js
//***********************************************************
(function(exports) {

	// factors for the angles (sin/cos phi)
	function vsop2k_time_factors(kj2ky) {
		return [
			4.402608631669 + 26087.9031406856 * kj2ky,
			3.176134461576 + 10213.2855474345 * kj2ky,
			1.753470369433 + 6283.07585035322 * kj2ky,
			6.203500014141 + 3340.61243414546 * kj2ky,
			4.09136000305 + 1731.17045272186 * kj2ky,
			1.713740719173 + 1704.4508550272 * kj2ky,
			5.598641292287 + 1428.94891784427 * kj2ky,
			2.805136360408 + 1364.75651362999 * kj2ky,
			2.32698973462 + 1361.92320763284 * kj2ky,
			0.599546107035 + 529.690961562325 * kj2ky,
			0.874018510107 + 213.299086108488 * kj2ky,
			5.481225395663 + 74.781659030778 * kj2ky,
			5.311897933164 + 38.132972226125 * kj2ky,
			0.359536228504931 * kj2ky,
			5.19846640063 + 77713.7714481804 * kj2ky,
			1.62790513602 + 84334.6615717837 * kj2ky,
			2.35555563875 + 83286.9142477147 * kj2ky,
		];
	}

	// evaluate coefficients for one parameter
	function vsop2k_coeffs_eval(coeffs, kj2ky, F)
	{
		var rv = 0;
		for (var n = 0; n < coeffs.length; n += 1) {
			var sum = 0, c = coeffs[n], iL = c.length;
			for (var i = 0; i < iL; i += 3) {
				var S = c[i+0], C = c[i+1], phis = c[i+2];
				for (var p = 0, phi = 0; p < phis.length; p += 2) {
					phi += F[phis[p+0]-1] * phis[p+1];
				}
				sum += S * Math.sin(phi) + C * Math.cos(phi);
			}
			rv += sum * Math.pow(kj2ky, n);
		}
		return rv;
	}

	// generic vsop2010/2013 solver (pass coefficients and time)
	// time is julian years from j2000 (delta JD2451545.0 in JY)
	if (typeof exports.vsop2k !== "function") {
		// only define once in global scope
		// otherwise we overwrite loaded data
		exports.vsop2k = function vsop2k(coeffs, j2ky)
		{
			// want in thousand years
			var kj2ky = j2ky / 1000;
			// first calculate the angle factors
			var F = vsop2k_time_factors(kj2ky),
			    // the compute value for all parameters
			    xa = vsop2k_coeffs_eval(coeffs.a, kj2ky, F),
			    xl = vsop2k_coeffs_eval(coeffs.L, kj2ky, F),
			    xk = vsop2k_coeffs_eval(coeffs.k, kj2ky, F),
			    xh = vsop2k_coeffs_eval(coeffs.h, kj2ky, F),
			    xq = vsop2k_coeffs_eval(coeffs.q, kj2ky, F),
			    xp = vsop2k_coeffs_eval(coeffs.p, kj2ky, F);
			// normalize angle
			xl %= Math.PI * 2;
			if (xl < 0) {
				xl += Math.PI * 2;
			}
			// return object
			return {
				a: xa, L: xl,
				k: xk, h: xh,
				q: xq, p: xp
			};
		}
	}
	// EO fn vsop2k

	// generic vsop2010/2013 solver (pass coefficients and time)
	// time is julian years from j2000 (delta JD2451545.0 in JY)
	if (typeof exports.vsop2k.xyz !== "function") {
		// only define once in global scope
		// otherwise we overwrite loaded data
		exports.vsop2k.xyz = function vsop2k_xyz(coeffs, j2ky)
		{
			// call main theory
			var orb = exports.vsop2k(coeffs, j2ky);
			// create orbit object
			var orbit = new Orbit(orb);
			// query state vector
			var state = orbit.state();
			// return object
			// attach new properties
			orb.x = state.r.x; orb.vx = state.v.x;
			orb.y = state.r.y; orb.vy = state.v.y;
			orb.z = state.r.z; orb.vz = state.v.z;
			// return object
			return orb;
		}
	}
	// EO fn vsop2k.xyz

})(this);;
// generated by vsop2010.pl
function vsop2010_mer(tj) { return vsop2k(vsop2010_mer.coeffs, tj); }
function vsop2010_mer_xyz(tj) { return vsop2k.xyz(vsop2010_mer.coeffs, tj); }
vsop2010_mer.xyz = vsop2010_mer_xyz; // assign
vsop2010.mer = vsop2010_mer; // export
vsop2010_mer.coeffs = {
	L: [[0,4.402608634958,[],-2.64201522670335e-005,-2.38270719313597e-005,[1,2,2,-5],3.94031252193582e-006,1.68698851462506e-005,[1,1,2,-2]],[0,26087.9031407479,[]]],
	a: [[0,0.387098309825,[],7.13402028809345e-007,-1.65207289029428e-007,[1,1,2,-2],-2.43928311061146e-007,2.70920239163361e-007,[1,2,2,-5]]],
	h: [[0,0.200723306513,[],1.46247510056051e-006,-7.0767016750366e-006,[10,2],3.00433378875618e-006,-1.85000588197322e-006,[1,2,2,-5]]],
	k: [[0,0.044660632145,[],7.05228219125317e-006,1.49541249989743e-006,[10,2],-1.71581152612749e-006,-2.9047458604038e-006,[1,2,2,-5]]],
	p: [[0,0.045635506259,[],3.72456622815479e-007,-2.87633259774439e-007,[10,2],-1.67949929062814e-008,-1.99423734197158e-007,[1,2,2,-5]]],
	q: [[0,0.040615647442,[],2.66403900926623e-007,2.94193158444715e-007,[10,2],-1.11822412449545e-007,-2.39875924795339e-008,[1,2,2,-5]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_ven(tj) { return vsop2k(vsop2010_ven.coeffs, tj); }
function vsop2010_ven_xyz(tj) { return vsop2k.xyz(vsop2010_ven.coeffs, tj); }
vsop2010_ven.xyz = vsop2010_ven_xyz; // assign
vsop2010.ven = vsop2010_ven; // export
vsop2010_ven.coeffs = {
	L: [[0,3.176134454599,[],-8.46240143006893e-006,1.38117115866899e-005,[2,2,4,-7,10,8,11,-6],-2.00389756287857e-005,-3.91666181827629e-009,[2,2,3,-2]],[0,10213.2855472784,[]]],
	a: [[0,0.723329819886,[],-7.57620994411122e-010,4.32265690212177e-006,[2,2,3,-2],-2.07964654446319e-009,2.93979841750061e-006,[2,2,10,-2]]],
	h: [[0,0.005066851819,[],-2.23065999914255e-005,-3.67117397037589e-008,[2,2,3,-3],1.69019491669063e-005,3.97002361563882e-008,[2,1,3,-2]]],
	k: [[0,-0.004492821064,[],2.55941759138896e-008,2.24748622741178e-005,[2,2,3,-3],-3.29894947520449e-008,-1.70585582369065e-005,[2,1,3,-2]]],
	p: [[0,0.028822821668,[],-1.69237210562926e-007,-6.92583271309403e-007,[2,3,3,-5],1.67848386075785e-007,-3.36675068778861e-007,[10,2]]],
	q: [[0,0.006824114874,[],-6.68927910297951e-007,1.54240025226593e-007,[2,3,3,-5],3.41174753652136e-007,1.68082529845489e-007,[10,2]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_emb(tj) { return vsop2k(vsop2010_emb.coeffs, tj); }
function vsop2010_emb_xyz(tj) { return vsop2k.xyz(vsop2010_emb.coeffs, tj); }
vsop2010_emb.xyz = vsop2010_emb_xyz; // assign
vsop2010.emb = vsop2010_emb; // export
vsop2010_emb.coeffs = {
	L: [[0,1.753470407365,[],-9.52887631596824e-006,3.22549399417682e-005,[3,4,4,-8,10,3],-2.05639611051847e-005,-1.7163073429688e-008,[3,2,10,-2]],[0,6283.07585023801,[]]],
	a: [[0,1.00000101757,[],-7.73623889346358e-009,1.12049571070469e-005,[3,2,10,-2],5.48709810755875e-010,7.60860006968868e-006,[2,1,3,-1]]],
	h: [[0,0.016284489307,[],1.9870137410749e-005,7.5268469554213e-009,[2,2,3,-3],-1.86405779411837e-005,-2.45293721197461e-008,[3,1,10,-2]]],
	k: [[0,-0.003740817992,[],5.3911755771211e-009,-1.98894818704333e-005,[2,2,3,-3],-4.57790598040938e-009,1.85926031955318e-005,[3,1,10,-2]]],
	p: [[1.14305139203922e-007,4.70213713427448e-007,[2,3,3,-5],6.68446056160719e-008,3.60318770595279e-007,[10,2],2.38375802814195e-008,9.8617504571055e-008,[2,2,3,-4]]],
	q: [[4.57512766619672e-007,-1.06488916145471e-007,[2,3,3,-5],-3.63903832086008e-007,6.80744701688986e-008,[10,2],-2.37906978475016e-007,1.28823793717714e-008,[2,1,3,-1]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_mar(tj) { return vsop2k(vsop2010_mar.coeffs, tj); }
function vsop2010_mar_xyz(tj) { return vsop2k.xyz(vsop2010_mar.coeffs, tj); }
vsop2010_mar.xyz = vsop2010_mar_xyz; // assign
vsop2010.mar = vsop2010_mar; // export
vsop2010_mar.coeffs = {
	L: [[0,6.203499866531,[],7.74235605944231e-005,-0.000261783430250939,[3,4,4,-8,10,3],5.34524186153185e-005,-7.8048866315239e-005,[2,2,4,-7,10,8,11,-6]],[0,3340.61243348051,[]]],
	a: [[0,1.523679340688,[],2.10177475060165e-007,6.6017046505836e-005,[4,2,10,-2],-9.97760548337139e-006,-1.96269524649139e-005,[4,1,10,-2]]],
	h: [[0,-0.03789970896,[],-8.15830129274742e-005,-1.63133363985508e-007,[4,1,10,-2],-4.51462191517654e-005,-1.33856036872035e-006,[10,1]]],
	k: [[0,0.08536559315,[],7.59234168329626e-007,8.22828214610147e-005,[4,1,10,-2],1.32864651746027e-006,-4.62999686534388e-005,[10,1]]],
	p: [[0,0.012284486291,[],8.45182541308784e-007,-7.45399190771075e-008,[10,2],-1.46410947408683e-007,2.82737269050899e-007,[10,1]]],
	q: [[0,0.010470428292,[],5.24660980941539e-008,8.59427446062127e-007,[10,2],-2.44990389459863e-007,1.14143047541592e-007,[3,1,4,-2]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_jup(tj) { return vsop2k(vsop2010_jup.coeffs, tj); }
function vsop2010_jup_xyz(tj) { return vsop2k.xyz(vsop2010_jup.coeffs, tj); }
vsop2010_jup.xyz = vsop2010_jup_xyz; // assign
vsop2010.jup = vsop2010_jup; // export
vsop2010_jup.coeffs = {
	L: [[0,0.59954609792,[],-0.00566623987134923,-0.000892559187360027,[10,2,11,-5],0.000616623674445687,-9.02518292284778e-005,[10,1,11,-2]],[-1.74952165271472e-013,529.690968176081,[]]],
	a: [[0,5.202603156914,[],5.10071945012176e-006,0.000690804372208541,[10,2,11,-2],-2.87825241796765e-005,-0.000321490648279802,[10,1,11,-2]]],
	h: [[0,0.012003719463,[],-0.000642719933597925,1.47984982727316e-005,[10,1,11,-2],-0.000160441762075901,-0.000341117970303028,[10,2,11,-5]]],
	k: [[0,0.04698585415,[],-4.34755266569202e-006,0.000652966326253384,[10,1,11,-2],-0.000344420830476197,0.000160870225873298,[10,2,11,-5]]],
	p: [[0,0.011183894414,[],-3.33987813982107e-006,-7.83497649059113e-006,[10,2,11,-5],-1.37863413142908e-006,1.69799936366335e-006,[10,1,11,-3]]],
	q: [[0,-0.002065622793,[],-7.5099818730761e-006,4.12745072196874e-006,[10,2,11,-5],1.89549042319157e-006,1.12969139607457e-006,[10,1,11,-3]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_sat(tj) { return vsop2k(vsop2010_sat.coeffs, tj); }
function vsop2010_sat_xyz(tj) { return vsop2k.xyz(vsop2010_sat.coeffs, tj); }
vsop2010_sat.xyz = vsop2010_sat_xyz; // assign
vsop2010.sat = vsop2010_sat; // export
vsop2010_sat.coeffs = {
	L: [[0,0.87401834497,[],0.0139448111557635,0.00219693250253942,[10,2,11,-5],0.0025978352864037,-1.16600080492372e-005,[10,1,11,-1]],[0,213.299086091733,[]]],
	a: [[0,9.554910378112,[],-3.4372544443503e-005,0.0336346753264386,[10,1,11,-1],-0.0022293807231311,0.00275617044443976,[10,1,11,-2]]],
	h: [[0,0.055429461883,[],0.000635121088770331,0.00140902106294366,[10,2,11,-5],0.00196887708331382,6.60368517037526e-006,[10,1]]],
	k: [[0,-0.002959983388,[],0.00141686759957569,-0.000636534426943265,[10,2,11,-5],6.66643500114881e-006,0.00197268850168487,[10,1]]],
	p: [[0,0.019891374992,[],8.69830946116295e-006,1.87071949357162e-005,[10,2,11,-5],-3.50554823795889e-006,-7.68114511152702e-006,[10,1,11,-1]]],
	q: [[0,-0.008717361432,[],1.81469852271165e-005,-9.70875879012806e-006,[10,2,11,-5],-4.47748707747418e-006,5.74719690638081e-006,[10,1,11,-1]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_ura(tj) { return vsop2k(vsop2010_ura.coeffs, tj); }
function vsop2010_ura_xyz(tj) { return vsop2k.xyz(vsop2010_ura.coeffs, tj); }
vsop2010_ura.xyz = vsop2010_ura_xyz; // assign
vsop2010.ura = vsop2010_ura; // export
vsop2010_ura.coeffs = {
	L: [[0,5.481224786038,[],-0.0149454709887597,0.000836462519121679,[12,1,13,-2],0.00341047641872115,-1.91054522639452e-007,[10,1,12,-1]],[0,74.781653800278,[]]],
	a: [[0,19.218439287036,[],2.27855795263522e-006,0.0803052643857234,[10,1,12,-1],-7.30496660393603e-006,0.0206873124885464,[11,1,12,-1]]],
	h: [[0,0.005647966027,[],0.00274677779999139,-4.04116959299732e-007,[10,1],0.00209367354511594,5.55491315644574e-006,[12,1,13,-2]]],
	k: [[0,-0.045953250797,[],-1.72795604072523e-007,0.00274534376318399,[10,1],3.65789913745649e-006,-0.00208573717620544,[12,1,13,-2]]],
	p: [[0,0.006486072973,[],-3.8184133137512e-006,5.32911454619932e-006,[11,1,12,-3],4.06479566312906e-006,4.90357922293699e-006,[10,1,12,-1]]],
	q: [[0,0.001859210711,[],5.18108664311659e-006,4.15480638342931e-006,[11,1,12,-3],4.86981667572992e-006,-4.09472896777568e-006,[10,1,12,-1]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_nep(tj) { return vsop2k(vsop2010_nep.coeffs, tj); }
function vsop2010_nep_xyz(tj) { return vsop2k.xyz(vsop2010_nep.coeffs, tj); }
vsop2010_nep.xyz = vsop2010_nep_xyz; // assign
vsop2010.nep = vsop2010_nep; // export
vsop2010_nep.coeffs = {
	L: [[0,5.311894573453,[],0.0101487036981737,-0.000568627881804584,[12,1,13,-2],0.00441713419495917,7.04524571624978e-007,[10,1,13,-1]],[0,38.132927373227,[]]],
	a: [[0,30.110439638406,[],-3.1669018477414e-005,0.148183001944669,[10,1,13,-1],-7.59631077478751e-006,0.0359790148985674,[11,1,13,-1]]],
	h: [[0,0.006691013143,[],0.00344037271210066,2.60047251176929e-007,[10,1],0.00136274554541729,-7.31600288268588e-008,[13,1]]],
	k: [[0,0.005998419642,[],-1.19590693976619e-006,0.00343812848498352,[10,1],-2.33799319374669e-008,0.00136228843996479,[13,1]]],
	p: [[0,0.011516898449,[],-1.008524631792e-005,-4.10581376424088e-007,[10,1,13,-1],8.73371008673231e-006,3.57695227627113e-007,[10,1,13,1]]],
	q: [[0,-0.010291527179,[],-4.12947584026413e-007,1.00923519892543e-005,[10,1,13,-1],-3.55449496563709e-007,8.73402427654602e-006,[10,1,13,1]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_plu(tj) { return vsop2k(vsop2010_plu.coeffs, tj); }
function vsop2010_plu_xyz(tj) { return vsop2k.xyz(vsop2010_plu.coeffs, tj); }
vsop2010_plu.xyz = vsop2010_plu_xyz; // assign
vsop2010.plu = vsop2010_plu; // export
vsop2010_plu.coeffs = {
	L: [[0,4.166144186927,[],-0.00456583327646248,0.00206416206323593,[14,1402],0.00219275180301368,0.00282526966742194,[14,4]],[0,25.3363411174083,[]],[0,-0.0182807024038974,[]]],
	a: [[0,39.54470599359,[],-0.0853871348201155,-0.188856887968998,[14,1402],-0.0334407179334043,-0.0414526604237341,[14,1331],-0.0073788773702726,-0.0484978885372198,[14,522],-0.00535961817372672,0.0280976664834542,[14,71],-0.0123263783658494,-0.00913663936136193,[14,1261],-0.00526781366320596,-0.0121954072119394,[14,452]],[0.053676522241001,-0.0245188221694707,[14,1402],0,0.0378904808510013,[],0.0195474173149917,-0.015961060108816,[14,1331],0.0138167288060952,-0.00217190934339332,[14,522]]],
	h: [[0,-0.1734154998938,[],0.0030130079923837,0.00212348584672692,[14,1473],-0.000707800891750754,-0.00105093327613335,[14,71]]],
	k: [[0,-0.1787246950685,[],-0.00209858994701332,0.00316298912578306,[14,1473],0.00111179681573192,-0.000681136951235402,[14,71]]],
	p: [[0,0.139779560579086,[],0.00013480122930835,0.000128742494031123,[14,1402],0.00016184522556001,-4.98695225339238e-005,[14,1543]]],
	q: [[0,-0.0517028337448404,[],0.000135147039182862,-0.000133061378669859,[14,1402],5.58152705651425e-005,0.000163047844135352,[14,1543]]]
}; // assign
;
})(this)
/* crc: FA3636B760B585901626165F25E4EC7D */
