<?php

namespace FrontendBundle\Controller;

use BackendBundle\Entity\Article;
use BackendBundle\Entity\Contacts;
use BackendBundle\Entity\CorporatePhilosophy;
use BackendBundle\Entity\Equipment;
use BackendBundle\Entity\HomePage;
use BackendBundle\Entity\Offers;
use BackendBundle\Entity\Seo;
use BackendBundle\Entity\Slider;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


/**
 * Path to saving mobile images
 */
define('MOBILE_DIR', '../web/mobile/');

/**
 * Class ApiController
 * @package FrontendBundle\Controller
 */
class ApiController extends Controller
{

    /**
     * @param $filePath
     * @return mixed
     */
    public function filePath($filePath)
    {
        $fileParts = pathinfo($filePath);

        if (!isset($fileParts['filename'])) {
            $fileParts['filename'] = substr($fileParts['basename'], 0, strrpos($fileParts['basename'], '.'));
        }

        return $fileParts;
    }


    /**
     * @param $imgPath
     * @param $dir
     * @param $id
     * @param bool $w_o
     * @param bool $h_o
     * @return mixed|string
     */
    public function reSize($imgPath, $dir, $id, $w_o = false, $h_o = false)
    {
        $func = null;

//        if (is_dir(MOBILE_DIR . $dir . '/' . $id)) {
//
//            $files = glob(MOBILE_DIR . $dir . '/' . $id . '/*');
//            foreach ($files as $file) {
//                if (is_file($file))
//                    unlink($file);
//            }
//            rmdir(MOBILE_DIR . $dir . '/' . $id);
//        }

        $filename = $this->filePath($imgPath)['filename'];
        $types = ["jpg", "gif", "jpeg", "png"];

        if (($w_o < 0) || ($h_o < 0)) {
            return 'Sorry, wrong image.';
        }

        list($w_i, $h_i, $type) = getimagesize($imgPath);
        $ext = $types[$type];

        if ($ext) {
            if ($ext == "jpg") {
                $func = 'imagecreatefrom' . 'jpeg';
            } else {
                $func = 'imagecreatefrom' . $ext;
            }

            $img_i = $func($imgPath);

        } else {
            return 'Sorry, wrong image.';
        }

        if (!$h_o) $h_o = $w_o / ($w_i / $h_i);
        if (!$w_o) $w_o = $h_o / ($h_i / $w_i);

        $img_o = imagecreatetruecolor($w_o, $h_o);
        imagecopyresampled($img_o, $img_i, 0, 0, 0, 0, $w_o, $h_o, $w_i, $h_i);


        if (!is_dir(MOBILE_DIR . $dir . '/' . $id)) {
            mkdir(MOBILE_DIR . $dir . '/' . $id);

            $uploaddir = MOBILE_DIR . $dir . '/' . $id . '/';

        } else {
            $uploaddir = MOBILE_DIR . $dir . '/' . $id . '/';
        }

        if ($ext == "jpg") {
            $func = 'image' . 'jpeg';
            $placeToSave = $uploaddir . $filename . '_' . $w_o . '.' . $ext;
        } else {
            $func = 'image' . $ext;
            $placeToSave = $uploaddir . $filename . '_' . $w_o . '.' . $ext;
        }

        if ($func($img_o, $placeToSave, 95)) {
            return str_replace('../web/', '/', $placeToSave);
        } else {
            return 'Sorry, wrong image.';
        }
    }


    /**
     * @param $data
     * @param array $exclude
     * @return Response
     */
    private function formalizeJSONResponse($data, $exclude = ['id'])
    {
        $normalizer = new ObjectNormalizer();
        $normalizer->setIgnoredAttributes($exclude);

        $serializer = new Serializer([$normalizer], [new JsonEncoder()]);

        $response = new Response($serializer->serialize($data, 'json'), Response::HTTP_OK, ['Content-type' => 'application/json; charset=UTF-8']);

        return $response;
    }


    /**
     * @Route("/", name="homepage")
     * @Route("/about", name="about")
     * @Route("/services", name="services")
     * @Route("/blog", name="blog")
     * @Route("/contacts", name="contacts")
     * @Route("/equipment", name="equipment")
     * @Route("/offers", name="offers")
     */
    public function indexAction()
    {
        return $this->render('@Frontend/home/index.html.twig');
    }


    /**
     * @Route("/api/v1/seo/{page}", name="api-seo", methods={"GET","POST"})
     */
    public function getSeo($page)
    {
        $em = $this->getDoctrine()->getManager();
        $seo = $em->getRepository(Seo::class)->findOneBy(['slug' => $page]);

        return $this->formalizeJSONResponse($seo, ['id']);
    }


    /**
     * @Route("/api/v1/nav", name="api-header-nav",  methods={"GET","POST"})
     */
    public function getHeader()
    {
        $links = [
            'home' => $this->generateUrl('homepage'),
            'about' => $this->generateUrl('about'),
            'services' => $this->generateUrl('services'),
            'blog' => $this->generateUrl('blog'),
            'contacts' => $this->generateUrl('contacts')
        ];

        $response = new Response(json_encode($links, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES),
            Response::HTTP_OK, ['Content-type' => 'application/json; charset=UTF-8']);

        return $response;
    }


    /**
     * @Route("/api/v1/page/home/{block}", name="api-get-home-page-block", methods={"GET","POST"})
     */
    public function getContentBlock($block, $state = null, $width = false, $height = false)
    {
        $em = $this->getDoctrine()->getManager();
        $homepage = $em->getRepository(HomePage::class)->findAll()[0];
        $data = null;

        switch ($block) {
            case 'slider':
                $temp = [];

                $data = $em->getRepository(Slider::class)->findBy(['homepage' => $homepage->getId()]);

//                foreach ($data as $slide) {
//                    $currImg = '../web/' . $this->container->getParameter('app.path.slider_images') . '/' . $slide->getImage();
//                    //full, 960, 520
////                    $temp[] = [$this->reSize($currImg, $block, $slide->getId(), 520), $this->reSize($currImg, $block, $slide->getId(), 960)];
//                    $temp[] = 'uju';
//                }
//
////                dump($temp);die;
//                array_push($data, $temp);

                return $this->formalizeJSONResponse($data, ['homepage', 'updatedAt', 'imageFile', 'imageFile_520', 'imageFile_960']);
                break;
            case 'red':
                $temp = [];
                $data = $em->getRepository(HomePage::class)->getRedBlock();
                return $this->formalizeJSONResponse($data);
                break;
            case 'black':
                $data = $em->getRepository(HomePage::class)->getBlackBlock();
                return $this->formalizeJSONResponse($data);
                break;
            case 'list':
                $data = $em->getRepository(HomePage::class)->getListBlock();
                return $this->formalizeJSONResponse($data);
                break;
            case 'paralax':
                $data = $em->getRepository(HomePage::class)->getParalaxBlock();
                return $this->formalizeJSONResponse($data);
                break;
            case 'articles':
                $data = $em->getRepository(Article::class)->findBy(['homepage' => $homepage->getId()]);
                return $this->formalizeJSONResponse($data, ['homepage']);
                break;
            default:
                return $this->formalizeJSONResponse(null);
        }
    }

    /**
     * @Route("/api/v1/page/corp-philosophy/{block}", name="api-get-corp-philosophy-page-blocks", methods={"GET","POST"})
     */
    public function getContentCorpPhilosophy($block)
    {
        $em = $this->getDoctrine()->getManager();

        switch ($block) {
            case 'red':
                $data = $em->getRepository(CorporatePhilosophy::class)->getRedBlock();
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'white':
                $data = $em->getRepository(CorporatePhilosophy::class)->getWhiteBlock();
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'list':
                $data = $em->getRepository(CorporatePhilosophy::class)->getListBlock();
                $items = $em->getRepository(CorporatePhilosophy::class)->getListItemBlock();
                array_push($data, $items);
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            default:
                return $this->formalizeJSONResponse(null);
        }
    }

    /**
     * @Route("/api/v1/page/equipment/{block}", name="api-get-equipment-page-blocks", methods={"GET","POST"})
     */
    public function getContentEquipment($block)
    {
        $em = $this->getDoctrine()->getManager();

        switch ($block) {
            case 'white':
                $data = $em->getRepository(Equipment::class)->getWhiteBlock();
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'list-left':
                $data = $em->getRepository(Equipment::class)->getLeftListBlock();
                $items = $em->getRepository(Equipment::class)->getLeftListItemBlock();
                array_push($data, $items);
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'list-right':
                $data = $em->getRepository(Equipment::class)->getRigthListBlock();
                $items = $em->getRepository(Equipment::class)->getRigthListItemBlock();
                array_push($data, $items);
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'paralax':
                $data = $em->getRepository(Equipment::class)->getParalaxBlock();
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'additional':
                $data = $em->getRepository(Equipment::class)->getAdditionalBlock();
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            default:
                return $this->formalizeJSONResponse(null);
        }
    }


    /**
     * @Route("/api/v1/page/offers/{block}", name="api-get-offers-page-blocks", methods={"GET","POST"})
     */
    public function getContentOffer($block)
    {
        $em = $this->getDoctrine()->getManager();
        $data = $em->getRepository(Offers::class)->findAll()[0];

        switch ($block) {
            case 'white':
                $data = $em->getRepository(Offers::class)->getWhiteBlock();
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'list-left':
                $data = $em->getRepository(Offers::class)->getLeftListBlock();
                $items = $em->getRepository(Offers::class)->getLeftListItemBlock();
                array_push($data, $items);
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'list-right':
                $data = $em->getRepository(Offers::class)->getRigthListBlock();
                $items = $em->getRepository(Offers::class)->getRigthListItemBlock();
                array_push($data, $items);
//                dump($data);die;
                return $this->formalizeJSONResponse($data);
                break;
            case 'articles':
                $data = $em->getRepository(Article::class)->findBy(['offers' => $dat->getId()]);
                return $this->formalizeJSONResponse($data, ['offers']);
                break;
            default:
                return $this->formalizeJSONResponse(null);
        }
    }

    /**
     * @Route("/api/v1/page/contacts", name="api-get-contacts-page", methods={"GET","POST"})
     */
    public function getContacts()
    {
        $em = $this->getDoctrine()->getManager();
        $data = $em->getRepository(Contacts::class)->findAll()[0];

        return $this->formalizeJSONResponse($data, ['id']);
    }
}
