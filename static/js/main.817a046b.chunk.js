(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{178:function(e,t,a){e.exports=a.p+"static/media/bg.ddf7fec2.svg"},204:function(e,t,a){e.exports=a(348)},209:function(e,t,a){},348:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),l=a.n(r),c=(a(209),a(80)),i=a(19),s=a(20),m=a(22),d=a(21),u=a(23),h=a(8),p=a(30),b=a(7);var f,g,v,C,j,y=Object(b.a)({PaletteFooter:{height:"4vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.2rem",margin:"1rem"}})(function(e){var t=e.classes,a=e.paletteName,n=e.emoji;return o.a.createElement("footer",{className:t.PaletteFooter},o.a.createElement("div",null,a),o.a.createElement("span",{className:t.emoji},n))}),O=a(12),w=a(42),E=a(174),x=a(17),k=a.n(x),S=a(44),P=a.n(S),N={up:function(){},down:function(e){return"@media (max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")}},F={ColorBox:(f={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},position:"relative",cursor:"pointer","&:hover button":{opacity:"1",transition:"0.5s"}},Object(O.a)(f,N.down("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(O.a)(f,N.down("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(O.a)(f,N.down("xs"),{width:"50%",height:function(e){return e.showingFullPalette,"10%"}}),f),copyText:{color:function(e){return P()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return P()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return P()(e.background).luminance()>=.7?"rgba(0, 0, 0, 0.6)":"white"},background:function(e){return P()(e.background).luminance()>=.7?"rgba(0, 0, 0, 0.3)":"rgba(255, 255, 255, 0.3)"},position:"absolute",right:"0",bottom:"0",width:"60px",height:"25px",textAlign:"center",lineHeight:"25px",textTransform:"uppercase",borderRadius:"2px"},copyButton:{color:function(e){return P()(e.background).luminance()>=.7?"rgba(0, 0, 0, 0.6)":"white"},width:"80px",height:"25px",display:"inline-block",position:"absolute",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",border:"none",background:"rgba(255, 255, 255, 0.3)",textAlign:"center",fontSize:"1rem",lineHeight:"25px",textTransform:"uppercase",cursor:"pointer",textDecoration:"none",opacity:"0"},boxContent:{width:"100%",position:"absolute",left:"0",bottom:"0",textTransform:"uppercase",padding:"10px",letterSpacing:"1px",color:"black",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transform:"scale(0.1)"},showOverlay:{opacity:"1",zIndex:"1",transform:"scale(50)",position:"absolute",transition:"transform 0.6s ease-in-out"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h3":Object(O.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.3)",width:"100%",marginBottom:"0",textAlign:"center",padding:"1rem",textTransform:"uppercase"},N.down("xs"),{fontSize:"5rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showCopyMeassge:{opacity:"1",transform:"scale(1)",zIndex:"2",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={copied:!1},a.changeCopyState=a.changeCopyState.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,t=e.background,a=e.name,n=e.paletteId,r=e.colorId,l=e.showingFullPalette,c=e.classes,i=this.state.copied;return o.a.createElement(E.CopyToClipboard,{text:t,onCopy:this.changeCopyState},o.a.createElement("div",{style:{background:t},className:c.ColorBox},o.a.createElement("div",{style:{background:t},className:k()(c.copyOverlay,Object(O.a)({},c.showOverlay,i))}),o.a.createElement("div",{className:k()(c.copyMessage,Object(O.a)({},c.showCopyMeassge,i))},o.a.createElement("h3",null,"Copied!!!"),o.a.createElement("p",{className:c.copyText},t)),o.a.createElement("div",null,o.a.createElement("div",{className:c.boxContent},o.a.createElement("span",{className:c.colorName},a)),o.a.createElement("button",{className:c.copyButton},"Copy")),l&&o.a.createElement(w.b,{to:"/palette/".concat(n,"/").concat(r),onClick:function(e){return e.stopPropagation}},o.a.createElement("span",{className:c.seeMore},"More"))))}}]),t}(n.Component),B=Object(b.a)(F)(D),I=a(189),A=(a(222),a(391)),L=a(407),T=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.format,a=e.handleChange;return o.a.createElement(L.a,{value:t,onChange:a},o.a.createElement(A.a,{value:"hex"},"HEX #ffffff"),o.a.createElement(A.a,{value:"rgb"},"RGB rgb(255, 255, 255)"),o.a.createElement(A.a,{value:"rgba"},"RGBA rgba(255, 255, 255, 1)"))}}]),t}(n.Component),M=a(409),R=a(392),G=a(177),z=a.n(G),U=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.format,a=e.open,n=e.handleClose;return o.a.createElement(M.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:3e3,onClose:n,message:"Format Changed to ".concat(t),action:o.a.createElement(o.a.Fragment,null,o.a.createElement(R.a,{size:"small",color:"inherit",onClick:n},o.a.createElement(z.a,{fontSize:"small"})))})}}]),t}(n.Component),H={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(O.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},N.down("xs"),{display:"none"}),slider:Object(O.a)({width:"340px",margin:"0 10px",display:"inline-block"},N.down("sm"),{width:"150px"}),FormatSelector:{marginLeft:"auto",marginRight:"2rem"}},q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={format:"hex",snackbarOpen:!1},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSnackbarClose=a.handleSnackbarClose.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){var t=this;this.setState({format:e.target.value,snackbarOpen:!0},function(){t.props.changeFormat(t.state.format)})}},{key:"handleSnackbarClose",value:function(){this.setState({snackbarOpen:!1})}},{key:"render",value:function(){var e=this.props,t=e.level,a=e.handleChangeLevel,n=e.showingAllColors,r=e.classes,l=this.state,c=l.format,i=l.snackbarOpen;return o.a.createElement("header",{className:r.Navbar},o.a.createElement("div",{className:r.logo},o.a.createElement(w.b,{to:"/"},"ColorFarm")),n&&o.a.createElement("div",null,o.a.createElement("span",null,"Level: ",t),o.a.createElement("div",{className:r.slider},o.a.createElement(I.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:a}))),o.a.createElement("div",{className:r.FormatSelector},o.a.createElement(T,{format:c,handleChange:this.handleChange})),o.a.createElement(U,{open:i,handleClose:this.handleSnackbarClose,format:c}))}}]),t}(n.Component),V=Object(b.a)(H)(q),W={Palette:{height:"100vh",overflow:"hidden",display:"flex",flexDirection:"column"},PaletteColors:{height:"90%",display:"flex",flexWrap:"wrap",justifyContent:"flex-start"},goBack:(g={width:"20%",height:"50%",backgroundColor:"black",position:"relative",cursor:"pointer",opacity:"1","& a":{color:"white",width:"100px",height:"30px",display:"inline-block",position:"absolute",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",outline:"none",border:"none",background:"rgba(255, 255, 255, 0.3)",textAlign:"center",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",cursor:"pointer",textDecoration:"none"}},Object(O.a)(g,N.down("lg"),{width:"25%",height:"33.33333%"}),Object(O.a)(g,N.down("md"),{width:"50%",height:"20%"}),Object(O.a)(g,N.down("xs"),{width:"100%",height:"10%"}),g)},J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={level:400,format:"hex"},a.handleChangeLevel=a.handleChangeLevel.bind(Object(h.a)(Object(h.a)(a))),a.changeFormat=a.changeFormat.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChangeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state,t=e.level,a=e.format,n=this.props.palette,r=n.colors,l=n.paletteName,c=n.id,i=n.emoji,s=this.props.classes,m=r[t].map(function(e){return o.a.createElement(B,{background:e[a],name:e.name,key:e.id,paletteId:c,colorId:e.id,showingFullPalette:!0})});return o.a.createElement("div",{className:s.Palette},o.a.createElement(V,{level:t,handleChangeLevel:this.handleChangeLevel,changeFormat:this.changeFormat,showingAllColors:!0}),o.a.createElement("div",{className:s.PaletteColors},m),o.a.createElement(y,{paletteName:l,emoji:i}))}}]),t}(n.Component),Y=Object(b.a)(W)(J),K=a(410),_=a(408),Q=a(393),X=a(394),$=a(390),Z=a(350),ee=a(395),te=a(412),ae=a(397),ne=a(396),oe=a(398),re=a(109),le=a(108),ce=a(104),ie=a.n(ce),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).deletePalette=a.deletePalette.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDeleteDialog(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.paletteName,n=e.emoji,r=e.colors,l=e.handleClick,c=e.id,i=r.map(function(e){return o.a.createElement("div",{className:t.miniColor,style:{backgroundColor:e.color},key:e.name})});return o.a.createElement("div",{className:t.root,onClick:function(){return l(c)}},o.a.createElement(ie.a,{className:t.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),o.a.createElement("div",{className:t.colors},i),o.a.createElement("h5",{className:t.title},a,o.a.createElement("span",{className:t.emoji},n)))}}]),t}(n.PureComponent),me=Object(b.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1},boxSizing:"content-box"},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-4px"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",top:"0",right:"0",padding:"10px",zIndex:10,opacity:"0"}})(se),de=a(178),ue={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#20cfee",backgroundImage:"url(".concat(a.n(de).a,")"),overflow:"scroll"},container:(v={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(O.a)(v,N.down("xl"),{width:"80%"}),Object(O.a)(v,N.down("xs"),{width:"70%"}),v),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(C={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"1.2rem"},Object(O.a)(C,N.down("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(O.a)(C,N.down("xs"),{gridTemplateColumns:"repeat(1, 100%)"}),C),heading:{fontSize:"2rem"}},he=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={openDeleteDialog:!1,deletePaletteId:""},a.openDeleteDialog=a.openDeleteDialog.bind(Object(h.a)(Object(h.a)(a))),a.closeDeleteDialog=a.closeDeleteDialog.bind(Object(h.a)(Object(h.a)(a))),a.handleDelete=a.handleDelete.bind(Object(h.a)(Object(h.a)(a))),a.goToPalette=a.goToPalette.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"openDeleteDialog",value:function(e){this.setState({openDeleteDialog:!0,deletePaletteId:e})}},{key:"closeDeleteDialog",value:function(){this.setState({openDeleteDialog:!1,deletePaletteId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletePaletteId),this.closeDeleteDialog()}},{key:"render",value:function(){var e=this,t=this.props,a=t.palettes,n=t.classes,r=this.state.openDeleteDialog;return o.a.createElement("div",{className:n.root},o.a.createElement("div",{className:n.container},o.a.createElement("nav",{className:n.nav},o.a.createElement("h1",{className:n.heading},"React Colors"),o.a.createElement(w.b,{to:"/palette/new"},"Create Palette")),o.a.createElement(K.a,{className:n.palettes},a.map(function(t){return o.a.createElement(_.a,{key:t.id,classNames:"fade",timeout:500},o.a.createElement(me,Object.assign({key:t.id,id:t.id,openDeleteDialog:e.openDeleteDialog},t,{handleClick:e.goToPalette})))}))),o.a.createElement(Q.a,{open:r,"aria-labelledby":"delete-dialog-title",onClose:this.closeDeleteDialog},o.a.createElement(X.a,{id:"delete-dialog-title"},"Delete This Palette"),o.a.createElement($.a,null,o.a.createElement(Z.a,{button:!0,onClick:this.handleDelete},o.a.createElement(ee.a,null,o.a.createElement(te.a,{style:{backgroundColor:re.a[100],color:re.a[600]}},o.a.createElement(ne.a,null))),o.a.createElement(ae.a,{primary:"Delete"})),o.a.createElement(Z.a,{button:!0,onClick:this.closeDeleteDialog},o.a.createElement(ee.a,null,o.a.createElement(te.a,{style:{backgroundColor:le.a[100],color:le.a[600]}},o.a.createElement(oe.a,null))),o.a.createElement(ae.a,{primary:"Cancel"})))))}}]),t}(n.Component),pe=Object(b.a)(ue)(he),be=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\udf55",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\udf7f",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83e\udd57",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\udf71",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\udf59",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\udf56",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83e\uddc2",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],fe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={format:"hex"},a._shades=a.gatherColors(a.props.palette.colors,a.props.colorId),a.changeFormat=a.changeFormat.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"gatherColors",value:function(e,t){var a=[];for(var n in e)a=a.concat(e[n].filter(function(e){return e.id===t}));return a.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,t=this.props.palette,a=t.paletteName,n=t.emoji,r=t.id,l=this.props.classes,c=this._shades.map(function(t){return o.a.createElement(B,{background:t[e],name:t.name,key:t.name,showingFullPalette:!1})});return o.a.createElement("div",{className:l.Palette},o.a.createElement(V,{changeFormat:this.changeFormat,showingAllColors:!1}),o.a.createElement("div",{className:l.PaletteColors},c,o.a.createElement("div",{className:l.goBack},o.a.createElement(w.b,{to:"/palette/".concat(r),className:"back-button"},"Go Back"))),o.a.createElement(y,{paletteName:a,emoji:n}))}}]),t}(n.Component),ge=Object(b.a)(W)(fe),ve=a(413),Ce=a(406),je=a(76),ye=a(402),Oe=a(187),we=a.n(Oe),Ee=a(179),xe=a.n(Ee),ke=a(352),Se=a(107),Pe={root:(j={width:"20%",height:"25%",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-5.5px","&:hover button":{opacity:"1",transition:"0.5s"},"&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(O.a)(j,N.down("lg"),{width:"25%",height:"20%"}),Object(O.a)(j,N.down("md"),{width:"50%",height:"10%"}),Object(O.a)(j,N.down("sm"),{width:"50%",height:"10%"}),j),boxContent:Object(O.a)({width:"100%",position:"absolute",left:"0",bottom:"0",textTransform:"uppercase",padding:"10px",letterSpacing:"1px",color:function(e){return P()(e.color).luminance()<=.08?"white":"black"},fontSize:"12px",display:"flex",justifyContent:"space-between"},N.down("sm"),{padding:"0 10px"}),deleteIcon:{transition:"all 0.3s ease-in-out"}},Ne=Object(Se.b)(function(e){var t=e.color,a=e.name,n=e.classes,r=e.handleClick;return o.a.createElement("div",{className:n.root,style:{backgroundColor:t}},o.a.createElement("div",{className:n.boxContent},o.a.createElement("span",null,a),o.a.createElement(ie.a,{className:n.deleteIcon,onClick:r})))}),Fe=Object(ke.a)(Pe)(Ne),De=Object(Se.a)(function(e){var t=e.colors,a=e.removeColor;return o.a.createElement("div",{style:{height:"100%"}},t.map(function(e,t){return o.a.createElement(Fe,{index:t,key:e.name,color:e.color,name:e.name,handleClick:function(){return a(e.name)}})}))}),Be=a(403),Ie=a(404),Ae=a(405),Le=a(181),Te=a.n(Le),Me=a(399),Re=a(400),Ge=a(401),ze=a(59),Ue=(a(240),a(190)),He=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={stage:"form",newPaletteName:""},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.setEmojiState=a.setEmojiState.bind(Object(h.a)(Object(h.a)(a))),a.savePalette=a.savePalette.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;ze.ValidatorForm.addValidationRule("isPaletteNameUnique",function(t){return e.props.Palettes.every(function(e){return e.paletteName.toLowerCase()!==t.toLowerCase()})})}},{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"setEmojiState",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var t={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSavePalette(t),this.setState({stage:"form"})}},{key:"render",value:function(){var e=this.state,t=e.stage,a=e.newPaletteName,n=this.props.hideForm;return o.a.createElement("div",null,o.a.createElement(Q.a,{open:"emoji"===t,onClose:n},o.a.createElement(X.a,{id:"form-dialog-title"},"Pick A Palette Emoji"),o.a.createElement(Ue.a,{onSelect:this.savePalette,perLine:10,showPreview:!1,showSkinTones:!1})),o.a.createElement(Q.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:n},o.a.createElement(X.a,{id:"form-dialog-title"},"Enter A Palette Name"),o.a.createElement(ze.ValidatorForm,{onSubmit:this.setEmojiState},o.a.createElement(Me.a,null,o.a.createElement(Re.a,null,"Please Enter a name for your Beautiful Palette. Makesure it is unique."),o.a.createElement(ze.TextValidator,{label:"Palette Name",name:"newPaletteName",fullWidth:!0,margin:"normal",value:a,onChange:this.handleChange,validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Pallete name Must be Unique"]})),o.a.createElement(Ge.a,null,o.a.createElement(ye.a,{onClick:n,color:"primary"},"Cancel"),o.a.createElement(ye.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(n.Component),qe=400;document.documentElement.clientWidth<768&&(qe=document.documentElement.clientWidth);var Ve=qe,We=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(Ve,"px)"),marginLeft:Ve,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},navBtns:Object(O.a)({marginRight:"1rem","& a":{textDecoration:"none"}},N.down("xs"),{marginRight:"0.5rem"}),btn:Object(O.a)({margin:"0 0.5rem"},N.down("xs"),{margin:"0.1rem",padding:"0.2rem"}),heading:Object(O.a)({},N.down("xs"),{fontSize:"1rem",marginLeft:"-1rem"})}},Je=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={formShowing:!1},a.showForm=a.showForm.bind(Object(h.a)(Object(h.a)(a))),a.hideForm=a.hideForm.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.open,n=e.Palettes,r=e.handleSavePalette,l=e.handleDrawerOpen,c=this.state.formShowing;return o.a.createElement("div",{className:t.root},o.a.createElement(Be.a,null),o.a.createElement(Ie.a,{color:"default",position:"fixed",className:k()(t.appBar,Object(O.a)({},t.appBarShift,a))},o.a.createElement(Ae.a,{disableGutters:!a},o.a.createElement(R.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:k()(t.menuButton,a&&t.hide)},o.a.createElement(Te.a,null)),o.a.createElement(je.a,{variant:"h6",color:"inherit",noWrap:!0,className:t.heading},"Create a new Palette")),o.a.createElement("div",{className:t.navBtns},o.a.createElement(ye.a,{variant:"contained",color:"primary",className:t.btn,onClick:this.showForm},"Save"),o.a.createElement(w.b,{to:"/"},o.a.createElement(ye.a,{variant:"contained",color:"secondary",className:t.btn},"Go Back")))),c&&o.a.createElement(He,{Palettes:n,handleSavePalette:r,hideForm:this.hideForm}))}}]),t}(n.Component),Ye=Object(b.a)(We,{withTheme:!0})(Je),Ke=a(188),_e={picker:{width:"100% !important",marginTop:"2rem"},addColorBtn:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},Qe=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={newColorName:"",currentColor:"teal"},a.updateCurrentColor=a.updateCurrentColor.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;ze.ValidatorForm.addValidationRule("isColorNameUnique",function(t){return e.props.colors.every(function(e){return e.name.toLowerCase()!==t.toLowerCase()})}),ze.ValidatorForm.addValidationRule("isColorUnique",function(t){return e.props.colors.every(function(t){return t.color!==e.state.currentColor})})}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.props,t=e.paletteIsFull,a=e.classes,n=this.state,r=n.newColorName,l=n.currentColor;return o.a.createElement("div",null,o.a.createElement(Ke.a,{className:a.picker,color:l,onChangeComplete:this.updateCurrentColor}),o.a.createElement(ze.ValidatorForm,{onSubmit:this.handleSubmit,instantValidate:!1},o.a.createElement(ze.TextValidator,{className:a.colorNameInput,variant:"filled",margin:"normal",placeholder:"Color Name",name:"newColorName",value:r,onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter Color Name","Color name Must be Unique","Color already taken"]}),o.a.createElement(ye.a,{className:a.addColorBtn,variant:"contained",type:"submit",color:"primary",style:t?{}:{backgroundColor:l},disabled:t},t?"Palette Full":"AddColor")))}}]),t}(n.Component),Xe=Object(b.a)(_e)(Qe),$e=a(186),Ze=qe,et=function(e){return{root:{display:"flex"},drawer:{width:Ze,flexShrink:0},drawerPaper:{width:Ze,display:"flex",alignItems:"center"},drawerHeader:Object($e.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-Ze},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:Object(O.a)({width:"90%",height:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",overflow:"hidden"},N.down("xs"),{width:"80%"}),buttons:{width:"100%"},button:{width:"50%"}}},tt=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleDrawerOpen=function(){a.setState({open:!0})},a.handleDrawerClose=function(){a.setState({open:!1})},a.onSortEnd=function(e){var t=e.oldIndex,n=e.newIndex;a.setState(function(e){var a=e.colors;return{colors:xe()(a,t,n)}})},a.state={open:!1,colors:be[0].colors},a.addNewColor=a.addNewColor.bind(Object(h.a)(Object(h.a)(a))),a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSavePalette=a.handleSavePalette.bind(Object(h.a)(Object(h.a)(a))),a.removeColor=a.removeColor.bind(Object(h.a)(Object(h.a)(a))),a.clearPalette=a.clearPalette.bind(Object(h.a)(Object(h.a)(a))),a.addRandomColor=a.addRandomColor.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(c.a)(this.state.colors),[e])})}},{key:"handleChange",value:function(e){this.setState(Object(O.a)({},e.target.name,e.target.value))}},{key:"handleSavePalette",value:function(e){var t=e.paletteName,a=e.emoji,n={paletteName:t,id:t.toLowerCase().replace(/ /g,"-"),emoji:a,colors:this.state.colors};this.props.savePalette(n),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter(function(t){return t.name!==e})})}},{key:"clearPalette",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){var e=this.state.colors,t=this.props.Palettes.map(function(e){return e.colors}).flat(),a="",n=!0;do{a=t[Math.floor(Math.random()*t.length)],n=e.some(function(e){return e.name===a.name})}while(n);this.setState({colors:[].concat(Object(c.a)(this.state.colors),[a])})}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.maxLength,n=e.Palettes,r=this.state,l=r.open,c=r.colors,i=c.length>=a;return o.a.createElement("div",{className:t.root},o.a.createElement(Ye,{open:l,classes:t,Palettes:n,handleSavePalette:this.handleSavePalette,handleDrawerOpen:this.handleDrawerOpen}),o.a.createElement(ve.a,{className:t.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper}},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(R.a,{onClick:this.handleDrawerClose},o.a.createElement(we.a,null))),o.a.createElement(Ce.a,null),o.a.createElement("div",{className:t.container},o.a.createElement(je.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),o.a.createElement("div",{className:t.buttons},o.a.createElement(ye.a,{className:t.button,variant:"contained",color:"secondary",onClick:this.clearPalette},"Clear Palette"),o.a.createElement(ye.a,{className:t.button,variant:"contained",color:"primary",onClick:this.addRandomColor,disabled:i},"Random Color")),o.a.createElement(Xe,{paletteIsFull:i,addNewColor:this.addNewColor,colors:c}))),o.a.createElement("main",{className:k()(t.content,Object(O.a)({},t.contentShift,l))},o.a.createElement("div",{className:t.drawerHeader}),o.a.createElement(De,{colors:c,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:15})))}}]),t}(n.Component);tt.defaultProps={maxLength:20};var at=Object(b.a)(et,{withTheme:!0})(tt);function nt(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return ot(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ot(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){c=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(c)throw r}}}}function ot(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var rt=[0,100,200,300,400,500,600,700,800,900];var lt=function(e){var t,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},n=nt(rt);try{for(n.s();!(t=n.n()).done;){var o=t.value;a.colors[o]=[]}}catch(u){n.e(u)}finally{n.f()}var r,l,c,i=nt(e.colors);try{for(i.s();!(r=i.n()).done;){var s=r.value,m=(l=s.color,c=10,P.a.scale(function(e){return[P()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(c)).reverse();for(var d in m)a.colors[rt[d]].push({name:"".concat(s.name," ").concat(rt[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:P()(m[d]).css(),rgba:P()(m[d]).css("rgba")})}}catch(u){i.e(u)}finally{i.f()}return a},ct=function(e){function t(e){var a;Object(i.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e));var n=JSON.parse(window.localStorage.getItem("palettes"));return a.state={palettes:n||be},a.savePalette=a.savePalette.bind(Object(h.a)(Object(h.a)(a))),a.findPalette=a.findPalette.bind(Object(h.a)(Object(h.a)(a))),a.deletePalette=a.deletePalette.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find(function(t){return t.id===e})}},{key:"deletePalette",value:function(e){this.setState(function(t){return{palettes:t.palettes.filter(function(t){return t.id!==e})}},this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(c.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this,t=this.state.palettes;return o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",render:function(a){return o.a.createElement(pe,Object.assign({palettes:t},a,{deletePalette:e.deletePalette}))}}),o.a.createElement(p.a,{exact:!0,path:"/palette/new",render:function(a){return o.a.createElement(at,Object.assign({savePalette:e.savePalette},a,{Palettes:t}))}}),o.a.createElement(p.a,{exact:!0,path:"/palette/:id",render:function(t){return o.a.createElement(Y,{palette:lt(e.findPalette(t.match.params.id))})}}),o.a.createElement(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(t){return o.a.createElement(ge,{palette:lt(e.findPalette(t.match.params.paletteId)),colorId:t.match.params.colorId})}}),o.a.createElement(p.a,{render:function(a){return o.a.createElement(pe,Object.assign({palettes:t},a,{deletePalette:e.deletePalette}))}}))}}]),t}(n.Component),it=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,414)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),o(e),r(e),l(e)})};l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(w.a,null,o.a.createElement(ct,null))),document.getElementById("root")),it()}},[[204,1,2]]]);
//# sourceMappingURL=main.817a046b.chunk.js.map