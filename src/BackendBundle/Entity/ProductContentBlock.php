<?php
namespace BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity()
 * @ORM\Table(name="product_content_block_table")
 * @Vich\Uploadable
 */
class ProductContentBlock
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $subTitle;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image;

    /**
     * @Vich\UploadableField(mapping="product_images", fileNameProperty="image")
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * @return \DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    public function __construct()
    {
        $this->updatedAt = new \DateTime('now');
    }

    /**
     * @param \DateTime $updatedAt
     */
    public function setUpdatedAt(\DateTime $updatedAt)
    {
        $this->updatedAt = $updatedAt;
    }

    public function setImageFile(File $image = null)
    {
        $this->imageFile = $image;

        // VERY IMPORTANT:
        // It is required that at least one field changes if you are using Doctrine,
        // otherwise the event listeners won't be called and the file is lost
        if ($image) {
            // if 'updatedAt' is not defined in your entity, use another property
            $this->updatedAt = new \DateTime('now');
        }
    }

    public function getImageFile()
    {
        return $this->imageFile;
    }

    public function setImage($image)
    {
        $this->image = $image;
    }

    public function getImage()
    {
        return $this->image;
    }

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
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Dairy", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="dairy_id", referencedColumnName="id")
     */
     private $dairy;

     /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Produce", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="produce_id", referencedColumnName="id")
     */
     private $produce;

     /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Botanic", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="botanic_id", referencedColumnName="id")
     */
     private $botanic;

     /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\SeaFood", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="seafood_id", referencedColumnName="id")
     */
     private $seafood;

     /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\FrozenMeat", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="meat_id", referencedColumnName="id")
     */
     private $meat;

     /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\Pharmaceuticals", inversedBy="contentBlock", cascade={"persist"})
     * @ORM\JoinColumn(name="pharma_id", referencedColumnName="id")
     */
     private $pharma;

    /**
     * @return mixed
     */
    public function getDairy()
    {
        return $this->dairy;
    }

    /**
     * @param mixed $dairy
     */
    public function setDairy($dairy)
    {
        $this->dairy = $dairy;
    }

    /**
     * @return mixed
     */
    public function getProduce()
    {
        return $this->produce;
    }

    /**
     * @param mixed $produce
     */
    public function setProduce($produce)
    {
        $this->produce = $produce;
    }

    /**
     * @return mixed
     */
    public function getBotanic()
    {
        return $this->botanic;
    }

    /**
     * @param mixed $botanic
     */
    public function setBotanic($botanic)
    {
        $this->botanic = $botanic;
    }

    /**
     * @return mixed
     */
    public function getSeafood()
    {
        return $this->seafood;
    }

    /**
     * @param mixed $seafood
     */
    public function setSeafood($seafood)
    {
        $this->seafood = $seafood;
    }

    /**
     * @return mixed
     */
    public function getMeat()
    {
        return $this->meat;
    }

    /**
     * @param mixed $meat
     */
    public function setMeat($meat)
    {
        $this->meat = $meat;
    }

    /**
     * @return mixed
     */
    public function getPharma()
    {
        return $this->pharma;
    }

    /**
     * @param mixed $pharma
     */
    public function setPharma($pharma)
    {
        $this->pharma = $pharma;
    }


    public function __toString()
    {
        return $this->getTitle();
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