<?php

namespace FrontendBundle\Controller;

use BackendBundle\Entity\Seo;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;


class ApiController extends Controller
{
    private function formalizeJSONResponse($data, $exclude)
    {
        $normalizer = new ObjectNormalizer();
        $normalizer->setIgnoredAttributes($exclude);
        $serializer = new Serializer([$normalizer], [new JsonEncoder()]);

        $response = new JsonResponse($serializer->serialize($data, 'json'));

        return $response;
    }

    /**
     * @Route("/", name="homepage")
     * @Route("/about", name="about")
     */
    public function indexAction()
    {
//        $em = $this->getDoctrine()->getManager();


        return $this->render('@Frontend/home/index.html.twig');
    }

    /**
     * @Route("/api/seo/{page}", name="api-seo")
     */
    public function getSeo($page)
    {
        $em = $this->getDoctrine()->getManager();

        $seo = $em->getRepository(Seo::class)->findOneBy(['slug' => $page]);

        return $this->formalizeJSONResponse($seo, ['id']);
    }

    /**
     * @Route("/api/header", name="api-header")
     */
    public function getHeader()
    {
        $links = ['home' => $this->generateUrl('homepage'), 'about' => $this->generateUrl('about'), 'contacts' => $this->generateUrl('about'), 'blog' => $this->generateUrl('about')];

        return new JsonResponse($links);
    }
}
