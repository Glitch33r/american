<?php
namespace BackendBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="BackendBundle\Entity\Repository\OffersRepository")
 * @ORM\Table(name="offers_table")
 * @Vich\Uploadable
 */
class Offers
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;


    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="offerleft", cascade={"persist", "remove"}, orphanRemoval=true)
     */
    private $list;

    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setList(\Doctrine\Common\Collections\Collection $article)
    {
        $this->list = $article;
    }

    public function addList(ListItem $sl)
    {
        $sl->setOfferleft($this);
        $this->list->add($sl);
    }

    public function removeList(ListItem $sl)
    {
        $this->list->removeElement($sl);
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
        $this->list = new  ArrayCollection();
        $this->listrigth = new ArrayCollection();
        $this->article = new ArrayCollection();
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
     * @Vich\UploadableField(mapping="first_blc_images_off", fileNameProperty="image")
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $listName;


    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $listright_blc_title;

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $listright_blc_sub_title;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $listright_blc_description;

    /**
     * @return mixed
     */
    public function getListrightBlcTitle()
    {
        return $this->listright_blc_title;
    }

    /**
     * @param mixed $listright_blc_title
     */
    public function setListrightBlcTitle($listright_blc_title)
    {
        $this->listright_blc_title = $listright_blc_title;
    }

    /**
     * @return mixed
     */
    public function getListrightBlcSubTitle()
    {
        return $this->listright_blc_sub_title;
    }

    /**
     * @param mixed $listright_blc_sub_title
     */
    public function setListrightBlcSubTitle($listright_blc_sub_title)
    {
        $this->listright_blc_sub_title = $listright_blc_sub_title;
    }

    /**
     * @return mixed
     */
    public function getListrightBlcDescription()
    {
        return $this->listright_blc_description;
    }

    /**
     * @param mixed $listright_blc_description
     */
    public function setListrightBlcDescription($listright_blc_description)
    {
        $this->listright_blc_description = $listright_blc_description;
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\Article", mappedBy="offers", cascade={"persist", "remove"})
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
        $sl->setOffers($this);
        $this->article->add($sl);
    }

    public function removeArticle(Article $sl)
    {
        $this->article->removeElement($sl);
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getArticle()
    {
        return $this->article;
    }


    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="offerright", cascade={"persist", "remove"})
     */
    private $listrigth;

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getListrigth()
    {
        return $this->listrigth;
    }
    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setListrigth(\Doctrine\Common\Collections\Collection $article)
    {
        $this->list = $article;
    }

    public function addListrigth(ListItem $sl)
    {
        $sl->setOfferright($this);
        $this->listrigth->add($sl);
    }

    public function removeListrigth(ListItem $sl)
    {
        $this->list->removeElement($sl);
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