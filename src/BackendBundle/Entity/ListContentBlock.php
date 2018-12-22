<?php
namespace BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity()
 * @ORM\Table(name="list_content_block_table")
 * @Vich\Uploadable
 */
class ListContentBlock
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255,  nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $subTitle;

    /**
     * @return mixed
     */
    public function getSubTitle()
    {
        return $this->subTitle;
    }

    /**
     * @param mixed $subTitle
     */
    public function setSubTitle($subTitle)
    {
        $this->subTitle = $subTitle;
    }

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\HomePage", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="home_id", referencedColumnName="id")
     */
     private $homepage;


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
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param mixed $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }
}