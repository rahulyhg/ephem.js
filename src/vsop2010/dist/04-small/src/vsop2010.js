/* autogenerated by webmerge (join context) */
;
(function(window) {;
window.vsop2010 = {};;
//***********************************************************
// (c) 2016 by Marcel Greter
// AstroJS VSOP2010/13 utility lib
// https://github.com/mgreter/ephem.js
//***********************************************************
(function(self) {

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
	if (typeof self.vsop2k !== "function") {
		// only define once in global scope
		// otherwise we overwrite loaded data
		self.vsop2k = function vsop2k(coeffs, j2ky)
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
	if (typeof self.vsop2k.xyz !== "function") {
		// only define once in global scope
		// otherwise we overwrite loaded data
		self.vsop2k.xyz = function vsop2k_xyz(coeffs, j2ky)
		{
			// call main theory
			var orb = vsop2k(coeffs, j2ky);
			// create orbit object
			var orbit = new Orbit(orb);
			// query state vector
			var state = orbit.state();
			// return object
			return {
				x: state.r.x, y: state.r.y, z: state.r.z,
				vx: state.v.x, vy: state.v.y, vz: state.v.z,
			};
		}
	}
	// EO fn vsop2k.xyz

})(self);;
// generated by vsop2010.pl
function vsop2010_mer(tj) { return vsop2k(vsop2010_mer.coeffs, tj); }
function vsop2010_mer_xyz(tj) { return vsop2k.xyz(vsop2010_mer.coeffs, tj); }
vsop2010_mer.xyz = vsop2010_mer_xyz; // assign
vsop2010.mer = vsop2010_mer; // export
vsop2010_mer.coeffs = {
	L: [[0,4.402608634958,[],-2.64201522670335e-005,-2.38270719313597e-005,[1,2,2,-5],3.94031252193582e-006,1.68698851462506e-005,[1,1,2,-2]],[0,26087.9031407479,[]]],
	a: [[0,0.387098309825,[],7.13402028809345e-007,-1.65207289029428e-007,[1,1,2,-2],-2.43928311061146e-007,2.70920239163361e-007,[1,2,2,-5]]],
	h: [[0,0.200723306513,[],1.46247510056051e-006,-7.0767016750366e-006,[10,2],3.00433378875618e-006,-1.85000588197322e-006,[1,2,2,-5]],[0,0.00143753958488537,[]]],
	k: [[0,0.044660632145,[],7.05228219125317e-006,1.49541249989743e-006,[10,2],-1.71581152612749e-006,-2.9047458604038e-006,[1,2,2,-5]],[0,-0.00552140397691316,[]]],
	p: [[0,0.045635506259,[],3.72456622815479e-007,-2.87633259774439e-007,[10,2],-1.67949929062814e-008,-1.99423734197158e-007,[1,2,2,-5]],[0,-0.00127635838451718,[]]],
	q: [[0,0.040615647442,[],2.66403900926623e-007,2.94193158444715e-007,[10,2],-1.11822412449545e-007,-2.39875924795339e-008,[1,2,2,-5]],[0,0.000654318676326981,[]]]
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
	h: [[0,0.005066851819,[],-2.23065999914255e-005,-3.67117397037589e-008,[2,2,3,-3],1.69019491669063e-005,3.97002361563882e-008,[2,1,3,-2]],[0,-0.000361218278485594,[]]],
	k: [[0,-0.004492821064,[],2.55941759138896e-008,2.24748622741178e-005,[2,2,3,-3],-3.29894947520449e-008,-1.70585582369065e-005,[2,1,3,-2]],[0,0.000312600191113958,[]]],
	p: [[0,0.028822821668,[],-1.69237210562926e-007,-6.92583271309403e-007,[2,3,3,-5],1.67848386075785e-007,-3.36675068778861e-007,[10,2]],[0,-0.000403906307526052,[]]],
	q: [[0,0.006824114874,[],-6.68927910297951e-007,1.54240025226593e-007,[2,3,3,-5],3.41174753652136e-007,1.68082529845489e-007,[10,2]],[0,0.00138133922403831,[]]]
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
	h: [[0,0.016284489307,[],1.9870137410749e-005,7.5268469554213e-009,[2,2,3,-3],-1.86405779411837e-005,-2.45293721197461e-008,[3,1,10,-2]],[0,-0.000620299218058223,[]]],
	k: [[0,-0.003740817992,[],5.3911755771211e-009,-1.98894818704333e-005,[2,2,3,-3],-4.57790598040938e-009,1.85926031955318e-005,[3,1,10,-2]],[0,-0.000822686205587232,[]]],
	p: [[1.14305139203922e-007,4.70213713427448e-007,[2,3,3,-5],6.68446056160719e-008,3.60318770595279e-007,[10,2],2.38375802814195e-008,9.8617504571055e-008,[2,2,3,-4]],[0,0.000101791970452953,[]]],
	q: [[4.57512766619672e-007,-1.06488916145471e-007,[2,3,3,-5],-3.63903832086008e-007,6.80744701688986e-008,[10,2],-2.37906978475016e-007,1.28823793717714e-008,[2,1,3,-1]],[0,-0.00113473085802957,[]]]
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
	h: [[0,-0.03789970896,[],-8.15830129274742e-005,-1.63133363985508e-007,[4,1,10,-2],-4.51462191517654e-005,-1.33856036872035e-006,[10,1]],[0,0.0062467364851688,[]],[0,0.000155169265071868,[]]],
	k: [[0,0.08536559315,[],7.59234168329626e-007,8.22828214610147e-005,[4,1,10,-2],1.32864651746027e-006,-4.62999686534388e-005,[10,1]],[0,0.00376335833414142,[]],[0,-0.000246461790908795,[]]],
	p: [[0,0.012284486291,[],8.45182541308784e-007,-7.45399190771075e-008,[10,2],-1.46410947408683e-007,2.82737269050899e-007,[10,1]],[0,-0.00108023417362532,[]]],
	q: [[0,0.010470428292,[],5.24660980941539e-008,8.59427446062127e-007,[10,2],-2.44990389459863e-007,1.14143047541592e-007,[3,1,4,-2]],[0,0.000171319503399542,[]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_jup(tj) { return vsop2k(vsop2010_jup.coeffs, tj); }
function vsop2010_jup_xyz(tj) { return vsop2k.xyz(vsop2010_jup.coeffs, tj); }
vsop2010_jup.xyz = vsop2010_jup_xyz; // assign
vsop2010.jup = vsop2010_jup; // export
vsop2010_jup.coeffs = {
	L: [[0,0.59954609792,[],-0.00566623987134923,-0.000892559187360027,[10,2,11,-5],0.000616623674445687,-9.02518292284778e-005,[10,1,11,-2],-0.000322556042272632,2.66804562859763e-006,[10,2,11,-2],-0.000237904988747168,4.78341143546486e-006,[10,1,11,-1],7.63493412327927e-005,-0.000110045210775268,[10,2,11,-3],-0.000117326011608425,1.14314145250472e-007,[10,3,11,-3]],[-1.74952165271472e-013,529.690968176081,[],0.000646335109166544,-0.00219609840024278,[10,2,11,-5]],[0.00043122970069072,0.000192882418154045,[10,2,11,-5],0,-0.000148337796737898,[]]],
	a: [[0,5.202603156914,[],5.10071945012176e-006,0.000690804372208541,[10,2,11,-2],-2.87825241796765e-005,-0.000321490648279802,[10,1,11,-2],-1.58344854921369e-006,0.000311439572659188,[10,3,11,-3],-0.000185727376610733,-0.000114488510074942,[10,2,11,-3],3.89508281129003e-005,-0.0002526488026591,[10,2,11,-5],5.64025642751157e-006,0.000205811611742943,[10,1,11,-1],-0.000101445441197607,-6.10303249121409e-005,[10,3,11,-4],-2.50354661891788e-006,0.00014633559215322,[10,4,11,-4]],[9.77980630915254e-005,2.82482001953147e-005,[10,2,11,-5]]],
	h: [[0,0.012003719463,[],-0.000642719933597925,1.47984982727316e-005,[10,1,11,-2],-0.000160441762075901,-0.000341117970303028,[10,2,11,-5],-6.09183188730162e-005,0.000111306911691272,[10,1,11,-3],-0.000104697896045019,3.86905880740142e-007,[10,2,11,-3]],[0,0.00217184397772384,[],9.68356470253132e-005,-3.09727433147784e-005,[10,2,11,-5]]],
	k: [[0,0.04698585415,[],-4.34755266569202e-006,0.000652966326253384,[10,1,11,-2],-0.000344420830476197,0.000160870225873298,[10,2,11,-5],0.000108040564203256,8.12993730058837e-005,[10,1,11,-3],9.83721871599316e-007,0.000107422141115551,[10,2,11,-3]],[0,0.00113030730950847,[],-3.07639443818671e-005,-9.83762030117689e-005,[10,2,11,-5]],[0,-0.000109362291912069,[]]],
	p: [[0,0.011183894414,[],-3.33987813982107e-006,-7.83497649059113e-006,[10,2,11,-5],-1.37863413142908e-006,1.69799936366335e-006,[10,1,11,-3]],[0,-0.000234315246600836,[]]],
	q: [[0,-0.002065622793,[],-7.5099818730761e-006,4.12745072196874e-006,[10,2,11,-5],1.89549042319157e-006,1.12969139607457e-006,[10,1,11,-3]],[0,-0.000313502149123199,[]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_sat(tj) { return vsop2k(vsop2010_sat.coeffs, tj); }
function vsop2010_sat_xyz(tj) { return vsop2k.xyz(vsop2010_sat.coeffs, tj); }
vsop2010_sat.xyz = vsop2010_sat_xyz; // assign
vsop2010.sat = vsop2010_sat; // export
vsop2010_sat.coeffs = {
	L: [[0,0.87401834497,[],0.0139448111557635,0.00219693250253942,[10,2,11,-5],0.0025978352864037,-1.16600080492372e-005,[10,1,11,-1],-0.00148094067614138,0.0002295810484231,[10,1,11,-2],0.000711785621043644,-5.00639686550964e-006,[10,2,11,-2],-0.000177749694281172,0.000259486246371618,[10,2,11,-3],0.000265482143369644,-3.73463276859557e-007,[10,3,11,-3],-6.17194271181804e-005,-0.000154945321760944,[10,2,11,-4],8.32016156726117e-005,-9.2996117324623e-005,[10,1,11,-3],-2.98687873927782e-005,0.000143402864503995,[10,1],-6.83897564729223e-005,0.000101627420430273,[10,3,11,-4],-0.000143755191057992,-2.35516128691084e-005,[10,2,11,-6,12,3],-0.00012391475693336,-4.15319682872696e-005,[10,4,11,-10],-0.00011158012330352,-4.86499117474452e-005,[11,1],2.1297807314543e-005,-0.000127976143263649,[11,1,12,-3],9.88792188666314e-005,-2.2644378966747e-005,[10,2,11,-1],0.000110537425511053,8.10621529674984e-007,[10,4,11,-4]],[0,213.299086091733,[],-0.00159077769994775,0.00540466318466227,[10,2,11,-5],-9.23689080442884e-005,-0.000107491773152652,[10,1,11,-2],4.56436997526834e-005,-9.38903095733978e-005,[10,4,11,-10]],[-0.00106126360482192,-0.000474716649057019,[10,2,11,-5],0,0.000366188303600023,[]],[8.70109040895388e-005,-0.000134591821422479,[10,2,11,-5]]],
	a: [[0,9.554910378112,[],-3.4372544443503e-005,0.0336346753264386,[10,1,11,-1],-0.0022293807231311,0.00275617044443976,[10,1,11,-2],-0.000440062257257995,0.002856955559357,[10,2,11,-5],-0.000116481129338049,-0.00308243694836192,[10,2,11,-2],0.00125946544645703,0.000813105855088483,[10,2,11,-3],0.00107277363656183,-0.000954695659008253,[11,1],0.000364219928581515,0.00142228505097215,[10,2,11,-1],6.46716614668682e-006,-0.00142074165633595,[10,3,11,-3],0.000628343168569049,0.000379643570998276,[10,3,11,-4],0.000809837483591591,0.00011680645988707,[10,1,11,-3],-0.000493005534808685,0.000227198982847727,[10,2,11,-4],1.19170059785401e-005,-0.000671503131652275,[10,4,11,-4],0.00032967552609575,0.000197889600426522,[10,4,11,-5],5.79627749498611e-005,-0.000399563563528338,[10,3,11,-6],-6.99424896373262e-005,0.000372120378914053,[10,1,11,-4],1.09309069583243e-005,-0.000321780929956714,[10,5,11,-5],-0.000218097945399057,0.000110991406056302,[10,3,11,-5],0.000178459210665156,0.000108012001106293,[10,5,11,-6],6.56782099745912e-010,0.000185489560177799,[3,1,11,-1],-0.000129765100792947,4.83973222669175e-005,[10,4,11,-6],-1.33712632977887e-007,0.000173420925258793,[2,1,11,-1],8.86079481209838e-006,-0.000155800014003291,[10,6,11,-6],9.8424588945867e-005,6.01638854264323e-005,[10,6,11,-7],8.76350818213219e-007,0.000132582291884132,[11,2,12,-2]],[-0.00110596425732147,-0.00031933542272846,[10,2,11,-5],-0.00013013859923189,0.000158111907989279,[10,2,11,-3],-0.000126556619237134,-0.000147012986115133,[11,1],-2.96809000623858e-005,0.000177172303242375,[10,1,11,-3],0.000155230783279883,4.40064307554635e-005,[10,3,11,-6],-0.000142402162139634,-4.53952373752149e-005,[10,1,11,-4],-4.38537499968374e-005,-0.000138648498576182,[10,2,11,-4]],[9.54338299195137e-005,-0.000217564370819337,[10,2,11,-5]]],
	h: [[0,0.055429461883,[],0.000635121088770331,0.00140902106294366,[10,2,11,-5],0.00196887708331382,6.60368517037526e-006,[10,1],0.00124522195997822,2.06100744245859e-005,[11,1],-0.000686577297304898,-3.13698544603551e-005,[10,1,11,-2],0.000446816069725311,-1.12641779001342e-005,[10,2,11,-3],0.000283221485890633,-0.000169007437821264,[10,1,11,-3],-0.000136025194955359,0.000227659864152991,[10,2,11,-4],0.000162561969169625,1.63760903466221e-006,[10,3,11,-4]],[0,-0.00375608517630783,[],-0.00039632450237089,0.000123192429316229,[10,2,11,-5]],[0,-0.000319880500944175,[]]],
	k: [[0,-0.002959983388,[],0.00141686759957569,-0.000636534426943265,[10,2,11,-5],6.66643500114881e-006,0.00197268850168487,[10,1],1.47942552991498e-005,0.00126315480892529,[11,1],-7.71668889007818e-006,0.000650459737006011,[10,1,11,-2],-8.76331901670237e-006,-0.000451728521043488,[10,2,11,-3],-0.000173779086745025,-0.000260243677871409,[10,1,11,-3],0.000226086302663464,0.000152526156646676,[10,2,11,-4],-2.62414054946329e-006,-0.000162234325364561,[10,3,11,-4],-0.000122174049330878,2.51824767270139e-005,[10,1,11,-1]],[0,-0.00529591392011589,[],0.000122763637384934,0.000399851921494039,[10,2,11,-5]],[0,0.000309329025367416,[]]],
	p: [[0,0.019891374992,[],8.69830946116295e-006,1.87071949357162e-005,[10,2,11,-5],-3.50554823795889e-006,-7.68114511152702e-006,[10,1,11,-1]],[0,0.000594380812027663,[]]],
	q: [[0,-0.008717361432,[],1.81469852271165e-005,-9.70875879012806e-006,[10,2,11,-5],-4.47748707747418e-006,5.74719690638081e-006,[10,1,11,-1]],[0,0.000801683262505316,[]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_ura(tj) { return vsop2k(vsop2010_ura.coeffs, tj); }
function vsop2010_ura_xyz(tj) { return vsop2k.xyz(vsop2010_ura.coeffs, tj); }
vsop2010_ura.xyz = vsop2010_ura_xyz; // assign
vsop2010.ura = vsop2010_ura; // export
vsop2010_ura.coeffs = {
	L: [[0,5.481224786038,[],-0.0149454709887597,0.000836462519121679,[12,1,13,-2],0.00341047641872115,-1.91054522639452e-007,[10,1,12,-1],0.000755843966797357,-1.93967505854954e-006,[11,1,12,-1],-0.000608481394924331,-9.86743238119189e-005,[12,2,13,-4],-9.43937973906438e-005,0.00058976497499601,[11,1,12,-3],0.000187203353872657,2.35916385918926e-005,[10,1],0.000166005351283816,-4.22353348923259e-005,[10,2,12,-1],-4.11061396616967e-005,-0.000159491488184761,[11,1,12,-2],0.000142805930139727,2.77818308929881e-005,[10,2,11,-6,12,3],-0.000143634240060262,-5.8496789556408e-007,[12,2,13,-2],-0.000129794454607956,-4.95910495702153e-007,[12,1,13,-1],0.000129325958988676,-5.54727664014063e-007,[11,2,12,-2]],[0,74.781653800278,[],6.73763367112123e-005,-0.00023365974013081,[12,1,13,-2]]],
	a: [[0,19.218439287036,[],2.27855795263522e-006,0.0803052643857234,[10,1,12,-1],-7.30496660393603e-006,0.0206873124885464,[11,1,12,-1],-0.000535345452231751,-0.00402902477270006,[10,1,12,-2],0.000904700222163112,0.00353809695978869,[10,2,12,-1],-0.000229025539832825,-0.00389227218264411,[12,1,13,-2],-0.000440958391224621,-0.00310655339247553,[12,1],-0.00103267425826838,-0.00106106425629406,[11,1,12,-2],-0.00123827080333905,-0.000113547405998955,[11,1,12,-3],-6.12952991697172e-005,-0.00120301086117993,[11,2,12,-2],0.00102404898127077,-8.68552260333462e-005,[11,2,12,-1],2.65982546769415e-006,0.000896137861177199,[12,2,13,-2],3.46426741334745e-005,-0.000615326834176546,[10,1,12,-2,13,2],-0.000215788536010899,0.00040556813241365,[11,2,12,-3],3.24749212265643e-005,0.000584755134068006,[10,1,13,-2],-9.17873246385559e-007,0.00053021142255856,[12,3,13,-3],8.97606883139792e-010,0.000518441841684215,[3,1,12,-1],4.06326104482382e-006,-0.000504775499791372,[11,3,12,-3],9.939486588496e-009,0.000488377323812524,[2,1,12,-1],-6.60353181727234e-005,-0.000342624753941071,[10,2,12,-2],5.05228640636947e-005,-0.000323655996237717,[12,2,13,-4],-1.96166772223515e-006,0.000367757637112425,[12,1,13,-1],-2.28441657929514e-005,0.000284656561463624,[12,2,13,-3],-4.11900470333574e-007,0.000295446132284589,[12,4,13,-4],-9.91415564391656e-005,0.000189585753282611,[11,3,12,-4],9.34033704546855e-005,0.000170929329058411,[10,3,12,-1],3.64193358039076e-005,-0.000227118204841127,[10,3,11,-5,12,-1],-3.50701718075794e-005,0.000227703011273182,[10,1,11,-5,12,1],6.50042263024125e-005,0.000190670379255936,[10,1,12,-3],4.56474672594141e-005,0.000182053773350251,[12,2],5.01691041207463e-006,-0.000215583286015043,[11,4,12,-4],0.000111886201120968,-6.6178251739929e-005,[11,2,12,-4],2.25261910029309e-005,-0.000145917352545143,[10,2,11,-6,12,1],-1.56911623185776e-007,0.000167930625735964,[12,5,13,-5],8.69692698204508e-006,-0.000158333527164271,[11,1,12,-2,13,2],-2.33200593846694e-005,0.000142921245889192,[10,2,11,-4,12,-1],8.22691732643347e-006,0.000150682653385898,[11,1,13,-2],-4.86084765544015e-005,9.3258897246184e-005,[11,4,12,-5],-1.35541632014894e-005,0.000125575001301603,[12,3,13,-4],4.22428357258245e-006,-0.000130041077723771,[10,1,12,-3,13,2],2.36510669192244e-005,-0.000107661446468044,[10,2,11,-6,12,3],6.81080583675712e-006,0.000109928339077446,[10,2,12,-3],3.29604805277115e-006,0.000113314941317834,[10,1,11,-1]],[0.000159317046115354,-0.000101537583980414,[11,1,12,-3],0.000163612776597477,8.48834457453044e-005,[10,2,12,-1],-7.06661287776981e-005,-9.89328128497754e-005,[11,2,12,-1],7.73480946710442e-005,-8.39031237378934e-005,[11,1,12,-2]]],
	h: [[0,0.005647966027,[],0.00274677779999139,-4.04116959299732e-007,[10,1],0.00209367354511594,5.55491315644574e-006,[12,1,13,-2],0.00136146016399312,1.18166719612374e-006,[12,1],-0.00116289116038091,-2.52265247430691e-007,[10,1,12,-2],0.000613194000639231,-6.8617237682113e-008,[11,1],8.8631168342123e-005,0.000244099129281566,[11,1,12,-3],-0.000282179343956087,-2.61364251090028e-006,[11,1,12,-2],0.000148544963278472,1.39978934994733e-005,[12,2,13,-4],0.000129026347919467,-3.29141072751672e-005,[10,2]],[0,-0.000748761729092336,[]]],
	k: [[0,-0.045953250797,[],-1.72795604072523e-007,0.00274534376318399,[10,1],3.65789913745649e-006,-0.00208573717620544,[12,1,13,-2],-8.20499746462529e-007,0.00136026888458009,[12,1],1.29254429197446e-007,0.00116380736373379,[10,1,12,-2],1.4860971085847e-007,0.000613782233785796,[11,1],0.000244510938609263,-8.71412407896279e-005,[11,1,12,-3],-1.91478562439266e-006,0.000283879468016748,[11,1,12,-2],1.40268997240808e-005,-0.000148851215423543,[12,2,13,-4],3.28885043660265e-005,0.000128988005803688,[10,2]],[0,0.000183327390851673,[]]],
	p: [[0,0.006486072973,[],-3.8184133137512e-006,5.32911454619932e-006,[11,1,12,-3],4.06479566312906e-006,4.90357922293699e-006,[10,1,12,-1]],[0,-0.000117369164951757,[]]],
	q: [[0,0.001859210711,[],5.18108664311659e-006,4.15480638342931e-006,[11,1,12,-3],4.86981667572992e-006,-4.09472896777568e-006,[10,1,12,-1]],[0,-0.000124477392800416,[]]]
}; // assign
;
// generated by vsop2010.pl
function vsop2010_nep(tj) { return vsop2k(vsop2010_nep.coeffs, tj); }
function vsop2010_nep_xyz(tj) { return vsop2k.xyz(vsop2010_nep.coeffs, tj); }
vsop2010_nep.xyz = vsop2010_nep_xyz; // assign
vsop2010.nep = vsop2010_nep; // export
vsop2010_nep.coeffs = {
	L: [[0,5.311894573453,[],0.0101487036981737,-0.000568627881804584,[12,1,13,-2],0.00441713419495917,7.04524571624978e-007,[10,1,13,-1],0.000929357047332446,1.72726846863792e-007,[11,1,13,-1],0.000411207052681474,6.68237293940319e-005,[12,2,13,-4],0.000211291533719579,-5.39225371564666e-005,[10,2,13,-1],0.000162715957140141,4.23929700592872e-007,[12,1,13,-1]],[0,38.132927373227,[],-4.56825102515427e-005,0.000158726917840506,[12,1,13,-2]]],
	a: [[0,30.110439638406,[],-3.1669018477414e-005,0.148183001944669,[10,1,13,-1],-7.59631077478751e-006,0.0359790148985674,[11,1,13,-1],0.000440411294642654,0.00830088104836253,[12,1,13,-2],0.00171618041176458,0.00672767242240324,[10,2,13,-1],8.78528402624868e-007,0.00461644622309656,[12,1,13,-1],-0.00106516297247728,0.000978987819242103,[10,1,13,-2],0.00185146004970604,-0.000143078285241001,[11,2,13,-1],4.29281212515828e-006,-0.00105522137724301,[12,2,13,-2],1.52349289973979e-010,0.00101173991172479,[3,1,13,-1],-7.17093593813792e-007,0.000955295626596488,[2,1,13,-1],-4.41004913012376e-005,0.00078177072629717,[10,1,12,-1,13,1],-0.000106480966788653,0.000686683833267086,[12,2,13,-4],-4.03164548527385e-005,-0.000723595574484773,[10,1,12,1,13,-3],-0.000402891012810847,0.000239623724813851,[11,1,13,-2],9.9954356473174e-007,-0.000568838756681226,[12,3,13,-3],3.18995108248221e-005,-0.000505805215208581,[12,2,13,-3],0.000179266172705871,0.000328438222052086,[10,3,13,-1],6.72685994887489e-005,-0.000418865366400521,[10,3,11,-5,13,-1],-6.46695560505377e-005,0.000420528863929698,[10,1,11,-5,13,1],-3.60340984272451e-005,0.000315865476351474,[10,2,13,-2],6.15378377704981e-007,-0.000313764838544366,[12,4,13,-4],3.89817068795239e-005,-0.000253788226286487,[10,2,11,-6,13,1],-3.99289543450917e-005,0.000248159354059654,[10,2,11,-4,13,-1],1.33085871380202e-005,-0.000260273985342045,[11,2,13,-2],-1.09481864579882e-008,0.000246539152964892,[10,1,11,-1],2.49282523768699e-005,-0.000216105397757049,[12,2,13,-1],1.99515032014125e-005,-0.00019763808749095,[12,3,13,-4],-1.06865144257649e-005,0.000189242052209919,[11,1,12,-1,13,1],-1.00199780814718e-005,-0.000176247744880655,[11,1,12,1,13,-3],2.39002406683233e-007,-0.000179097574917117,[12,5,13,-5],-1.13237901660503e-007,0.000175296998978196,[10,1,11,1,13,-2],-0.000139004485804761,2.87835553943338e-005,[13,1],-1.10632977209575e-005,0.000131766887086644,[10,1,12,-1],-1.40192641976173e-005,-0.000109482712380464,[11,3,13,-1],1.23345523936705e-005,-0.000110799239624211,[12,4,13,-5],4.73405701347231e-008,-0.000103796071595696,[12,6,13,-6]],[0.00031092310171756,0.000161213047031631,[10,2,13,-1],-0.000127628973029665,-0.000179019915943966,[11,2,13,-1],-0.000163089152121393,-4.753340588085e-005,[10,1,11,-5,13,1],0.000162298019685592,4.81856536443922e-005,[10,3,11,-5,13,-1],-0.00013173758762499,-3.4083889587438e-005,[12,1,13,-2],9.83809462018362e-005,2.86000956799399e-005,[10,2,11,-6,13,1],-9.61729699984889e-005,-2.85163462062134e-005,[10,2,11,-4,13,-1]]],
	h: [[0,0.006691013143,[],0.00344037271210066,2.60047251176929e-007,[10,1],0.00136274554541729,-7.31600288268588e-008,[13,1],-0.00131044034510216,-2.5535447011106e-007,[10,1,13,-2],0.000760816240976693,1.83219194240795e-007,[11,1],-0.000596437799722837,-4.11811509342812e-006,[12,1,13,-2],-0.00034076652825488,-2.7891986844262e-008,[11,1,13,-2],0.000161543569024316,-4.12011548871781e-005,[10,2],-0.000157632339280377,-1.26466319354768e-005,[12,2,13,-4]]],
	k: [[0,0.005998419642,[],-1.19590693976619e-006,0.00343812848498352,[10,1],-2.33799319374669e-008,0.00136228843996479,[13,1],-3.11806783517274e-007,0.00131043060510202,[10,1,13,-2],-1.52907605747648e-007,0.000761508289317606,[11,1],-3.00405372093026e-006,0.000598694440065631,[12,1,13,-2],-6.72970287473312e-008,0.000340808574501653,[11,1,13,-2],4.11525442658219e-005,0.00016147314762659,[10,2],-1.26572238127249e-005,0.000158222922090066,[12,2,13,-4]]],
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
	L: [[0,4.166144186927,[],-0.00456583327646248,0.00206416206323593,[14,1402],0.00219275180301368,0.00282526966742194,[14,4],0.00144376903823753,-0.000252839408842468,[14,1473],0.000554666704415524,0.00118531051012979,[14,8],-0.00106219578137336,0.000161803163857902,[14,522],-0.000342520245855966,0.00027695598460556,[14,1331],0.000322814832795695,3.30397237985998e-005,[14,593],-0.000243699422091511,1.75572385733819e-005,[14,2875],-0.000233285372963368,4.36390481758704e-005,[14,71],0.00016315996974072,-1.3723801535007e-005,[14,12],-0.000124286451518737,-7.62125824764854e-005,[14,35],2.96998980072768e-005,0.000108717851204396,[14,137]],[0,25.3363411174083,[],-0.000589327503678328,-0.00129943085501032,[14,1402],0.00130800388487499,-0.000175803254416455,[14,4],0.000636052314071785,-4.25691035984399e-005,[14,8],-4.69307782073366e-005,-0.000302620157459537,[14,522],-0.000132061939648695,-0.000161695180112775,[14,1331],5.14576351173052e-005,-0.000166137626572127,[14,35],2.76106141269978e-005,0.000137158237509585,[14,1473],1.9074817400223e-005,-0.000110091448012752,[14,12]],[0,-0.0182807024038974,[],6.00017517468573e-005,-0.000426180890235852,[14,4],0.000149098706486055,-0.000253687670745823,[14,8],0.000147752572486555,-0.000167032316153136,[14,1402]],[0,0.00192995948098383,[]]],
	a: [[0,39.54470599359,[],-0.0853871348201155,-0.188856887968998,[14,1402],-0.0334407179334043,-0.0414526604237341,[14,1331],-0.0073788773702726,-0.0484978885372198,[14,522],-0.00535961817372672,0.0280976664834542,[14,71],-0.0123263783658494,-0.00913663936136193,[14,1261],-0.00526781366320596,-0.0121954072119394,[14,452],-0.000736335408630435,-0.00978407785711894,[14,2875],-0.00687717686828837,0.00485922387875438,[14,35],-0.00320204278664071,0.00582092252865979,[14,141],-0.00602819714195824,0.00153626588679921,[14,137],-0.00430242559978908,-0.00174161620985291,[14,1190],0.00349652067836004,-0.00274760323695521,[14,4],-0.00247880034650859,-0.00310158197356087,[14,381],0.00297992709073659,-0.00170996694687807,[14,8],0.0026523040692785,-0.000772985793407078,[14,1543],-0.0020785904158786,-0.00154120073867977,[14,1115],-0.000422135285750416,-0.00200431587205099,[14,2804],-0.0015736693306847,0.000971796463767433,[14,67],-0.000970301882030664,0.00154413577218867,[14,212],-0.0014293925215871,-0.000184445144219111,[14,1119],0.000958885161145022,-0.00107474742499435,[14,17405],0.0011423034150733,0.000757186498710441,[14,28337],-0.0010042254447776,-0.000693986053481614,[14,310],-0.00064997983306342,-0.0003279523928011,[14,1044],0.000573428135026473,0.000401535049908814,[14,63],0.000679707901243786,-0.000131507817285324,[14,1614],-0.000101900251569515,-0.00064858385814077,[14,12],-0.000516501193609631,0.000338463548803449,[14,283],0.000452894281508996,0.000398223996930951,[14,133],0.000310450609502916,0.00050807437264645,[14,1421],-0.000172616148211282,-0.000568052110515667,[14,1383],0.000143819130995867,-0.000511045256993473,[14,4348],-0.00018722165916604,-0.00048157767793351,[14,2733],0.000504318678347092,6.40517179528464e-005,[14,664],0.000402745736379861,-0.000305633128684415,[14,177],0.000326135777229722,0.000345994965999135,[14,204],-0.000450988250431159,5.74731661645114e-005,[14,1048],0.000107273250380866,0.000382066258269046,[14,880],-0.000180118752813997,0.000341929433058839,[14,1406],-0.00036385667288589,-9.13509636444135e-005,[14,239],-7.29593535601381e-005,-0.000354976129131124,[14,541],0.000162283894606063,-0.000316359459778749,[14,17334],-0.000342107061223633,-8.75257288071748e-005,[14,1398],7.20134768085299e-006,0.00034204106590536,[14,503],0.000319474608584297,0.000109721287462744,[14,28266],-0.000269491672925659,-0.000153787736502212,[14,974],0.000155269011871222,-0.000217646225401051,[14,345],0.000140873309774575,0.000213793486009375,[14,1924],0.000175220448152977,0.000176426086459929,[14,275],-0.000128381820469747,0.000206595311376438,[14,106],-9.60983941255201e-005,0.000210805225239994,[14,271],-3.41398990049931e-005,0.000222618204336622,[14,59],-6.29920073781685e-005,0.000210502619784637,[14,200],-7.44810371274219e-005,0.000194712696447677,[14,1335],-3.94731838917379e-005,0.000199223656669554,[14,129],-0.000105239317381743,0.000163498024277117,[14,341],0.00018711934019426,3.81118029251913e-005,[14,75],0.00019043195837149,-1.90552495767383e-006,[14,1685],-0.00015512038888451,-9.81435151548211e-005,[14,903],-0.000178594213634751,8.90215770848169e-007,[14,1327],-0.000153854980109031,1.55862304309862e-005,[14,1708],0.000110172759711574,0.000106254137753432,[14,1351],-7.96692142575189e-005,-0.000130194913057698,[14,1312],-8.81682746861017e-005,-0.000123218979038197,[14,2663],-9.35988321165427e-005,0.000112813907993978,[14,1410],-0.000135324497275174,5.46544959619084e-005,[14,978],-0.000140616888595492,-1.94487824362181e-005,[14,16],4.62530674043832e-005,0.0001337635175216,[14,247],0.000134816817444722,1.11277165084866e-005,[14,3016],9.97659528219075e-005,9.02467504618751e-005,[14,1854],-0.000129899645863004,-2.98161455279255e-007,[14,1394],-0.0001105532828894,-5.62059292551284e-005,[14,9220],-3.09650655155739e-005,0.000120048289888827,[14,72489],9.82850334662259e-005,-7.29118088974946e-005,[14,79],-0.000112400856577891,3.65289958197038e-005,[14,169],-0.000102315404165453,-5.50941714753663e-005,[14,832],0.000110911645485248,2.07610635463927e-005,[14,734],-5.54902281343078e-005,9.80761034314526e-005,[14,1265],9.16199677738445e-005,6.53815262302222e-005,[14,809],-0.000109744867186338,-1.73091137897969e-005,[14,408],-0.000109738098846558,-2.91177572060891e-007,[14,337],-7.23911101218756e-005,-8.16858365966447e-005,[14,1473],9.81674537749015e-005,4.07542275720526e-005,[14,1096],-3.05313814318493e-005,-9.98617047037903e-005,[14,471],-9.38107374289236e-005,3.94976806326483e-005,[14,354],4.78503151811863e-005,8.94311055757123e-005,[14,27],-8.78627731545993e-005,4.81736298914167e-005,[14,31]],[0.053676522241001,-0.0245188221694707,[14,1402],0,0.0378904808510013,[],0.0195474173149917,-0.015961060108816,[14,1331],0.0138167288060952,-0.00217190934339332,[14,522],0.00470827054772543,0.000862463073597875,[14,71],0.00271489829859826,-0.00378567414345933,[14,1261],0.00331190843543243,-0.000591911541407306,[14,2875],-0.00261625269086808,-0.00205062949431203,[14,35],0.000827761679219568,-0.00213287331151569,[14,1190],0.00137846068874875,-0.000646593484543722,[14,452],-0.00047027106430545,-0.00141831971441693,[14,8],-0.00030997999134747,-0.00119917368865848,[14,4],0.000923148109437585,-0.000775504316085217,[14,381],-0.000294790168914744,-0.00114190274442775,[14,137],0.00102144580055177,-0.000293903315993114,[14,2804],0.000116935190574299,-0.00097903131484704,[14,1119],0.000223907158176499,0.000728663755902707,[14,1543],0.000542584156277244,-0.000489012988549499,[14,1115],0.000327404217497606,-0.000506550266979527,[14,310],-0.000424401449666504,1.18564665047075e-005,[14,12],-5.25406283216315e-005,-0.000395574400699171,[14,1048],0.000328772983381027,-0.000148871430252633,[14,2733],0.000208055350700335,0.000292577414117576,[14,212],0.000193395524891558,-0.00029208190818832,[14,1044],0.000174455361223714,-0.000260638085326392,[14,28337],5.16027180455847e-005,-0.000253753398778052,[14,239],0.000234701771822733,-4.00664596478376e-005,[14,1383],-0.000154525963117403,0.000168766163176826,[14,133],-1.35561832797649e-005,-0.000223681884815707,[14,1398],-0.000166181259501734,-0.000145820223127189,[14,106],0.000213012753737188,2.21646614951798e-005,[14,4348],0.000126322941136828,0.00014907901536632,[14,283],-9.70884355165164e-005,0.000119333371199725,[14,63],-3.90741375541915e-005,-0.000144983592458704,[14,1327],-0.000121803615825475,8.03313392031038e-005,[14,1924],-0.000137158111618275,-1.42005847841091e-005,[14,503],-2.13680688241607e-005,0.000123819909223558,[14,16],-0.00011947148712579,-2.50249126837087e-005,[14,129],0.000111312644317637,4.7484035893717e-005,[14,141],6.88661331474808e-005,-8.54656588276649e-005,[14,974],-0.00010267266273252,2.7541292532278e-005,[14,1421],6.25042744157841e-005,-8.46459018362294e-005,[14,903],-9.54927289363493e-005,4.1763538415e-005,[14,27],-3.84847543662821e-005,-9.6001554891807e-005,[14,978],2.9815289630396e-005,9.62025395548297e-005,[14,354]],[0.00696064138529831,0.00611410114338118,[14,1402],0.00533755641442327,0.00341319198297974,[14,1331],0,-0.00594850775625711,[],0.0012256098233601,0.00184014398601939,[14,522],0.00109181128655353,-0.000261806798840204,[14,1261],0.000661038867980548,-0.000113466371893489,[14,1190],0.000323457637690445,0.000559287820244867,[14,2875],0.000538533409706254,-0.000320180476690464,[14,71],-0.000564487693351099,-0.000264390803171581,[14,8],0.000493354723427242,-0.000109651292485985,[14,452],-0.000422179793273607,-0.000124818025334732,[14,4],8.72445466229639e-005,-0.00042370369353361,[14,35],0.000354003356007874,-9.39177284368176e-005,[14,1119],0.000166994824417495,0.00024848703719034,[14,2804],0.000295150821439731,3.83450225920201e-006,[14,381],0.00022822522647102,0.000114826143368738,[14,141],-0.000122011239025943,0.000164369363660756,[14,12],0.000166823110369183,-7.41544994048675e-005,[14,1048],0.000180073300862585,4.38411463454235e-006,[14,310],8.09886741001471e-005,-0.000138048905134915,[14,137],8.45966337738045e-005,0.000102978495897155,[14,2733],-0.000115227669452911,-1.62873698355027e-005,[14,1543],0.00010228523985841,3.64907162763932e-005,[14,212],8.66727210909898e-005,5.13013620278377e-005,[14,1115]],[-0.000653642258925321,0.0014734245640961,[14,1402],-0.000309503593825936,0.00144296908667654,[14,1331],-0.000242024955341855,0.000302198370999617,[14,522],0,-0.000371276076441705,[],0.000116629791759153,0.00027625418621676,[14,1261],0.000112387914059229,0.000184075656654213,[14,1190],-0.000112516179634622,0.000172971119811147,[14,8],0.000198559715086323,3.69182832417426e-005,[14,35],-1.81470755161938e-005,0.000154901945674346,[14,4],8.05080939979006e-005,0.000105349584204419,[14,1119],-7.48988115272609e-005,8.22515197439996e-005,[14,2875]],[-0.000288757833216046,1.0681639756402e-005,[14,1331],-0.0002137621770695,-5.33892567211844e-005,[14,1402],0,0.000159537909370064,[],2.7270112115589e-005,9.6781867444525e-005,[14,4]]],
	h: [[0,-0.1734154998938,[],0.0030130079923837,0.00212348584672692,[14,1473],-0.000707800891750754,-0.00105093327613335,[14,71],-0.00012306248660754,0.00119279004809451,[14,1331],0.000518385806031732,0.000633285903455305,[14,593],0.000348483523726165,-0.000402223518265083,[14,1402],6.67228909350934e-005,0.000467423966850449,[14,1261],-0.000110215093603715,-0.000315863077775279,[14,141],-0.000110387207542812,0.000278582180943063,[14,452],0.000103165933590768,0.000147276808458513,[14,2945],6.19315228004439e-005,0.000149589197798337,[14,1190],-9.80882254643302e-005,-0.000114238394935941,[14,1543],0.000104950236219703,-6.95059860969083e-005,[14,522],-1.54848275914888e-005,0.000121716583956271,[14,381],-0.000109096398693521,5.31997031208139e-005,[14,4],-5.42126317956892e-005,0.000105539558314449,[14,8]],[-0.000567012472911159,-5.90192743832044e-005,[14,1331],-0.000198975919515629,0.000282978683891887,[14,1473],-0.000195801870450703,0.000130529879140579,[14,71],0.000116040252170372,9.84251231187238e-005,[14,1402],-0.000142540916353924,2.11616750302518e-005,[14,1261]],[-2.93015556334945e-005,-0.000139138279115831,[14,1331]]],
	k: [[0,-0.1787246950685,[],-0.00209858994701332,0.00316298912578306,[14,1473],0.00111179681573192,-0.000681136951235402,[14,71],0.00118874338308362,0.000167508938255375,[14,1331],-0.000638439422182899,0.000547745828282607,[14,593],-0.000520304409298209,-2.10586512063345e-005,[14,1402],0.000468776648333622,-5.8294450355595e-005,[14,1261],0.000304262798606152,-9.56394814046137e-005,[14,141],0.000274872815826836,0.000120867683124308,[14,452],-0.000148675653060181,0.000110357142687519,[14,2945],0.000150370218887313,-6.01561472951493e-005,[14,1190],0.000118803191220939,-0.000100745069695131,[14,1543],-0.000117141871104505,-3.79136075168841e-005,[14,522],0.000121694846859635,1.76993658791856e-005,[14,381],-0.000103494129296676,-5.13934847986385e-005,[14,8],-2.38147149393105e-005,-9.84294593382487e-005,[14,4]],[0,-0.000613443169281826,[],-8.00602976660513e-005,0.000565261985748353,[14,1331],-0.000298397647902105,-0.000196324428458529,[14,1473],-0.00012920500938595,-0.000196508962835677,[14,71],5.42311886489391e-006,-0.000148756164966865,[14,1402],1.86048017807684e-005,0.000143000328218425,[14,1261]],[-0.000140380184045844,2.41446650191175e-005,[14,1331]]],
	p: [[0,0.139779560579086,[],0.00013480122930835,0.000128742494031123,[14,1402],0.00016184522556001,-4.98695225339238e-005,[14,1543]]],
	q: [[0,-0.0517028337448404,[],0.000135147039182862,-0.000133061378669859,[14,1402],5.58152705651425e-005,0.000163047844135352,[14,1543],-9.81763489853602e-005,-2.31781956513661e-005,[14,1473]],[0,0.000191690220116284,[]]]
}; // assign
;
})(window)
/* crc: 9F40AE8582F871FEC62DED6DF4D4E361 */
