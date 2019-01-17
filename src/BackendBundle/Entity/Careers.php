<?php
namespace BackendBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Gedmo\Mapping\Annotation as Gedmo;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * @ORM\Entity(repositoryClass="BackendBundle\Entity\Repository\CareersRepository")
 * @ORM\Table(name="careers_table")
 * @Vich\Uploadable
 */
class Careers
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="careers", cascade={"persist", "remove"})
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
        $sl->setCareers($this);
        $this->list->add($sl);
    }

    public function removeList(ListItem $sl)
    {
        $this->list->removeElement($sl);
        $sl->setCareers(null);
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="careers2", cascade={"persist", "remove"})
     */
    private $list2;

    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setList2(\Doctrine\Common\Collections\Collection $article)
    {
        $this->list2 = $article;
    }

    public function addList2(ListItem $sl)
    {
        $sl->setCareers2($this);
        $this->list2->add($sl);
    }

    public function removeList2(ListItem $sl)
    {
        $this->list2->removeElement($sl);
        $sl->setCareers2(null);
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getList2()
    {
        return $this->list2;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getList3()
    {
        return $this->list3;
    }

    /**
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getList4()
    {
        return $this->list4;
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="careers3", cascade={"persist", "remove"})
     */
    private $list3;

    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setList3(\Doctrine\Common\Collections\Collection $article)
    {
        $this->list2 = $article;
    }

    public function addList3(ListItem $sl)
    {
        $sl->setCareers3($this);
        $this->list3->add($sl);
    }

    public function removeList3(ListItem $sl)
    {
        $this->list3->removeElement($sl);
        $sl->setCareers3(null);
    }

    /**
     * @var \Doctrine\Common\Collections\Collection
     * @ORM\OneToMany(targetEntity="BackendBundle\Entity\ListItem", mappedBy="careers4", cascade={"persist", "remove"})
     */
    private $list4;

    /**
     * @param \Doctrine\Common\Collections\Collection $article
     */
    public function setList4(\Doctrine\Common\Collections\Collection $article)
    {
        $this->list4 = $article;
    }

    public function addList4(ListItem $sl)
    {
        $sl->setCareers4($this);
        $this->list4->add($sl);
    }

    public function removeList4(ListItem $sl)
    {
        $this->list4->removeElement($sl);
        $sl->setCareers4(null);

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
        $this->list2 = new  ArrayCollection();
        $this->list3 = new  ArrayCollection();
        $this->list4 = new  ArrayCollection();
        $this->updatedAt = new \DateTime('now');
    }

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
     * @Vich\UploadableField(mapping="first_blc_images_careers", fileNameProperty="image")
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

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $listMainTitle;

    /**
     * @return mixed
     */
    public function getListMainTitle()
    {
        return $this->listMainTitle;
    }

    /**
     * @param mixed $listMainTitle
     */
    public function setListMainTitle($listMainTitle)
    {
        $this->listMainTitle = $listMainTitle;
    }

    /**
     * @ORM\Column(type="string", nullable=true)
     */
    private $listName2;
    /**
    * @ORM\Column(type="string", nullable=true)
    */
    private $listName3;

    /**
    * @ORM\Column(type="string", nullable=true)
    */
    private $listName4;

    /**
     * @return mixed
     */
    public function getListName4()
    {
        return $this->listName4;
    }

    /**
     * @param mixed $listName4
     */
    public function setListName4($listName4)
    {
        $this->listName4 = $listName4;
    }

    /**
     * @return mixed
     */
    public function getListName2()
    {
        return $this->listName2;
    }

    /**
     * @param mixed $listName2
     */
    public function setListName2($listName2)
    {
        $this->listName2 = $listName2;
    }

    /**
     * @return mixed
     */
    public function getListName3()
    {
        return $this->listName3;
    }

    /**
     * @param mixed $listName3
     */
    public function setListName3($listName3)
    {
        $this->listName3 = $listName3;
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