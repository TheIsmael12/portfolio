-- Actualización de contenido del portfolio (septiembre 2026)
-- Ejecutar con: npx prisma db execute --file prisma/data/2026-09-portfolio-update.sql --schema prisma/schema.prisma

-- Nueva columna para las funcionalidades destacadas de cada proyecto
ALTER TABLE `Projects` ADD COLUMN `features` JSON NULL AFTER `desc`;

-- DLTCode: fin en mayo de 2026
UPDATE `Careers`
SET `finishDate` = '2026-05-31 18:00:00.000'
WHERE `id` = 1;

-- Enova IT: Frontend Tech Lead desde julio de 2026
INSERT INTO `Careers` (`title`, `desc`, `url`, `bussines`, `startDate`, `finishDate`)
VALUES (
    JSON_OBJECT(
        'es', 'Frontend Tech Lead',
        'en', 'Frontend Tech Lead',
        'fr', 'Frontend Tech Lead'
    ),
    JSON_OBJECT(
        'es', 'Lidero equipos y proyectos en el ámbito frontend, definiendo la arquitectura y acompañando al equipo en el desarrollo. Participo en la elaboración de presupuestos y del modelo de negocio de las aplicaciones, así como en reuniones con clientes para definir sus necesidades.',
        'en', 'I lead teams and projects in the frontend space, defining architecture and supporting the team throughout development. I help prepare budgets and shape the business model of our applications, and take part in client meetings to define their needs.',
        'fr', 'Je dirige des équipes et des projets dans le domaine du frontend, en définissant l’architecture et en accompagnant l’équipe tout au long du développement. Je participe à l’élaboration des devis et du modèle économique des applications, ainsi qu’aux réunions avec les clients pour définir leurs besoins.'
    ),
    'https://www.enovait.es',
    'Enova IT',
    '2026-07-01 09:00:00.000',
    NULL
);

-- Quitar GekkoClean y TopNutrition
DELETE FROM `Projects` WHERE `id` IN (2, 4);

-- Salud en Ruta: web + intranet con integraciones
UPDATE `Projects`
SET
    `desc` = JSON_OBJECT(
        'es', 'Web e intranet de Salud en Ruta, servicio de atención médica a domicilio. Una plataforma completa que gestiona los servicios médicos de principio a fin y se conecta con aseguradoras y sistemas externos.',
        'en', 'Website and intranet for Salud en Ruta, a home healthcare service. A complete platform that manages medical services end to end and connects with insurers and external systems.',
        'fr', 'Site web et intranet de Salud en Ruta, service de soins médicaux à domicile. Une plateforme complète qui gère les services médicaux de bout en bout et se connecte aux assureurs et à des systèmes externes.'
    ),
    `features` = JSON_OBJECT(
        'es', JSON_ARRAY(
            'Intranet con facturación y contabilidad',
            'Integración con las APIs de las aseguradoras',
            'API propia para la gestión de los servicios médicos',
            'Conexión con REMPE y CIMPA',
            'Cumplimiento de requisitos técnicos y de seguridad muy estrictos'
        ),
        'en', JSON_ARRAY(
            'Intranet with invoicing and accounting',
            'Integration with insurers\' APIs',
            'Custom API to manage medical services',
            'Connection with REMPE and CIMPA',
            'Compliance with very strict technical and security requirements'
        ),
        'fr', JSON_ARRAY(
            'Intranet avec facturation et comptabilité',
            'Intégration avec les API des assureurs',
            'API propre pour la gestion des services médicaux',
            'Connexion avec REMPE et CIMPA',
            'Respect d’exigences techniques et de sécurité très strictes'
        )
    )
WHERE `id` = 3;

-- Añadir Imora y NextAura
INSERT INTO `Projects` (`title`, `desc`, `features`, `technologies`, `codeLink`, `demoLink`)
VALUES
(
    'Imora',
    JSON_OBJECT(
        'es', 'Web corporativa e intranet de Imora, empresa de servicios integrales para comunidades de propietarios en Madrid: conserjería, videovigilancia, limpieza, piscinas y mantenimiento.',
        'en', 'Corporate website and intranet for Imora, a company offering comprehensive services for residential communities in Madrid: concierge, video surveillance, cleaning, pools and maintenance.',
        'fr', 'Site web corporate et intranet d’Imora, entreprise de services intégrés pour les copropriétés à Madrid : conciergerie, vidéosurveillance, nettoyage, piscines et maintenance.'
    ),
    JSON_OBJECT(
        'es', JSON_ARRAY(
            'Intranet de gestión a medida',
            'Facturación',
            'Contabilidad',
            'Creación y gestión de presupuestos'
        ),
        'en', JSON_ARRAY(
            'Custom management intranet',
            'Invoicing',
            'Accounting',
            'Quote creation and management'
        ),
        'fr', JSON_ARRAY(
            'Intranet de gestion sur mesure',
            'Facturation',
            'Comptabilité',
            'Création et gestion des devis'
        )
    ),
    'React, Nextjs, TypeScript',
    NULL,
    'https://imora.es'
),
(
    'NextAura',
    JSON_OBJECT(
        'es', 'Web corporativa e intranet de NextAura, empresa tecnológica de Madrid que desarrolla aplicaciones web y móviles a medida, automatiza procesos con IA y ofrece consultoría IT.',
        'en', 'Corporate website and intranet for NextAura, a Madrid tech company building custom web and mobile apps, automating processes with AI and providing IT consulting.',
        'fr', 'Site web corporate et intranet de NextAura, entreprise technologique madrilène qui développe des applications web et mobiles sur mesure, automatise des processus grâce à l’IA et propose du conseil IT.'
    ),
    JSON_OBJECT(
        'es', JSON_ARRAY(
            'Intranet de gestión a medida',
            'Facturación',
            'Contabilidad',
            'Servicio automático de envío de correos electrónicos'
        ),
        'en', JSON_ARRAY(
            'Custom management intranet',
            'Invoicing',
            'Accounting',
            'Automated email delivery service'
        ),
        'fr', JSON_ARRAY(
            'Intranet de gestion sur mesure',
            'Facturation',
            'Comptabilité',
            'Service automatique d’envoi d’e-mails'
        )
    ),
    'React, Nextjs, TypeScript',
    NULL,
    'https://nextaura.es'
);
