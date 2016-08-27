/* autogenerated by webmerge (compile context) */
;
(function(window){window.vsop2013={};(function(){function vsop2k_time_factors(kj2ky){return[4.402608631669+26087.9031406856*kj2ky,3.176134461576+10213.2855474345*kj2ky,1.753470369433+6283.07585035322*kj2ky,6.203500014141+3340.61243414546*kj2ky,4.09136000305+1731.17045272186*kj2ky,1.713740719173+1704.4508550272*kj2ky,5.598641292287+1428.94891784427*kj2ky,2.805136360408+1364.75651362999*kj2ky,2.32698973462+1361.92320763284*kj2ky,.599546107035+529.690961562325*kj2ky,.874018510107+213.299086108488*kj2ky,
5.481225395663+74.781659030778*kj2ky,5.311897933164+38.132972226125*kj2ky,.359536228504931*kj2ky,5.19846640063+77713.7714481804*kj2ky,1.62790513602+84334.6615717837*kj2ky,2.35555563875+83286.9142477147*kj2ky]}function vsop2k_coeffs_eval(coeffs,kj2ky,F){var rv=0;for(var n=0;n<coeffs.length;n+=1){var sum=0,c=coeffs[n],iL=c.length;for(var i=0;i<iL;i+=3){var S=c[i+0],C=c[i+1],phis=c[i+2];for(var p=0,phi=0;p<phis.length;p+=2)phi+=F[phis[p+0]-1]*phis[p+1];sum+=S*Math.sin(phi)+C*Math.cos(phi)}rv+=sum*Math.pow(kj2ky,
n)}return rv}if(typeof window.vsop2k!=="function")window.vsop2k=function vsop2k(coeffs,j2ky){var kj2ky=j2ky/1E3;var F=vsop2k_time_factors(kj2ky),xa=vsop2k_coeffs_eval(coeffs.a,kj2ky,F),xl=vsop2k_coeffs_eval(coeffs.L,kj2ky,F),xk=vsop2k_coeffs_eval(coeffs.k,kj2ky,F),xh=vsop2k_coeffs_eval(coeffs.h,kj2ky,F),xq=vsop2k_coeffs_eval(coeffs.q,kj2ky,F),xp=vsop2k_coeffs_eval(coeffs.p,kj2ky,F);xl%=Math.PI*2;if(xl<0)xl+=Math.PI*2;return{a:xa,L:xl,k:xk,h:xh,q:xq,p:xp}};if(typeof window.vsop2k.xyz!=="function")window.vsop2k.xyz=
function vsop2k_xyz(coeffs,j2ky){var orb=vsop2k(coeffs,j2ky);var orbit=new Orbit(orb);var state=orbit.state();return{x:state.r.x,y:state.r.y,z:state.r.z,vx:state.v.x,vy:state.v.y,vz:state.v.z}}})();function vsop2013_mer(tj){return vsop2k(vsop2013_mer.coeffs,tj)}function vsop2013_mer_xyz(tj){return vsop2k.xyz(vsop2013_mer.coeffs,tj)}vsop2013_mer.xyz=vsop2013_mer_xyz;vsop2013.mer=vsop2013_mer;vsop2013_mer.coeffs={L:[[0,4.402608631669,[],-2.64201510547113E-5,-2.38270747280894E-5,[1,2,2,-5],3.94031227204977E-6,
1.68698854273669E-5,[1,1,2,-2]],[0,26087.9031406855,[]]],a:[[0,.387098309884,[],7.13402040140914E-7,-1.65207278540128E-7,[1,1,2,-2],-2.43928339505339E-7,2.70920226701764E-7,[1,2,2,-5]]],h:[[0,.200723308731,[],1.46247498744885E-6,-7.07670146252083E-6,[10,2],3.00433394958519E-6,-1.85000579683909E-6,[1,2,2,-5]],[0,.00143755075703721,[]]],k:[[0,.044660629417,[],7.05228200003398E-6,1.49541239574951E-6,[10,2],-1.71581143672001E-6,-2.90474601259122E-6,[1,2,2,-5]],[0,-.00552145512776339,[]]],p:[[0,.045635493308,
[],3.72456558359801E-7,-2.87633393077938E-7,[10,2],-1.67950164335416E-8,-1.99423696797858E-7,[1,2,2,-5]],[0,-.00127636555246526,[]]],q:[[0,.040615640596,[],2.66404005645022E-7,2.94193091838155E-7,[10,2],-1.11822395889423E-7,-2.39875696291645E-8,[1,2,2,-5]],[0,6.54315054446061E-4,[]]]};function vsop2013_ven(tj){return vsop2k(vsop2013_ven.coeffs,tj)}function vsop2013_ven_xyz(tj){return vsop2k.xyz(vsop2013_ven.coeffs,tj)}vsop2013_ven.xyz=vsop2013_ven_xyz;vsop2013.ven=vsop2013_ven;vsop2013_ven.coeffs=
{L:[[0,3.176134461576,[],-8.46240143006899E-6,1.38117115866901E-5,[2,2,4,-7,10,8,11,-6],-2.00389761567184E-5,-3.91666190285054E-9,[2,2,3,-2]],[0,10213.2855474345,[]]],a:[[0,.723329819945,[],-7.57621007994627E-10,4.32265701301435E-6,[2,2,3,-2],-2.07964337102651E-9,2.93979825880255E-6,[2,2,10,-2]]],h:[[0,.005066851475,[],-2.2306600601243E-5,-3.67117331614278E-8,[2,2,3,-3],1.69019496240294E-5,3.97002296377586E-8,[2,1,3,-2]],[0,-3.6121931392156E-4,[]]],k:[[0,-.004492821048,[],2.55941691370281E-8,2.2474862866452E-5,
[2,2,3,-3],-3.29894880831982E-8,-1.70585586765891E-5,[2,1,3,-2]],[0,3.12600230410845E-4,[]]],p:[[0,.02882281923,[],-1.69237193160802E-7,-6.92583235329188E-7,[2,3,3,-5],1.67848361967255E-7,-3.36675578181574E-7,[10,2]],[0,-4.03907883690782E-4,[]]],q:[[0,.006824113928,[],-6.68927877125373E-7,1.5424001125855E-7,[2,3,3,-5],3.41175266713452E-7,1.68082501916137E-7,[10,2]],[0,.0013813393132888,[]]]};function vsop2013_emb(tj){return vsop2k(vsop2013_emb.coeffs,tj)}function vsop2013_emb_xyz(tj){return vsop2k.xyz(vsop2013_emb.coeffs,
tj)}vsop2013_emb.xyz=vsop2013_emb_xyz;vsop2013.emb=vsop2013_emb;vsop2013_emb.coeffs={L:[[0,1.753470369433,[],-9.52880232652368E-6,3.22544756191703E-5,[3,4,4,-8,10,3],-2.05639600394634E-5,-1.71630674001416E-8,[3,2,10,-2]],[0,6283.07585035321,[]]],a:[[0,1.000001017641,[],-7.73623606396365E-9,1.12049565335755E-5,[3,2,10,-2],5.48709811880914E-10,7.60860006258569E-6,[2,1,3,-1]]],h:[[0,.01628448918,[],1.98701374528987E-5,7.52684631316272E-9,[2,2,3,-3],-1.8640576961788E-5,-2.45293668960439E-8,[3,1,10,-2]],
[0,-6.20301546366306E-4,[]]],k:[[0,-.003740818074,[],5.39117622023673E-9,-1.98894819107988E-5,[2,2,3,-3],-4.57790064492791E-9,1.85926022136086E-5,[3,1,10,-2]],[0,-8.22686608338102E-4,[]]],p:[[1.14305124894666E-7,4.7021367794192E-7,[2,3,3,-5],6.68445976458009E-8,3.60317800223394E-7,[10,2],2.38375772852068E-8,9.86174970745443E-8,[2,2,3,-4]],[0,1.01789189822705E-4,[]]],q:[[4.57512732935583E-7,-1.06488903835686E-7,[2,3,3,-5],-3.63902851148984E-7,6.80744605654306E-8,[10,2],-2.37906960826515E-7,1.28823777138285E-8,
[2,1,3,-1]],[0,-.00113473132207217,[]]]};function vsop2013_mar(tj){return vsop2k(vsop2013_mar.coeffs,tj)}function vsop2013_mar_xyz(tj){return vsop2k.xyz(vsop2013_mar.coeffs,tj)}vsop2013_mar.xyz=vsop2013_mar_xyz;vsop2013.mar=vsop2013_mar;vsop2013_mar.coeffs={L:[[0,6.203500014141,[],7.74226442511148E-5,-2.61783269737478E-4,[3,4,4,-8,10,3],5.34524186153185E-5,-7.80488663170154E-5,[2,2,4,-7,10,8,11,-6]],[0,3340.61243414546,[]]],a:[[0,1.523679340234,[],2.10177537333173E-7,6.60170427846137E-5,[4,2,10,-2],
-9.97760498098323E-6,-1.96269515718286E-5,[4,1,10,-2]]],h:[[0,-.037899709162,[],-8.15830080347651E-5,-1.63133322577743E-7,[4,1,10,-2],-4.51462167164009E-5,-1.33856005180842E-6,[10,1]],[0,.00624674588336648,[]],[0,1.55169216123976E-4,[]]],k:[[0,.085365593164,[],7.5923424053874E-7,8.22828165672222E-5,[4,1,10,-2],1.32864651729855E-6,-4.6299966034315E-5,[10,1]],[0,.00376336793842187,[]],[0,-2.46461621011564E-4,[]]],p:[[0,.012284486457,[],8.45182476840896E-7,-7.45419237323267E-8,[10,2],-1.46410716642413E-7,
2.82737644897297E-7,[10,1]],[0,-.00108024344012144,[]]],q:[[0,.010470428021,[],5.24681330274117E-8,8.59427436162037E-7,[10,2],-2.44990400897291E-7,1.14143053443839E-7,[3,1,4,-2]],[0,1.71320920925576E-4,[]]]};function vsop2013_jup(tj){return vsop2k(vsop2013_jup.coeffs,tj)}function vsop2013_jup_xyz(tj){return vsop2k.xyz(vsop2013_jup.coeffs,tj)}vsop2013_jup.xyz=vsop2013_jup_xyz;vsop2013.jup=vsop2013_jup;vsop2013_jup.coeffs={L:[[0,.599546107035,[],-.00566625683418009,-8.92514475215568E-4,[10,2,11,-5],
6.16623284320103E-4,-9.02526061446375E-5,[10,1,11,-2],-3.22556030277826E-4,2.6680518581314E-6,[10,2,11,-2],-2.3790499051921E-4,4.78342346690294E-6,[10,1,11,-1],7.63491548644742E-5,-1.10045608466856E-4,[10,2,11,-3],-1.17326004417488E-4,1.14314070751528E-7,[10,3,11,-3]],[0,529.690961562325,[],6.46317436875705E-4,-.00219610638310457,[10,2,11,-5]],[4.31231853190148E-4,1.92879066175314E-4,[10,2,11,-5],0,-1.48339297282345E-4,[]]],a:[[0,5.202603206345,[],5.10073137608823E-6,6.90804351056146E-4,[10,2,11,
-2],-2.87828738537348E-5,-3.21490464594591E-4,[10,1,11,-2],-1.58345347320294E-6,3.11439558421393E-4,[10,3,11,-3],-1.85728036691609E-4,-1.14488204054084E-4,[10,2,11,-3],3.89489207106335E-5,-2.52650057333383E-4,[10,2,11,-5],5.64027034255473E-6,2.05811618141947E-4,[10,1,11,-1],-1.01445798363939E-4,-6.10301598155493E-5,[10,3,11,-4],-2.50355358196412E-6,1.46335580464555E-4,[10,4,11,-4]],[9.77986065088572E-5,2.82474697195385E-5,[10,2,11,-5]]],h:[[0,.012003719726,[],-6.42719873733828E-4,1.479851653241E-5,
[10,1,11,-2],-1.60443913831529E-4,-3.41117655890013E-4,[10,2,11,-5],-6.0918097749904E-5,1.11307215000134E-4,[10,1,11,-3],-1.04697884535553E-4,3.86902393293891E-7,[10,2,11,-3]],[0,.00217184376124413,[],9.6835598701295E-5,-3.0973328480744E-5,[10,2,11,-5]]],k:[[0,.046985847005,[],-4.34754594830865E-6,6.52966387169899E-4,[10,1,11,-2],-3.44420534520134E-4,1.60872409455138E-4,[10,2,11,-5],1.08041024652353E-4,8.12992145622112E-5,[10,1,11,-3],9.83728270434155E-7,1.07422137958944E-4,[10,2,11,-3]],[0,.0011303137834786,
[],-3.07645441870896E-5,-9.83761654576111E-5,[10,2,11,-5]],[0,-1.0936216807284E-4,[]]],p:[[0,.01118386458,[],-3.33992313710715E-6,-7.83506890214899E-6,[10,2,11,-5],-1.37865441865821E-6,1.69801625112118E-6,[10,1,11,-3]],[0,-2.34321119083433E-4,[]]],q:[[0,-.002065622731,[],-7.51006482364563E-6,4.12750504201726E-6,[10,2,11,-5],1.89550929058217E-6,1.12970775000631E-6,[10,1,11,-3]],[0,-3.13504828346821E-4,[]]]};function vsop2013_sat(tj){return vsop2k(vsop2013_sat.coeffs,tj)}function vsop2013_sat_xyz(tj){return vsop2k.xyz(vsop2013_sat.coeffs,
tj)}vsop2013_sat.xyz=vsop2013_sat_xyz;vsop2013.sat=vsop2013_sat;vsop2013_sat.coeffs={L:[[0,.874018510107,[],.0139448524795837,.00219682237703802,[10,2,11,-5],.00259783521557205,-1.16600357373602E-5,[10,1,11,-1],-.00148093966547763,2.29582896445634E-4,[10,1,11,-2],7.11785574972105E-4,-5.00640802692013E-6,[10,2,11,-2],-1.77749248309202E-4,2.59487173097659E-4,[10,2,11,-3],2.65482118436596E-4,-3.7346331212472E-7,[10,3,11,-3],-6.1720498129746E-5,-1.54945523510392E-4,[10,2,11,-4],8.32016121432597E-5,-9.29966694225192E-5,
[10,1,11,-3],-2.98689626889114E-5,1.43403272640695E-4,[10,1],-6.83895822949126E-5,1.01627779424006E-4,[10,3,11,-4],-1.43758331552843E-4,-2.3551230271163E-5,[10,2,11,-6,12,3],-1.23915782522774E-4,-4.15300798746143E-5,[10,4,11,-10],-1.11580019507672E-4,-4.86501693795966E-5,[11,1],2.12967216507348E-5,-1.27975517463186E-4,[11,1,12,-3],9.88791952900437E-5,-2.26443758500374E-5,[10,2,11,-1],1.10537410471999E-4,8.10624086541869E-7,[10,4,11,-4]],[0,213.299086108488,[],-.0015907341551704,.00540468269042612,
[10,2,11,-5],-9.23693002013126E-5,-1.07491634708511E-4,[10,1,11,-2],4.56422603941673E-5,-9.38912837792348E-5,[10,4,11,-10]],[-.00106126891574573,-4.7470837717684E-4,[10,2,11,-5],0,3.66191115252574E-4,[]],[8.70098818749883E-5,-1.34592796972819E-4,[10,2,11,-5]]],a:[[0,9.554910386039,[],-3.4372664690557E-5,.0336346748120207,[10,1,11,-1],-.0022293855186355,.00275617197670516,[10,1,11,-2],-4.40040675527466E-4,.00285696971853569,[10,2,11,-5],-1.16481425664692E-4,-.00308243660466796,[10,2,11,-2],.00125946989876576,
8.1310369870267E-4,[10,2,11,-3],.00107277759491406,-9.54693672560471E-4,[11,1],3.64219889059516E-4,.00142228484324233,[10,2,11,-1],6.46718510926462E-6,-.00142074156961473,[10,3,11,-3],6.28345370555199E-4,3.79642540305604E-4,[10,3,11,-4],8.09839967048359E-4,1.16803224733498E-4,[10,1,11,-3],-4.93006202644176E-4,2.27202552560623E-4,[10,2,11,-4],1.19170385251779E-5,-6.71503070518685E-4,[10,4,11,-4],3.29676671731303E-4,1.97889065042711E-4,[10,4,11,-5],5.79596642066454E-5,-3.99565024242749E-4,[10,3,11,
-6],-6.9939694012856E-5,3.72121711256958E-4,[10,1,11,-4],1.093093571587E-5,-3.21780887408532E-4,[10,5,11,-5],-2.18098160754873E-4,1.10993017967477E-4,[10,3,11,-5],1.78459823561655E-4,1.0801172008991E-4,[10,5,11,-6],6.56784538730982E-10,1.85489565591272E-4,[3,1,11,-1],-1.29765352066708E-4,4.83982496790368E-5,[10,4,11,-6],-1.33713708743399E-7,1.73420926497108E-4,[2,1,11,-1],8.86081744158408E-6,-1.55799985772236E-4,[10,6,11,-6],9.8424925993046E-5,6.01637301332378E-5,[10,6,11,-7],8.76350592089203E-7,
1.32582324898864E-4,[11,2,12,-2]],[-.0011059703941039,-3.19327157709117E-4,[10,2,11,-5],-1.30138355154406E-4,1.58112522923082E-4,[10,2,11,-3],-1.26556386223685E-4,-1.47013562906434E-4,[11,1],-2.96799925406148E-5,1.77172861818825E-4,[10,1,11,-3],1.55231454133133E-4,4.40052122052749E-5,[10,3,11,-6],-1.42402749815134E-4,-4.53941283963373E-5,[10,1,11,-4],-4.38546871580121E-5,-1.38648741425017E-4,[10,2,11,-4]],[9.54323280673722E-5,-2.17565870376719E-4,[10,2,11,-5]]],h:[[0,.055429636102,[],6.35129860363602E-4,
.00140901985337072,[10,2,11,-5],.00196887696972844,6.60369782670219E-6,[10,1],.00124522179465379,2.06100844948552E-5,[11,1],-6.86577386440929E-4,-3.1369851615849E-5,[10,1,11,-2],4.46816002207394E-4,-1.12641937127287E-5,[10,2,11,-3],2.83221112229084E-4,-1.6900824521551E-4,[10,1,11,-3],-1.36024785977538E-4,2.27660596703771E-4,[10,2,11,-4],1.62561958478113E-4,1.63761245760014E-6,[10,3,11,-4]],[0,-.00375607819788462,[],-3.9632430477799E-4,1.23194823050533E-4,[10,2,11,-5]],[0,-3.19881934038972E-4,[]]],
k:[[0,-.002959913416,[],.00141686641362994,-6.365432862294E-4,[10,2,11,-5],6.66644424044003E-6,.001972688473832,[10,1],1.47942507419641E-5,.00126315488143125,[11,1],-7.71679520837778E-6,6.50459585030773E-4,[10,1,11,-2],-8.76335272781558E-6,-4.51728481068651E-4,[10,2,11,-3],-1.73779720086617E-4,-2.60243231617887E-4,[10,1,11,-3],2.26087169791005E-4,1.52525788246142E-4,[10,2,11,-4],-2.62414573544769E-6,-1.62234290870225E-4,[10,3,11,-4],-1.22174450958838E-4,2.51824119702142E-5,[10,1,11,-1]],[0,-.00529593534842157,
[],1.22766067439733E-4,3.99851743343489E-4,[10,2,11,-5]],[0,3.09328717381039E-4,[]]],p:[[0,.019891436236,[],8.69842146851722E-6,1.87074111159286E-5,[10,2,11,-5],-3.50559744644866E-6,-7.68122509116786E-6,[10,1,11,-1]],[0,5.94389244487805E-4,[]]],q:[[0,-.008717455856,[],1.8147187106274E-5,-9.70888214768663E-6,[10,2,11,-5],-4.4775348263207E-6,5.74727861695624E-6,[10,1,11,-1]],[0,8.01691608254598E-4,[]]]};function vsop2013_ura(tj){return vsop2k(vsop2013_ura.coeffs,tj)}function vsop2013_ura_xyz(tj){return vsop2k.xyz(vsop2013_ura.coeffs,
tj)}vsop2013_ura.xyz=vsop2013_ura_xyz;vsop2013.ura=vsop2013_ura;vsop2013_ura.coeffs={L:[[0,5.481225395663,[],-.0149449950730489,8.34844473590201E-4,[12,1,13,-2],.00341047621755124,-1.91057710127704E-7,[10,1,12,-1],7.55843950644003E-4,-1.93967416824379E-6,[11,1,12,-1],-6.08427235503114E-4,-9.86798808037679E-5,[12,2,13,-4],-9.43893555612881E-5,5.89762085534299E-4,[11,1,12,-3],1.87202618564785E-4,2.35931802224745E-5,[10,1],1.66005316501062E-4,-4.22353294043329E-5,[10,2,12,-1],-4.11061866649421E-5,-1.59491698354855E-4,
[11,1,12,-2],1.42805300186067E-4,2.77810537127611E-5,[10,2,11,-6,12,3],-1.43634734018947E-4,-5.8491942527996E-7,[12,2,13,-2],-1.29794743954817E-4,-4.95858134974517E-7,[12,1,13,-1],1.29326000801253E-4,-5.54728127883352E-7,[11,2,12,-2]],[0,74.781659030778,[],6.75298262900203E-5,-2.34738642772923E-4,[12,1,13,-2]]],a:[[0,19.218438555474,[],2.27856970378006E-6,.0803052568869785,[10,1,12,-1],-7.30491609037666E-6,.0206873102632775,[11,1,12,-1],-5.35378947421032E-4,-.00402900835432449,[10,1,12,-2],9.04700164962495E-4,
.0035380961101644,[10,2,12,-1],-2.28652298743457E-4,-.00389218061745344,[12,1,13,-2],-4.40938824477242E-4,-.00310654653779584,[12,1],-.0010326856743462,-.00106105892552249,[11,1,12,-2],-.00123826508084192,-1.1353920361132E-4,[11,1,12,-3],-6.12952281699469E-5,-.00120301075338855,[11,2,12,-2],.00102405215710592,-8.68538360635664E-5,[11,2,12,-1],2.65715852024853E-6,8.96146270110914E-4,[12,2,13,-2],3.45768076547325E-5,-6.1530703426238E-4,[10,1,12,-2,13,2],-2.15786127027574E-4,4.05566897083832E-4,[11,
2,12,-3],3.24110539191308E-5,5.84736340458859E-4,[10,1,13,-2],-9.1762468904812E-7,5.30213134153768E-4,[12,3,13,-3],8.97667636959168E-10,5.18441817575509E-4,[3,1,12,-1],4.06325004833273E-6,-5.04775720901819E-4,[11,3,12,-3],9.94075382963041E-9,4.88377287782668E-4,[2,1,12,-1],-6.60365516552497E-5,-3.42623775406433E-4,[10,2,12,-2],5.05288680836408E-5,-3.23647154148728E-4,[12,2,13,-4],-1.96145397470018E-6,3.6775778545027E-4,[12,1,13,-1],-2.28481417384965E-5,2.8466098891358E-4,[12,2,13,-3],-4.11717201177668E-7,
2.9544715589081E-4,[12,4,13,-4],-9.91404211475374E-5,1.89585222435814E-4,[11,3,12,-4],9.3403349159867E-5,1.70929258482143E-4,[10,3,12,-1],3.64175577271788E-5,-2.27118882300403E-4,[10,3,11,-5,12,-1],-3.5068385448687E-5,2.27703684200461E-4,[10,1,11,-5,12,1],6.50074793520735E-5,1.90668114007866E-4,[10,1,12,-3],4.56449733894446E-5,1.82052908475474E-4,[12,2],5.01690306860825E-6,-2.15583437593627E-4,[11,4,12,-4],1.11884662704721E-4,-6.61783581723367E-5,[11,2,12,-4],2.25251219974222E-5,-1.45917836224506E-4,
[10,2,11,-6,12,1],-1.56779644241097E-7,1.67931256207186E-4,[12,5,13,-5],8.68002561761632E-6,-1.58328143099206E-4,[11,1,12,-2,13,2],-2.33189379661729E-5,1.42921667353266E-4,[10,2,11,-4,12,-1],8.21048712494486E-6,1.50677513398103E-4,[11,1,13,-2],-4.86079250681436E-5,9.32586538694053E-5,[11,4,12,-5],-1.35551183852985E-5,1.255794413598E-4,[12,3,13,-4],4.23115531867637E-6,-1.30033645325842E-4,[10,1,12,-3,13,2],2.36505185425228E-5,-1.07661031782052E-4,[10,2,11,-6,12,3],6.81151984418553E-6,1.09927947741502E-4,
[10,2,12,-3],3.29603840734778E-6,1.13314889384527E-4,[10,1,11,-1]],[1.5931589373032E-4,-1.0153816154481E-4,[11,1,12,-3],1.63612617980771E-4,8.48838714468248E-5,[10,2,12,-1],-7.06659820723061E-5,-9.8933188590395E-5,[11,2,12,-1],7.73478733832631E-5,-8.39035210126599E-5,[11,1,12,-2]]],h:[[0,.005648340159,[],.00274677765640599,-4.04116199877446E-7,[10,1],.00209355702962403,5.55479382439183E-6,[12,1,13,-2],.00136146018233582,1.18168707593208E-6,[12,1],-.00116289117084983,-2.52274501792398E-7,[10,1,12,
-2],6.13193961969537E-4,-6.86139782637298E-8,[11,1],8.86310449130555E-5,2.44098839025066E-4,[11,1,12,-3],-2.82179304439622E-4,-2.61364954237191E-6,[11,1,12,-2],1.4854023299908E-4,1.39988018125554E-5,[12,2,13,-4],1.29026321962054E-4,-3.29141047236141E-5,[10,2]],[0,-7.48754609625263E-4,[]]],k:[[0,-.045953074838,[],-1.72793094161794E-7,.0027453436203276,[10,1],3.65735313605478E-6,-.00208562132364666,[12,1,13,-2],-8.20490239433786E-7,.00136026890430401,[12,1],1.29262164194181E-7,.00116380736228167,[10,
1,12,-2],1.48615345252337E-7,6.1378219667211E-4,[11,1],2.44510660722676E-4,-8.71411342717813E-5,[11,1,12,-3],-1.9147736030206E-6,2.83879419145449E-4,[11,1,12,-2],1.40278047897916E-5,-1.48846486366174E-4,[12,2,13,-4],3.28885019511566E-5,1.28987979833324E-4,[10,2]],[0,1.83326266324195E-4,[]]],p:[[0,.006486018467,[],-3.81845253809257E-6,5.32915473528968E-6,[11,1,12,-3],4.06482649231472E-6,4.90360484510344E-6,[10,1,12,-1]],[0,-1.17370228366917E-4,[]]],q:[[0,.001859240754,[],5.18112789501957E-6,4.1548457762982E-6,
[11,1,12,-3],4.86984206974084E-6,-4.09476001250862E-6,[10,1,12,-1]],[0,-1.2447819877719E-4,[]]]};function vsop2013_nep(tj){return vsop2k(vsop2013_nep.coeffs,tj)}function vsop2013_nep_xyz(tj){return vsop2k.xyz(vsop2013_nep.coeffs,tj)}vsop2013_nep.xyz=vsop2013_nep_xyz;vsop2013.nep=vsop2013_nep;vsop2013_nep.coeffs={L:[[0,5.311897933164,[],.0101469046279758,-5.6880414013645E-4,[12,1,13,-2],.00441713216417606,7.04519591120121E-7,[10,1,13,-1],9.29356582374869E-4,1.72728834898285E-7,[11,1,13,-1],4.11170488260979E-4,
6.68274820217293E-5,[12,2,13,-4],2.11291411334639E-4,-5.39225161635344E-5,[10,2,13,-1],1.62716121846677E-4,4.23884620150265E-7,[12,1,13,-1]],[0,38.132972226125,[],-4.56527307895413E-5,1.584873111604E-4,[12,1,13,-2]]],a:[[0,30.110415987017,[],-3.16688453816727E-5,.148182835507509,[10,1,13,-1],-7.59625666080917E-6,.0359789774926939,[11,1,13,-1],4.40552132099022E-4,.00830003078786158,[12,1,13,-2],.00171617844970017,.0067276636371183,[10,2,13,-1],8.78619868603556E-7,.00461644061870503,[12,1,13,-1],-.0010652883820492,
9.79053536678081E-4,[10,1,13,-2],.00185146386982005,-1.43075641082526E-4,[11,2,13,-1],4.29277250257975E-6,-.00105522361462959,[12,2,13,-2],1.52344190553089E-10,.00101173876032832,[3,1,13,-1],-7.17088109383658E-7,9.55294507124649E-4,[2,1,13,-1],-4.41137698531035E-5,7.81633912531386E-4,[10,1,12,-1,13,1],-1.06493742870645E-4,6.86664561892246E-4,[12,2,13,-4],-4.03288198170217E-5,-7.23464564978597E-4,[10,1,12,1,13,-3],-4.02924399160384E-4,2.39640968600516E-4,[11,1,13,-2],9.98926491604699E-7,-5.68839987048425E-4,
[12,3,13,-3],3.19094800260301E-5,-5.05806830652278E-4,[12,2,13,-3],1.79265937725814E-4,3.28437732852741E-4,[10,3,13,-1],6.7265250497546E-5,-4.18866183620827E-4,[10,3,11,-5,13,-1],-6.4666189960306E-5,4.20529671490109E-4,[10,1,11,-5,13,1],-3.60388750205684E-5,3.15869027958498E-4,[10,2,13,-2],6.15133761216537E-7,-3.13765737920449E-4,[12,4,13,-4],3.89796203775798E-5,-2.53788686072964E-4,[10,2,11,-6,13,1],-3.99269718365881E-5,2.48159848008069E-4,[10,2,11,-4,13,-1],1.33095737793894E-5,-2.60273106852038E-4,
[11,2,13,-2],-1.09480349954045E-8,2.46538795345758E-4,[10,1,11,-1],2.49286558506879E-5,-2.1610260598066E-4,[12,2,13,-1],1.99532998272528E-5,-1.97643384255296E-4,[12,3,13,-4],-1.06896775320371E-5,1.89209415737068E-4,[11,1,12,-1,13,1],-1.00229422138727E-5,-1.76216402724068E-4,[11,1,12,1,13,-3],2.38826934956077E-7,-1.79098142285943E-4,[12,5,13,-5],-1.13243264197301E-7,1.75296754155399E-4,[10,1,11,1,13,-2],-1.38938534088951E-4,2.88115180363483E-5,[13,1],-1.10629273451884E-5,1.31760556927978E-4,[10,1,
12,-1],-1.40190050979541E-5,-1.09483303088537E-4,[11,3,13,-1],1.23352916868706E-5,-1.10802893006457E-4,[12,4,13,-5],4.72028285091408E-8,-1.03796385266907E-4,[12,6,13,-6]],[3.10922464237674E-4,1.61213668844168E-4,[10,2,13,-1],-1.27628584742442E-4,-1.79020415026371E-4,[11,2,13,-1],-1.63089571541707E-4,-4.75320457990084E-5,[10,1,11,-5,13,1],1.62298440554541E-4,4.81843008783905E-5,[10,3,11,-5,13,-1],-1.31596432322418E-4,-3.40716012387603E-5,[12,1,13,-2],9.83812044788949E-5,2.85992772912932E-5,[10,2,11,
-6,13,1],-9.61732233699252E-5,-2.85155450302741E-5,[10,2,11,-4,13,-1]]],h:[[0,.006691809982,[],.00344037123410276,2.60037089689158E-7,[10,1],.00136274559681672,-7.31683642143236E-8,[13,1],-.00131043998502159,-2.55348296968866E-7,[10,1,13,-2],7.60815906803363E-4,1.83219556169007E-7,[11,1],-5.96406846487912E-4,-4.11778774735681E-6,[12,1,13,-2],-3.40766470835985E-4,-2.78874942261049E-8,[11,1,13,-2],1.61543474274358E-4,-4.12011346243526E-5,[10,2],-1.57625562435383E-4,-1.2647980126913E-5,[12,2,13,-4]]],
k:[[0,.005998838194,[],-1.19590818920499E-6,.00343812701387651,[10,1],-2.34014011757408E-8,.00136228851875839,[13,1],-3.11811452378667E-7,.00131043024155144,[10,1,13,-2],-1.52906316457174E-7,7.61507963870143E-4,[11,1],-3.00366574716962E-6,5.9866344517569E-4,[12,1,13,-2],-6.72968162177077E-8,3.40808513613787E-4,[11,1,13,-2],4.11525235466369E-5,1.61473053324809E-4,[10,2],-1.2658581400711E-5,1.58216128370744E-4,[12,2,13,-4]]],p:[[0,.011516766659,[],-1.00851792138856E-5,-4.10456052892944E-7,[10,1,13,
-1],8.73365050781177E-6,3.5758669468006E-7,[10,1,13,1]]],q:[[0,-.010291475138,[],-4.12822331979157E-7,1.00922848608511E-5,[10,1,13,-1],-3.55340973333777E-7,8.7339646391212E-6,[10,1,13,1]]]};function vsop2013_plu(tj){return vsop2k(vsop2013_plu.coeffs,tj)}function vsop2013_plu_xyz(tj){return vsop2k.xyz(vsop2013_plu.coeffs,tj)}vsop2013_plu.xyz=vsop2013_plu_xyz;vsop2013.plu=vsop2013_plu;vsop2013_plu.coeffs={L:[[0,4.165471124826,[],-.00456721639374337,.00206105169349723,[14,1402],.00222149312802085,.00349013706591797,
[14,4],.0014438005411012,-2.52741215590556E-4,[14,1473],5.62942406461721E-4,.00118114067012902,[14,8],-.0010623010008064,1.61077178214331E-4,[14,522],-3.42878606610048E-4,2.76512171712421E-4,[14,1331],3.22815741757412E-4,3.30643424915743E-5,[14,593],-2.43710461979938E-4,1.73918596318809E-5,[14,2875],-2.33243506386659E-4,4.35401426731039E-5,[14,71],1.64582932578304E-4,-1.47337403905421E-5,[14,12],-1.23734536634531E-4,-7.73661588407805E-5,[14,35],2.96421062395025E-5,1.08749814205824E-4,[14,137]],[0,
25.33566020437,[],.00177419558642902,-2.18979168244425E-4,[14,4],-5.89871714102106E-4,-.00130295270672772,[14,1402],6.27665725900631E-4,-5.78574661081135E-5,[14,8],-4.67872363335512E-5,-3.0338218770459E-4,[14,522],-1.32266503768353E-4,-1.62343127562621E-4,[14,1331],5.14743377337001E-5,-1.68465785742127E-4,[14,35],2.76051654437753E-5,1.37166723338294E-4,[14,1473],1.70626213762879E-5,-1.1426985570985E-4,[14,12]],[0,-.0182722188391639,[],6.09512251396272E-5,-4.23822055145354E-4,[14,4],1.35554988669997E-4,
-2.42149501615203E-4,[14,8],1.48775903609926E-4,-1.6731953542355E-4,[14,1402]],[0,.00194099316670716,[]]],a:[[0,39.54461714403,[],-.0852581976354701,-.188913735334341,[14,1402],-.0333874152748863,-.0414958778338123,[14,1331],-.00734554122725473,-.0485024749192498,[14,522],-.00534684376601522,.0281021329189482,[14,71],-.0123092045544314,-.0091600251304609,[14,1261],-.00525198563299829,-.012202161344832,[14,452],-7.2968560644719E-4,-.00978452294754672,[14,2875],-.00689189703744251,.0048494518209586,
[14,35],-.00319467786534364,.00582713754882349,[14,141],-.0060327729791526,.00153000595095762,[14,137],.00457171307399947,-.00194948974084124,[14,4],-.00429806835029115,-.00175242206726642,[14,1190],-.00247286675515423,-.00310627758037027,[14,381],.00297562700771581,-.00171886634334111,[14,8],.00265146267827777,-7.74726531281848E-4,[14,1543],-.00207783905489942,-.00154057221251118,[14,1115],-4.19579511791891E-4,-.00200483972098692,[14,2804],-.00158119137149698,9.68507621921489E-4,[14,67],-9.68366549948342E-4,
.00154667158210835,[14,212],-.00142938344793791,-1.88203674638911E-4,[14,1119],9.59850109979434E-4,-.00107388451995997,[14,17405],.00114162139403895,7.58212110837861E-4,[14,28337],-.00100246677623642,-6.9650370158154E-4,[14,310],-6.49471401553971E-4,-3.28017714546506E-4,[14,1044],5.73158863553251E-4,4.04247670751583E-4,[14,63],6.79494922293691E-4,-1.32384484985871E-4,[14,1614],-1.04300210746971E-4,-6.50484804048742E-4,[14,12],-5.15736788402634E-4,3.39297680098786E-4,[14,283],4.52846277127703E-4,4.01381972546133E-4,
[14,133],3.10106225772706E-4,5.08237177851175E-4,[14,1421],-1.72251473271781E-4,-5.68139061648916E-4,[14,1383],1.44165131321784E-4,-5.10944691011001E-4,[14,4348],-1.86317094448925E-4,-4.81923078671557E-4,[14,2733],5.04297563225377E-4,6.36959488324366E-5,[14,664],4.02265353496755E-4,-3.05327449958213E-4,[14,177],3.25880643634961E-4,3.46778342469708E-4,[14,204],-4.51450447153731E-4,5.62190365693832E-5,[14,1048],-2.47933261618766E-4,3.67645653602986E-4,[14,1406],-4.03680848562258E-4,-6.13993356689969E-5,
[14,1398],1.07278677376519E-4,3.82061238419647E-4,[14,880],-3.63577606423224E-4,-9.24829843341767E-5,[14,239],-7.26966642622521E-5,-3.54929358809881E-4,[14,541],1.62825677665358E-4,-3.16084200860336E-4,[14,17334],6.98002613613896E-6,3.42046242701039E-4,[14,503],3.19289118073941E-4,1.1026801272881E-4,[14,28266],-2.69088836457862E-4,-1.54034360328394E-4,[14,974],1.55637978622693E-4,-2.17384147474949E-4,[14,345],1.405802484936E-4,2.13982795187201E-4,[14,1924],1.75331748721857E-4,1.76826403458862E-4,
[14,275],-1.29656260916781E-4,2.05415556972065E-4,[14,106],-1.04990617658979E-4,2.14934444146722E-4,[14,1335],-9.66475262719736E-5,2.10590707524968E-4,[14,271],-3.45750078659106E-5,2.2168201292914E-4,[14,59],-6.34376556195174E-5,2.10112906062088E-4,[14,200],-2.04060057081347E-4,2.05908084286722E-5,[14,1327],-3.98581133738944E-5,1.98625164536574E-4,[14,129],-1.05757732191346E-4,1.63407119355068E-4,[14,341],1.90421449399432E-4,-2.24609344167842E-6,[14,1685],1.81768323094392E-4,3.68100579145402E-5,[14,
75],-1.54804637038984E-4,-9.84521682271278E-5,[14,903],-1.53858795630001E-4,1.54461293629166E-5,[14,1708],1.10050179745087E-4,1.06342487885446E-4,[14,1351],-7.95014330519943E-5,-1.30288344846624E-4,[14,1312],-8.78617240477827E-5,-1.23436780847904E-4,[14,2663],-9.27649570968551E-5,1.13436736838358E-4,[14,1410],-1.35727118257115E-4,5.43359575978971E-5,[14,978],-1.40756906767889E-4,-2.01587815360252E-5,[14,16],4.57591513704065E-5,1.33486491812673E-4,[14,247],1.34807996034135E-4,1.10390069371504E-5,[14,
3016],9.9587671686603E-5,9.0442445182479E-5,[14,1854],-1.29886049375512E-4,-1.22029877989591E-6,[14,1394],-6.61532682819139E-5,1.09659145609161E-4,[14,1265],-1.10502337351417E-4,-5.63057764419131E-5,[14,9220],-3.10729084233217E-5,1.20020313234098E-4,[14,72490],9.80365010121947E-5,-7.30879626783599E-5,[14,79],-1.12540149729189E-4,3.61083306602783E-5,[14,169],-1.0210967812908E-4,-5.5390855536896E-5,[14,832],1.10937608615437E-4,2.05981001050297E-5,[14,734],9.15734875270396E-5,6.54593719972684E-5,[14,
809],-1.09740961767008E-4,-1.76357815225636E-5,[14,408],-1.09624433193807E-4,-6.03646199498375E-7,[14,337],-7.22656357086988E-5,-8.1729143448408E-5,[14,1473],9.81338763509176E-5,4.08194450688092E-5,[14,1096],-3.04286468607035E-5,-9.98020227403315E-5,[14,471],-7.8511523890052E-5,6.77413403170134E-5,[14,526],4.73213681042608E-5,9.020966833347E-5,[14,27],-9.36304084737508E-5,4.01108172709861E-5,[14,354]],[.0538225296756512,-.024541007710854,[14,1402],0,.03789,[],.0196235717652556,-.0159817339293649,
[14,1331],.0138515233201363,-.00216678462854011,[14,522],.00472419670945094,8.67230200436216E-4,[14,71],.00273927802672712,-.00380088044537908,[14,1261],.0033190792202712,-5.90154412597696E-4,[14,2875],-.00262217467760365,-.00206468447129706,[14,35],8.47116551966886E-4,-.00273411770707245,[14,4],8.38298441787177E-4,-.00214273613711023,[14,1190],.00139624779098254,-6.51914574424254E-4,[14,452],-4.88006095260628E-4,-.00141743532663901,[14,8],9.31057640524374E-4,-7.78740174023586E-4,[14,381],-2.95688429909896E-4,
-.00114951196557197,[14,137],.00102456915294928,-2.93203398002195E-4,[14,2804],1.21224400129276E-4,-9.83440080477029E-4,[14,1119],2.23806328793291E-4,7.26625314375591E-4,[14,1543],5.41252695062515E-4,-4.9059020449035E-4,[14,1115],3.30718928122213E-4,-5.08583149981903E-4,[14,310],-4.37315709741999E-4,1.81111886443337E-5,[14,12],-5.10176977459902E-5,-3.97669608100555E-4,[14,1048],3.30059711333647E-4,-1.48668522354712E-4,[14,2733],2.10595004325067E-4,2.94225751037988E-4,[14,212],1.93077164486187E-4,
-2.92631623860709E-4,[14,1044],1.73939117196183E-4,-2.594668959479E-4,[14,28337],-3.75285623095533E-5,-2.84154691437766E-4,[14,1398],5.29481660895141E-5,-2.54731223256692E-4,[14,239],2.35039929375319E-4,-4.00606417665232E-5,[14,1383],-1.57277653357587E-4,1.69994883109759E-4,[14,133],-1.68190400017888E-4,-1.47290411051208E-4,[14,106],2.1335940464682E-4,2.24116319433279E-5,[14,4348],1.27437901906597E-4,1.50121919698731E-4,[14,283],-6.09544356409465E-5,-1.73703098963884E-4,[14,1327],-1.00480857361438E-4,
1.22240745917371E-4,[14,63],-1.22203989775145E-4,8.03584657873012E-5,[14,1924],-1.37440426578555E-4,-1.42191998929617E-5,[14,503],1.21561973490251E-4,5.13078325770271E-5,[14,141],-2.76270419939114E-5,1.26412086986152E-4,[14,16],-1.19745752039647E-4,-2.55051073894755E-5,[14,129],6.90064666500592E-5,-8.5742329042474E-5,[14,974],-1.03026872536388E-4,2.78142210118717E-5,[14,1421],6.28688550362626E-5,-8.48180010912789E-5,[14,903],-3.81203350412657E-5,-9.68117150982707E-5,[14,978],3.05455540195513E-5,9.68577472090256E-5,
[14,354],-9.1963688288913E-5,4.02454297255833E-5,[14,27],-1.35191434945968E-5,9.92187052380173E-5,[14,1406]],[.00697275443987064,.00615647341839869,[14,1402],.00535474581627489,.00344737186869919,[14,1331],0,-.00601990597444089,[],.00122555270899332,.00185060175718072,[14,522],-.00105974641354974,-9.07911969550799E-4,[14,4],.00110062538763923,-2.53607053021502E-4,[14,1261],6.67129714712161E-4,-1.09433999943657E-4,[14,1190],3.23452825103362E-4,5.61821005450467E-4,[14,2875],5.41324143354791E-4,-3.22992134760929E-4,
[14,71],-5.55511169686194E-4,-2.46912610200519E-4,[14,8],4.94277825269215E-4,-1.07053957509271E-4,[14,452],9.30205748334501E-5,-4.23428578027621E-4,[14,35],3.57586252262823E-4,-9.22850452722992E-5,[14,1119],1.67065390575644E-4,2.5012280179087E-4,[14,2804],2.96701510822288E-4,6.35382786121743E-6,[14,381],2.28583678602527E-4,1.14850267558374E-4,[14,141],-1.17586429397561E-4,1.72201849299036E-4,[14,12],1.68702527831119E-4,-7.36195868449343E-5,[14,1048],1.81419528314822E-4,5.78589159488163E-6,[14,310],
8.22592563807845E-5,-1.3870462139811E-4,[14,137],8.4705982794838E-5,1.03827309490672E-4,[14,2733],-1.14727152470329E-4,-1.63677869135789E-5,[14,1543],1.03191524973939E-4,3.57394523311622E-5,[14,212],1.01159159559147E-4,-4.00003469968714E-5,[14,1398],8.70224977640412E-5,5.06754884778105E-5,[14,1115]],[-6.60658448870074E-4,.00147899372410779,[14,1402],-3.17529288197464E-4,.00145131620931031,[14,1331],-2.44157408572124E-4,3.03088476832553E-4,[14,522],0,-3.60994607607288E-4,[],-3.49199475461992E-4,9.84264663528554E-7,
[14,4],1.15773811717149E-4,2.79542638072548E-4,[14,1261],1.11752837656491E-4,1.8662094899078E-4,[14,1190],-1.13031206578927E-4,1.73230813572863E-4,[14,8],1.94302046943078E-4,4.21424409983518E-5,[14,35],8.02133049426249E-5,1.07080252534189E-4,[14,1119],-7.54537570506556E-5,8.24143258151279E-5,[14,2875]],[-2.91047955468972E-4,9.11380474928133E-6,[14,1331],-2.14794231647714E-4,-5.47759436810434E-5,[14,1402],-1.79600536926573E-4,1.13008786790063E-4,[14,4],0,1.70598011155125E-4,[]]],h:[[0,-.1734047186423,
[],.0030130058621335,.00212348131150762,[14,1473],-7.08496491526814E-4,-.00105054992003594,[14,71],-1.24675145555632E-4,.00119261396850207,[14,1331],5.18382459485308E-4,6.33288188225523E-4,[14,593],3.4879411820834E-4,-4.01989027054383E-4,[14,1402],6.57993334400313E-5,4.67546148717258E-4,[14,1261],-1.10579176967177E-4,-3.15745450291127E-4,[14,141],-1.10765314340372E-4,2.78425728403149E-4,[14,452],1.03166002563896E-4,1.47276527773899E-4,[14,2945],6.15447514684064E-5,1.49747264462813E-4,[14,1190],-9.81595563447479E-5,
-1.14180088983865E-4,[14,1543],1.05006489971192E-4,-6.94320112554293E-5,[14,522],-1.57249589718469E-5,1.21683466155404E-4,[14,381],-1.1563400718698E-4,3.56948682796069E-5,[14,4],-5.37927701941593E-5,1.06014952326765E-4,[14,8]],[-5.68418141150668E-4,-6.00441749326949E-5,[14,1331],-1.98996831179342E-4,2.82990011113288E-4,[14,1473],-1.96455470296079E-4,1.31098478923469E-4,[14,71],1.16241418307845E-4,9.87535037464411E-5,[14,1402],-1.43334078984314E-4,2.08573934936934E-5,[14,1261]],[-2.90068798791816E-5,
-1.39939008056012E-4,[14,1331]]],k:[[0,-.1787389594035,[],-.00209858702949421,.0031629832749993,[14,1473],.00111135191639409,-6.81803576638604E-4,[14,71],.00118851252589696,1.69117812667437E-4,[14,1331],-6.38441585591718E-4,5.47741665420179E-4,[14,593],-5.20269298301404E-4,-2.14384736093297E-5,[14,1402],4.68884450100583E-4,-5.73688498793582E-5,[14,1261],3.04152865636849E-4,-9.60401574521986E-5,[14,141],2.74703518293308E-4,1.2124121714193E-4,[14,452],-1.48675454781658E-4,1.10356932393748E-4,[14,2945],
1.50524508174292E-4,-5.97674195035651E-5,[14,1190],1.18742537755823E-4,-1.00818416487108E-4,[14,1543],-1.17109230386333E-4,-3.79986912364725E-5,[14,522],1.21657665085538E-4,1.79395343335699E-5,[14,381],-1.03801786187725E-4,-5.10658265315991E-5,[14,8],-3.74099671371454E-5,-9.61010124576932E-5,[14,4]],[0,-6.13396638020079E-4,[],-8.11331287017133E-5,5.66641101723139E-4,[14,1331],-2.98431208440694E-4,-1.96328056541716E-4,[14,1473],-1.29802462219695E-4,-1.97218318842653E-4,[14,71],5.5470899732069E-6,-1.49095256320225E-4,
[14,1402],1.83012476975206E-5,1.43793989818822E-4,[14,1261]],[-1.4117217046583E-4,2.38206579568757E-5,[14,1331]]],p:[[0,.1397799251564,[],1.34711564336948E-4,1.28832005723724E-4,[14,1402],1.61808960422928E-4,-4.99793100988791E-5,[14,1543]]],q:[[0,-.05170230782278,[],1.35237840998234E-4,-1.32967871573853E-4,[14,1402],5.59277554218395E-5,1.63008996403526E-4,[14,1543],-9.81846220983441E-5,-2.31799757651772E-5,[14,1473]],[0,1.91668440471832E-4,[]]]}})(window);

/* crc: 3F54A53EC758D2F204E8807A767F658C */