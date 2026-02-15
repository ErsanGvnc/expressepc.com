// ==================== PRODUCTS DATA ====================
const productsData = {
  "piping-materials": {
    title: { en: "Piping Materials", tr: "Boru Malzemeleri" },
    sections: [
      {
        id: "pipes",
        title: { en: "Pipes", tr: "Borular" },
        icon: "fa-grip-lines",
        products: [
          {
            id: "seamless-pipes",
            name: "Seamless Pipes (CS, SS, Duplex and Alloy)",
            desc: {
              en: "Seamless pipes are widely used in EPC projects across industries such as oil & gas, petrochemicals, power plants, water treatment, and infrastructure. They are preferred over welded pipes in high-pressure, high-temperature, and critical applications due to their superior strength, uniformity, and corrosion resistance.",
              tr: "Kritik uygulamalar için yüksek kaliteli dikişsiz borular",
            },
            specs: ["ASTM A106", "API 5L", "ASTM A312"],
            image: "./global/products/Seamless_Pipes.jpg",
          },
          {
            id: "welded-pipes",
            name: "Welded Pipes (CS, SS, Duplex and Alloy)",
            desc: {
              en: "Welded pipes are essential in EPC (Engineering, Procurement, and Construction) projects, primarily used for transporting fluids (oil, gas, water, chemicals, etc.) in industries like oil & gas, petrochemicals, power plants, water treatment, and infrastructure. These pipes are manufactured by rolling steel plates and welding the seams, making them cost-effective and suitable for various applications.",
              tr: "Endüstriyel kullanım için dayanıklı kaynaklı borular",
            },
            specs: ["ASTM A53", "API 5L", "ASTM A358"],
            image: "./global/products/Welded_Pipes.jpg",
          },
          {
            id: "titanium-pipes",
            name: "Titanium Pipes",
            desc: {
              en: "Titanium pipes are widely used in EPC (Engineering, Procurement, and Construction) projects, particularly in industries where corrosion resistance, high strength, and durability are essential. These industries include oil & gas, chemical processing, power generation, desalination, and marine applications.",
              tr: "Korozyona dayanıklı titanyum boru çözümleri",
            },
            specs: ["ASTM B338", "ASTM B861"],
            image: "./global/products/Titanium_Pipes.jpg",
          },
          {
            id: "thermosetting-plastic-pipes",
            name: "Thermosetting Plastic Pipes (GRP, FRP)",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, thermosetting plastic pipes are increasingly used due to their high strength, corrosion resistance, and thermal stability. These pipes are particularly valuable in industries such as oil & gas, chemical processing, water treatment, and power plants.",
              tr: "Hafif ve dayanıklı kompozit borular",
            },
            specs: ["ASTM D2996", "ISO 14692"],
            image:
              "./global/products/Thermosetting_Plastic_Pipes_(GRP, FRP).jpeg",
          },
          {
            id: "thermoplastic-pipes",
            name: "Thermoplastic Pipes (HDPE, ABS, C-PVC, U-PVC)",
            desc: {
              en: "Thermoplastic pipes are commonly used in EPC (Engineering, Procurement, and Construction) projects due to their lightweight nature, ease of installation, and excellent resistance to corrosion, chemicals, and various environmental conditions. Here's an overview of the materials you mentioned.",
              tr: "Çok yönlü termoplastik boru sistemleri",
            },
            specs: ["ASTM D2737", "ISO 4427"],
            image:
              "./global/products/Thermoplastic_Pipes_(HDPE, ABS, C-PVC, U-PVC).jpg",
          },
          {
            id: "ptfe-lined-pipes",
            name: "PTFE Lined Pipes and Fittings",
            desc: {
              en: "PTFE (Polytetrafluoroethylene) lined pipes and fittings are widely used in EPC (Engineering, Procurement, and Construction) projects, especially in industries such as chemical processing, pharmaceuticals, food processing, and any sector that handles highly corrosive fluids, gases, or hazardous materials.",
              tr: "Kimyasal dayanıklı PTFE kaplı çözümler",
            },
            specs: ["ASTM F2619"],
            image: "./global/products/PTFE_Lined_Pipes_and_Fittings.jpg",
          },
          {
            id: "cra-cladded-pipes",
            name: "CRA cladded pipes",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, CRA (Corrosion-Resistant Alloy) cladded pipes are often selected for applications where high resistance to corrosion is essential, especially in environments involving aggressive fluids or harsh conditions, such as oil and gas production, chemical processing, or power generation.",
              tr: "Korozyona dayanıklı alaşım kaplamalı borular",
            },
            specs: ["API 5LD"],
            image: "./global/products/CRA_cladded_pipes.jpg",
          },
        ],
      },
      {
        id: "fittings",
        title: { en: "Fittings", tr: "Fittingler" },
        icon: "fa-circle-nodes",
        products: [
          {
            id: "forged-fittings",
            name: "Forged Fittings",
            desc: {
              en: "Forged fittings are commonly used in Engineering, Procurement, and Construction (EPC) projects, particularly in industries like oil and gas, petrochemical, and power plants. They are essential components in piping systems, providing connections for various sections of pipe and valves. These fittings are made by forging metal, which involves shaping the material using localized compressive forces, making them stronger and more durable than cast fittings.",
              tr: "Yüksek basınçlı dövme boru ek parçaları",
            },
            specs: ["ASME B16.11", "MSS SP-79"],
            image: "./global/products/Forged_Fittings.jpg",
          },
          {
            id: "buttweld-fittings",
            name: "Buttweld Fittings",
            desc: {
              en: "Buttweld fittings are essential components used in EPC (Engineering, Procurement, and Construction) projects, particularly in piping systems for various industries like oil and gas, power plants, chemicals, and water treatment. These fittings are welded into place, ensuring a seamless, high-strength connection between pipes. Here’s an overview of their role and materials.",
              tr: "Hassas alın kaynaklı ek parçalar",
            },
            specs: ["ASME B16.9", "ASME B16.28"],
            image: "./global/products/Buttweld_Fittings.jpg",
          },
          {
            id: "olets-swages",
            name: "Olets and Swages",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Olets and Swages are both types of pipe fittings used in the piping systems, each serving a unique function. They are essential in ensuring the proper flow of fluids or gases and maintaining the integrity and safety of the piping systems. Let's dive into the details.",
              tr: "Dal bağlantısı ve redüksiyon ek parçaları",
            },
            specs: ["MSS SP-97"],
            image: "./global/products/Olets_and_Swages.jpg",
          },
          {
            id: "forged-titanium-fittings",
            name: "Forged Titanium Fittings",
            desc: {
              en: "Forged titanium fittings are an essential component in EPC (Engineering, Procurement, and Construction) projects, particularly in industries where durability, strength, and corrosion resistance are paramount. Titanium is known for its excellent performance in extreme environments, which makes it a popular choice in sectors such as aerospace, chemical processing, oil and gas, and marine applications.",
              tr: "Hafif titanyum dövme ek parçalar",
            },
            specs: ["ASTM B363"],
            image: "./global/products/Forged_Titanium_Fittings.webp",
          },
          {
            id: "buttweld-titanium-fittings",
            name: "Buttweld Titanium Fittings",
            desc: {
              en: "Buttweld titanium fittings are commonly used in Engineering, Procurement, and Construction (EPC) projects due to their excellent strength-to-weight ratio, high corrosion resistance, and durability, particularly in environments where metals such as stainless steel or carbon steel may not perform as well. They are widely used in industries such as chemical, oil and gas, aerospace, power generation, and marine due to these properties.",
              tr: "Korozyona dayanıklı titanyum ek parçalar",
            },
            specs: ["ASTM B363"],
            image: "./global/products/Buttweld_Titanium_Fittings.jpg",
          },
          {
            id: "thermoplastic-fittings",
            name: "Thermoplastic Fittings (HDPE, ABS, C-PVC, U-PVC)",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, thermoplastic fittings made from materials such as HDPE, ABS, C-PVC, and U-PVC are commonly used for piping systems. These materials offer specific advantages depending on the requirements of the project. Here's a breakdown of each material.",
              tr: "Kimyasal dayanıklı plastik ek parçalar",
            },
            specs: ["ASTM D2467"],
            image:
              "./global/products/Thermoplastic_Fittings_(HDPE, ABS, C-PVC, U-PVC).jpg",
          },
        ],
      },
      {
        id: "flanges",
        title: { en: "Flanges", tr: "Flanşlar" },
        icon: "fa-ring",
        products: [
          {
            id: "blind-flanges",
            name: "Blind Flanges",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, blind flanges are critical components used in piping and pressure systems, often for safety, maintenance, or isolation purposes. Here's a breakdown of how blind flanges fit into EPC projects, including materials considerations.",
              tr: "Boru uçları için sızdırmazlık flanşları",
            },
            specs: ["ASME B16.5", "ASME B16.47"],
            image: "./global/products/Blind_Flanges.png",
          },
          {
            id: "welding-neck-flanges",
            name: "Welding Neck Flanges",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, welding neck flanges are critical components for pipe systems, especially in industries like oil and gas, petrochemical, chemical, and power plants. These flanges are often used in high-pressure or high-temperature systems because they provide a strong, reliable joint.",
              tr: "Yüksek basınçlı kaynak boyunlu flanşlar",
            },
            specs: ["ASME B16.5", "DIN 2632"],
            image: "./global/products/Welding_Neck_Flanges.png",
          },
          {
            id: "slip-on-flanges",
            name: "Slip on Flanges",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, slip-on flanges are commonly used for connecting pipes and equipment in various industries, including oil and gas, water, petrochemical, and power plants. These flanges are designed to 'slip' over the pipe and then be welded into place, making them ideal for applications where a simple, reliable, and cost-effective connection is needed.",
              tr: "Kolay montaj kayar flanşlar",
            },
            specs: ["ASME B16.5"],
            image: "./global/products/Slip_On_Flanges.jpg",
          },
          {
            id: "socket-weld-flanges",
            name: "Socket Weld Flanges",
            desc: {
              en: "Socket weld flanges are commonly used in high-pressure and high-temperature systems, especially in smaller diameter piping systems (typically sizes up to 2 inches). They are particularly prevalent in EPC (Engineering, Procurement, and Construction) projects because they provide a secure and reliable connection that can withstand the stresses encountered in industrial applications.",
              tr: "Soket kaynak bağlantı flanşları",
            },
            specs: ["ASME B16.5"],
            image: "./global/products/Socket_Weld_Flanges.jpg",
          },
          {
            id: "lap-joint-flanges",
            name: "Lap Joint Flanges",
            desc: {
              en: "Lap joint flanges are commonly used in EPC (Engineering, Procurement, and Construction) projects, especially in piping systems. They provide flexibility, ease of installation, and maintenance. Here's a breakdown of the key aspects, focusing on materials and how they fit into EPC projects.",
              tr: "Döner bindirme ek flanşları",
            },
            specs: ["ASME B16.5"],
            image: "./global/products/Lap_Joint_Flanges.png",
          },
          {
            id: "threaded-flanges",
            name: "Threaded Flanges",
            desc: {
              en: "Threaded flanges are an essential component in EPC (Engineering, Procurement, and Construction) projects, particularly for piping systems where ease of installation and disassembly is needed without welding. These flanges are designed with internal threads that allow them to be screwed onto the pipe. This makes them ideal for systems where welding or high-temperature processes are not desired.",
              tr: "Dişli bağlantı flanşları",
            },
            specs: ["ASME B16.5"],
            image: "./global/products/Threaded_Flanges.png",
          },
        ],
      },
      {
        id: "bolts",
        title: { en: "Bolts", tr: "Cıvatalar" },
        icon: "fa-bolt",
        products: [
          {
            id: "stud-bolts",
            name: "Stud Bolts",
            desc: {
              en: "Stud bolts are a critical component in Engineering, Procurement, and Construction (EPC) projects, used primarily for fastening applications in various industrial settings, especially in high-pressure or high-temperature environments. They are typically used in the assembly of equipment, piping, and structural parts where two or more parts need to be securely fastened.",
              tr: "Flanşlar için yüksek mukavemetli saplama cıvatalar",
            },
            specs: ["ASTM A193", "ASTM A320"],
            image: "./global/products/Stud_Bolts.jpeg",
          },
          {
            id: "machine-bolts",
            name: "Machine Bolts",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, machine bolts play a crucial role as fasteners used to join or secure machine components and structural parts together. They are vital in ensuring the stability, safety, and functionality of the machinery and equipment being installed or constructed.",
              tr: "Standart makine cıvataları",
            },
            specs: ["ASTM A307", "ASTM F3125"],
            image: "./global/products/Machine_Bolts.png",
          },
          {
            id: "coated-bolts",
            name: "Coated Bolts",
            desc: {
              en: "Coated bolts play an essential role in EPC (Engineering, Procurement, and Construction) projects, as they provide corrosion resistance and help enhance the longevity of the bolts, especially in environments that are prone to rust, chemicals, or harsh weather.",
              tr: "Korozyon korumalı kaplamalı cıvatalar",
            },
            specs: ["ASTM A325", "ASTM A490"],
            image: "./global/products/Coated_Bolts.png",
          },
          {
            id: "stainless-duplex-bolts",
            name: "Stainless Steel and Duplex Bolts",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, stainless steel bolts and duplex bolts are commonly used in various construction and industrial applications due to their strength, corrosion resistance, and durability.",
              tr: "Korozyona dayanıklı paslanmaz cıvatalar",
            },
            specs: ["ASTM A193 B8", "ASTM A276"],
            image: "./global/products/Stainless_Steel_and_Duplex_Bolts.png",
          },
        ],
      },
      {
        id: "gaskets",
        title: { en: "Gaskets", tr: "Contalar" },
        icon: "fa-disc-drive",
        products: [
          {
            id: "spiral-wound-gaskets",
            name: "Spiral Wound Gaskets (SWG)",
            desc: {
              en: "Spiral Wound Gaskets (SWG) are commonly used in EPC (Engineering, Procurement, and Construction) projects for sealing applications, especially in industries such as oil and gas, petrochemical, power, and chemical processing. They are primarily designed to seal flanged connections and prevent leakage of gases, liquids, and other substances under high-pressure and temperature conditions.",
              tr: "Yüksek basınçlı spiral sarmal contalar",
            },
            specs: ["ASME B16.20"],
            image: "./global/products/Spiral_Wound_Gaskets_(SWG).png",
          },
          {
            id: "rtj-gaskets",
            name: "Ring Type Joint (RTJ) Gaskets",
            desc: {
              en: "Ring Type Joint (RTJ) gaskets are crucial components in EPC (Engineering, Procurement, and Construction) projects, particularly for applications requiring high pressure and high-temperature sealing. They are typically used in flanged joints within piping systems, pressure vessels, and heat exchangers, especially in industries like oil and gas, petrochemical, and chemical processing. The RTJ design allows for an effective seal under high pressure and temperature conditions.",
              tr: "Metal halka ek contaları",
            },
            specs: ["API 6A"],
            image: "./global/products/Ring_Type_Joint_(RTJ)_Gaskets.png",
          },
          {
            id: "kammprofile-gaskets",
            name: "Kammprofile Gaskets",
            desc: {
              en: "Kammprofile gaskets are highly effective sealing solutions used in many engineering applications, particularly in EPC (Engineering, Procurement, and Construction) projects. They consist of a core material, typically made of metal, with one or both faces covered by soft sealing material (such as graphite or PTFE). The combination of the metal core and the soft facing material allows the gasket to provide an excellent seal under a variety of harsh operating conditions, including high pressure and temperature.",
              tr: "Dişli metal contalar",
            },
            specs: ["DIN 2697"],
            image: "./global/products/Kammprofile_Gaskets.png",
          },
          {
            id: "non-asbestos-gaskets",
            name: "Non-Asbestos Sheet Material Gaskets",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, non-asbestos sheet material gaskets are commonly used for sealing purposes in various industries, particularly where there is a need for safety and environmental responsibility. These gaskets are preferred in applications where asbestos-containing materials (ACMs) were once commonly used, but their hazardous nature led to a ban in many countries. Non-asbestos gaskets offer similar performance characteristics without the health risks.",
              tr: "Asbest içermeyen levha contalar",
            },
            specs: ["ASME B16.21"],
            image: "./global/products/Non-Asbestos_Sheet_Material_Gaskets.png",
          },
        ],
      },
      {
        id: "valves",
        title: { en: "Valves", tr: "Vanalar" },
        icon: "fa-valve",
        products: [
          {
            id: "forged-valves",
            name: "Forged Valves (Gate, Ball, Check and Globe)",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, forged valves (such as gate, ball, check, and globe valves) are critical components used to regulate the flow of liquids and gases in pipelines and systems across industries like oil & gas, petrochemical, power, water treatment, and many more. Forged valves are typically preferred for their superior strength, durability, and ability to handle high-pressure environments, as the forging process creates a denser and more reliable material structure compared to cast valves.",
              tr: "Yüksek basınçlı dövme vanalar",
            },
            specs: ["API 602", "BS 5352"],
            image:
              "./global/products/Forged_Valves_(Gate, Ball, Check and Globe).webp",
          },
          {
            id: "cast-valves",
            name: "Cast Valves (Gate, Ball, Check and Globe)",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, valves such as gate, ball, check, and globe are integral to fluid control systems in industries like oil and gas, petrochemical, water treatment, and power generation. Each valve type has specific applications and material requirements, which are chosen based on factors like pressure, temperature, and chemical compatibility.",
              tr: "Döküm çelik endüstriyel vanalar",
            },
            specs: ["API 600", "API 6D"],
            image:
              "./global/products/Cast_Valves_(Gate, Ball, Check and Globe).png",
          },
          {
            id: "fire-water-valve",
            name: "Fire Water Valve",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, the Fire Water Valve plays a crucial role in ensuring fire safety and efficient water distribution for firefighting systems. These valves control the flow of water within fire protection systems such as hydrants, sprinkler systems, and deluge systems.",
              tr: "Yangın koruma sistemi vanaları",
            },
            specs: ["UL/FM Approved"],
            image: "./global/products/Fire_Water_Valve.png",
          },
          {
            id: "ball-valve",
            name: "Ball Valve",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, ball valves play an important role in the control and isolation of fluid systems, typically in pipelines for oil, gas, petrochemical, water treatment, and industrial applications. Ball valves are favored for their simplicity, reliability, and versatility, and are used to control the flow of liquids and gases.",
              tr: "Çeyrek dönüş küresel vanalar",
            },
            specs: ["API 6D", "ISO 17292"],
            image: "./global/products/Ball_Valve.webp",
          },
          {
            id: "butterfly-valve",
            name: "Butterfly Valve",
            desc: {
              en: "In Engineering, Procurement, and Construction (EPC) projects, butterfly valves play a crucial role in controlling the flow of fluids, especially in industries such as oil and gas, water treatment, HVAC, and chemical processing. These valves are typically used in systems where quick flow regulation, tight shutoff, and space efficiency are important.",
              tr: "Wafer ve flanşlı kelebek vanalar",
            },
            specs: ["API 609", "ISO 5752"],
            image: "./global/products/Butterfly_Valve.jpg",
          },
          {
            id: "stop-check-valve",
            name: "Stop Check Valve",
            desc: {
              en: "A Stop Check Valve in Engineering, Procurement, and Construction (EPC) projects is typically used to control the flow of fluids in a system. It combines the functions of a stop valve and a check valve. It ensures that the flow can be stopped manually when needed, while also preventing backflow when the valve is closed.",
              tr: "Kombine durdurma ve kontrol vanası",
            },
            specs: ["API 6D"],
            image: "./global/products/Stop_Check_Valve.jpg",
          },
          {
            id: "dual-plate-check-valve",
            name: "Dual Plate Check Valve",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Dual Plate Check Valves (DPCV) are commonly used to control the backflow of fluid in pipelines, ensuring that it only flows in one direction. These valves consist of two plates that open and close in response to flow direction, preventing reverse flow, which could lead to system damage or inefficiency.",
              tr: "Yaylı çift plakalı kontrol vanası",
            },
            specs: ["API 594"],
            image: "./global/products/Dual_Plate_Check_Valve.png",
          },
          {
            id: "needle-valve",
            name: "Needle Valve",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, needle valves play a crucial role in regulating and controlling the flow of liquids or gases in piping systems. These valves are highly precise and are typically used in applications that require fine control over the flow rate.",
              tr: "Hassas akış kontrol iğne vanaları",
            },
            specs: ["ASME B16.34"],
            image: "./global/products/Needle_Valve.jpeg",
          },
        ],
      },
      {
        id: "other",
        title: { en: "Other Piping Materials", tr: "Diğer Boru Malzemeleri" },
        icon: "fa-toolbox",
        products: [
          {
            id: "f8-blind-spacer",
            name: "F8, Blind and Spacer",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects—especially those involving piping systems such as in oil & gas, petrochemical, or power plants—F8, Blind, and Spacer are terms related to flanges and piping components used for flow control, isolation, or maintenance.",
              tr: "Gözlük körler ve aralayıcılar",
            },
            specs: [],
            image: "./global/products/F8,_Blind_and_Spacer.jpg",
          },
          {
            id: "flange-splash-guards",
            name: "Flange Splash Guards",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Flange Splash Guards play a critical role in enhancing safety and environmental protection by containing leaks or sprays from flanged joints in piping systems that transport hazardous, corrosive, or pressurized fluids.",
              tr: "Flanşlar için güvenlik sıçrama korumaları",
            },
            specs: [],
            image: "./global/products/Flange_Splash_Guards.png",
          },
          {
            id: "hose-connections",
            name: "Hose and Hose Connections",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, hoses and hose connections play a crucial role in temporary and permanent piping systems—especially for fluid transfer during construction, commissioning, and operation phases. These are used in various applications such as hydraulic systems, fuel and chemical transfer, utility services, and firefighting systems.",
              tr: "Esnek hortum montajları",
            },
            specs: [],
            image: "./global/products/Hose_and_Hose_Connections.png",
          },
          {
            id: "sight-glasses",
            name: "Sight Glasses",
            desc: {
              en: "Sight glasses are essential components in EPC (Engineering, Procurement, and Construction) projects, particularly in piping and process systems, where visual inspection of fluids inside a pipeline or vessel is necessary. Below is a structured overview with details focused on materials, which are crucial for ensuring compatibility, durability, and safety.",
              tr: "Akış gösterge gözlük camları",
            },
            specs: [],
            image: "./global/products/Sight_Glasses.png",
          },
          {
            id: "metallic-expansion-joints",
            name: "Metallic Expansion Joints",
            desc: {
              en: "Metallic Expansion Joints (also called compensators or bellows) are critical components in EPC (Engineering, Procurement, and Construction) projects, particularly in piping systems for power plants, oil & gas, refineries, chemical plants, and other industrial facilities. They are designed to absorb thermal expansion, mechanical movement, and vibration, protecting pipes, equipment, and structures.",
              tr: "Metal körüklü genleşme elemanları",
            },
            specs: ["EJMA Standards"],
            image: "./global/products/Metallic_Expansion_Joints.png",
          },
          {
            id: "non-metallic-expansion-joints",
            name: "Non-Metallic Expansion Joints",
            desc: {
              en: "Non-metallic expansion joints (also called fabric expansion joints or fabric compensators) are critical components in EPC (Engineering, Procurement, and Construction) projects—especially in power plants, refineries, petrochemical, and HVAC systems—where they absorb movements caused by thermal expansion, vibrations, and misalignments in ducting systems that transport hot gases, air, or fumes.",
              tr: "Kumaş ve kauçuk genleşme elemanları",
            },
            specs: ["EJMA Standards"],
            image: "./global/products/Non-Metallic_Expansion_Joints.png",
          },
          {
            id: "hangers-clamps",
            name: "Hangers and Clamps",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, hangers and clamps are essential components in the piping and mechanical systems, used to support, guide, and restrain pipes, ducts, and structural members. Their correct selection is vital for structural integrity, safety, thermal expansion management, and system longevity.",
              tr: "Boru destek sistemleri",
            },
            specs: ["MSS SP-58"],
            image: "./global/products/Hangers_and_Clamps.webp",
          },
          {
            id: "corrosion-coupons",
            name: "Corrosion Coupons",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, corrosion coupons are critical tools used for monitoring corrosion rates in piping systems and equipment, particularly in oil & gas, petrochemical, power, and water treatment sectors. Here's a concise yet detailed overview tailored to EPC projects, with emphasis on materials used for the coupons.",
              tr: "Korozyon izleme kuponları",
            },
            specs: [],
            image: "./global/products/Corrosion_Coupons.png",
          },
          {
            id: "injection-quills",
            name: "Injection Quills",
            desc: {
              en: "Injection quills are important components in EPC (Engineering, Procurement, and Construction) projects, especially within process piping systems. Their main purpose is to safely and effectively inject chemicals or fluids (such as corrosion inhibitors, biocides, oxygen scavengers, etc.) into the main process line or vessel.",
              tr: "Kimyasal enjeksiyon probları",
            },
            specs: [],
            image: "./global/products/Injection_Quills.png",
          },
          {
            id: "insulation-kits",
            name: "Insulation Kits",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Insulation Kits are critical for thermal, acoustic, and personnel protection in piping systems, vessels, tanks, and equipment. These kits are pre-packaged sets of materials used for insulating process systems in industrial plants (oil & gas, petrochemical, power, etc.).",
              tr: "Flanş izolasyon kitleri",
            },
            specs: [],
            image: "./global/products/Insulation_Kits.png",
          },
          {
            id: "spring-hangers",
            name: "Variable Load Spring Hangers and Supports",
            desc: {
              en: "Variable Load Spring Hangers and Supports are essential components in piping systems, especially in large EPC (Engineering, Procurement, and Construction) projects in industries such as oil & gas, petrochemicals, power plants, and refineries.",
              tr: "Ayarlanabilir yay destek sistemleri",
            },
            specs: ["MSS SP-58"],
            image:
              "./global/products/Variable_Load_Spring_Hangers_and_Supports.webp",
          },
        ],
      },
    ],
  },
  electrical: {
    title: { en: "Electrical", tr: "Elektrik" },
    sections: [
      {
        id: "electrical-products",
        title: { en: "Electrical Products", tr: "Elektrik Ürünleri" },
        icon: "fa-bolt",
        products: [
          {
            id: "junction-boxes",
            name: "Junction Boxes",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Junction Boxes (JBs) are critical components in electrical, instrumentation, and control systems. They serve as secure and organized points for connecting electrical wiring and protecting sensitive connections from environmental and mechanical damage. Their selection, design, and installation are governed by project specifications, standards (like IEC, NEC, or NEMA), and the intended environment (e.g., hazardous areas, outdoor installations, etc.).",
              tr: "Endüstriyel bağlantı ve terminal kutuları",
            },
            specs: ["IP65", "IP66", "ATEX"],
            image: "./global/products/Junction_Boxes.png",
          },
          {
            id: "cable-glands",
            name: "Cable Glands",
            desc: {
              en: "Explosion-proof cable glands",
              tr: "Patlamaya dayanıklı kablo rakoru",
            },
            specs: ["Ex d", "Ex e"],
            image: "./global/products/Cable_Glands.jpg",
          },
          {
            id: "power-cables",
            name: "Power Cables (LV, MV, HV)",
            desc: {
              en: "Power Cables (LV, MV, HV) in EPC projects, focusing on materials and typical specifications.",
              tr: "Alçak, orta ve yüksek gerilim kabloları",
            },
            specs: ["IEC 60502", "BS 6622"],
            image: "./global/products/Power_Cables_(LV, MV, HV).webp",
          },
          {
            id: "duct-seals",
            name: "Duct Seals & Cable Sealing Systems",
            desc: {
              en: "Duct Seals & Cable Sealing Systems in EPC (Engineering, Procurement, and Construction) projects, including materials used, functions, and considerations.",
              tr: "Yangına dayanıklı kablo sızdırmazlık",
            },
            specs: [],
            image: "./global/products/Duct_Seals_&_Cable_Sealing_Systems.png",
          },
          {
            id: "cable-trays",
            name: "Cable Trays and Fasteners",
            desc: {
              en: "Cable Trays and Fasteners in EPC (Engineering, Procurement, and Construction) projects, focusing on their selection, materials, and usage.",
              tr: "Kablo tavası destek sistemleri",
            },
            specs: ["IEC 61537"],
            image: "./global/products/Cable_Trays_and_Fasteners.png",
          },
          {
            id: "heat-tracing",
            name: "Heat Tracing Materials",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, heat tracing is commonly applied to maintain or raise the temperature of piping, vessels, and equipment. This is particularly critical for freeze protection, maintaining process temperatures, or ensuring viscosity of fluids.",
              tr: "Elektrikli ısı izleme sistemleri",
            },
            specs: ["IEEE 515"],
            image: "./global/products/Heat_Tracing_Materials.png",
          },
          {
            id: "distribution-panels",
            name: "Distribution Panels",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Distribution Panels—often called Main Distribution Boards (MDBs), SubDistribution Boards (SDBs), or Motor Control Centers (MCCs)—are critical for safe, reliable electrical distribution. They serve to receive utility or generator power and distribute it via breakers or feeders to downstream systems.",
              tr: "Güç dağıtım panoları",
            },
            specs: ["IEC 61439"],
            image: "./global/products/Distribution_Panels.webp",
          },
          {
            id: "local-control-stations",
            name: "Local Control Stations",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Local Control Stations (LCSs) are crucial field devices used to manually monitor, control, and isolate equipment or systems in process industries like oil & gas, power, chemical, water treatment, etc.",
              tr: "Saha kontrol istasyonları",
            },
            specs: [],
            image: "./global/products/Local_Control_Stations.png",
          },
          {
            id: "earthing-grounding",
            name: "Earthing & Grounding Materials",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, earthing and grounding systems are critical for electrical safety, equipment protection, and lightning protection. Proper selection of earthing materials ensures reliable dissipation of fault currents into the ground.",
              tr: "Topraklama ve şase sistemleri",
            },
            specs: ["IEEE 80"],
            image: "./global/products/Earthing_&_Grounding_Materials.jpeg",
          },
          {
            id: "cathodic-protection",
            name: "Cathodic Protection Materials",
            desc: {
              en: "Cathodic Protection (CP) is a critical corrosion control method used extensively in EPC projects, especially for pipelines, storage tanks, offshore structures, and underground or submerged metal assets. The choice of CP materials depends on the type of CP system—either Galvanic (Sacrificial Anode) CP or Impressed Current CP (ICCP).",
              tr: "Korozyon koruma sistemleri",
            },
            specs: ["NACE SP0169"],
            image: "./global/products/Cathodic_Protection_Materials.png",
          },
          {
            id: "cable-terminals",
            name: "Cable End Terminal & Wire Accessories",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, selecting appropriate cable end terminals and wire accessories is crucial for ensuring the reliability, safety, and longevity of electrical installations.",
              tr: "Kablo sonlandırma aksesuarları",
            },
            specs: [],
            image:
              "./global/products/Cable_End_Terminal_&_Wire_Accessories.png",
          },
        ],
      },
    ],
  },
  instrumentation: {
    title: { en: "Instrumentation", tr: "Enstrümantasyon" },
    sections: [
      {
        id: "instrumentation-products",
        title: {
          en: "Instrumentation Products",
          tr: "Enstrümantasyon Ürünleri",
        },
        icon: "fa-gauge",
        products: [
          {
            id: "transmitters",
            name: "Electronic Transmitters (FT, PT, LT, TT)",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, electronic transmitters such as FT, PT, LT, and TT play a crucial role in process instrumentation by converting physical process variables into standardized electrical signals for monitoring and control.",
              tr: "Akıllı proses transmitterleri",
            },
            specs: ["HART", "4-20mA"],
            image:
              "./global/products/Electronic_Transmitters_(FT, PT, LT, TT).png",
          },
          {
            id: "restriction-orifices",
            name: "Restriction Orifices",
            desc: {
              en: "In Engineering, Procurement, and Construction (EPC) projects, Restriction Orifices (ROs) are integral components designed to control and regulate fluid flow within pipelines. They achieve this by introducing a deliberate pressure drop, thereby managing flow rates and protecting downstream equipment from potential damage due to excessive pressures.",
              tr: "Akış ölçüm orifis plakaları",
            },
            specs: ["ISO 5167"],
            image: "./global/products/Restriction_Orifices.png",
          },
          {
            id: "instrument-tubing",
            name: "Instrument Tubing and Compression Fittings",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects—especially in oil & gas, petrochemical, power, and pharmaceutical sectors—instrument tubing and compression fittings are critical components for the installation of instrumentation systems. These systems carry process signals and media (like air, gas, steam, or liquids) between field instruments and control systems.",
              tr: "Hassas enstrüman borulama",
            },
            specs: ["ASTM A269"],
            image:
              "./global/products/Instrument_Tubing_and_Compression_Fittings.png",
          },
          {
            id: "rotameters",
            name: "Rotameters",
            desc: {
              en: "A Rotameter is a type of variable area flowmeter used to measure the flow rate of liquids or gases in a closed tube. It operates based on gravity: a float rises or falls inside a tapered vertical tube depending on the flow rate.",
              tr: "Değişken alan akış ölçerler",
            },
            specs: [],
            image: "./global/products/Rotameters.png",
          },
          {
            id: "self-acting-regulators",
            name: "Self-acting regulators",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, self-acting regulators are critical components used for automatic pressure or flow regulation without the need for external power or control systems. These are especially useful in remote or hazardous environments where reliability and simplicity are priorities.",
              tr: "Basınç ve sıcaklık regülatörleri",
            },
            specs: [],
            image: "./global/products/Self-acting_regulators.png",
          },
          {
            id: "solenoid-valves",
            name: "Solenoid Valves",
            desc: {
              en: "Solenoid valves are essential components in EPC (Engineering, Procurement, and Construction) projects, particularly in fluid control systems across industries such as oil & gas, water treatment, chemical processing, and power generation. Below is a guide tailored for EPC environments.",
              tr: "Elektrikle çalışan kontrol vanaları",
            },
            specs: [],
            image: "./global/products/Solenoid_Valves.png",
          },
          {
            id: "pressure-relief-valves",
            name: "Pressure Relief Valves",
            desc: {
              en: "PRVs are critical safety devices designed to protect pressure vessels, pipelines, and equipment from overpressure conditions. They automatically release excess pressure when it exceeds preset limits, preventing catastrophic failures such as explosions or equipment damage. In EPC projects, PRVs must be carefully specified, procured, installed, and tested according to project design codes and standards (e.g., ASME, API, ISO).",
              tr: "Emniyet ve basınç tahliye vanaları",
            },
            specs: ["ASME Section VIII"],
            image: "./global/products/Pressure_Relief_Valves.png",
          },
          {
            id: "rupture-discs",
            name: "Rupture Discs",
            desc: {
              en: "A Rupture Disc (also called a burst disc or pressure safety disc) is a non-reclosing pressure relief device designed to protect equipment, vessels, and piping from overpressure or vacuum conditions. It ruptures at a predetermined pressure, providing a fast-acting and reliable safety measure to prevent catastrophic failure.",
              tr: "Aşırı basınç koruma diskleri",
            },
            specs: ["ASME Section VIII"],
            image: "./global/products/Rupture_Discs.png",
          },
          {
            id: "manifolds",
            name: "Manifolds",
            desc: {
              en: "In the context of EPC (Engineering, Procurement, and Construction) projects, particularly in oil & gas, petrochemical, or process industries, a manifold is a piping assembly that collects or distributes fluids from multiple sources or to multiple destinations. It acts as a central hub where several pipelines converge or diverge.",
              tr: "Enstrüman vana manifoldları",
            },
            specs: [],
            image: "./global/products/Manifolds.png",
          },
          {
            id: "instrument-cables",
            name: "Instrument Cables",
            desc: {
              en: "Instrument cables are specialized cables used primarily for transmitting instrumentation signals in industrial plants, process control systems, and automation setups. These cables connect field instruments (sensors, transmitters, actuators) to control systems such as DCS (Distributed Control System), PLC (Programmable Logic Controller), or SCADA.",
              tr: "Sinyal ve kontrol kabloları",
            },
            specs: ["IEC 60332"],
            image: "./global/products/Instrument_Cables.png",
          },
          {
            id: "fiber-optic-cables",
            name: "Fiber Optic Cables",
            desc: {
              en: "Fiber optic cables are widely used in EPC projects for high-speed data transmission, telecommunications, process control, and networking.",
              tr: "Yüksek hızlı veri iletim kabloları",
            },
            specs: [],
            image: "./global/products/Fiber_Optic_Cables.jpg",
          },
          {
            id: "pressure-gauges",
            name: "Pressure Gauges",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, pressure gauges are critical instrumentation devices used to measure and monitor fluid pressure in process systems such as oil & gas, power plants, water treatment facilities, and chemical plants.",
              tr: "Analog ve dijital basınç göstergeleri",
            },
            specs: ["ASME B40.100"],
            image: "./global/products/Pressure_Gauges.png",
          },
          {
            id: "pressure-switches",
            name: "Pressure Switches",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, pressure switches are essential instruments used for monitoring pressure levels in process systems and providing safety interlocks, alarms, or control functions.",
              tr: "Elektronik basınç anahtarları",
            },
            specs: [],
            image: "./global/products/Pressure_Switches.jpg",
          },
          {
            id: "gas-cylinders",
            name: "Gas Cylinders for Analyzers",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, gas cylinders for analyzers are crucial for calibration, validation, and sometimes as carrier or span gases in analyzer systems. These cylinders are selected based on the type of process analyzers (e.g., gas chromatographs, oxygen analyzers, IR/UV analyzers) and the process environment.",
              tr: "Kalibrasyon gaz silindirleri",
            },
            specs: [],
            image: "./global/products/Gas_Cylinders_for_Analyzers.jpg",
          },
          {
            id: "thermometers",
            name: "Thermometers",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, thermometers are crucial instruments used to monitor and control temperature in various systems, including process equipment, pipelines, and utilities. Their selection and specification are vital to ensure reliable operation, process safety, and regulatory compliance.",
              tr: "Endüstriyel sıcaklık ölçümü",
            },
            specs: [],
            image: "./global/products/Thermometers.png",
          },
          {
            id: "thermocouple-cables",
            name: "Thermocouple Cables",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, thermocouple cables play a critical role in temperature measurement and control systems, especially in process industries such as oil & gas, power generation, chemical, and petrochemical plants.",
              tr: "Sıcaklık sensörü kabloları",
            },
            specs: ["IEC 60584"],
            image: "./global/products/Thermocouple_Cables.png",
          },
          {
            id: "level-switches",
            name: "Level Switches",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, level switches are crucial components in process instrumentation, used to detect and control the level of liquids or solids (e.g., powders, granules) in tanks, vessels, or silos. Here's an overview tailored for EPC contexts, including advice on types and materials.",
              tr: "Sıvı seviye algılama anahtarları",
            },
            specs: [],
            image: "./global/products/Level_Switches.png",
          },
          {
            id: "telecommunication-materials",
            name: "Telecommunication Materials",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, telecommunication materials play a critical role in ensuring communication, data transfer, automation, and control across the project site (e.g., oil & gas, power plants, infrastructure).",
              tr: "İletişim sistemi bileşenleri",
            },
            specs: [],
            image: "./global/products/Telecommunication_Materials.png",
          },
          {
            id: "cctv",
            name: "CCTV",
            desc: {
              en: "CCTV (Closed-Circuit Television) systems are a key component in EPC (Engineering, Procurement, and Construction) projects, particularly in industrial, infrastructure, oil & gas, power, and utility sectors, where security, monitoring, and safety are critical.",
              tr: "Endüstriyel gözetim kameraları",
            },
            specs: [],
            image: "./global/products/CCTV.png",
          },
        ],
      },
    ],
  },
  "steel-structures": {
    title: { en: "Steel Structures", tr: "Çelik Yapılar" },
    sections: [
      {
        id: "steel-products",
        title: { en: "Steel Products", tr: "Çelik Ürünleri" },
        icon: "fa-building",
        products: [
          {
            id: "steel-forms",
            name: "Steel Forms (Plate, Tubes, Angles, Beams)",
            desc: {
              en: "In EPC projects, steel forms such as plates, tubes, angles, and beams are fundamental structural components. They serve various purposes, including structural support, framework, machinery foundations, piping supports, and more.",
              tr: "Yapısal çelik profiller ve levhalar",
            },
            specs: ["ASTM A36", "ASTM A572"],
            image:
              "./global/products/Steel_Forms_(Plate, Tubes, Angles, Beams).png",
          },
          {
            id: "custom-steel",
            name: "Custom Steel Manufacturing",
            desc: {
              en: "EPC (Engineering, Procurement, and Construction) projects typically involve large-scale industrial or infrastructure developments, such as power plants, oil & gas facilities, petrochemical plants, and heavy manufacturing plants. Steel custom manufacturing plays a crucial role in these projects because many structures and components need to be tailor-made to specific designs and functional requirements.",
              tr: "Şartnameye göre imal edilmiş çelik yapılar",
            },
            specs: [],
            image: "./global/products/Custom_Steel_Manufacturing.jpg",
          },
        ],
      },
    ],
  },
  "equipment-spare-parts": {
    title: { en: "Equipment & Spare Parts", tr: "Ekipman & Yedek Parçalar" },
    sections: [
      {
        id: "equipment",
        title: {
          en: "Equipment & Spare Parts",
          tr: "Ekipman & Yedek Parçalar",
        },
        icon: "fa-cog",
        products: [
          {
            id: "diesel-generators",
            name: "Diesel Generators",
            desc: {
              en: "Role of Diesel Generators in EPC Projects Diesel Generators (DGs) are commonly used in EPC projects for: Primary power in remote or off-grid locations. Backup/standby power for critical systems. Temporary power during construction phases before the main grid is available.",
              tr: "Endüstriyel dizel güç jeneratörleri",
            },
            specs: [],
            image: "./global/products/Diesel_Generators.png",
          },
          {
            id: "equipment-oils",
            name: "Various Equipment Oils",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects—especially in sectors like oil & gas, power, petrochemicals, and heavy industries—equipment oils play a vital role in ensuring reliable operation, lubrication, cooling, and corrosion protection of machinery.",
              tr: "Yağlayıcılar ve hidrolik yağlar",
            },
            specs: [],
            image: "./global/products/Various_Equipment_Oils.png",
          },
          {
            id: "pumps",
            name: "Pumps",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, pumps play a critical role in fluid transport systems, whether for oil & gas, water treatment, chemical processing, or power generation. Selecting and specifying the right pumps is essential to ensure operational efficiency, reliability, and longevity of the facility.",
              tr: "Santrifüj ve pozitif deplasmanlı pompalar",
            },
            specs: ["API 610"],
            image: "./global/products/Pumps.png",
          },
          {
            id: "fans",
            name: "Fans",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, fans are a critical component in HVAC (Heating, Ventilation, and Air Conditioning), industrial processes, power plants, and various utility systems. They ensure proper ventilation, temperature control, air quality, and the safe handling of gases or particulates.",
              tr: "Endüstriyel havalandırma fanları",
            },
            specs: [],
            image: "./global/products/Fans.jpg",
          },
          {
            id: "induction-motors",
            name: "Induction Motors (LV, MV, HV)",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Induction Motors are widely used across various voltage classes (LV, MV, HV) for driving pumps, compressors, conveyors, fans, and other mechanical systems.",
              tr: "Elektrik indüksiyon motorları",
            },
            specs: ["IEC 60034"],
            image: "./global/products/Induction_Motors_(LV, MV, HV).jpg",
          },
          {
            id: "equipment-parts",
            name: "Equipment parts",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, equipment parts like filter cartridges, wire meshes, and bird screens are critical components used primarily in mechanical, process, and HVAC systems, often in oil & gas, petrochemical, power, and industrial facilities.",
              tr: "Yedek parçalar ve bileşenler",
            },
            specs: [],
            image: "./global/products/Custom_Steel_Manufacturing.jpg",
          },
        ],
      },
    ],
  },
  "construction-materials": {
    title: { en: "Construction Materials", tr: "İnşaat Malzemeleri" },
    sections: [
      {
        id: "construction",
        title: { en: "Construction Materials", tr: "İnşaat Malzemeleri" },
        icon: "fa-hammer",
        products: [
          {
            id: "hand-tools",
            name: "Hand Tools",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, hand tools are essential for various stages, including site preparation, structural works, mechanical and electrical installation, piping, and commissioning.",
              tr: "İnşaat için profesyonel el aletleri",
            },
            specs: [],
            image: "./global/products/Hand_Tools.png",
          },
          {
            id: "power-tools",
            name: "Power Tools",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, power tools play a critical role during the construction and installation phase. They improve efficiency, precision, and safety when handling structural, mechanical, piping, electrical, and instrumentation work.",
              tr: "Elektrikli ve pnömatik elektrikli aletler",
            },
            specs: [],
            image: "./global/products/Power_Tools.jpg",
          },
          {
            id: "plastering-tools",
            name: "Plastering Tools",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, plastering is a crucial finishing activity in civil and structural works. It involves applying a smooth or textured coat to walls and ceilings to protect and decorate surfaces.",
              tr: "Sıva ve bitirme aletleri",
            },
            specs: [],
            image: "./global/products/Plastering_Tools.png",
          },
          {
            id: "insulation-cladding",
            name: "Insulation & Cladding materials",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, insulation and cladding materials are critical for thermal control, energy efficiency, personnel protection, fire safety, and corrosion prevention. These materials are applied to pipelines, walls (e.g., building enclosures or process units), and equipment (e.g., tanks, vessels, boilers).",
              tr: "Termal ve akustik izolasyon",
            },
            specs: [],
            image: "./global/products/Insulation_&_Cladding_materials.png",
          },
          {
            id: "chemicals",
            name: "Chemicals",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, especially in the chemical, oil & gas, power, water treatment, and industrial sectors, chemicals and chemical-related materials are critical components. These are typically used in construction processes, plant operations, or commissioning activities.",
              tr: "İnşaat kimyasalları ve katkı maddeleri",
            },
            specs: [],
            image: "./global/products/Chemicals.png",
          },
          {
            id: "safety-materials",
            name: "Safety Materials",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, safety materials are essential to protect workers, comply with regulations, and reduce risks during all project phases.",
              tr: "Kişisel koruyucu ekipman",
            },
            specs: [],
            image: "./global/products/Safety_Materials.png",
          },
          {
            id: "scaffolding-tools",
            name: "Scaffolding Tools",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, scaffolding plays a critical role in providing safe access and working platforms during construction, maintenance, and inspection activities. The selection of scaffolding materials and tools depends on the project scope, safety requirements, environmental conditions, and local regulations.",
              tr: "İskele sistemleri ve aksesuarları",
            },
            specs: [],
            image: "./global/products/Scaffolding_Tools.png",
          },
          {
            id: "rigging-lifting",
            name: "Rigging & Lifting Consumables",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, Rigging & Lifting Materials are critical for safely handling heavy equipment, components, and structural elements during construction and installation phases. Proper selection and use ensure safety, efficiency, and compliance with standards.",
              tr: "Kaldırma ekipmanı ve askılar",
            },
            specs: [],
            image: "./global/products/Rigging_&_Lifting_Consumables.png",
          },
          {
            id: "container",
            name: "Container",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects—especially in sectors like oil & gas, power, and infrastructure—containers play a key logistical and functional role. They are used for storage, transportation, temporary facilities, and modular construction.",
              tr: "Depolama ve nakliye konteynerleri",
            },
            specs: [],
            image: "./global/products/Container.png",
          },
          {
            id: "welding-machines",
            name: "Welding Machines and Consumables",
            desc: {
              en: "In EPC (Engineering, Procurement, and Construction) projects, welding machines and consumables are critical components during the construction and fabrication phases. Their selection depends on project scope (e.g., oil & gas, power plants, infrastructure), materials used, welding methods, and environmental conditions.",
              tr: "Kaynak ekipmanları ve sarf malzemeleri",
            },
            specs: [],
            image: "./global/products/Welding_Machines_and_Consumables.png",
          },
        ],
      },
    ],
  },
};

// ==================== PAGE INITIALIZATION ====================
let currentCategory = "piping-materials";
let activeSectionId = null;

document.addEventListener("DOMContentLoaded", () => {
  // Get category and hash from URL
  const urlParams = new URLSearchParams(window.location.search);
  currentCategory = urlParams.get("category") || "piping-materials";
  const sectionHash = window.location.hash.substring(1); // Remove #

  // Update active tab
  updateActiveTab();

  // Load content
  loadCategoryContent();

  // Setup scroll tracking
  setupScrollTracking();

  // Setup mobile sidebar
  setupMobileSidebar();

  // Scroll to section if hash exists
  if (sectionHash) {
    setTimeout(() => {
      scrollToSection(sectionHash);
    }, 300); // Increased delay to ensure content is fully loaded
  }
});

function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    const headerOffset = 200; // Adjust based on your fixed header heights
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Also update the active link in sidebar
    document.querySelectorAll(".sidebar-nav a").forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.section === sectionId) {
        link.classList.add("active");
      }
    });
  }
}

function updateActiveTab() {
  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.classList.remove("active");
    if (tab.dataset.category === currentCategory) {
      tab.classList.add("active");
    }
  });
}

function loadCategoryContent() {
  const data = productsData[currentCategory];
  const lang = document.documentElement.getAttribute("data-lang") || "en";

  // Update page title
  document.getElementById("category-title").textContent = data.title.en;
  document.getElementById("category-title-tr").textContent = data.title.tr;

  // Build sidebar navigation
  const sidebarNav = document.getElementById("sidebar-nav");
  sidebarNav.innerHTML = data.sections
    .map(
      (section) => `
    <a href="#${section.id}" data-section="${section.id}">
      <span>${section.title[lang]}</span>
    </a>
  `,
    )
    .join("");

  // Build main content
  const content = document.getElementById("products-content");
  content.innerHTML = data.sections
    .map(
      (section) => `
    <section class="product-section" id="${section.id}">
      <h2>
        ${section.title[lang]}
      </h2>
      <div class="product-grid">
        ${section.products
          .map(
            (product) => `
          <div class="product-card" id="${product.id}">
            ${
              product.image
                ? `
              <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
              </div>
            `
                : `
              <div class="product-image">
                <i class="fas fa-box"></i>
              </div>
            `
            }
            <h3>${product.name}</h3>
            ${product.desc ? `<p>${product.desc[lang]}</p>` : ""}
            ${
              product.specs && product.specs.length > 0
                ? `
              <div class="product-specs">
                ${product.specs.map((spec) => `<span class="spec-tag">${spec}</span>`).join("")}
              </div>
            `
                : ""
            }
          </div>
        `,
          )
          .join("")}
      </div>
    </section>
  `,
    )
    .join("");
}

function setupScrollTracking() {
  const sections = document.querySelectorAll(".product-section");
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  const progressBar = document.querySelector(".scroll-progress-bar");

  // Scroll progress
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + "%";

    // Active section tracking
    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 250;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.dataset.section === currentSection) {
        link.classList.add("active");
        activeSectionId = currentSection;
      }
    });
  });

  // Smooth scroll on click
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      // Update URL hash without page jump
      history.pushState(null, null, `#${targetId}`);

      scrollToSection(targetId);
    });
  });
}

function setupMobileSidebar() {
  // Create mobile toggle button if not exists
  if (!document.querySelector(".mobile-sidebar-toggle")) {
    const toggleBtn = document.createElement("button");
    toggleBtn.className = "mobile-sidebar-toggle";
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    document.body.appendChild(toggleBtn);

    const overlay = document.createElement("div");
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);

    const sidebar = document.querySelector(".products-sidebar");

    toggleBtn.addEventListener("click", () => {
      sidebar.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.remove("active");
    });

    // Close on link click
    document.querySelectorAll(".sidebar-nav a").forEach((link) => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
  }
}
