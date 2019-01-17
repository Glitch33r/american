<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class CareersRepository extends EntityRepository
{
    public function getWhiteBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.first_blc_title, a.first_blc_sub_title, a.first_blc_description, a.image')
            ->getQuery()->getResult();

        return $q;
    }

    public function getRedBlock()
    {
        $q = $this->createQueryBuilder('a')
            ->select('a.second_blc_title, a.second_blc_sub_title, a.second_blc_description')
            ->getQuery()->getResult();

        return $q;
    }

    public function getListFirstBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listMainTitle, cp.listName FROM BackendBundle\Entity\Careers AS cp')
            ->execute();

        return $q;
    }

    public function getSecondFirstBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listName2 FROM BackendBundle\Entity\Careers AS cp')
            ->execute();

        return $q;
    }

    public function getThirdFirstBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listName3 FROM BackendBundle\Entity\Careers AS cp')
            ->execute();

        return $q;
    }

    public function getFourthFirstBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT cp.listName4 FROM BackendBundle\Entity\Careers AS cp')
            ->execute();

        return $q;
    }

    public function getFirstListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Careers AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.careers')
            ->execute();

        return $q;
    }

    public function getSecondListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Careers AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.careers2')
            ->execute();

        return $q;
    }

    public function getThirdListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Careers AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.careers3')
            ->execute();

        return $q;
    }

    public function getFourthListItemBlock()
    {
        $q = $this->getEntityManager()
            ->createQuery('SELECT ls.title FROM BackendBundle\Entity\Careers AS cp JOIN BackendBundle\Entity\ListItem AS ls WITH cp.id = ls.careers4')
            ->execute();

        return $q;
    }
}