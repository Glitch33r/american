<?php

namespace FrontendBundle\Controller;

use BackendBundle\Entity\Article;
use BackendBundle\Entity\HomePage;
use BackendBundle\Entity\ListItem;
use BackendBundle\Entity\Seo;
use BackendBundle\Entity\Slider;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class ApiController extends Controller
{
    private function formalizeJSONResponse($data, $exclude=['id'])
    {
        $temp = null;
        $normalizer = new ObjectNormalizer();
        $normalizer->setIgnoredAttributes($exclude);

        $serializer = new Serializer([$normalizer], [new JsonEncoder()]);

        $response = new Response($serializer->serialize($data, 'json'));
        $response->headers->set('Content-Type', 'application/json; charset=UTF-8');

        return $response;
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/about", name="about")
     * @Route("/services", name="services")
     * @Route("/blog", name="blog")
     * @Route("/contacts", name="contacts")
     */
    public function indexAction()
    {
        return $this->render('@Frontend/home/index.html.twig');
    }

    /**
     * @Route("/api/v1/seo/{page}", name="api-seo")
     */
    public function getSeo($page)
    {
        $em = $this->getDoctrine()->getManager();
        $seo = $em->getRepository(Seo::class)->findOneBy(['slug' => $page]);

        return $this->formalizeJSONResponse($seo, ['id']);
    }

    /**
     * @Route("/api/v1/nav", name="api-header-nav")
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

        $response = new Response(json_encode($links, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        $response->headers->set('Content-Type', 'application/json; charset=UTF-8');

        return $response;
    }


    /**
     * @Route("/api/v1/page/home/{block}", name="api-get-home-page-block")
     */
    public function getContentBlock($block)
    {
        $em = $this->getDoctrine()->getManager();
        $homepage = $em->getRepository(HomePage::class)->findAll()[0];
        $data = null;

        switch ($block){
            case 'slider':
                $data = $em->getRepository(Slider::class)->findBy(['homepage' => $homepage->getId()]);
                return $this->formalizeJSONResponse($data, ['homepage', 'updatedAt']);
                break;
            case 'red':
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
            case 'after-paralax':
                $data = $em->getRepository(Article::class)->findBy(['homepage' => $homepage->getId()]);
                return $this->formalizeJSONResponse($data, ['homepage']);
                break;
            default:
                return $this->formalizeJSONResponse(null);
        }
    }
}
