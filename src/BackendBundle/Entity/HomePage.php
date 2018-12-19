<?php
namespace BackendBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="BackendBundle\Entity\Repository\HomePageRepository")
 * @ORM\Table(name="home_table")
 * @Vich\Uploadable
 */
class HomePage
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\Slider", mappedBy="homepage", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $slider;

    /**
     * @param \Doctrine\Common\Collections\Collection $slider
     */
    public function setSlider(\Doctrine\Common\Collections\Collection $slider)
    {
        $this->slider = $slider;
    }

    public function addSlider(\BackendBundle\Entity\Slider $sl)
    {
        $sl->setHomepage($this);
        $this->slider->add($sl);
    }

    public function removeSlider(Slider $sl)
    {
        $this->slider->removeElement($sl);
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\Article", mappedBy="homepage", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $article;

    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setArticle(\Doctrine\Common\Collections\Collection $article)
    {
        $this->article = $article;
    }

    public function addArticle(Article $sl)
    {
        $sl->setHomepage($this);
        $this->article->add($sl);
    }

    public function removeArticle(Article $sl)
    {
        $this->article->removeElement($sl);
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="homepage", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $list;

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListContentBlock", mappedBy="homepage", cascade={"persist"})
     */
    private $contentBlock;

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getContentBlock()
    {
        return $this->contentBlock;
    }

    /**
     * @param \Doctrine\Common\Collections\Collection $contentBlock
     */
    public function setContentBlock(\Doctrine\Common\Collections\Collection $contentBlock)
    {
        $this->contentBlock = $contentBlock;
    }

    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setList(\Doctrine\Common\Collections\Collection $article)
    {
        $this->list = $article;
    }

    public function addList(ListItem $sl)
    {
        $sl->setHomepage($this);
        $this->list->add($sl);
    }

    public function removeList(ListItem $sl)
    {
        $this->list->removeElement($sl);
    }

    public function addContentBlock(ListContentBlock $sl)
    {
        $sl->setHomepage($this);
        $this->contentBlock->add($sl);

        return $this;
    }

    public function removeContentBlock(ListContentBlock $sl)
    {
        $this->contentBlock->removeElement($sl);
    }


    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getSlider()
    {
        return $this->slider;
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


    public function __construct()
    {
        $this->slider = new  ArrayCollection();
        $this->article = new  ArrayCollection();
        $this->list = new  ArrayCollection();
        $this->contentBlock = new  ArrayCollection();

        $this->updatedAt = new \DateTime('now');
    }

    /*AFTER SLIDER*/

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $first_blc_title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $first_blc_sub_title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $first_blc_description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     */
    private $image;

    /**
     * @Vich\UploadableField(mapping="first_blc_images_home", fileNameProperty="image")
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;


    /*BEFORE PARALAX*/

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $second_blc_title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $second_blc_sub_title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $second_blc_description;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $listName;

    /*PARALAX*/

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $paralax_blc_title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $paralax_blc_sub_title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $paralax_blc_description;

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArticle()
    {
        return $this->article;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getList()
    {
        return $this->list;
    }


    /**
     * @return mixed
     */
    public function getListName()
    {
        return $this->listName;
    }

    /**
     * @param mixed $listName
     */
    public function setListName($listName)
    {
        $this->listName = $listName;
    }


    /*AFTER PARALAX*/
    ///TODO: AFTER PARALAX


    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getFirstBlcTitle()
    {
        return $this->first_blc_title;
    }

    /**
     * @param mixed $first_blc_title
     */
    public function setFirstBlcTitle($first_blc_title)
    {
        $this->first_blc_title = $first_blc_title;
    }

    /**
     * @return mixed
     */
    public function getFirstBlcSubTitle()
    {
        return $this->first_blc_sub_title;
    }

    /**
     * @param mixed $first_blc_sub_title
     */
    public function setFirstBlcSubTitle($first_blc_sub_title)
    {
        $this->first_blc_sub_title = $first_blc_sub_title;
    }

    /**
     * @return mixed
     */
    public function getFirstBlcDescription()
    {
        return $this->first_blc_description;
    }

    /**
     * @param mixed $first_blc_description
     */
    public function setFirstBlcDescription($first_blc_description)
    {
        $this->first_blc_description = $first_blc_description;
    }

    /**
     * @return mixed
     */
    public function getSecondBlcTitle()
    {
        return $this->second_blc_title;
    }

    /**
     * @param mixed $second_blc_title
     */
    public function setSecondBlcTitle($second_blc_title)
    {
        $this->second_blc_title = $second_blc_title;
    }

    /**
     * @return mixed
     */
    public function getSecondBlcSubTitle()
    {
        return $this->second_blc_sub_title;
    }

    /**
     * @param mixed $second_blc_sub_title
     */
    public function setSecondBlcSubTitle($second_blc_sub_title)
    {
        $this->second_blc_sub_title = $second_blc_sub_title;
    }

    /**
     * @return mixed
     */
    public function getSecondBlcDescription()
    {
        return $this->second_blc_description;
    }

    /**
     * @param mixed $second_blc_description
     */
    public function setSecondBlcDescription($second_blc_description)
    {
        $this->second_blc_description = $second_blc_description;
    }

    /**
     * @return mixed
     */
    public function getParalaxBlcTitle()
    {
        return $this->paralax_blc_title;
    }

    /**
     * @param mixed $paralax_blc_title
     */
    public function setParalaxBlcTitle($paralax_blc_title)
    {
        $this->paralax_blc_title = $paralax_blc_title;
    }

    /**
     * @return mixed
     */
    public function getParalaxBlcSubTitle()
    {
        return $this->paralax_blc_sub_title;
    }

    /**
     * @param mixed $paralax_blc_sub_title
     */
    public function setParalaxBlcSubTitle($paralax_blc_sub_title)
    {
        $this->paralax_blc_sub_title = $paralax_blc_sub_title;
    }

    /**
     * @return mixed
     */
    public function getParalaxBlcDescription()
    {
        return $this->paralax_blc_description;
    }

    /**
     * @param mixed $paralax_blc_description
     */
    public function setParalaxBlcDescription($paralax_blc_description)
    {
        $this->paralax_blc_description = $paralax_blc_description;
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


}