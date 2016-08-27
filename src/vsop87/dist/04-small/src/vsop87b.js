/* autogenerated by webmerge (join context) */
;
var vsop87b = {};
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
(function(vsop87b) {;

function vsop87b_mer(jy) { return vsop87(vsop87b_mer.coeffs, jy); }
vsop87b_mer.coeffs = {
	l: [[4.40250710144,0,0,0.40989414977,1.48302034195,26087.9031415742,0.050462942,4.47785489551,52175.8062831484,0.00855346844,1.16520322459,78263.7094247226,0.00165590362,4.11969163423,104351.612566297,0.00034561897,0.77930768443,130439.515707871],[26087.9031368553,0,0,0.01131199811,6.21874197797,26087.9031415742,0.00292242298,3.04449355541,52175.8062831484,0.00075775081,6.08568821653,78263.7094247226,0.00019676525,2.80965111777,104351.612566297],[0.00016395129,4.67759555504,26087.9031415742]],
	b: [[0.11737528961,1.98357498767,26087.9031415742,0.02388076996,5.03738959686,52175.8062831484,0.01222839532,3.14159265359,0,0.0054325181,1.79644363964,78263.7094247226,0.0012977877,4.83232503958,104351.612566297,0.00031866927,1.58088495658,130439.515707871],[0.00274646065,3.95008450011,26087.9031415742,0.00099737713,3.14159265359,0,0.00018772047,0.05141288887,78263.7094247226,0.00023970726,2.53272082947,52175.8062831484]],
	r: [[0.39528271651,0,0,0.07834131818,6.19233722598,26087.9031415742,0.00795525558,2.95989690104,52175.8062831484,0.00121281764,6.01064153797,78263.7094247226,0.00021921969,2.77820093972,104351.612566297],[0.0021734774,4.65617158665,26087.9031415742,0.00044141826,1.42385544001,52175.8062831484,0.00010094479,4.47466326327,78263.7094247226]]
}; // assign to function
vsop87b.mer = vsop87b_mer; // export function
;

function vsop87b_ven(jy) { return vsop87(vsop87b_ven.coeffs, jy); }
vsop87b_ven.coeffs = {
	l: [[3.17614666774,0,0,0.01353968419,5.59313319619,10213.285546211,0.00089891645,5.30650047764,20426.571092422],[10213.2855462164,0,0,0.00095617813,2.4640651111,10213.285546211]],
	b: [[0.05923638472,0.26702775812,10213.285546211,0.00040107978,1.14737178112,20426.571092422,0.00032814918,3.14159265359,0],[0.00287821243,1.88964962838,10213.285546211],[0.00012657745,3.34796457029,10213.285546211]],
	r: [[0.72334820891,0,0,0.00489824182,4.02151831717,10213.285546211],[0.00034551041,0.89198706276,10213.285546211]]
}; // assign to function
vsop87b.ven = vsop87b_ven; // export function
;

function vsop87b_ear(jy) { return vsop87(vsop87b_ear.coeffs, jy); }
vsop87b_ear.coeffs = {
	l: [[1.75347045673,0,0,0.03341656453,4.66925680415,6283.0758499914,0.00034894275,4.62610242189,12566.1516999828],[6283.0758499914,0,0,0.00206058863,2.67823455808,6283.0758499914]],
	b: [[2.7962e-006,3.19870156017,84334.6615813083],[0.00227777722,3.4137662053,6283.0758499914]],
	r: [[1.00013988784,0,0,0.01670699632,3.09846350258,6283.0758499914,0.00013956024,3.05524609456,12566.1516999828],[0.00103018607,1.10748968172,6283.0758499914]]
}; // assign to function
vsop87b.ear = vsop87b_ear; // export function
;

function vsop87b_mar(jy) { return vsop87(vsop87b_mar.coeffs, jy); }
vsop87b_mar.coeffs = {
	l: [[6.20347711581,0,0,0.18656368093,5.0503710027,3340.6124266998,0.01108216816,5.40099836344,6681.2248533996,0.00091798406,5.75478744667,10021.8372800994,0.00027744987,5.97049513147,3.523118349,0.00010610235,2.93958560338,2281.2304965106,0.00012315897,0.84956094002,2810.9214616052],[3340.61242700512,0,0,0.01457554523,3.60433733236,3340.6124266998,0.00168414711,3.92318567804,6681.2248533996,0.00020622975,4.26108844583,10021.8372800994],[0.00058152577,2.04961712429,3340.6124266998,0.00013459579,2.45738706163,6681.2248533996]],
	b: [[0.03197134986,3.76832042431,3340.6124266998,0.00298033234,4.10616996305,6681.2248533996,0.00289104742,0,0,0.00031365539,4.4465105309,10021.8372800994],[0.00217310991,6.04472194776,3340.6124266998,0.00020976948,3.14159265359,0,0.00012834709,1.60810667915,6681.2248533996]],
	r: [[1.53033488271,0,0,0.1418495316,3.47971283528,3340.6124266998,0.00660776362,3.81783443019,6681.2248533996,0.00046179117,4.15595316782,10021.8372800994],[0.01107433345,2.03250524857,3340.6124266998,0.00103175887,2.37071847807,6681.2248533996,0.000128772,0,0,0.0001081588,2.70888095665,10021.8372800994],[0.00044242249,0.47930604954,3340.6124266998]]
}; // assign to function
vsop87b.mar = vsop87b_mar; // export function
;

function vsop87b_jup(jy) { return vsop87(vsop87b_jup.coeffs, jy); }
vsop87b_jup.coeffs = {
	l: [[0.59954691494,0,0,0.09695898719,5.06191793158,529.6909650946,0.00573610142,1.44406205629,7.1135470008,0.00306389205,5.41734730184,1059.3819301892,0.00097178296,4.14264726552,632.7837393132,0.00072903078,3.64042916389,522.5774180938,0.00064263975,3.41145165351,103.0927742186,0.00039806064,2.29376740788,419.4846438752,0.00038857767,1.27231755835,316.3918696566,0.00027964629,1.7845459182,536.8045120954,0.0001358973,5.7748104079,1589.0728952838],[529.69096508814,0,0,0.00489503243,4.2208293947,529.6909650946,0.00228917222,6.02646855621,7.1135470008,0.00030099479,4.54540782858,1059.3819301892,0.0002072092,5.45943156902,522.5774180938,0.00012103653,0.16994816098,536.8045120954],[0.00047233601,4.32148536482,7.1135470008,0.00030649436,2.929777887,529.6909650946,0.00014837605,3.14159265359,0]],
	b: [[0.02268615702,3.55852606721,529.6909650946,0.00109971634,3.90809347197,1059.3819301892,0.00110090358,0,0],[0.00078203446,1.52377859742,529.6909650946]],
	r: [[5.20887429326,0,0,0.25209327119,3.49108639871,529.6909650946,0.00610599976,3.84115365948,1059.3819301892,0.00282029458,2.57419881293,632.7837393132,0.00187647346,2.07590383214,522.5774180938,0.00086792905,0.71001145545,419.4846438752,0.00072062974,0.21465724607,536.8045120954,0.00065517248,5.9799588479,316.3918696566,0.00029134542,1.67759379655,103.0927742186,0.00030135335,2.16132003734,949.1756089698,0.00023453271,3.54023522184,735.8765135318,0.00022283743,4.19362594399,1589.0728952838,0.00023947298,0.2745803748,7.1135470008,0.00013032614,2.96042965363,1162.4747044078,0.00012749023,2.71550286592,1052.2683831884],[0.0127180152,2.64937512894,529.6909650946,0.00061661816,3.00076460387,1059.3819301892,0.00053443713,3.89717383175,522.5774180938,0.00031185171,4.88276958012,536.8045120954,0.00041390269,0,0,0.00011847263,2.41328764459,419.4846438752],[0.00079644957,1.35865949884,529.6909650946]]
}; // assign to function
vsop87b.jup = vsop87b_jup; // export function
;

function vsop87b_sat(jy) { return vsop87(vsop87b_sat.coeffs, jy); }
vsop87b_sat.coeffs = {
	l: [[0.87401354025,0,0,0.11107659762,3.96205090159,213.299095438,0.01414150957,4.58581516874,7.1135470008,0.00398379389,0.52112032699,206.1855484372,0.00350769243,3.30329907896,426.598190876,0.00206816305,0.24658372002,103.0927742186,0.000792713,3.84007056878,220.4126424388,0.00023990355,4.66976924553,110.2063212194,0.00016573588,0.43719228296,419.4846438752,0.00014906995,5.76903183869,316.3918696566,0.0001582029,0.93809155235,632.7837393132,0.00014609559,1.56518472,3.9321532631,0.00013160301,4.44891291899,14.2270940016,0.00015053543,2.71669915667,639.897286314,0.00013005299,5.98119023644,11.0457002639,0.00010725067,3.12939523827,202.2533951741],[213.2990952169,0,0,0.01297370862,1.82834923978,213.299095438,0.00564345393,2.88499717272,7.1135470008,0.00093734369,1.06311793502,426.598190876,0.00107674962,2.27769131009,206.1855484372,0.00040244455,2.04108104671,220.4126424388,0.00019941774,1.2795439047,103.0927742186,0.00010511678,2.7488034213,14.2270940016],[0.0011644133,1.17988132879,7.1135470008,0.00091841837,0.0732519584,213.299095438,0.00036661728,0,0,0.00015274496,4.06493179167,206.1855484372,0.00010987259,5.4447918831,426.598190876,0.0001062983,0.25764306189,220.4126424388],[0.00016038732,5.73945573267,7.1135470008]],
	b: [[0.04330678039,3.60284428399,213.299095438,0.00240348302,2.85238489373,426.598190876,0.00084745939,0,0,0.00030863357,3.48441504555,220.4126424388,0.00034116062,0.57297307557,206.1855484372,0.0001473407,2.11846596715,639.897286314],[0.00198927992,4.93901017903,213.299095438,0.00036947916,3.14159265359,0,0.00017966989,0.5197943111,426.598190876,0.00010919721,1.79463271368,220.4126424388,0.00013320265,2.26481519893,206.1855484372],[0.00013884264,0.08994998691,213.299095438]],
	r: [[9.55758135486,0,0,0.52921382865,2.39226219573,213.299095438,0.01873679867,5.2354960466,206.1855484372,0.01464663929,1.64763042902,426.598190876,0.00821891141,5.93520042303,316.3918696566,0.00547506923,5.0153261898,103.0927742186,0.0037168465,2.27114821115,220.4126424388,0.00361778765,3.13904301847,7.1135470008,0.00140617506,5.70406606781,632.7837393132,0.00108974848,3.29313390175,110.2063212194,0.00069006962,5.94099540992,419.4846438752,0.00061053367,0.94037691801,639.897286314,0.00048913294,1.55733638681,202.2533951741,0.00034143772,0.19519102597,277.0349937414,0.00032401773,5.47084567016,949.1756089698,0.00020936596,0.46349251129,735.8765135318,0.000208393,1.52102476129,433.7117378768,0.00020746751,5.33255457763,199.0720014364,0.00015298404,3.0594381494,529.6909650946,0.00014296484,2.60433479142,323.5054166574,0.00011993338,5.98050967385,846.0828347512,0.00011380257,1.7310542704,522.5774180938,0.00012884624,1.64890652873,138.5174968707],[0.0618298134,0.2584351148,213.299095438,0.00506577242,0.71114625261,206.1855484372,0.00341394029,5.79635741658,426.598190876,0.00188491195,0.47215589652,220.4126424388,0.00186261486,3.14159265359,0,0.00143891146,1.40744822888,7.1135470008,0.00049621208,6.0174427982,103.0927742186,0.00020928426,5.09244947411,639.897286314,0.00019952564,1.1756060613,419.4846438752,0.00018839544,1.60818334043,110.2063212194,0.00012892843,5.9432943302,433.7117378768,0.00013876849,0.75884928866,199.0720014364],[0.00436902572,4.78671677509,213.299095438,0.00071922498,2.5007006993,206.1855484372,0.00049766872,4.97167777235,220.4126424388,0.00043220783,3.86941044212,426.598190876,0.00029645766,5.96309886479,7.1135470008],[0.00020315239,3.02186068237,213.299095438]]
}; // assign to function
vsop87b.sat = vsop87b_sat; // export function
;

function vsop87b_ura(jy) { return vsop87(vsop87b_ura.coeffs, jy); }
vsop87b_ura.coeffs = {
	l: [[5.48129294297,0,0,0.09260408234,0.89106421507,74.7815985673,0.01504247898,3.6271926092,1.4844727083,0.00365981674,1.89962179044,73.297125859,0.00272328168,3.35823706307,149.5631971346,0.00070328461,5.39254450063,63.7358983034,0.00068892678,6.09292483287,76.2660712756,0.00061998615,2.26952066061,2.9689454166,0.00061950719,2.85098872691,11.0457002639,0.0002646877,3.14152083966,71.8126531507,0.00025710476,6.11379840493,454.9093665273,0.0002107885,4.36059339067,148.0787244263,0.00017818647,1.74436930289,36.6485629295,0.00014613507,4.73732166022,3.9321532631,0.00011162509,5.8268179635,224.3447957019,0.0001099791,0.48865004018,138.5174968707],[74.7815986091,0,0,0.00154332863,5.24158770553,74.7815985673,0.00024456474,1.71260334156,1.4844727083]],
	b: [[0.01346277648,2.61877810547,74.7815985673,0.000623414,5.08111189648,149.5631971346,0.00061601196,3.14159265359,0],[0.00034101978,0.01321929936,74.7815985673]],
	r: [[19.21264847206,0,0,0.88784984413,5.60377527014,74.7815985673,0.03440836062,0.32836099706,73.297125859,0.0205565386,1.7829515933,149.5631971346,0.0064932241,4.52247285911,76.2660712756,0.00602247865,3.86003823674,63.7358983034,0.00496404167,1.40139935333,454.9093665273,0.00338525369,1.58002770318,138.5174968707,0.00243509114,1.57086606044,71.8126531507,0.00190522303,1.99809394714,1.4844727083,0.00161858838,2.79137786799,148.0787244263,0.00143706183,1.38368544947,11.0457002639,0.00093192405,0.17437220467,36.6485629295,0.00071424548,4.24509236074,224.3447957019,0.00089806014,3.66105364565,109.9456887885,0.00039009723,1.66971401684,70.8494453042,0.00046677296,1.39976401694,35.1640902212,0.00039025624,3.36234773834,277.0349937414,0.00036755274,3.88649278513,146.594251718,0.00030348723,0.70100838798,151.0476698429,0.00029156413,3.180563367,77.7505439839,0.00020471591,1.55587964879,202.2533951741,0.00025620756,5.25656086672,380.12776796,0.0002578588,3.7853770987,85.8272988312,0.00022637073,0.72518687029,529.6909650946,0.00020473534,2.79640244248,70.3281804424,0.000179013,0.55455066863,2.9689454166,0.00012328114,5.96037276805,127.4717966068,0.00014701666,4.90434516516,108.4612160802,0.0001149468,0.43772043395,65.2203710117,0.00015502375,5.35405396163,38.1330356378,0.00010792498,1.42106296264,213.299095438,0.00011695693,3.29824190199,3.9321532631,0.00011959076,1.7504339214,984.6003316219,0.00012896452,2.62154084288,111.4301614968,0.00011852959,0.99344161196,52.6901980395],[0.01479896629,3.67205697578,74.7815985673,0.00071212143,6.22600975161,63.7358983034,0.0006862716,6.13411179902,149.5631971346,0.00020857554,5.2462584896,11.0457002639,0.00021468362,2.60175716374,76.2660712756,0.00024059369,3.14159265359,0,0.00011405056,0.01849738017,70.8494453042],[0.00022439899,0.69953310903,74.7815985673]]
}; // assign to function
vsop87b.ura = vsop87b_ura; // export function
;

function vsop87b_nep(jy) { return vsop87(vsop87b_nep.coeffs, jy); }
vsop87b_nep.coeffs = {
	l: [[5.31188633046,0,0,0.0179847553,2.9010127389,38.1330356378,0.01019727652,0.48580922867,1.4844727083,0.00124531845,4.83008090676,36.6485629295,0.00042064466,5.41054993053,2.9689454166,0.00037714584,6.09221808686,35.1640902212,0.00033784738,1.24488874087,76.2660712756,0.00016482741,7.727998e-005,491.5579294568],[38.13303563957,0,0,0.00016604172,4.86323329249,1.4844727083,0.00015744045,2.27887427527,38.1330356378]],
	b: [[0.03088622933,1.44104372644,38.1330356378,0.00027780087,5.91271884599,76.2660712756,0.00027623609,0,0,0.00015355489,2.52123799551,36.6485629295,0.00015448133,3.50877079215,39.6175083461]],
	r: [[30.07013205828,0,0,0.27062259632,1.32999459377,38.1330356378,0.01691764014,3.25186135653,36.6485629295,0.00807830553,5.18592878704,1.4844727083,0.0053776051,4.52113935896,35.1640902212,0.00495725141,1.5710564165,491.5579294568,0.00274571975,1.84552258866,175.1660598002,0.00135134092,3.37220609835,39.6175083461,0.00121801746,5.79754470298,76.2660712756,0.00100896068,0.3770272493,73.297125859,0.00069791331,3.79616637768,2.9689454166,0.00046687836,5.74938034313,33.6796175129,0.00024594531,0.50801745878,109.9456887885,0.00016939478,1.59422512526,71.8126531507,0.00014229808,1.07785898723,74.7815985673,0.0001201232,1.92059384991,1021.2488945514],[0.00236338618,0.70497954792,38.1330356378,0.00013220034,3.3201438793,1.4844727083]]
}; // assign to function
vsop87b.nep = vsop87b_nep; // export function
;
})(vsop87b)
/* crc: 5A0442CCCBB6564B82BA9E320E26AF01 */
