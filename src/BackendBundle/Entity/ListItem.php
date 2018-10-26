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
    public $corp_philos;

    /**
     * @return mixed
     */
    public function getCorpPhilos()
    {
        return $this->corp_philos;
    }

    /**
     * @param mixed $corp_philos
     */
    public function setCorpPhilos($corp_philos)
    {
        $this->corp_philos = $corp_philos;
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