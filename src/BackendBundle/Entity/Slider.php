<?php
namespace BackendBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity()
 * @ORM\Table(name="slider_table")
 * @Vich\Uploadable
 */
class Slider
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
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image;

    /**
     * @Vich\UploadableField(mapping="slider_images", fileNameProperty="image")
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image_520;

    /**
     * @Vich\UploadableField(mapping="slider_images", fileNameProperty="image_520")
     * @var File
     */
    private $imageFile_520;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image_960;

    /**
     * @Vich\UploadableField(mapping="slider_images", fileNameProperty="image_960")
     * @var File
     */
    private $imageFile_960;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * Many Features have One Product.
     * @ORM\ManyToOne(targetEntity="BackendBundle\Entity\HomePage", inversedBy="slider", cascade={"persist"})
     * @ORM\JoinColumn(name="hp_id", referencedColumnName="id")
     */
     private $homepage;

    public function __toString()
    {
        return $this->getTitle();
    }

     public function __construct()
     {
         $this->updatedAt = new \DateTime('now');
     }

    /**
     * @return \DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * @param \DateTime $updatedAt
     */
    public function setUpdatedAt(\DateTime $updatedAt)
    {
        $this->updatedAt = $updatedAt;
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


    public function setImageFile(File $image = null)
    {
        $this->imageFile = $image;

//        // VERY IMPORTANT:
//        // It is required that at least one field changes if you are using Doctrine,
//        // otherwise the event listeners won't be called and the file is lost
//        if ($image) {
//            // if 'updatedAt' is not defined in your entity, use another property
//            $this->updatedAt = new \DateTime('now');
//        }
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

    /**
     * @return string
     */
    public function getImage520()
    {
        return $this->image_520;
    }

    /**
     * @param string $image_520
     */
    public function setImage520($image_520)
    {
        $this->image_520 = $image_520;
    }

    /**
     * @return File
     */
    public function getImageFile520()
    {
        return $this->imageFile_520;
    }

    /**
     * @param File $imageFile_520
     */
    public function setImageFile520(File $imageFile_520 = null)
    {
        $this->imageFile_520 = $imageFile_520;
    }

    /**
     * @return string
     */
    public function getImage960()
    {
        return $this->image_960;
    }

    /**
     * @param string $image_960
     */
    public function setImage960($image_960)
    {
        $this->image_960 = $image_960;
    }

    /**
     * @return File
     */
    public function getImageFile960()
    {
        return $this->imageFile_960;
    }

    /**
     * @param File $imageFile_960
     */
    public function setImageFile960(File $imageFile_960= null)
    {
        $this->imageFile_960 = $imageFile_960;
    }

}