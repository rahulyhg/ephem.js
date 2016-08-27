/* autogenerated by webmerge (join context) */
;
var vsop87e = {};
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
(function(vsop87e) {;

function vsop87e_sun(jy) { return vsop87(vsop87e_sun.coeffs, jy); }
vsop87e_sun.coeffs = {
	x: [[0.00495672739,3.74107356792,529.6909650946,0.00271802376,4.01601149775,213.299095438,0.00155435675,2.17052050061,38.1330356378,0.00083792997,2.33967985523,74.7815985673,0.00029374249,0,0,0.00012013079,4.09073224903,1059.3819301892]],
	y: [[0.00495536218,2.17046712634,529.6909650946,0.00272185821,2.44443364925,213.299095438,0.00155444313,0.5992701084,38.1330356378,0.00083755792,0.7688016471,74.7815985673,0.00033869535,0,0,0.00012011827,2.5200314788,1059.3819301892]],
	z: [[0.00011810648,0.46078690233,213.299095438,0.000112777,0.41689943638,529.6909650946]]
}; // assign to function
vsop87e.sun = vsop87e_sun; // export function
;

function vsop87e_mer(jy) { return vsop87(vsop87e_mer.coeffs, jy); }
vsop87e_mer.coeffs = {
	x: [[0.37546285495,4.39651506942,26087.9031415742,0.03825746037,1.16485604343,52175.8062831484,0.02596241714,3.14159265359,0,0.00584261236,4.21599394757,78263.7094247226,0.00495586029,3.74115422358,529.6909650946,0.0027179749,4.01600769847,213.299095438,0.00155435621,2.17052060921,38.1330356378,0.00105716677,0.98379033182,104351.612566297,0.00083792888,2.3396763991,74.7815985673,0.00021011726,4.03469353923,130439.515707871,0.00012216168,4.05786119279,1059.3819301892],[0.0031755196,0,0,0.00105289001,5.91600475006,52175.8062831484,0.00032315996,2.68247273347,78263.7094247226,0.00011992887,5.81575112963,26087.9031415742]],
	y: [[0.37953636588,2.83780617821,26087.9031415742,0.11592262295,3.14159265359,0,0.03854667576,5.88780608961,52175.8062831484,0.00587711171,2.65498896201,78263.7094247226,0.00495452148,2.17050902176,529.6909650946,0.00272177927,2.44442843667,213.299095438,0.00155444251,0.59927014783,38.1330356378,0.00106235475,5.70550616735,104351.612566297,0.00083755636,0.76879995697,74.7815985673,0.00021100825,2.47291315849,130439.515707871,0.00012216279,2.48707059837,1059.3819301892],[0.00107803834,4.34964793883,52175.8062831484,0.00080645427,3.14159265359,0,0.00032715349,1.11763734425,78263.7094247226,0.00011914707,1.2213998634,26087.9031415742]],
	z: [[0.04607664562,1.99295081967,26087.9031415742,0.00709887021,3.14159265359,0,0.0046917154,5.04215742764,52175.8062831484,0.00071626383,1.80894256071,78263.7094247226,0.00011810801,0.46073218799,213.299095438,0.00012957444,4.8592203201,104351.612566297,0.00011268745,0.4166999186,529.6909650946],[0.00108722159,3.91134750825,26087.9031415742,0.00057693223,3.14159265359,0]]
}; // assign to function
vsop87e.mer = vsop87e_mer; // export function
;

function vsop87e_ven(jy) { return vsop87(vsop87e_ven.coeffs, jy); }
vsop87e_ven.coeffs = {
	x: [[0.72211104628,3.17575836361,10213.285546211,0.00515822267,0,0,0.00494908458,3.74108234732,529.6909650946,0.00244499876,4.05566613867,20426.571092422,0.00271754748,4.01601261142,213.299095438,0.00155435209,2.1705205205,38.1330356378,0.00083791771,2.33967946884,74.7815985673,0.00011914665,4.08456666781,1059.3819301892],[0.0003515871,3.14159265359,0,0.0001723495,0.92721124604,20426.571092422]],
	y: [[0.72324643689,1.60573808356,10213.285546211,0.00515636737,3.14159265359,0,0.00494765697,2.17048019743,529.6909650946,0.0024488419,2.48564953999,20426.571092422,0.00272138024,2.44443638845,213.299095438,0.00155443844,0.59927014146,38.1330356378,0.00083754576,0.76880143132,74.7815985673,0.00011913202,2.51387064934,1059.3819301892],[0.00039237546,0,0,0.00017282284,5.638247359,20426.571092422]],
	z: [[0.04282979819,0.26703856471,10213.285546211,0.00036740999,3.14159265359,0,0.00014501844,1.1469691139,20426.571092422,0.00011808377,0.46064367724,213.299095438,0.00011238047,0.41541669438,529.6909650946],[0.00208095894,1.88967278742,10213.285546211]]
}; // assign to function
vsop87e.ven = vsop87e_ven; // export function
;

function vsop87e_ear(jy) { return vsop87(vsop87e_ear.coeffs, jy); }
vsop87e_ear.coeffs = {
	x: [[0.99982624851,1.75348568475,6283.0758499914,0.00835254761,1.71034539458,12566.1516999828,0.00590518455,0,0,0.00493120585,3.74115834452,529.6909650946,0.00271650686,4.01601440281,213.299095438,0.0015543422,2.17052065758,38.1330356378,0.00083789104,2.33967726393,74.7815985673,0.00011821467,4.04599151293,1059.3819301892,0.00010466596,1.66722645223,18849.2275499742],[0.00122106982,0,0,0.000515,6.00266267204,12566.1516999828]],
	y: [[0.99988907017,0.18265890456,6283.0758499914,0.02408829501,3.14159265359,0,0.00835289774,0.13952879005,12566.1516999828,0.00492966037,2.170524584,529.6909650946,0.00272033033,2.44443635549,213.299095438,0.00155442849,0.59927021065,38.1330356378,0.0008375191,0.76880010707,74.7815985673,0.00011819755,2.47524448851,1059.3819301892,0.00010466933,0.09641690558,18849.2275499742],[0.00093052441,0,0,0.00051506453,4.43180499286,12566.1516999828]],
	z: [[0.00011810174,0.46078312048,213.299095438,0.00011270511,0.41685732455,529.6909650946],[0.0022782175,3.41372504278,6283.0758499914]]
}; // assign to function
vsop87e.ear = vsop87e_ear; // export function
;

function vsop87e_mar(jy) { return vsop87(vsop87e_mar.coeffs, jy); }
vsop87e_mar.coeffs = {
	x: [[1.51769887405,6.20403346548,3340.6124266998,0.19473570996,3.14159265359,0,0.07070917372,0.25870338552,6681.2248533996,0.00494196754,0.59669127752,10021.8372800994,0.00482151285,3.74021439144,529.6909650946,0.00271094292,4.01586959956,213.299095438,0.00155429009,2.17051900894,38.1330356378,0.0008377764,2.33969868905,74.7815985673,0.00040938237,0.93473307419,13362.4497067992,0.00021067199,1.80435656154,3337.0893083508,0.00021041626,1.17895619474,3344.1355450488,0.00021794152,4.45100162839,1059.3819301892],[0.00862737448,3.14159265359,0,0.00552437771,5.09565872891,6681.2248533996,0.00077184951,5.43315636209,10021.8372800994,0.00020467294,5.57051812369,3340.6124266998],[0.00056368724,0,0,0.00022122521,3.54372113272,6681.2248533996]],
	y: [[1.51558927367,4.63212206588,3340.6124266998,0.07064547959,4.97051892898,6681.2248533996,0.08689350637,0,0,0.00493872689,5.30877806678,10021.8372800994,0.00482218424,2.16962356915,529.6909650946,0.00271492455,2.44409624683,213.299095438,0.00155437832,0.59926749768,38.1330356378,0.00083738369,0.76880567376,74.7815985673,0.00040917422,5.64698263703,13362.4497067992,0.00021036784,0.23240270955,3337.0893083508,0.00021012921,5.89022773653,3344.1355450488,0.00021795361,2.88000673227,1059.3819301892],[0.01427318093,3.14159265359,0,0.00551063576,3.52128320402,6681.2248533996,0.00077091888,3.86082685753,10021.8372800994,0.00037310479,1.16016958445,3340.6124266998],[0.00035452579,3.14159265359,0,0.00021950751,1.96291594946,6681.2248533996]],
	z: [[0.04901205639,3.76712324293,3340.6124266998,0.00659516885,0,0,0.00228333831,4.10544022266,6681.2248533996,0.00015958402,4.44367058261,10021.8372800994,0.00011803129,0.45922638235,213.299095438,0.00011012894,0.3930742899,529.6909650946],[0.00331842851,6.05027773492,3340.6124266998,0.00047797013,3.14159265359,0],[0.00013705355,1.04212852598,3340.6124266998]]
}; // assign to function
vsop87e.mar = vsop87e_mar; // export function
;

function vsop87e_jup(jy) { return vsop87(vsop87e_jup.coeffs, jy); }
vsop87e_jup.coeffs = {
	x: [[5.19167797375,0.59945079482,529.6909650946,0.3663326807,3.14159265359,0,0.12581924842,0.94911581432,1059.3819301892,0.01499237862,0.73175554601,522.5774180938,0.01474818211,3.61736901402,536.8045120954,0.00457316096,1.29883699143,1589.0728952838,0.00302068886,5.17370377723,7.1135470008,0.00385749947,2.01222596811,103.0927742186,0.00192562451,4.98733787115,426.598190876,0.0015078374,6.1183167133,110.2063212194,0.00144750651,5.55980048541,632.7837393132,0.00154896097,2.17051189575,38.1330356378,0.00137575946,4.0139949837,213.299095438,0.00103396684,6.19327175097,1052.2683831884,0.00114092461,0.01567031739,1162.4747044078,0.00072025988,3.96117200382,1066.49547719,0.00082181886,2.33944503932,74.7815985673,0.00059429203,4.45768709661,949.1756089698,0.00068217918,3.44053291909,846.0828347512,0.00047092829,1.43942906349,419.4846438752,0.00029905661,2.93170826549,206.1855484372,0.00026609536,4.85102664902,323.5054166574,0.00019708639,1.64891620821,2118.7638603784,0.00016318258,1.94286700529,316.3918696566,0.00016086488,0.87974686945,515.463871093,0.00014193776,2.07763165706,742.9900605326,0.00015178545,6.2587881143,735.8765135318,0.00011412363,3.4814594322,543.9180590962,0.00012143698,3.75229920148,525.7588118315,0.00011984824,0.58568596255,533.6231183577],[0.00883685325,3.14159265359,0,0.00634691138,0.10662162351,1059.3819301892,0.00599147916,2.4299683255,522.5774180938,0.00588595541,1.91556289228,536.8045120954,0.00081798277,3.46668967473,7.1135470008,0.00046157824,0.45714213541,1589.0728952838,0.00032477578,1.74648870966,1052.2683831884,0.00033859106,4.10112469499,529.6909650946,0.00031204139,2.34698443027,1066.49547719,0.00021258131,4.36563858679,110.2063212194,0.00017292154,3.99214003946,426.598190876,0.00013566605,0.30040958696,632.7837393132,0.00012877132,2.57490337554,515.463871093],[0.00123746423,4.13563340107,522.5774180938,0.00121405454,0.21155087534,536.8045120954,0.00085400287,0,0,0.00077611336,5.29776152037,529.6909650946,0.00041371381,5.12291606259,1059.3819301892,0.00011437051,1.72922178247,7.1135470008],[0.00017055031,5.86133054086,522.5774180938,0.00016697614,4.77458774773,536.8045120954]],
	y: [[5.19024510371,5.31203160043,529.6909650946,0.12580850775,5.66160225641,1059.3819301892,0.09329801081,3.14159265359,0,0.01506838468,5.43934599781,522.5774180938,0.01474403395,2.04679547637,536.8045120954,0.00457314174,6.01129093508,1589.0728952838,0.00301069256,3.60943303554,7.1135470008,0.00378016915,3.53013675622,103.0927742186,0.00190850034,3.41807324121,426.598190876,0.00146192922,4.62080103783,110.2063212194,0.00139367298,4.00075739657,632.7837393132,0.00154904248,0.59924790507,38.1330356378,0.0013965505,2.41039954154,213.299095438,0.00101901831,4.5759216528,1052.2683831884,0.00113934096,4.72982346991,1162.4747044078,0.00072021597,2.39048430255,1066.49547719,0.00082109296,0.76861586597,74.7815985673,0.00058995131,2.89529666872,949.1756089698,0.00068308433,1.86538762629,846.0828347512,0.00030597479,4.58059597562,206.1855484372,0.00027182574,3.86962082273,419.4846438752,0.00026615785,3.28135958246,323.5054166574,0.00020859553,3.79339751809,735.8765135318,0.00019708579,0.07818533602,2118.7638603784,0.00018475985,0.38014924174,316.3918696566,0.00016340182,5.56996543941,515.463871093,0.00014591238,0.4774986561,742.9900605326,0.0001140902,1.91089175916,543.9180590962,0.00012141842,2.18151948736,525.7588118315,0.0001197744,5.29687559056,533.6231183577],[0.01694792137,3.14159265359,0,0.00634254247,4.81903195356,1059.3819301892,0.0060058715,0.85811137383,522.5774180938,0.005883672,0.34491553018,536.8045120954,0.00081289939,1.90910271853,7.1135470008,0.00046843519,1.91294033052,529.6909650946,0.00046150068,5.16955995419,1589.0728952838,0.00032472443,0.17640771395,1052.2683831884,0.00031201535,0.77624038457,1066.49547719,0.00019475766,3.00913152396,110.2063212194,0.00016865586,2.45297644533,426.598190876,0.00013690691,5.02101628562,632.7837393132,0.00013022204,0.98978959368,515.463871093],[0.00123914193,2.56495551373,522.5774180938,0.00121340211,4.92398747363,536.8045120954,0.00076450198,3.75913373191,529.6909650946,0.00076998857,3.14159265359,0,0.00041318153,3.55228415274,1059.3819301892,0.00011292133,0.18554488524,7.1135470008],[0.00017069216,4.29096907367,522.5774180938,0.0001668543,3.20365723177,536.8045120954]],
	z: [[0.11811822789,3.55844641987,529.6909650946,0.00857879296,0,0,0.00286288759,3.90812239092,1059.3819301892,0.00042347799,3.60144639424,522.5774180938,0.00033263796,0.3029697193,536.8045120954,0.00010406225,4.25764578777,1589.0728952838],[0.00406683941,1.52699356726,529.6909650946,0.00020287968,2.59878263946,1059.3819301892,0.00014411207,4.85400100506,536.8045120954,0.00015608009,0,0,0.00012718197,5.45536889012,522.5774180938],[0.00028608011,3.01374191263,529.6909650946]]
}; // assign to function
vsop87e.jup = vsop87e_jup; // export function
;

function vsop87e_sat(jy) { return vsop87(vsop87e_sat.coeffs, jy); }
vsop87e_sat.coeffs = {
	x: [[9.51366533422,0.8744138065,213.299095438,0.26404799161,0.12391580771,426.598190876,0.06758489145,4.16767544586,206.1855484372,0.06622371284,0.75094738122,220.4126424388,0.04274172066,0,0,0.02335961354,2.02227905783,7.1135470008,0.01255113414,2.17347170552,110.2063212194,0.01115372225,3.15690865182,419.4846438752,0.01097374519,5.65753938643,639.897286314,0.00716112591,2.71151505735,316.3918696566,0.00509529043,4.95879639669,103.0927742186,0.00372789068,0.00137750888,433.7117378768,0.00149659945,2.17071100189,38.1330356378,0.0009783508,1.01502366873,323.5054166574,0.00083256484,3.06289145446,529.6909650946,0.000806058,5.62066478674,11.0457002639,0.00083758534,0.62038891091,227.5261894396,0.00074267111,2.38212789877,632.7837393132,0.00070199356,0.88789759781,209.3669421749,0.00068836111,4.0178812181,217.2312487011,0.00065601455,2.69726244676,202.2533951741,0.00058306839,2.16048044319,224.3447957019,0.00054006503,4.90926255487,853.196381752,0.00058995712,2.33042838103,74.7815985673,0.00045542953,1.882351964,14.2270940016,0.0003833447,4.39817733456,199.0720014364,0.00044537354,5.60825622208,63.7358983034,0.00025158,0.37800583496,216.4804891757,0.00024547484,4.53150636994,210.1177017003,0.0002466993,5.60389432714,415.5524906121,0.00025485006,1.63932503888,117.3198682202,0.00024058786,5.85571939691,522.5774180938,0.00031244965,4.6293031128,735.8765135318,0.00023365871,5.53492454782,647.0108333148,0.00023237024,0.10474288122,149.5631971346,0.00014727416,4.67982458404,277.0349937414,0.0001238976,4.19747910039,490.3340891794,0.00012023054,5.66372239094,351.8165923087],[0.07573807889,0,0,0.03084144308,4.27565898829,426.598190876,0.02714141496,5.85229546861,206.1855484372,0.02642347272,5.33291950842,220.4126424388,0.00627003445,0.32898258729,7.1135470008,0.00256488381,3.52479443238,639.897286314,0.00312269012,4.83002443322,419.4846438752,0.00189142591,4.48642939502,433.7117378768,0.00203589147,1.10998720016,213.299095438,0.00119517217,1.14736396934,110.2063212194,0.00066742869,3.72347003212,316.3918696566,0.00066882235,5.20257498551,227.5261894396,0.00030991837,6.06069383491,199.0720014364,0.00030413111,0.18746990038,14.2270940016,0.00022268129,6.19542444435,103.0927742186,0.00018933918,2.77615609434,853.196381752,0.0001808785,5.09162753222,209.3669421749,0.00017772775,6.10381591303,217.2312487011,0.00016291548,4.86945682592,216.4804891757,0.00017120603,4.59542499292,632.7837393132,0.0001588995,0.0365352681,210.1177017003,0.00016193213,5.60825312945,323.5054166574,0.00014461916,3.67449803828,647.0108333148,0.00011058978,0.03175095579,117.3198682202],[0.00560586041,1.26401676555,206.1855484372,0.00545678885,3.62343709789,220.4126424388,0.00443297401,3.14159265359,0,0.00336013651,2.4254743221,213.299095438,0.00224237163,2.49151267683,426.598190876,0.00087156936,4.89048703815,7.1135470008,0.00050013864,2.70119455991,433.7117378768,0.0004510988,0.36735560493,419.4846438752,0.00032838505,1.59210694211,639.897286314,0.00027145848,3.49804001342,227.5261894396,0.00012672501,1.45466696358,199.0720014364,0.00010329051,4.76949570032,14.2270940016],[0.00077093916,2.97714400003,206.1855484372,0.00075318954,1.89208004954,220.4126424388,0.00018448888,3.14159265359,0,0.00010524182,0.66368351849,426.598190876]],
	y: [[9.52714696877,5.58600556072,213.299095438,0.79354119271,3.14159265359,0,0.26434197609,4.83528742856,426.598190876,0.06914690347,2.55279029588,206.1855484372,0.066316792,5.46258849076,220.4126424388,0.02345226948,0.44652393276,7.1135470008,0.01183557497,1.34637027573,419.4846438752,0.012455238,0.60375781288,110.2063212194,0.01098442011,4.08609387384,639.897286314,0.00700636234,1.13613024684,316.3918696566,0.00373221824,4.71309283502,433.7117378768,0.00335413797,0.66392970394,103.0927742186,0.00149675444,0.59938943096,38.1330356378,0.00097829309,5.7286091022,323.5054166574,0.00080377512,1.51715226439,529.6909650946,0.00080576954,4.05258308529,11.0457002639,0.00083875875,5.33204068233,227.5261894396,0.00070138439,5.59777958177,209.3669421749,0.00065919181,1.25972156533,202.2533951741,0.00071069917,0.88882645933,632.7837393132,0.00068966168,2.44460285922,217.2312487011,0.00058391222,0.58871774298,224.3447957019,0.00054033488,3.33755971377,853.196381752,0.00058932599,0.76188426024,74.7815985673,0.00045783362,0.30331816441,14.2270940016,0.00041964833,2.62589505876,199.0720014364,0.00044692371,0.90600229248,63.7358983034,0.0002519238,5.08963506546,216.4804891757,0.000246338,2.95445207628,210.1177017003,0.00024828004,4.02630021779,415.5524906121,0.00025539506,0.06636302741,117.3198682202,0.0002967171,6.09960421165,735.8765135318,0.00023390138,3.96337860167,647.0108333148,0.00020506212,1.05154502619,522.5774180938,0.00020269405,2.34321183269,309.2783226558,0.00023261688,4.81745174067,149.5631971346,0.00015379504,3.1022791367,277.0349937414,0.00012419205,2.6255814302,490.3340891794,0.00012044624,4.09265940857,351.8165923087],[0.05373895252,0,0,0.03089676414,2.70347020059,426.598190876,0.02740812928,4.2666750646,206.1855484372,0.02646734779,3.76132299914,220.4126424388,0.00631417689,5.03245728319,7.1135470008,0.00256727017,1.95352327208,639.897286314,0.00312184641,3.25850939353,419.4846438752,0.00189379568,2.9150232868,433.7117378768,0.00164086267,5.29239224879,213.299095438,0.00116775818,5.89150757121,110.2063212194,0.00067189505,2.170429775,316.3918696566,0.00066984273,3.63101074215,227.5261894396,0.00032993193,4.35526131741,199.0720014364,0.00030623941,4.8886201945,14.2270940016,0.00022227517,4.62224969869,103.0927742186,0.00018939541,1.20409782475,853.196381752,0.00018074789,3.51566121826,209.3669421749,0.00017786462,4.53214139341,217.2312487011,0.00016316041,3.29784030574,216.4804891757,0.00015939705,4.74503240139,210.1177017003,0.00016718004,3.00200323762,632.7837393132,0.00016150533,4.04213724873,323.5054166574,0.00014477333,2.10298721499,647.0108333148,0.0001108147,4.74085903299,117.3198682202],[0.00563545688,5.97115835983,206.1855484372,0.00546856143,2.05154974712,220.4126424388,0.00458462799,0,0,0.00362190876,0.89540102818,213.299095438,0.00225456249,0.91699830789,426.598190876,0.00088376134,3.3028974379,7.1135470008,0.00050087062,1.12976577868,433.7117378768,0.00045503682,5.07669915666,419.4846438752,0.00032887404,0.02089587128,639.897286314,0.00027192023,1.92638417379,227.5261894396,0.00013247777,6.07692233033,199.0720014364,0.00010424268,3.18247070949,14.2270940016],[0.00077354527,1.40391035241,206.1855484372,0.00075542804,0.31962897945,220.4126424388,0.00022841198,3.14159265359,0,0.0001066917,5.364956122,426.598190876]],
	z: [[0.41345140292,3.60234141893,213.299095438,0.01147953788,2.85128771957,426.598190876,0.01213097211,0,0,0.00329186544,0.57121482436,206.1855484372,0.00286852189,3.48073528206,220.4126424388,0.00099054808,4.73370561217,7.1135470008,0.000573476,4.92616271331,110.2063212194,0.00047724545,2.1003983837,639.897286314,0.00043448305,5.84904880596,419.4846438752,0.00034555171,5.42614764541,316.3918696566,0.00016180782,2.72987541776,433.7117378768],[0.0190595894,4.94544746619,213.299095438,0.00528167867,3.14159265359,0,0.0013022499,2.26141028606,206.1855484372,0.00101437388,1.79095832223,220.4126424388,0.0008592259,0.51612794233,426.598190876,0.0002225307,3.07685453172,7.1135470008,0.00016174973,1.19988846625,419.4846438752],[0.00131237677,0.08868998014,213.299095438,0.00030139033,3.91396211806,206.1855484372,0.00019316662,0.0922875161,220.4126424388]]
}; // assign to function
vsop87e.sat = vsop87e_sat; // export function
;

function vsop87e_ura(jy) { return vsop87(vsop87e_ura.coeffs, jy); }
vsop87e_ura.coeffs = {
	x: [[19.17286937362,5.48133416758,74.7815985673,1.32301898121,0,0,0.44400556159,1.65967535182,149.5631971346,0.14667584671,3.42395875589,73.297125859,0.14129215712,4.39576776954,76.2660712756,0.06200970387,5.14043568284,1.4844727083,0.01542890129,4.12122840701,224.3447957019,0.0144415347,2.65117108186,148.0787244263,0.00944969862,1.65871112189,11.0457002639,0.00657496073,0.57595186181,151.0476698429,0.00621603101,3.05881560775,77.7505439839,0.005851598,4.79934731599,71.8126531507,0.00633971831,4.0955458474,63.7358983034,0.00547675794,3.63127816021,85.8272988312,0.0045824226,3.90788427382,2.9689454166,0.00383608186,6.18762167352,138.5174968707,0.00145499145,2.31759819136,70.8494453042,0.00135334157,5.51062460646,78.7137518304,0.00120354886,4.1021867007,39.6175083461,0.00125099578,2.51455157066,111.4301614968,0.00111255099,5.12253353573,222.8603229936,0.00104615229,3.90538915195,146.594251718,0.00110162872,4.45478121996,35.1640902212,0.00063581767,0.29966264689,299.1263942692,0.00053904041,3.92590422507,3.9321532631,0.00065063923,3.73008432701,109.9456887885,0.0005993544,5.30012287089,38.1330356378,0.00039183521,2.68841323459,4.4534181249,0.00034340286,3.03782445102,225.8292684102,0.00033133106,2.54202102521,65.2203710117,0.00034554296,1.84698778371,79.2350166922,0.0003386596,5.984183616,70.3281804424,0.00028371102,2.58026061716,127.4717966068,0.00035938423,4.08805817528,202.2533951741,0.00025208291,5.30270440656,9.5612275556,0.0002346678,4.09729826283,145.6310438715,0.0002296296,5.5147524227,84.3428261229,0.0003182253,5.53948530245,152.5321425512,0.0002576722,2.64279937947,213.299095438,0.00028383708,6.01785438397,184.7272873558,0.0002665625,6.11027934265,160.6088973985,0.00019675903,5.53431398332,74.6697239827,0.00019653015,2.28660913421,74.8934731519,0.00019953738,0.57452653801,12.5301729722,0.00018565067,0.62225019017,52.6901980395,0.00020084107,4.47297514058,22.0914005278,0.00019925827,1.39875506889,112.9146342051,0.00018577959,5.70218580551,33.6796175129,0.0001658787,4.86920309163,108.4612160802,0.00015199755,2.88408510221,41.1019810544,0.0001124531,6.11597014635,71.6002048296,0.00013947849,6.2754594407,221.3758502853,0.00010797879,1.70031895074,77.962992305,0.00013593381,2.55407931798,87.3117715395,0.00012884351,5.0873799947,145.1097790097,0.00012394786,6.2189287885,72.3339180125,0.00011538642,1.77241794539,77.2292791221,0.0001144251,0.20030247485,36.6485629295],[0.00739697937,6.01067921255,149.5631971346,0.00528174379,3.14159265359,0,0.00239830578,5.33657752107,73.297125859,0.00229661096,2.48203377424,76.2660712756,0.00111041831,5.57157483973,11.0457002639,0.00096348588,0.35070396367,63.7358983034,0.00081508425,1.21058628422,85.8272988312,0.00045685509,2.29216605538,138.5174968707,0.00051382144,2.18938250169,224.3447957019,0.00038842663,0.30724636172,70.8494453042,0.00036156923,1.23634800002,78.7137518304,0.00032331648,5.06666434496,74.7815985673,0.00021684713,4.93711029212,151.0476698429,0.00019441253,1.30617221059,77.7505439839,0.0001737553,0.24607209329,71.8126531507,0.00015211071,5.5314163314,3.9321532631],[0.00016015031,3.83700030134,74.7815985673,0.00010915299,3.0298777627,149.5631971346]],
	y: [[19.16434475791,3.91045677275,74.7815985673,0.44388525091,0.08884126943,149.5631971346,0.16222255941,3.14159265359,0,0.14755311401,1.85423292905,73.297125859,0.14122904825,2.82489928705,76.2660712756,0.06249939655,3.56960238469,1.4844727083,0.01542607086,2.5504154317,224.3447957019,0.01442293466,1.08004535633,148.0787244263,0.00938950136,0.09277492739,11.0457002639,0.0065030702,2.76144565363,63.7358983034,0.00657314387,5.28830720039,151.0476698429,0.00621305207,1.48795124826,77.7505439839,0.00541938502,3.24476518729,71.8126531507,0.00547449443,2.06038015757,85.8272988312,0.00459611215,2.33745675699,2.9689454166,0.00387905368,4.62027047251,138.5174968707,0.00144026146,0.75015758735,70.8494453042,0.00135284941,3.93970261854,78.7137518304,0.00120431731,2.53138588744,39.6175083461,0.00124862444,0.94315799565,111.4301614968,0.00111199717,3.55163790142,222.8603229936,0.00104503352,2.33345670641,146.594251718,0.00108550063,6.02230047678,35.1640902212,0.00063570927,5.01204999475,299.1263942692,0.00053287586,2.38436439892,3.9321532631,0.00063771339,2.15607569061,109.9456887885,0.0006079757,3.7307078734,38.1330356378,0.00039220442,1.11841144768,4.4534181249,0.00034204008,0.92405447828,65.2203710117,0.00034332981,1.466969538,225.8292684102,0.00034536961,0.27613229331,79.2350166922,0.00039259031,5.75909949077,202.2533951741,0.00026157159,3.74095916304,9.5612275556,0.00023426309,2.52740094518,145.6310438715,0.00022932162,3.94455708202,84.3428261229,0.00031814882,3.9686011734,152.5321425512,0.00025235989,4.45141520694,70.3281804424,0.0002590259,1.06899231907,213.299095438,0.00028371248,4.44714636367,184.7272873558,0.00026651934,4.53944389687,160.6088973985,0.00019665349,3.96350065335,74.6697239827,0.00019642987,0.71577796385,74.8934731519,0.00019838446,5.29115100742,12.5301729722,0.00015537967,1.8786327546,52.6901980395,0.00020715948,4.93996485297,36.6485629295,0.000201151,3.45473780762,127.4717966068,0.00020050993,2.90386377392,22.0914005278,0.00019900975,6.11072709584,112.9146342051,0.0001812497,0.98477642246,33.6796175129,0.00015203524,1.31307053626,41.1019810544,0.0001123853,4.54508332436,71.6002048296,0.00013948178,4.70475195371,221.3758502853,0.00010819255,0.12807059988,77.962992305,0.00013589092,0.98313830596,87.3117715395,0.00012407787,4.6494578334,72.3339180125,0.0001153114,0.20190074645,77.2292791221],[0.02157902502,0,0,0.00739195286,4.43963987365,149.5631971346,0.00238535521,3.76882481679,73.297125859,0.00229380743,0.91089104293,76.2660712756,0.00110133819,4.00844673444,11.0457002639,0.00094974903,5.07141531968,63.7358983034,0.00081470719,5.92275377361,85.8272988312,0.0004545513,0.73292269945,138.5174968707,0.00051366624,0.61847245463,224.3447957019,0.00038294306,5.01873585224,70.8494453042,0.00036144546,5.94859451726,78.7137518304,0.00032419094,4.32617246805,74.7815985673,0.00021672326,3.3660732442,151.0476698429,0.0001942437,6.0184191837,77.7505439839,0.00017392494,4.96098883366,71.8126531507,0.00014991169,3.97176856758,3.9321532631],[0.00034868461,3.14159265359,0,0.00016588468,2.29556740317,74.7815985673,0.00010905147,1.45737963668,149.5631971346]],
	z: [[0.25876996652,2.61861278845,74.7815985673,0.01775471434,3.14159265359,0,0.00599290075,5.08119534568,149.5631971346,0.00190282274,1.61654207891,76.2660712756,0.00190873655,0.57869366179,73.297125859,0.00084625392,2.26025774942,1.4844727083,0.00030733539,0.23570745974,63.7358983034,0.00020842052,1.26054208091,224.3447957019,0.0001973341,6.04314596336,148.0787244263,0.0001253753,5.17169051466,11.0457002639,0.00014582183,6.14852624696,71.8126531507],[0.00655887992,0.01271946942,74.7815985673,0.00049782349,0,0,0.00023873149,2.73870549601,149.5631971346],[0.00014697217,1.75149164608,74.7815985673]]
}; // assign to function
vsop87e.ura = vsop87e_ura; // export function
;

function vsop87e_nep(jy) { return vsop87(vsop87e_nep.coeffs, jy); }
vsop87e_nep.coeffs = {
	x: [[30.05734568801,5.3121134003,38.1330356378,0.27050789973,3.14159265359,0,0.1350457827,3.50075407055,76.2660712756,0.15725280871,0.11319072402,36.6485629295,0.14934353052,1.08499398649,39.6175083461,0.02597449604,1.99590330725,1.4844727083,0.00990668211,5.37690139386,74.7815985673,0.00823755467,1.43221512492,35.1640902212,0.00817566529,0.78180136001,2.9689454166,0.00565506338,5.98964911841,41.1019810544,0.00308146172,0.39998862713,73.297125859,0.00135901755,5.54688721933,77.7505439839,0.00090960996,1.68910476933,114.3991069134,0.0006903868,5.83469111908,4.4534181249,0.00060811221,2.62589871314,33.6796175129,0.00054713428,1.55804647862,71.8126531507,0.00028887848,4.78966833702,42.5864537627,0.00012614574,3.57008196751,112.9146342051,0.00012743164,2.73728741519,111.4301614968],[0.00255827017,2.01935687782,36.6485629295,0.00243112812,5.46214905602,39.6175083461,0.00118382753,2.88255085978,76.2660712756,0.00039261522,3.14159265359,0,0.00021923572,3.20156162709,35.1640902212,0.00017458926,4.26349403115,41.1019810544,0.00013130617,5.36424961848,2.9689454166]],
	y: [[30.05900907352,3.74086294715,38.1330356378,0.30171988148,3.14159265359,0,0.13505308635,1.92949466968,76.2660712756,0.15705776296,4.82539969469,36.6485629295,0.14935398681,5.79694896309,39.6175083461,0.02584389323,0.42549727257,1.4844727083,0.00990408083,3.80555424385,74.7815985673,0.00815165481,5.49429738442,2.9689454166,0.0058216452,6.1963385998,35.1640902212,0.0056554783,4.41843013268,41.1019810544,0.00305149662,5.11023952334,73.297125859,0.00135911904,3.97565894083,77.7505439839,0.00090966163,0.11783850542,114.3991069134,0.00068788416,4.26391987401,4.4534181249,0.00028891942,3.21848982783,42.5864537627,0.00020079747,1.19788749777,33.6796175129,0.00012613423,1.99783010734,112.9146342051,0.00012822727,1.16749515319,111.4301614968],[0.00352941377,3.14159265359,0,0.00256112241,0.44757496381,36.6485629295,0.00243135236,3.8909980142,39.6175083461,0.001184118,1.31131262408,76.2660712756,0.00021935569,1.63124087146,35.1640902212,0.0001746145,2.69229907252,41.1019810544,0.0001299238,3.79578633002,2.9689454166]],
	z: [[0.92861252357,1.44103930199,38.1330356378,0.01244825806,0,0,0.00474309033,2.52218768352,36.6485629295,0.00451964646,3.50949727943,39.6175083461,0.00417539868,5.9130887139,76.2660712756,0.00084101913,4.38932612685,1.4844727083,0.00032204313,1.48923465055,74.7815985673,0.00030871862,3.29017492215,35.1640902212,0.00025811465,3.1930392971,2.9689454166,0.00016864457,2.13251137546,41.1019810544],[0.00154877961,2.14239038882,38.1330356378]]
}; // assign to function
vsop87e.nep = vsop87e_nep; // export function
;
})(vsop87e)
/* crc: B9305DC659918C3DDB5A285E038164EB */
