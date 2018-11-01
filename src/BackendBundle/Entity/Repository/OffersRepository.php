<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class OffersRepository extends EntityRepository
{
    public function getWhiteBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.first_blc_title, a.first_blc_sub_title, a.first_blc_description, a.image')
            ->getQuery()->getResult();

        return $q;
    }


    public function getLeftListBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listName FROM BackendBundle\Entity\Offers AS cp' )
            ->execute();

        return $q;
    }

    public function getLeftListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Offers AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.offerleft')
            ->execute();

        return $q;
    }

    public function getRigthListBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listright_blc_title, cp.listright_blc_sub_title, cp.listright_blc_description FROM BackendBundle\Entity\Offers AS cp')
            ->execute();

        return $q;
    }

    public function getRigthListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Offers AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.offerright')
            ->execute();

        return $q;
    }
}