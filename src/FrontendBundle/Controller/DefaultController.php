<?php

namespace FrontendBundle\Controller;

use BackendBundle\Entity\Project;
use BackendBundle\Entity\Responsibility_home;
use BackendBundle\Entity\RiskManagement;
use BackendBundle\Entity\Trading;
use FrontendBundle\Form\Type\ContactFormType;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use BackendBundle\Entity\ContactForm;
use BackendBundle\Entity\Contacts;
use BackendBundle\Entity\Seo;
use BackendBundle\Entity\About;

use BackendBundle\Entity\Responsibility;

use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction()
    {
//        $em = $this->getDoctrine()->getManager();


        return $this->render('@Frontend/home/index.html.twig');
    }
}
