<?php
namespace BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity()
 * @ORM\Table(name="list_table")
 * @Vich\Uploadable
 */
class ListItem
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $maintitle;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $title;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\HomePage", inversedBy="list", cascade={"persist"})
     * @ORM\JoinColumn(name="hp_id", referencedColumnName="id")
     */
    private $homepage;


    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\CorporatePhilosophy", inversedBy="list", cascade={"persist"})
     * @ORM\JoinColumn(name="cp_id", referencedColumnName="id")
     */
    private $corpphilos;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Equipment", inversedBy="listrigth", cascade={"persist"})
     * @ORM\JoinColumn(name="eq_right_id", referencedColumnName="id")
     */
    private $equipright;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Offers", inversedBy="list", cascade={"persist"})
     * @ORM\JoinColumn(name="off_left_id", referencedColumnName="id")
     */
    private $offerleft;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Offers", inversedBy="listrigth", cascade={"persist"})
     * @ORM\JoinColumn(name="off_right_id", referencedColumnName="id")
     */
    private $offerright;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Equipment", inversedBy="list", cascade={"persist"})
     * @ORM\JoinColumn(name="eq_left_id", referencedColumnName="id")
     */
    private $equipleft;

    /**
     * @return mixed
     */
    public function getOfferleft()
    {
        return $this->offerleft;
    }

    /**
     * @param mixed $offerleft
     */
    public function setOfferleft($offerleft)
    {
        $this->offerleft = $offerleft;
    }

    /**
     * @return mixed
     */
    public function getOfferright()
    {
        return $this->offerright;
    }

    /**
     * @param mixed $offerright
     */
    public function setOfferright($offerright)
    {
        $this->offerright = $offerright;
    }



    /**
     * @return mixed
     */
    public function getMaintitle()
    {
        return $this->maintitle;
    }

    /**
     * @param mixed $maintitle
     */
    public function setMaintitle($maintitle)
    {
        $this->maintitle = $maintitle;
    }

    /**
     * @return mixed
     */
    public function getEquipright()
    {
        return $this->equipright;
    }

    /**
     * @param mixed $equipright
     */
    public function setEquipright($equipright)
    {
        $this->equipright = $equipright;
    }

    /**
     * @return mixed
     */
    public function getEquipleft()
    {
        return $this->equipleft;
    }

    /**
     * @param mixed $equipleft
     */
    public function setEquipleft($equipleft)
    {
        $this->equipleft = $equipleft;
    }



    /**
     * @return mixed
     */
    public function getCorpphilos()
    {
        return $this->corpphilos;
    }

    /**
     * @param mixed $corpphilos
     */
    public function setCorpphilos($corpphilos)
    {
        $this->corpphilos = $corpphilos;
    }


    public function __toString()
    {
        return $this->getTitle();
    }


    /**
     * @return mixed
     */
    public function getHomepage()
    {
        return $this->homepage;
    }

    /**
     * @param mixed $homepage
     */
    public function setHomepage($homepage)
    {
        $this->homepage = $homepage;
    }


    /**
     * @return mixed
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * @param mixed $title
     */
    public function setTitle($title)
    {
        $this->title = $title;
    }


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

}